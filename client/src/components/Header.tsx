import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const Header: FC = () => {
	const isAuth = true
	return (
		<header className='flex items-center justify-end p-5 pr-16 bg-[#172133]'>
			{isAuth && (
				<nav>
					<ul className='flex items-center gap-5'>
						<li>
							<NavLink
								to='/'
								className='px-8 py-2 text-[#B29E7E] border border-[#B29E7E] rounded hover:bg-[#B29E7E] hover:text-white transition'
							>
								Log In
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/auth'
								className='px-8 py-2  bg-[#B29E7E] text-white rounded'
							>
								Sign Up
							</NavLink>
						</li>
					</ul>
				</nav>
			)}
		</header>
	)
}

export default Header
