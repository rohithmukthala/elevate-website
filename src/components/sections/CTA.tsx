'use client';

import { motion } from 'framer-motion';
import { Container, useBooking } from '@/components/ui';

const steps = [
  {
    number: '1',
    title: 'Quick call (15 min)',
    description: "We'll ask about your business, your current website, and where your leads come from.",
  },
  {
    number: '2',
    title: 'We audit your site',
    description: "Within 48 hours, you'll receive a report showing exactly where visitors drop off and what's costing you enquiries.",
  },
  {
    number: '3',
    title: 'You decide',
    description: "No pressure. If our approach makes sense for you, we'll talk next steps. If not, you keep the audit.",
  },
];

export default function CTA() {
  const { openBookingModal } = useBooking();
  
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-20 sm:py-28 lg:py-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/50 px-4 py-2 text-sm text-neutral-300">
              Ready to get more leads?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Get your free website conversion audit
          </motion.h2>

          {/* What happens section */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center text-lg text-neutral-400"
          >
            Here's what happens when you book:
          </motion.p>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 rounded-xl bg-neutral-800/50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-900">
                  {step.number}
                </div>
                <div>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <motion.button
              onClick={openBookingModal}
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-medium text-neutral-900 transition-all hover:bg-neutral-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Free Audit
              <motion.svg
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
              </motion.svg>
            </motion.button>

            <p className="mt-4 text-sm text-neutral-500">
              No payment required. No commitment. Just clarity.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
