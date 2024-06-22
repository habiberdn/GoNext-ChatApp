'use client'

import LoginModal from '@/app/component/loginModal'
import { useState } from 'react'

export function Header() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false)

    const toggleModal = () => {
        setModalOpen(!isModalOpen)
    }

    return (
            <main className=" gap-[10px] pl-[1rem] bg-[#464b50] p-2 z-20">
                <section className="flex">
                    <LoginModal open={isModalOpen} onClose={toggleModal} title='Sign In' />
                    <button onClick={toggleModal} className='hover:cursor-pointer p-1'>Sign Account</button>
                </section>
            </main>
    )
}
