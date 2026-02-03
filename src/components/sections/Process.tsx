'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

const steps = [
  {
    number: '01',
    title: 'Free Conversion Audit',
    description:
      'We review your current website and identify exactly where you\'re losing leads. You\'ll get a clear report — even if you don\'t hire us.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'We map out the changes needed: messaging, CTAs, lead capture, automation, and tracking. You\'ll know exactly what we\'re building and why.',
  },
  {
    number: '03',
    title: 'Build & Test',
    description:
      'We build your conversion system. You\'ll see progress along the way and can request changes before anything goes live.',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description:
      'We launch, monitor results, and make adjustments. The goal isn\'t just a new website — it\'s more enquiries.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-neutral-500"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            From audit to live in 4 steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600"
          >
            No complicated processes or endless meetings. Here's how we work:
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 sm:mt-20">
          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-0 right-0 top-6 h-0.5 bg-neutral-200"
                style={{ originX: 0 }}
              />

              {/* Steps */}
              <div className="relative grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="relative"
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                      {step.number}
                    </div>

                    {/* Content */}
                    <h3 className="mt-6 text-lg font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - Vertical */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-neutral-200" />

              {/* Steps */}
              <div className="relative space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-6"
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center sm:mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start With a Free Call
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <p className="mt-4 text-sm text-neutral-500">
            No commitment required
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
