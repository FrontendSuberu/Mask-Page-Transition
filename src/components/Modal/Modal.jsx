import { motion } from 'framer-motion';
import './modal.css'


const clip_anim = {
    initial: {
        clipPath: "circle(0 at 0% 50%)",
        WebkitClipPath: "circle(0 at 0% 50%)"
    },
    enter: {
        clipPath: "circle(140% at 0 14%)",
        WebkitClipPath: "circle(140% at 0 14%)",
        transition: {
            duration: 1, // Adjust duration
            ease: "easeInOut", // Smooth easing
        },
    },
    exit: {
        clipPath: "circle(0 at 0% 50%)",
        WebkitClipPath: "circle(0 at 0% 50%)",
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    }
};

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            variants={clip_anim}
            initial="initial"
            animate="enter"
            exit="exit"
            transition="transition"
            className="modal-wrapper">
            <div className="modal-content">
            <button onClick={onClose} className=""> &times;</button>


                <div>
                    <h1>My dream is to work on innovative projects that push the boundaries of web development and leave a meaningful impact. I aspire to be recognized as a developer who creates not just functional websites, but also unforgettable experiences.</h1>
                </div>
            </div>
        </motion.div>
    );
};

export default Modal;
