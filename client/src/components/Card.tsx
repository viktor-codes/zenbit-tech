import { FC } from 'react'

const HeadlineCards: FC = () => {
	const menuItem = [
		{
			text: 'Building 1',
			image: '/building-1.jpg',
			properties: [
				'650000 Dhs',
				'Yield 9.25%',
				'Sold 75%',
				'Ticket - 60000 Dhs',
				'Days left 150',
			],
		},
		{
			text: 'Building 2',
			image: '/building-1.jpg',
			properties: [
				'650000 Dhs',
				'Yield 9.25%',
				'Sold 75%',
				'Ticket - 60000 Dhs',
				'Days left 150',
			],
		},
		{
			text: 'Building 3',
			image: '/building-1.jpg',
			properties: [
				'650000 Dhs',
				'Yield 9.25%',
				'Sold 75%',
				'Ticket - 60000 Dhs',
				'Days left 150',
			],
		},
		{
			text: 'Building 4',
			image: '/building-1.jpg',
			properties: [
				'650000 Dhs',
				'Yield 9.25%',
				'Sold 75%',
				'Ticket - 60000 Dhs',
				'Days left 150',
			],
		},
	]

	return (
		<div className='grid grid-cols-2 gap-5'>
			{/* Card */}

			{menuItem.map(({ text, subtitle, image, properties }, index) => {
				return (
					<div key={index} className='rounded relative'>
						{/* Overlay */}
						<div className='absolute bottom-0 w-full bg-black/50 text-white p-4 flex flex-col'>
							<p className='font-bold text-2xl px-2 pt-4'>{text} </p>

							<div className='grid grid-cols-2 gap-2 p-4 '>
								{properties.map((property, idx) => (
									<p key={idx} className='text-sm'>
										{property}
									</p>
								))}
							</div>
						</div>
						<img className='w-full object-cover rounded' src={image} alt='/' />
					</div>
				)
			})}
		</div>
	)
}

export default HeadlineCards
