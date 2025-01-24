const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition: { easeInOut: 'ease' }
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    whileHover: {
      scale: 1.1,
      boxShadow: "0px 0px  18px rgb(255,255,255)"
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    txtShodow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 }
  }
}

const svcVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export {
  containerVariants,
  nextVariants,
  childVariants,
  buttonVariants,
  backdrop,
  modal,
  svcVariants,
  pathVariants
}