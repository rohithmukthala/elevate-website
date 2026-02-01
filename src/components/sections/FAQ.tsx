'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Most projects are completed within 2-3 weeks. Simple landing pages can be done in as little as 5-7 days, while more complex websites with custom features may take 4-6 weeks. We\'ll give you a clear timeline before we start.',
  },
  {
    question: 'What do I need to provide to get started?',
    answer: 'We\'ll need your brand assets (logo, colors, fonts if you have them), content (text and images), and a clear idea of what you want your website to achieve. Don\'t worry if you don\'t have everything ready – we can guide you through the process.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes! We offer monthly maintenance packages that include security updates, backups, performance monitoring, and content updates. We\'re also available for one-time fixes or updates whenever you need them.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. Every website we build is fully responsive and optimized for all devices – phones, tablets, and desktops. We test extensively to ensure a great experience regardless of screen size.',
  },
  {
    question: 'Can you help with SEO and getting found on Google?',
    answer: 'Yes, we build all our websites with SEO best practices baked in – fast load times, proper structure, meta tags, and more. We also offer additional SEO services to help you rank higher and drive more organic traffic.',
  },
  {
    question: 'What if I don\'t like the design?',
    answer: 'We include revision rounds in every project to ensure you\'re completely happy with the result. We start with mockups and get your approval before building, so there are no surprises. If something isn\'t right, we\'ll work with you until it is.',
  },
  {
    question: 'Will I be able to update the website myself?',
    answer: 'Absolutely. We build websites with user-friendly content management systems that let you easily update text, images, and content without any technical knowledge. We also provide a walkthrough session to show you exactly how everything works.',
  },
  {
    question: 'Do I own the website once it\'s finished?',
    answer: 'Yes, 100%. Once the project is complete and paid for, you own all the code, design files, and content. It\'s your website – you can host it wherever you want and do whatever you like with it.',
  },
  {
    question: 'Do you offer hosting and domain services?',
    answer: 'We can help you set up reliable, fast hosting and assist with domain registration or transfer. We recommend specific hosting providers based on your needs and can manage everything for you if you prefer a hands-off approach.',
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
              Frequently asked questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-neutral-600"
            >
              Everything you need to know about working with us
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
