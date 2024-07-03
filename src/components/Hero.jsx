import React from 'react'
import { discount, robot } from '../assets'

export const Hero = () => {
	return (
		<div>
			<div className='text-white font-poppins lg:mt-[120px] xs:mt-[60px] mx-[8%] relative'>
				<div className='w-[350px] bg-gray-300 bg-opacity-10 h-[44px] flex rounded-2xl items-center gap-2 mb-8'>
					<img src={discount} alt='' width='40' />
					<h1 className='font-poppins font-normal'>
						Get <b>20%</b> discount for <b>1 month</b> usage
					</h1>
				</div>
				<h1 className='lg:text-7xl mb-8 font-bold xs:leading-[4.4rem] xs:text-6xl xs:ml-[10px] lg:ml-0'>
					The Next<br></br> <span className='text-gradient'>Generation</span>
					<br></br> Payment Method.
				</h1>
				<h6 className='font-semibold text-zinc-500 xs:w-[220px] xs:text-center xs:hidden lg:block lg:ml-0 lg:text-start lg:w-[600px] '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
					omnis, quibusdam debitis consequuntur ipsam mollitia fugiat aliquam
					cumque rerum autem placeat tempora, alias beatae quidem inventore
					tempore vel est blanditiis.
				</h6>
				<div className='border rounded-full border-blue-300 w-28 h-28 text-center pt-6 text-gradient font-bold text-lg absolute top-8 left-[460px] lg:block xs:hidden'>
					<h1>
						Get<br></br> Started
					</h1>
					<div className='blue-gradient opacity-95 blur-[90px]'>
						<h3>Get Started</h3>
					</div>
				</div>
				<div className='absolute lg:right-[30px] lg:-top-8 '>
					<div className='blue-gradient lg:w-[480px] lg:h-[480px] xs:w-[320px]  rounded-full xs:blur-[300px] opacity-60'></div>
					<img
						width='480'
						className='absolute top-0 left-0'
						src={robot}
						alt='Robot'
					/>
				</div>
				<div className='lg:flex items-center lg:mt-24 gap-[200px] lg:ml-[6%] xs:ml-[12%] xs:block xs:mt-[440px]'>
					<div className='flex items-center gap-2 font-poppins font-semibold'>
						<h1 className='text-3xl'>3800+</h1>
						<h2 className='text-gradient text-xl '>USER ACTIVE</h2>
					</div>
					<div className='flex items-center gap-2 font-poppins font-semibold'>
						<h1 className='text-3xl'>230+</h1>
						<h2 className='text-gradient text-xl '>COMPANY</h2>
					</div>
					<div className='flex items-center gap-2 font-poppins font-semibold'>
						<h1 className='text-3xl'>230M+</h1>
						<h2 className='text-gradient text-xl '>TRANSFERS</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
