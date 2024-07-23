import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import { wrap } from 'popmotion'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'

const reviews = [
    {imgSrc: user1, header: 'BEST INSTITUTE EVER', review: 'This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.', author: "Akinola Kehinde", career: "Fullstack Developer"},
    {imgSrc: user2, header: 'Life Saver', review: 'This is where dreams come to life. With our carefully crafted learning courses we will meet you where you are, and take you to where you want to be in your career.', author: "Joe Ntekim", career: "Fullstack Developer"}

]

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Reviews() {

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, reviews.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
  return (
    <div className='carousel-container h-[600px] md:h-[400px] lg:h-screen overflow-x-hidden'>
        <AnimatePresence initial={false} custom={direction} className=''>
        <motion.div
          className='flex flex-col md:flex-row w-full items-center lg:items-stretch px-4 md:px-16 gap-8 absolute'
          key={page}
          src={reviews[imageIndex].imgSrc}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 500, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
            <img src={reviews[imageIndex].imgSrc} className='w-[200px] h-[200px] rounded-full lg:rounded-none lg:w-1/2 lg:min-h-[400px] lg:h-[400px]' alt="" />
            <div className='md:w-8/12 lg:w-1/2 flex flex-col lg:justify-between'>
                <div>
                  <h1 className='text-3xl lg:text-5xl xl:text-[60px] text-[rgba(5,25,45,1)] gochi'>{reviews[imageIndex].header}</h1>
                  <p>{reviews[imageIndex].review}</p>
                </div>

                <div className='mt-5 md:mt-0'>
                  <p>{reviews[imageIndex].author}</p>
                  <p>{reviews[imageIndex].career}</p>
                </div>

                <div className="mt-8 lg:mt-aut flex gap-2 items-center text-4xl">
                  <div className="next cursor-pointer hover:" onClick={() => paginate(1)}>
                      <CiCircleChevLeft />
                  </div>
                  <div className="prev cursor-pointer hover:" onClick={() => paginate(-1)}>
                      <CiCircleChevRight />
                  </div>
                </div>
            </div>
        </motion.div>
      </AnimatePresence>
      
    </div>
  )
}

export default Reviews