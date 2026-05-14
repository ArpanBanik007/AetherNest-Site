import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle, ChevronRight, MapPin } from 'lucide-react';
import { GlowButton } from '../common/UI';

const ScheduleVisitModal = ({ isOpen, onClose, property }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];
  const dates = [
    { day: "Mon", date: "15" },
    { day: "Tue", date: "16" },
    { day: "Wed", date: "17" },
    { day: "Thu", date: "18" },
    { day: "Fri", date: "19" },
  ];

  const handleNext = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-rich-dark/60 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1.5 bg-primary/10 w-full">
          <motion.div 
            className="h-full bg-primary" 
            animate={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-rich-dark transition-colors">
          <X size={24} />
        </button>

        <div className="p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-rich-dark dark:text-white">Schedule a Visit</h2>
                    <p className="text-sm font-medium text-rich-dark/40 uppercase tracking-widest">{property?.title}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] mb-4 block">Select Date</label>
                    <div className="flex justify-between gap-4">
                      {dates.map((d) => (
                        <button
                          key={d.date}
                          onClick={() => setSelectedDate(d.date)}
                          className={`flex-1 p-4 rounded-2xl border transition-all flex flex-col items-center gap-1 ${
                            selectedDate === d.date 
                              ? 'border-primary bg-primary/5 text-primary shadow-lg shadow-primary/10' 
                              : 'border-gray-100 hover:border-primary/30'
                          }`}
                        >
                          <span className="text-[10px] font-bold uppercase">{d.day}</span>
                          <span className="text-lg font-bold">{d.date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] mb-4 block">Select Time</label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-4 rounded-2xl border text-xs font-bold transition-all ${
                            selectedTime === time 
                              ? 'border-primary bg-primary/5 text-primary' 
                              : 'border-gray-100 hover:border-primary/30'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <GlowButton 
                  variant="emerald" 
                  className="w-full mt-12 py-5" 
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleNext}
                >
                  Continue <ChevronRight size={18} />
                </GlowButton>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-rich-dark dark:text-white mb-2">Confirm Details</h2>
                  <p className="text-rich-dark/40 text-sm">Review your appointment information.</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-[2rem] p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-primary shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-widest">Location</p>
                      <p className="text-sm font-bold text-rich-dark dark:text-white">{property?.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center text-primary shadow-sm">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-widest">Date & Time</p>
                      <p className="text-sm font-bold text-rich-dark dark:text-white">May {selectedDate}, 2026 at {selectedTime}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <GlowButton variant="emerald" className="w-full py-5" onClick={handleNext}>
                    Book Appointment
                  </GlowButton>
                  <button onClick={() => setStep(1)} className="w-full py-2 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-rich-dark">
                    Go Back
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-24 h-24 rounded-[2.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto mb-8">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-3xl font-bold text-rich-dark dark:text-white mb-4">Visit Confirmed!</h2>
                <p className="text-rich-dark/40 text-sm mb-12">An email has been sent with all the details. Our agent will contact you shortly.</p>
                <GlowButton variant="emerald" className="px-12 py-5" onClick={onClose}>
                  Back to Property
                </GlowButton>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ScheduleVisitModal;
