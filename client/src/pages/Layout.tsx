import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
	return (
		<div className='min-h-screen bg-slate-900 font-roboto text-white'>
			<div>HEADER</div>
			<div className='container'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
