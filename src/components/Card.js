import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import {motion} from "framer-motion"


const Card = (props) => {
  return (
    <div>
       <motion.div drag dragConstraints={props.reference} className=" w-60 h-[18rem] rounded-[50px] bg-zinc-900/90 ">
        <div className=" w-full h-full relative z-[13] top-0 left-0  text-white px-5 py-10">
          <FaFileAlt />
          <p className="text-sm leading-tight mt-5 font-semibold ">{props.desc}
          </p>
          <div className="footer absolute bottom-0 left-0 w-full h-10 mb-7 ">
            <div className="flex items-center justify-between px-6 py-4">
              <h5>5.4mb</h5>
              <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center "><LuDownload size=".7em" color="#fff"/></span>
            </div>
            <div className='tag w-full h-10 py-4 relative  bg-sky-600 flex items-center justify-center rounded-[50px]'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div drag dragConstraints={props.reference} className=" w-60 h-[18rem] rounded-[50px] bg-zinc-900/90 ">
        <div className=" w-full h-full relative z-[13] top-0 left-0  text-white px-5 py-10">
          <FaFileAlt />
          <p className="text-sm leading-tight mt-5 font-semibold ">Be the change you wish to see in the world. Your actions, no matter how small, have the potential to make a difference. Let kindness be your compass and empathy your guide, for in lifting others, we lift ourselves.
          </p>
          <div className="footer absolute bottom-0 left-0 w-full h-10 mb-7 ">
            <div className="flex items-center justify-between px-6 py-4">
              <h5>1.6mb</h5>
              <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center "><LuDownload size=".7em" color="#fff"/></span>
            </div>
            <div className='tag w-full h-10 py-4 relative  bg-sky-600 flex items-center justify-center rounded-[50px]'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div drag dragConstraints={props.reference} className=" w-60 h-[18rem] rounded-[50px] bg-zinc-900/90 ">
        <div className=" w-full h-full relative z-[13] top-0 left-0  text-white px-5 py-10">
          <FaFileAlt />
          <p className="text-sm leading-tight mt-5 font-semibold ">Cherish the journey as much as the destination. Life is a series of moments, each one offering the chance to learn, to love, and to live fully. Embrace every experience, for they shape who you are and who you are becoming.
          </p>
          <div className="footer absolute bottom-0 left-0 w-full h-10 mb-7 ">
            <div className="flex items-center justify-between px-6 py-4">
              <h5>4.9mb</h5>
              <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center "><LuDownload size=".7em" color="#fff"/></span>
            </div>
            <div className='tag w-full h-10 py-4 relative  bg-sky-600 flex items-center justify-center rounded-[50px]'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div drag dragConstraints={props.reference} className=" w-60 h-[18rem] rounded-[50px] bg-zinc-900/90 ">
        <div className=" w-full h-full relative z-[13] top-0 left-0  text-white px-5 py-10">
          <FaFileAlt />
          <p className="text-sm leading-tight mt-5 font-semibold ">Remember, you are the author of your own story. Write it with passion, purpose, and unwavering determination. The world is waiting for the unique imprint only you can leave. Seize the day and make it yours
          </p>
          <div className="footer absolute bottom-0 left-0 w-full h-10 mb-7 ">
            <div className="flex items-center justify-between px-6 py-4">
              <h5>2.5mb</h5>
              <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center "><LuDownload size=".7em" color="#fff"/></span>
            </div>
            <div className='tag w-full h-10 py-4 relative  bg-sky-600 flex items-center justify-center rounded-[50px]'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div drag dragConstraints={props.reference} className=" w-60 h-[18rem] rounded-[50px] bg-zinc-900/90 ">
        <div className=" w-full h-full relative z-[13] top-0 left-0  text-white px-5 py-10">
          <FaFileAlt />
          <p className="text-sm leading-tight mt-5 font-semibold ">Stay focused on your goals, but remain flexible in your approach. Life is unpredictable, and the journey may take unexpected turns. Adaptability is key to overcoming obstacles and seizing new opportunities that arise along the way.
          </p>
          <div className="footer absolute bottom-0 left-0 w-full h-10 mb-7 ">
            <div className="flex items-center justify-between px-6 py-4">
              <h5>2.5mb</h5>
              <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center "><LuDownload size=".7em" color="#fff"/></span>
            </div>
            <div className='tag w-full h-10 py-4 relative  bg-sky-600 flex items-center justify-center rounded-[50px]'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div drag dragConstraints={props.reference} className=" w-60 h-[18rem] rounded-[50px] bg-zinc-900/90 ">
        <div className=" w-full h-full relative z-[13] top-0 left-0  text-white px-5 py-10">
          <FaFileAlt />
          <p className="text-sm leading-tight mt-5 font-semibold ">Every day is a chance to start anew. Let go of past failures and disappointments, for they do not define you. Instead, draw strength from your resilience and the lessons learned, and keep moving forward with unwavering determination.
          </p>
          <div className="footer absolute bottom-0 left-0 w-full h-10 mb-7 ">
            <div className="flex items-center justify-between px-6 py-4">
              <h5>2.5mb</h5>
              <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center "><LuDownload size=".7em" color="#fff"/></span>
            </div>
            <div className='tag w-full h-10 py-4 relative  bg-sky-600 flex items-center justify-center rounded-[50px]'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card;
