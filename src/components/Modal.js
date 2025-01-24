import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { backdrop, modal } from './Motions'
import { Link } from 'react-router-dom'

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal"
            variants={modal}
          >
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;