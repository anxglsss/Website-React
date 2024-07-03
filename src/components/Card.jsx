import React from 'react'
import { card } from '../assets'

export const Card = () => {
	return (
		<div
			className='lg:flex xs mx-[12%] gap-8 font-poppins text-white mt-[140px] items-center'
			id='card'
		>
			<div>
				<h1 className='text-5xl font-bold mb-8 lg:text-nowrap '>
					Find a better <span className='text-gradient'>card deal</span>,
					<br></br> in few easy <span className='text-gradient'>steps.</span>
				</h1>
				<h2 className='text-gray-500 text-opacity-90 font-semibold w-[500px] lg:block xs:hidden'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
					natus eos officiis necessitatibus a culpa, assumenda ducimus
					voluptates id dolore. Voluptatem molestiae dicta cum obcaecati
					tenetur, ipsum aspernatur necessitatibus aut
				</h2>
				<button className='font-bold text-zinc-800 px-5 py-4 rounded-2xl text-[18px] mt-8 bg-blue-gradient hover:bg-zinc-800 hover:text-gradient transition-all duration-500'>
					Get Started
				</button>
			</div>
			<div className='lg:w-[620px] lg:mt-0 xs:mt-16'>
				<img src={card} alt='' />
			</div>
		</div>
	)
}
