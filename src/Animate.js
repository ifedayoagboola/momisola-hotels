export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const heroSlider = {
  hidden: {
    opacity: 0.5,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.75,
    },
  },
};
export const fade = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 3,
    },
  },
};
export const section1Anime = {
  hidden1: {
    x: 300,
  },
  hidden2: {
    x: -300,
  },
  show: {
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};
export const section2Anime = {
  hidden1: {
    y: 300,
  },
  hidden2: {
    y: -300,
  },
  show: {
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
};
export const section4Anime = {
  hiddenx: {
    opacity: 0.5,
    x: 200,
  },
  hiddenytop: {
    y: 200,
  },
  hiddenybottom: {
    y: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.75,
    },
  },
};
export const imageAnime = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
