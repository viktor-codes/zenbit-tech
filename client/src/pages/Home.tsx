import { FC } from 'react'

export const Home: FC = () => {
	return (
		<section className='bg-hero bg-cover bg-center bg-black bg-opacity-70 bg-blend-darken min-h-screen flex items-center justify-center'>
			<div className='container text-white text-center -mt-60'>
				<h1 className='text-6xl font-bold leading-tight'>
					The chemical negatively charged
				</h1>
				<p className='px-28'>
					Numerous calculations predict, and experiments confirm, that the force
					field reflects the beam, while the mass defect is not formed. The
					chemical compound is negatively charged. Twhile the mass defect is{' '}
				</p>
				<button className='mt-6 px-6 py-3 border border-white text-white font-bold rounded hover:bg-white hover:text-black transition duration-300'>
					Get Started
				</button>
			</div>
		</section>
	)
}

export default Home
