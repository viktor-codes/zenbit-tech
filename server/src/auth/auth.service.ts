import { BadRequestException, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const passwordIsMatch = await argon2.verify(user.password, password);
    if (user && passwordIsMatch) {
      return user;
    }
    throw new BadRequestException('Invalid email or password');
  }
}
