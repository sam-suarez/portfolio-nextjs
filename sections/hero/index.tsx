'use client'

import React from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import Button from '@/components/button'
import { motion } from 'framer-motion'
import { getResume } from '@/utils/general'
import Link from 'next/link'
import { fadeIn, staggerContainer } from '@/animations'

const Hero = () => {
  return (
    <section
      className="min-h-[700px] h-[calc(100vh-73px-64px)] md:h-[calc(100vh-73px-84px)] flex items-center justify-center"
      id="hero"
    >
      <motion.div
        className="md:text-left md:text-lg max-w-lg md:max-w-xl"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
      >
        <div className="font-bold">
          <motion.p variants={fadeIn}>👋 Hi, I'm</motion.p>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl">
            Sam Suarez
            <span className="text-yellow">.</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-5 text-2xl">
            A <span className="text-yellow">software engineer</span> with 6+ years of experience and
            a solid foundation in <span className="text-yellow">design</span>.
          </motion.p>
          <motion.p variants={fadeIn} className="mt-5 text-2xl">
            Experienced <span className="text-yellow">front-end developer</span>, specializing in{' '}
            <span className="text-yellow">Shopify Hydrogen</span> using{' '}
            <span className="text-yellow">Remix</span> and{' '}
            <span className="text-yellow">TypeScript</span>
          </motion.p>
        </div>
        <motion.div variants={fadeIn}>
          <Button
            className="bg-yellow text-black mt-6"
            icon={<ArrowRightAltOutlinedIcon />}
            onClick={getResume}
          >
            View Resume
          </Button>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Link href="/contact">
            <Button className="bg-blue text-white mt-2" icon={<EmailOutlinedIcon />}>
              Contact
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
