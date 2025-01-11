import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router'
import Signup from '../Signup/Signup';
import Modal from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';


function Header() {





    // state for the modal
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };


    const closeModal = () => setModalOpen(false);


    return (
        <>
            <section className='header'>
                <div>
                    <Link>Made by Joseph Suberu</Link>
                </div>

                <button onClick={openModal} className='btn'>More about me</button>
            </section>

            <AnimatePresence>
                {isModalOpen &&
                    <Modal isOpen={isModalOpen} onClose={() => { closeModal()}} />
                }
            </AnimatePresence>
        </>
    )
}

export default Header
