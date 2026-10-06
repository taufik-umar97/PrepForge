import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "motion/react";
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineChevronRight, HiOutlineClock, HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';

function Navbar() {
    const { userData } = useSelector((state) => state.user);
    const [showCreditPopup, setshowCreditPopup] = useState(false);
    const [showUserPopup, setshowUserPopup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAuth, setShowAuth] = useState(false);


    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true });
            dispatch(setUserData(null));
            setshowCreditPopup(false);
            setshowUserPopup(false);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='bg=[#f3f3f3] flex justify-center px-4 pt-6'>
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative'>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='bg-black text-white p-2 rounded-lg'>
                        <BsRobot size={18} />
                    </div>
                    <h1 className='font-semibold hidden md:block text-lg'>PrepForge.AI</h1>
                </div>

                <div className='flex items-center gap-6 relative'>
                    <div className='relative'>
                        <button
                            onClick={() => {
                                if (!userData) {
                                    setShowAuth(true);
                                    return;
                                }
                                setshowCreditPopup(!showCreditPopup);
                                setshowUserPopup(false);
                            }}
                            className='flex items-center gap-2 bg-grey-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition'>
                            <BsCoin size={20} />
                            {userData?.credits || 0}
                        </button>

                        {showCreditPopup && (
                            <div className='absolute right-0 z-50 mt-3 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl'>
                                <div className='flex items-start gap-3'>
                                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600'>
                                        <BsCoin size={19} />
                                    </span>
                                    <div className='pt-0.5'>
                                        <p className='text-sm font-semibold text-gray-900'>Need more credits?</p>
                                        <p className='mt-1 text-xs leading-5 text-gray-500'>Choose a plan to keep practicing with AI interviews.</p>
                                    </div>
                                </div>
                                <button onClick={() => { setshowCreditPopup(false); navigate("/pricing"); }} className='mt-4 w-full rounded-xl bg-gray-900 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'>Explore plans</button>
                            </div>
                        )}
                    </div>

                    <div className='relative'>
                        <button
                            onClick={() => {
                                if (!userData) {
                                    setShowAuth(true);
                                    return;
                                }
                                setshowUserPopup(!showUserPopup);
                                setshowCreditPopup(false);
                            }}
                            aria-label='Open account menu'
                            aria-expanded={showUserPopup}
                            title='Account menu'
                            className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2'>
                            {userData?.name?.slice(0, 1).toUpperCase() || <FaUserAstronaut size={16} />}
                        </button>

                        {showUserPopup && (
                            <div className='absolute right-0 z-50 mt-3 w-60 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl ring-1 ring-black/5'>
                                <div className='flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-3.5 py-3'>
                                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white shadow-sm'>
                                        {userData?.name?.slice(0, 1).toUpperCase() || 'U'}
                                    </div>
                                    <div className='min-w-0'>
                                        <p className='truncate text-sm font-semibold text-gray-900'>{userData?.name || 'Your account'}</p>
                                        <p className='mt-1 flex items-center gap-1.5 text-xs text-gray-500'><span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />Signed in</p>
                                    </div>
                                </div>
                                <div className='space-y-1 p-2'>
                                    <button onClick={() => { setshowUserPopup(false); navigate("/history"); }} className='flex w-full items-center justify-between rounded-xl px-2 py-2 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400'>
                                        <span className='flex items-center gap-3'>
                                            <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600'><HiOutlineClock size={17} /></span>
                                            Interview history
                                        </span>
                                        <HiOutlineChevronRight size={16} className='text-gray-400' />
                                    </button>
                                    <div className='border-t border-gray-100 pt-1'>
                                        <button onClick={handleLogout} className='flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300'>
                                            <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-red-50'><HiOutlineLogout size={17} /></span>
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </motion.div>

            {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

        </div>
    )
}

export default Navbar;