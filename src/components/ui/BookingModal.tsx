'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const timeZones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Anchorage', label: 'Alaska Time (AKT)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Central European (CET)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Kolkata', label: 'India (IST)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST)' },
  { value: 'Pacific/Auckland', label: 'New Zealand (NZST)' },
];

const timeSlots = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: '',
    selectedDate: '',
    selectedTime: '',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/New_York',
  });

  // Generate next 14 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          }),
          dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
        });
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateSelect = (date: string) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, selectedTime: time });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to book call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSuccess(false);
    setError('');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectDetails: '',
      selectedDate: '',
      selectedTime: '',
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/New_York',
    });
    onClose();
  };

  const canProceedStep1 = formData.name && formData.email;
  const canProceedStep2 = formData.selectedDate && formData.selectedTime;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={resetAndClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={resetAndClose}
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            {isSuccess ? (
              /* Success State */
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                >
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-neutral-900">Call Booked!</h3>
                <p className="mt-3 text-neutral-600">
                  We've received your booking request. You'll receive a confirmation email shortly with the meeting details.
                </p>
                <div className="mt-6 rounded-xl bg-neutral-50 p-4 text-left">
                  <p className="text-sm text-neutral-500">Your appointment</p>
                  <p className="mt-1 font-medium text-neutral-900">
                    {availableDates.find(d => d.value === formData.selectedDate)?.label} at {formData.selectedTime}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {timeZones.find(tz => tz.value === formData.timeZone)?.label}
                  </p>
                </div>
                <button
                  onClick={resetAndClose}
                  className="mt-6 w-full rounded-full bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="border-b border-neutral-100 p-6">
                  <h2 className="text-xl font-bold text-neutral-900">Book a Free Call</h2>
                  <p className="mt-1 text-sm text-neutral-500">
                    {step === 1 ? 'Tell us about yourself' : 'Choose a time that works for you'}
                  </p>
                  
                  {/* Progress Steps */}
                  <div className="mt-4 flex gap-2">
                    <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
                    <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {error && (
                    <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Inc."
                          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                        />
                      </div>

                      <div>
                        <label htmlFor="projectDetails" className="block text-sm font-medium text-neutral-700">
                          Tell us about your project
                        </label>
                        <textarea
                          id="projectDetails"
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          placeholder="I need a website for my business..."
                          rows={3}
                          className="mt-1 w-full resize-none rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      {/* Time Zone Selector */}
                      <div>
                        <label htmlFor="timeZone" className="block text-sm font-medium text-neutral-700">
                          Your Time Zone
                        </label>
                        <select
                          id="timeZone"
                          name="timeZone"
                          value={formData.timeZone}
                          onChange={handleInputChange}
                          className="mt-1 w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                        >
                          {timeZones.map((tz) => (
                            <option key={tz.value} value={tz.value}>
                              {tz.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Date Selection */}
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Select a Date <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {availableDates.slice(0, 9).map((date) => (
                            <button
                              key={date.value}
                              type="button"
                              onClick={() => handleDateSelect(date.value)}
                              className={`rounded-lg border p-3 text-center transition-all ${
                                formData.selectedDate === date.value
                                  ? 'border-neutral-900 bg-neutral-900 text-white'
                                  : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                              }`}
                            >
                              <p className="text-xs font-medium">{date.label.split(',')[0]}</p>
                              <p className={`text-lg font-bold ${formData.selectedDate === date.value ? 'text-white' : 'text-neutral-900'}`}>
                                {date.label.split(' ')[2]}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Select a Time <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                                formData.selectedTime === time
                                  ? 'border-neutral-900 bg-neutral-900 text-white'
                                  : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-neutral-100 p-6">
                  <div className="flex gap-3">
                    {step === 2 && (
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 rounded-full border border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                      >
                        Back
                      </button>
                    )}
                    
                    {step === 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!canProceedStep1}
                        className="flex-1 rounded-full bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canProceedStep2 || isSubmitting}
                        className="flex-1 rounded-full bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Booking...
                          </span>
                        ) : (
                          'Book Now'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
