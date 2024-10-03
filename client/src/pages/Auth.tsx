import React from 'react'

const Auth: React.FC = () => {
	return (
		<div className='bg-white text-black flex justify-center items-center h-screen'>
			{/* Left: Image */}
			<div className='w-2/3 h-screen hidden lg:block'>
				<img
					src='/login.jpg'
					alt='Placeholder Image'
					className='bg-cover bg-center h-full'
				/>
			</div>
			{/* Right: Login Form */}
			<div className='p-20 w-full lg:w-1/3'>
				<h1 className='text-2xl font-semibold mb-4'>Login</h1>
				<form action='#' method='POST'>
					{/* Email Input */}
					<div className='mb-4'>
						<label htmlFor='email' className='block text-gray-600'>
							Email
						</label>
						<input
							type='text'
							id='email'
							name='email'
							className='w-full border border-gray-300 rounded-md py-2 px-3 text-black'
							autoComplete='off'
						/>
					</div>
					{/* Password Input */}
					<div className='mb-4'>
						<label htmlFor='password' className='block text-gray-800'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							className='w-full border border-gray-300 rounded-md py-2 px-3 text-black'
							autoComplete='off'
						/>
					</div>

					{/* Forgot Password Link */}
					<div className='mb-6 text-[#B29E7E]'>
						<a href='#' className='flex justify-end hover:underline'>
							Forgot Password?
						</a>
					</div>
					{/* Login Button */}
					<button
						type='submit'
						className='w-full px-8 py-2  bg-[#B29E7E] text-white rounded'
					>
						Sign In
					</button>
				</form>
				{/* Sign up Link */}
				<div className='mt-6 flex justify-center'>
					<a href='#' className=''>
						Don't have an account?{' '}
						<span className='text-[#B29E7E]'>Sign Up</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Auth
