import { motion, useCycle } from 'framer-motion'
import { loaderVariants } from './Motions'

export default function Loader() {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')
  return (
    <>
      <motion.div className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  )
}
