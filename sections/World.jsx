'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.interWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| peaple in the world"
        textStyles="text-center"
      />

      <TitleText title={(
        <>
          Track friends around you and invite them
          to play together in the same world
        </>
      )} textStyles="text-center"
      />
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-contain" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute left-20 top-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[16%] w-[100px] h-[80px] p-[6px] rounded-xl bg-[#5d6680]">
          <img src="/world-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-24 right-[30%] w-[110px] h-[85px] p-[6px] rounded-xl bg-[#5d6680]">
          <img src="/world-01.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
