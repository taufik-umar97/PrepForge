import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Auth from '../pages/Auth';

function AuthModel({ onClose }) {
    const { userData } = useSelector((state) => state.user);

    useEffect(() => {
        if (userData) {
            onClose()
        }
    }, [userData, onClose])

    return (
        <div className='fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/10 px-4 py-6 backdrop-blur-sm'>
            <div className='relative w-full max-w-sm'>
                <Auth isModel={true} onClose={onClose} />
            </div>
        </div>
    )
}

export default AuthModel