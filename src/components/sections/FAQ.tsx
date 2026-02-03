'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui';

const faqs = [
  {
    question: 'What exactly is a "conversion audit"?',
    answer: 'We review your website to identify where visitors drop off without taking action. You\'ll get a report showing specific issues — like unclear CTAs, missing trust signals, or slow response times — and what to fix.',
  },
  {
    question: 'How long does the audit take?',
    answer: 'After our initial call, you\'ll receive your audit report within 48 hours.',
  },
  {
    question: 'What if my website is brand new?',
    answer: 'We can still help. We\'ll review your site structure, messaging, and lead capture setup to make sure you\'re not losing potential customers from day one.',
  },
  {
    question: 'Do I need to rebuild my entire website?',
    answer: 'Not always. Sometimes small changes — like repositioning a form or rewriting a headline — can dramatically improve conversions. We\'ll tell you what\'s actually needed.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We focus on service businesses — gyms, clinics, coaches, real estate agents, tradespeople, and local businesses. If you rely on enquiries to grow, we can help.',
  },
  {
    question: 'How much does it cost?',
    answer: 'The audit is free. If you decide to work with us, we\'ll provide a fixed quote based on what your site needs. No hourly billing, no surprises.',
  },
  {
    question: 'Will I own everything you build?',
    answer: 'Yes. Once paid, you own all the work — code, copy, and assets. It\'s yours to keep, even if we part ways.',
  },
  {
    question: 'What if I\'m not happy with the results?',
    answer: 'We offer revisions until the work matches what we agreed. If we can\'t reach an agreement, we\'ll refund your deposit. See our Founder\'s Guarantee above.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 lg:py-32">
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
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              Common questions about our conversion audit
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-neutral-600"
            >
              Get answers before you book
            </motion.p>
          </div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 divide-y divide-neutral-200"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between text-left"
                >
                  <span className="text-lg font-medium text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500"
                  >
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 rounded-2xl bg-neutral-50 p-8 text-center"
          >
            <p className="text-neutral-600">
              Still have questions?{' '}
              <a
                href="#contact"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:no-underline"
              >
                Get in touch
              </a>{' '}
              and we'll be happy to help.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
