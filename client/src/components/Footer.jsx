import { BsRobot } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10'>
      <div className='grid w-full max-w-6xl grid-cols-1 items-center gap-5 rounded-[24px] border border-gray-200 bg-white px-6 py-5 shadow-sm md:grid-cols-[1fr_auto_1fr] md:gap-0 md:px-10'>
        <div className='flex items-center justify-center gap-3 md:justify-start md:pr-8'>
          <div className='shrink-0 rounded-xl bg-black p-3 text-white'>
            <BsRobot size={22} />
          </div>
          <div className='text-left'>
            <h2 className='text-lg font-semibold text-gray-900'>PrepForge.AI</h2>
            <p className='mt-1 text-sm leading-5 text-gray-600'>Prepare smarter. Improve skills.<br />Ace your interviews.</p>
          </div>
        </div>

        <nav aria-label='Social media links' className='flex justify-center py-4 md:py-2'>
          <a href='https://www.linkedin.com/in/taufik-umar-19474b332?utm_source=share_via&utm_content=profile&utm_medium=member_android' target='_blank' rel='noreferrer' aria-label='LinkedIn' title='LinkedIn' className='mx-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:scale-110 hover:bg-blue-50 hover:text-blue-700'>
            <FaLinkedinIn size={20} />
          </a>
          <a href='https://www.instagram.com/mdtaufik97?stkn=MXd5cWNnN3QyNnZocw==' target='_blank' rel='noreferrer' aria-label='Instagram' title='Instagram' className='mx-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:scale-110 hover:bg-pink-50 hover:text-pink-600'>
            <FaInstagram size={20} />
          </a>
          <a href='https://github.com/taufik-umar97' target='_blank' rel='noreferrer' aria-label='GitHub' title='GitHub' className='mx-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:scale-110 hover:bg-gray-200 hover:text-gray-900'>
            <FaGithub size={20} />
          </a>
        </nav>

        <div className='text-center md:pl-8 md:text-right'>
          <p className='text-xs text-gray-500'>© {new Date().getFullYear()} PrepForge.AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer