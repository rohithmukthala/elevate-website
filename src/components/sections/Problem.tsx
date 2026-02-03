'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

const problems = [
  {
    title: 'No clear next step',
    description: 'Visitors browse, then leave without taking action',
  },
  {
    title: 'Buried contact info',
    description: 'Your phone number is hidden in the footer',
  },
  {
    title: 'No urgency',
    description: 'Nothing compels visitors to reach out today instead of "later"',
  },
  {
    title: 'No follow-up system',
    description: 'Leads slip through the cracks because no one responds fast enough',
  },
  {
    title: 'No tracking',
    description: 'You have no idea which visitors were ready to buy',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-neutral-50 py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-neutral-500"
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Your website isn't broken. It's just not built to convert.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-neutral-600"
          >
            Most business websites make the same mistakes:
          </motion.p>

          {/* Problem List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{problem.title}</p>
                  <p className="text-sm text-neutral-600">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Result Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 text-lg text-neutral-600"
          >
            The result? You pay for ads, rank on Google, or get referrals — but the enquiries never come.
          </motion.p>

          {/* Stat Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8 rounded-xl border border-neutral-200 bg-white p-6"
          >
            <p className="text-center text-lg font-medium text-neutral-900">
              Studies show{' '}
              <span className="text-red-600">70% of website visitors who leave will never return.</span>
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
