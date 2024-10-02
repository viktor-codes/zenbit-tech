import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.databaseService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existUser) {
      throw new ConflictException('This email already exists');
    }

    const hashedPassword = await argon2.hash(createUserDto.password);

    const user = await this.databaseService.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: hashedPassword,
      },
    });
    const token = this.jwtService.sign({ email: createUserDto.email });

    return { user, token };
  }

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(email: string) {
    return await this.databaseService.user.findUnique({
      where: { email },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
