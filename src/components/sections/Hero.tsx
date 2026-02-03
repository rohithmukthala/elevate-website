'use client';

import { motion } from 'framer-motion';
import { Container, useBooking } from '@/components/ui';

export default function Hero() {
  const { openBookingModal } = useBooking();
  
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="max-w-3xl">
          {/* Eyebrow / Trust indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <motion.span
              className="inline-block h-2 w-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-sm font-medium text-neutral-500 sm:text-base">
              Now auditing websites for Q1
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight"
          >
            Your website gets visitors. We turn them into{' '}
            <span className="relative inline-block">
              <span className="relative z-10">enquiries.</span>
              <motion.span
                className="absolute bottom-2 left-0 -z-0 h-3 w-full bg-neutral-900/10 sm:bottom-3 sm:h-4 lg:bottom-4 lg:h-5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-neutral-600 sm:text-xl sm:leading-relaxed"
          >
            Most business websites look fine but fail to generate leads. We fix that. 
            Our conversion systems turn your existing traffic into phone calls, 
            form submissions, and booked appointments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={openBookingModal}
              className="group inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Free Conversion Audit
              <motion.svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </motion.svg>
            </motion.button>

            {/* Secondary CTA */}
            <motion.a
              href="#process"
              className="inline-flex items-center justify-center rounded-full border-2 border-neutral-200 bg-white px-7 py-4 text-base font-medium text-neutral-900 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See How It Works
            </motion.a>
          </motion.div>

          {/* Trust Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex items-center gap-3 border-t border-neutral-100 pt-8"
          >
            <svg
              className="h-5 w-5 text-green-600 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-neutral-600">
              We audit before we build — if your site isn't losing leads, we'll tell you
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Large floating gradient blobs */}
        <motion.div 
          className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-transparent blur-3xl"
          animate={{ 
            x: [100, 150, 100],
            y: [-100, -50, -100],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-100/40 via-pink-100/20 to-transparent blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Bubbles - scattered across background */}
        {/* Bubble 1 */}
        <motion.div
          className="absolute top-[20%] left-[10%] h-6 w-6 rounded-full border border-neutral-200/30 bg-gradient-to-br from-white/60 to-neutral-100/20"
          animate={{
            y: [0, -40, 0, 30, 0],
            x: [0, 20, -10, 15, 0],
            opacity: [0.4, 0.7, 0.5, 0.7, 0.4],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bubble 2 */}
        <motion.div
          className="absolute top-[60%] left-[85%] h-4 w-4 rounded-full border border-blue-200/25 bg-gradient-to-br from-blue-50/40 to-transparent"
          animate={{
            y: [0, 30, -20, 10, 0],
            x: [0, -15, 10, -5, 0],
            opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
            scale: [1, 0.9, 1.1, 1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Bubble 3 */}
        <motion.div
          className="absolute top-[30%] left-[70%] h-8 w-8 rounded-full border border-purple-200/20 bg-gradient-to-br from-purple-50/30 to-transparent"
          animate={{
            y: [0, -50, 20, -30, 0],
            x: [0, 25, -15, 10, 0],
            opacity: [0.3, 0.5, 0.4, 0.6, 0.3],
            scale: [1, 1.15, 0.9, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Bubble 4 */}
        <motion.div
          className="absolute top-[75%] left-[25%] h-5 w-5 rounded-full border border-indigo-200/25 bg-gradient-to-br from-indigo-50/35 to-transparent"
          animate={{
            y: [0, -35, 15, -20, 0],
            x: [0, -20, 25, -10, 0],
            opacity: [0.35, 0.55, 0.45, 0.6, 0.35],
            scale: [1, 1.1, 0.95, 1.08, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Bubble 5 */}
        <motion.div
          className="absolute top-[45%] left-[50%] h-3 w-3 rounded-full border border-pink-200/20 bg-gradient-to-br from-pink-50/30 to-transparent"
          animate={{
            y: [0, 25, -30, 15, 0],
            x: [0, -10, 20, -15, 0],
            opacity: [0.4, 0.65, 0.5, 0.7, 0.4],
            scale: [1, 0.9, 1.15, 1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Bubble 6 */}
        <motion.div
          className="absolute top-[15%] left-[40%] h-10 w-10 rounded-full border border-neutral-200/15 bg-gradient-to-br from-white/40 to-blue-50/10"
          animate={{
            y: [0, -45, 25, -15, 0],
            x: [0, 30, -20, 10, 0],
            opacity: [0.25, 0.45, 0.35, 0.5, 0.25],
            scale: [1, 1.08, 0.92, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        {/* Bubble 7 */}
        <motion.div
          className="absolute top-[55%] left-[5%] h-4 w-4 rounded-full border border-cyan-200/20 bg-gradient-to-br from-cyan-50/30 to-transparent"
          animate={{
            y: [0, 20, -25, 10, 0],
            x: [0, 15, -10, 20, 0],
            opacity: [0.35, 0.6, 0.45, 0.55, 0.35],
            scale: [1, 1.12, 0.95, 1.05, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
        {/* Bubble 8 */}
        <motion.div
          className="absolute top-[85%] left-[60%] h-7 w-7 rounded-full border border-violet-200/20 bg-gradient-to-br from-violet-50/35 to-transparent"
          animate={{
            y: [0, -40, 20, -25, 0],
            x: [0, -25, 15, -10, 0],
            opacity: [0.3, 0.5, 0.4, 0.55, 0.3],
            scale: [1, 1.1, 0.9, 1.08, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        />
        {/* Bubble 9 */}
        <motion.div
          className="absolute top-[40%] left-[90%] h-3 w-3 rounded-full border border-rose-200/15 bg-gradient-to-br from-rose-50/25 to-transparent"
          animate={{
            y: [0, 30, -20, 25, 0],
            x: [0, -15, 10, -5, 0],
            opacity: [0.4, 0.6, 0.5, 0.65, 0.4],
            scale: [1, 0.95, 1.1, 1, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
        {/* Bubble 10 */}
        <motion.div
          className="absolute top-[70%] left-[78%] h-5 w-5 rounded-full border border-sky-200/20 bg-gradient-to-br from-sky-50/30 to-transparent"
          animate={{
            y: [0, -30, 35, -15, 0],
            x: [0, 20, -25, 15, 0],
            opacity: [0.35, 0.55, 0.45, 0.6, 0.35],
            scale: [1, 1.08, 0.93, 1.06, 1],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
        />
        {/* Bubble 11 */}
        <motion.div
          className="absolute top-[25%] left-[20%] h-2 w-2 rounded-full border border-neutral-300/15 bg-gradient-to-br from-white/50 to-transparent"
          animate={{
            y: [0, 15, -20, 10, 0],
            x: [0, -10, 15, -5, 0],
            opacity: [0.5, 0.75, 0.6, 0.8, 0.5],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        {/* Bubble 12 */}
        <motion.div
          className="absolute top-[50%] left-[35%] h-12 w-12 rounded-full border border-blue-100/15 bg-gradient-to-br from-white/25 to-blue-50/10"
          animate={{
            y: [0, -55, 30, -25, 0],
            x: [0, 35, -20, 25, 0],
            opacity: [0.2, 0.35, 0.28, 0.4, 0.2],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
        {/* Bubble 13 */}
        <motion.div
          className="absolute top-[10%] left-[65%] h-4 w-4 rounded-full border border-emerald-200/20 bg-gradient-to-br from-emerald-50/30 to-transparent"
          animate={{
            y: [0, 25, -15, 20, 0],
            x: [0, -20, 15, -10, 0],
            opacity: [0.35, 0.55, 0.45, 0.6, 0.35],
            scale: [1, 1.1, 0.92, 1.05, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
        {/* Bubble 14 */}
        <motion.div
          className="absolute top-[65%] left-[15%] h-6 w-6 rounded-full border border-amber-200/15 bg-gradient-to-br from-amber-50/25 to-transparent"
          animate={{
            y: [0, -35, 20, -25, 0],
            x: [0, 25, -15, 10, 0],
            opacity: [0.3, 0.5, 0.4, 0.55, 0.3],
            scale: [1, 1.08, 0.94, 1.06, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 6.5 }}
        />
        {/* Bubble 15 */}
        <motion.div
          className="absolute top-[35%] left-[95%] h-3 w-3 rounded-full border border-fuchsia-200/20 bg-gradient-to-br from-fuchsia-50/30 to-transparent"
          animate={{
            y: [0, 20, -30, 15, 0],
            x: [0, -12, 8, -5, 0],
            opacity: [0.4, 0.6, 0.5, 0.65, 0.4],
            scale: [1, 0.95, 1.12, 1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5.5 }}
        />

        {/* Moving horizontal light streaks */}
        <motion.div
          className="absolute left-[20%] top-[40%] h-px w-20 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
          animate={{
            x: [0, 100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[30%] top-[25%] h-px w-16 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
          animate={{
            x: [0, -80, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute left-[50%] top-[65%] h-px w-24 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"
          animate={{
            x: [0, 60, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  );
}
