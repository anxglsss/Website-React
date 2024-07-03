import React from 'react'
import {
	airbnb,
	binance,
	coinbase,
	dropbox,
	people01,
	people02,
	people03,
	quotes,
} from '../assets'

export const People = () => {
	return (
		<div
			className='flex flex-col mx-[9%] text-white font-poppins mt-[110px]'
			id='people'
		>
			<div className='flex gap-[100px] mb-[70px]'>
				<h1 className='text-4xl font-bold lg:text-nowrap'>
					What people are saying <span className='text-gradient'>about us</span>
				</h1>
				<h2 className='text-gray-400 opacity-60 font-semibold lg:block xs:hidden'>
					Everything you need to accept card payments<br></br> and grow your
					business anywhere in the planet
				</h2>
			</div>
			<div className='lg:flex mx-[4%] lg:gap-[38px] xs:gap-80 -ml-[2px]'>
				<div className='flex flex-col gap-[32px] hover:bg-gray-500 p-8 hover:bg-opacity-15 rounded-2xl'>
					<div className='w-[70px]'>
						<img src={quotes} alt='' />
					</div>
					<h1 className='w-[320px] font-semibold text-opacity-95 text-gray-200'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
						natus! Sint a aliquam ipsam dicta maxime odit expedita cum
						consequatur sed. Est in similique commodi
					</h1>
					<div className='flex gap-4 items-center '>
						<img src={people01} width='60' alt='' />
						<div className='flex flex-col'>
							<h1 className='font-bold text-lg'>Herman Jensen</h1>
							<h2 className='font-semibold text-gray-400 text-opacity-85'>
								Founder & Leader
							</h2>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-[32px] hover:bg-gray-500 p-8 hover:bg-opacity-15 rounded-2xl'>
					<div className='w-[70px]'>
						<img src={quotes} alt='' />
					</div>
					<h1 className='w-[320px] font-semibold text-opacity-95 text-gray-200'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
						natus! Sint a aliquam ipsam dicta maxime odit expedita cum
						consequatur sed. Est in similique commodi
					</h1>
					<div className='flex gap-4 items-center'>
						<img src={people02} width='60' alt='' />
						<div className='flex flex-col'>
							<h1 className='font-bold text-lg'>Herman Jensen</h1>
							<h2 className='font-semibold text-gray-400 text-opacity-85'>
								Founder & Leader
							</h2>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-[32px] hover:bg-gray-500 p-8 hover:bg-opacity-15 rounded-2xl'>
					<div className='w-[70px]'>
						<img src={quotes} alt='' />
					</div>
					<h1 className='w-[320px] font-semibold text-opacity-95 text-gray-200'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
						natus! Sint a aliquam ipsam dicta maxime odit expedita cum
						consequatur sed. Est in similique commodi
					</h1>
					<div className='flex gap-4 items-center'>
						<img src={people03} width='60' alt='' />
						<div className='flex flex-col'>
							<h1 className='font-bold text-lg'>Herman Jensen</h1>
							<h2 className='font-semibold text-gray-400 text-opacity-85'>
								Founder & Leader
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className=' mx-[2%] w-[300px] ml=[200px] mt-[80px] lg:flex lg:flex-row gap-16 xs:hidden'>
				<img src={dropbox} className='ml-[80px] h-[40px]' alt='' />
				<img src={binance} className='h-[40px]' alt='' />
				<img src={airbnb} className='h-[40px]' alt='' />
				<img src={coinbase} className='h-[40px]' alt='' />
			</div>
			<div className='lg:flex bg-black-gradient-2 mx-[3%] h-[260px] mt-[100px] rounded-[50px] xs:hidden'>
				<div className='flex flex-col mt-4'>
					<h1 className='text-5xl font-bold mt-[40px] ml-[100px]'>
						Lets try our service <span>now!</span>
					</h1>
					<h2 className='mt-[40px] ml-[100px] text-xl w-[600px] text-gray-500 text-opacity-75 font-semibold'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
						eligendi dolor fuga vero repudiandae saepe
					</h2>
				</div>
				<button className='font-bold text-zinc-800 px-2 py-1 w-[120px] h-[60px] rounded-2xl text-[16px] mt-[100px] ml-[140px] bg-blue-gradient hover:bg-zinc-800 hover:text-gradient transition-all duration-500 text-nowrap'>
					Get Started
				</button>
			</div>
			<hr className='mt-8'></hr>
		</div>
	)
}
