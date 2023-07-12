'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.70%] flex justify-center flex-col">
        <TypingText title="| what's new?" />
        <TitleText title={<>What's new about metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((features) => (
            <NewFeatures key={features.title} {...features} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="/whats-new.png" alt="get started" className="w-[90%] h-[90%] object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;