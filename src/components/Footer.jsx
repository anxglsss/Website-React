import React from 'react'
import { facebook, instagram, linkedin, logo, twitter } from '../assets'

export const Footer = () => {
	return (
		<footer className='bg-primary mt-12 text-white py-10 font-poppins'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between'>
					<div className='mb-6 md:mb-0 flex flex-col items-center md:items-start'>
						<div className='flex items-center mb-4'>
							<img src={logo} alt='HooBank' className='w-40 md:w-56' />
						</div>
						<p className='text-center md:text-left'>
							A new way to make the payments easy, reliable and secure.
						</p>
					</div>

					<div className='flex flex-col items-center md:items-start mb-6 md:mb-0 gap-2'>
						<h4 className='font-bold mb-4'>Useful Links</h4>
						<a href='#' className='mb-2'>
							Content
						</a>
						<a href='#' className='mb-2'>
							How it Works
						</a>
						<a href='#' className='mb-1'>
							Create
						</a>
						<a href='#' className='mb-1'>
							Explore
						</a>
						<a href='#'>Terms & Services</a>
					</div>

					<div className='flex flex-col items-center md:items-start mb-6 md:mb-0 gap-2'>
						<h4 className='font-bold mb-4'>Community</h4>
						<a href='#' className='mb-2'>
							Help Center
						</a>
						<a href='#' className='mb-2'>
							Partners
						</a>
						<a href='#' className='mb-1'>
							Suggestions
						</a>
						<a href='#' className='mb-1'>
							Blog
						</a>
						<a href='#' className='mb-1'>
							Newsletters
						</a>
					</div>

					<div className='flex flex-col items-center md:items-start gap-2'>
						<h4 className='font-bold mb-4'>Partner</h4>
						<a href='#' className='mb-2'>
							Our Partner
						</a>
						<a href='#'>Become a Partner</a>
					</div>
				</div>
				<hr className='mt-8 border-gray-700' />
				<div className='flex flex-col md:flex-row justify-between items-center mt-10'>
					<p className='text-sm'>2021 HooBank. All Rights Reserved.</p>
					<div className='flex space-x-4 mt-4 md:mt-0'>
						<a href='#' className='w-6 h-6'>
							<img src={instagram} alt='Instagram' />
						</a>
						<a href='#' className='w-6 h-6'>
							<img src={facebook} alt='Facebook' />
						</a>
						<a href='#' className='w-6 h-6'>
							<img src={twitter} alt='Twitter' />
						</a>
						<a href='#' className='w-6 h-6'>
							<img src={linkedin} alt='LinkedIn' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
