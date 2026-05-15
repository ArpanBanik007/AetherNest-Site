import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import useUIStore from '../../store/useUIStore';

const ToastContainer = () => {
  const { toasts, removeToast } = useUIStore();

  const icons = {
    success: <CheckCircle className="text-emerald-500" size={20} />,
    error: <AlertCircle className="text-rose-500" size={20} />,
    info: <Info className="text-blue-500" size={20} />,
    warning: <AlertTriangle className="text-amber-500" size={20} />,
  };

  const bgColors = {
    success: 'bg-emerald-50 border-emerald-100',
    error: 'bg-rose-50 border-rose-100',
    info: 'bg-blue-50 border-blue-100',
    warning: 'bg-amber-50 border-amber-100',
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`min-w-[320px] max-w-md p-4 rounded-2xl border shadow-xl flex items-start gap-4 ${bgColors[toast.type] || bgColors.info} relative overflow-hidden group`}
          >
            {/* Progress Bar */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: (toast.duration || 3000) / 1000, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-black/5"
            />

            <div className="flex-shrink-0 mt-0.5">
              {icons[toast.type] || icons.info}
            </div>
            
            <div className="flex-1">
              <h4 className="text-sm font-bold text-rich-dark leading-tight mb-0.5">
                {toast.title}
              </h4>
              <p className="text-xs font-medium text-rich-dark/60 leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button 
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 text-rich-dark/20 hover:text-rich-dark/60 transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
