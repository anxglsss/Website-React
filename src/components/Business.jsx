import React from 'react'
import { send, shield, star } from '../assets'

export const Business = () => {
	return (
		<div
			className='bg-primary text-white flex gap-[120px] mx-[12%] font-poppins xs:mt-[80px] lg:mt-[140px]'
			id='business'
		>
			<div>
				<h1 className='text-5xl font-bold mb-12 xs:w-[300px] lg:w-[500px] xs:ml-4 lg:ml-0 lg:text-nowrap'>
					You do the <span className='text-gradient'>business</span>,<br></br>{' '}
					we handle the <span className='text-gradient'>money</span>.
				</h1>
				<h2 className='font-semibold text-gray-100 text-opacity-60 w-[540px] mt-[36px] xs:hidden lg:block'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
					accusamus libero, aliquid id voluptatibus, iste earum natus repellat
					officia, ab enim modi neque!
				</h2>
				<button className='font-bold text-zinc-800 px-5 py-4 rounded-2xl text-[18px] xs:mt-4 lg:mt-8 bg-blue-gradient hover:bg-zinc-800 hover:text-gradient transition-all duration-500 xs:ml-[78px] lg:ml-0'>
					Get Started
				</button>
			</div>
			<div className='flex flex-col gap-[40px] xs: -ml-[450px] lg:ml-0 lg:mt-0 xs:mt-[380px]'>
				<div
					className='flex items-center px-5 py-3
				rounded-xl cursor-pointer hover:bg-gray-800 hover:bg-opacity-90'
				>
					<div className='bg-gray-600 bg-opacity-10 rounded-full w-[50px] h-[50px] flex items-center justify-center mr-6'>
						<img className='w-7 h-7' src={star} alt='' />
					</div>
					<div className='flex flex-col'>
						<h1 className='font-bold text-md'>Rewards</h1>
						<p className='text-gray-400 text-opacity-80 font-semibold'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div
					className='flex items-center px-5 py-3
				rounded-xl cursor-pointer hover:bg-gray-800 hover:bg-opacity-90'
				>
					<div className='bg-gray-600 bg-opacity-10 rounded-full w-[50px] h-[50px] flex items-center justify-center mr-6'>
						<img className='w-7 h-7' src={shield} alt='' />
					</div>
					<div className='flex flex-col'>
						<h1 className='font-bold text-md'>100% Security</h1>
						<p className='text-gray-400 text-opacity-80 font-semibold'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div
					className='flex items-center px-5 py-3
				rounded-xl cursor-pointer hover:bg-gray-800 hover:bg-opacity-90'
				>
					<div className='bg-gray-600 bg-opacity-10 rounded-full w-[60px] h-[55px] flex items-center justify-center mr-6'>
						<img className='w-7 h-7 ' src={send} alt='' />
					</div>
					<div className='flex flex-col'>
						<h1 className='font-bold text-md'>Transfers</h1>
						<p className='text-gray-400 text-opacity-80 font-semibold'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
