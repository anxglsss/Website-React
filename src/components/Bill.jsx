import React from 'react'
import { apple, bill, google } from '../assets'

export const Bill = () => {
	return (
		<div
			className='lg:flex mx-[14%] text-white font-poppins items-center gap-4 xs:mt-8 lg:mt-20'
			id='bill'
		>
			<div className='lg:w-[1600px]'>
				<img src={bill} className='w-[1600px]' alt='' />
			</div>
			<div className='gap-5 flex flex-col lg:ml-[100px] xs:mt-[40px] lg:mt-0'>
				<h1 className='text-5xl font-bold lg:text-nowrap xs:mr-20 '>
					Easily control your<br></br>{' '}
					<span className='text-gradient'>billing & invoicing.</span>
				</h1>
				<h2 className='text-gray-500 text-opacity-90 font-semibold lg:block xs:hidden'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
					natus eos officiis necessitatibus a culpa, assumenda ducimus
					voluptates id dolore. Voluptatem molestiae dicta cum obcaecati
					tenetur, ipsum aspernatur necessitatibus aut
				</h2>
				<div className='flex gap-4 lg:mt-0 xs:mt-8 xs:-ml-4 lg:ml-0'>
					<img src={apple} alt='' />
					<img src={google} alt='' />
				</div>
			</div>
		</div>
	)
}
