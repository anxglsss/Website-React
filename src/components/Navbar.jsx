import React from 'react'
import { logo } from '../assets/index.js'
export const Navbar = () => {
	return (
		<div
			className='mx-[8%] pt-12 w-full overflow-hidden flex items-center'
			id='home'
		>
			<div>
				<img src={logo} width='160' className='mr-[1000px]'></img>
			</div>
			<div>
				<ul className='text-white font-poppins font-semibold list-none flex -ml-[300px] xs:hidden lg:flex  gap-10 cursor-pointer relative '>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#business'>Features</a>
					</li>
					<li>
						<a href='#bill'>Product</a>
					</li>
					<li>
						<a href='#people'>Client</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
