'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

const promises = [
  {
    title: "You'll get the audit, no matter what.",
    description:
      "Even if we're not the right fit, you'll walk away with a clear report on what's hurting your conversions.",
  },
  {
    title: "You'll never feel ignored.",
    description:
      "I personally work on every project. You'll have my direct number, and I'll respond within 24 hours.",
  },
  {
    title: "You won't pay for guesswork.",
    description:
      'Every recommendation is based on proven conversion principles, not design trends or personal taste.',
  },
  {
    title: "If you're not happy, I'll make it right.",
    description:
      "If the final result doesn't match what we agreed on, I'll revise it until it does — or refund your deposit.",
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="bg-neutral-50 py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-neutral-500"
            >
              Our Promise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              The Founder's Guarantee
            </motion.h2>
          </div>

          {/* Honest Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-neutral-600">
              I'll be honest with you.
            </p>
            <p className="mt-4 text-neutral-600">
              We're a new agency. We don't have 50 case studies or famous clients to show off.
            </p>
            <p className="mt-4 text-lg font-medium text-neutral-900">
              But here's what I can promise:
            </p>
          </motion.div>

          {/* Promises List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
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
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{promise.title}</p>
                  <p className="mt-1 text-neutral-600">{promise.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 text-center"
          >
            <p className="text-lg text-neutral-600">
              I'm building this business on results, not hype. Your success is my reputation.
            </p>
            <p className="mt-6 text-lg font-semibold text-neutral-900">
              — Rohith, Founder
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
