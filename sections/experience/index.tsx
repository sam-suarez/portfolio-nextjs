'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { mappedVariants } from '@/animations'
import { getFormattedDate } from '@/utils/general'
import RichText from '@/components/rich-text'
import experience from '@/public/data/experience.json'
import { ExperienceEntry } from './types'

const Experience = () => {
  return (
    <section className="py-6 md:py-12 min-h-[700px]" id="experience">
      <motion.h1
        className="font-bold text-2xl md:text-4xl"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
        viewport={{ once: true }}
      >
        Experience
        <span className="text-yellow">.</span>
      </motion.h1>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, x: '100px', filter: 'blur(30px)' }}
        animate={{ opacity: 1, x: '0', filter: 'blur(0px)' }}
        transition={{ bounce: false }}
        viewport={{ once: true }}
      >
        Where I&apos;ve worked throughout the years.
      </motion.p>
      <div className="relative mt-6 grid gap-4">
        {experience.map((experience, index) => {
          const isFirstIndex = index === 0

          return (
            <motion.div
              key={index}
              className={clsx('relative flex flex-col p-4 md:p-6 bg-blue-200 rounded-lg', {
                'bg-yellow text-black': isFirstIndex,
              })}
              initial="initial"
              whileInView="animate"
              custom={index}
              variants={mappedVariants}
              viewport={{ once: true }}
            >
              <ExperienceDetails experience={experience} isFirstIndex={isFirstIndex} />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

const ExperienceDetails = ({
  experience,
  isFirstIndex = false,
}: {
  experience: ExperienceEntry
  isFirstIndex: boolean
}) => {
  const { image, position, company, startDate, endDate, overview, responsibilities } =
    experience ?? {}

  return (
    <>
      <div className="relative h-[50px] w-[50px]">
        <Image src={image} alt={position ?? ''} fill className="object-contain" sizes="50px" />
      </div>
      <div
        className={clsx('flex items-center font-bold text-lg mt-3', {
          'text-black': isFirstIndex,
          'text-yellow': !isFirstIndex,
        })}
      >
        {position}
      </div>
      <div className={'flex flex-col'}>
        <p className="font-bold">{company}</p>
        <p className="text-xs">
          {getFormattedDate(startDate)} - {endDate ? getFormattedDate(endDate) : 'Present'}
        </p>
      </div>
      <p
        className={clsx('mt-3 text-xs', {
          'text-black': isFirstIndex,
          'text-yellow': !isFirstIndex,
        })}
      >
        Overview
      </p>
      <p>{overview}</p>
      <p
        className={clsx('mt-3 text-xs', {
          'text-black': isFirstIndex,
          'text-yellow': !isFirstIndex,
        })}
      >
        Responsibilities
      </p>
      <ul className="mt-1 list-disc pl-6 text-sm">
        {responsibilities?.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </>
  )
}

export default Experience
