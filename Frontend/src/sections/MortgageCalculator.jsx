import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Percent, Calendar, ArrowRight } from 'lucide-react';
import { GlassCard, GlowButton } from '../components/common/UI';

const MortgageCalculator = ({ id }) => {
  const [price, setPrice] = useState(1500000);
  const [downPayment, setDownPayment] = useState(300000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const payment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    setMonthlyPayment(payment || 0);
  }, [price, downPayment, interestRate, loanTerm]);

  return (
    <section id={id} className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">FINANCIAL PLANNING</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-rich-dark mb-8">
              Mortgage <span className="text-primary italic">Calculator</span>
            </h2>
            <p className="text-lg text-rich-dark/60 mb-10 leading-relaxed">
              Estimate your monthly payments and plan your luxury property investment with our intuitive calculator tool.
            </p>
            <div className="space-y-6">
              {[
                "Calculate monthly repayments instantly",
                "Adjust interest rates and loan terms",
                "Plan your down payment strategy",
                "Get pre-approved in minutes"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-sm font-bold text-rich-dark/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <GlassCard className="p-10 bg-white border-gray-100 shadow-2xl shadow-black/5 !rounded-[3rem]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold text-rich-dark/40 uppercase tracking-widest">Property Price</label>
                  <span className="text-lg font-bold text-rich-dark">${price.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="100000" 
                  max="10000000" 
                  step="50000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-bold text-rich-dark/40 uppercase tracking-widest">Down Payment</label>
                  <span className="text-lg font-bold text-rich-dark">${downPayment.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max={price} 
                  step="10000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-bold text-rich-dark/40 uppercase tracking-widest">Interest Rate (%)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm font-bold text-rich-dark focus:outline-none focus:border-primary"
                    />
                    <Percent size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-rich-dark/30" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold text-rich-dark/40 uppercase tracking-widest">Loan Term (Years)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm font-bold text-rich-dark focus:outline-none focus:border-primary"
                    />
                    <Calendar size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-rich-dark/30" />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-50">
                <div className="text-xs font-bold text-rich-dark/40 uppercase tracking-widest mb-2">Estimated Monthly Payment</div>
                <div className="text-5xl font-bold text-primary tracking-tight">
                  ${Math.round(monthlyPayment).toLocaleString()}
                </div>
              </div>

              <GlowButton variant="emerald" className="w-full py-5 text-xs shadow-xl shadow-primary/20">
                Get Pre-Approved Now
              </GlowButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
