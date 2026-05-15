import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Percent, Calendar, Calculator } from 'lucide-react';

const MortgageCalculator = ({ propertyPrice }) => {
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const loanAmount = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / numberOfPayments);
    } else {
      const payment =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  }, [propertyPrice, downPayment, interestRate, loanTerm]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <label className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] flex items-center gap-2">
              <DollarSign size={14} className="text-primary" /> Down Payment
            </label>
            <input
              type="range"
              min="0"
              max={propertyPrice}
              step={10000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs font-bold text-rich-dark">
              <span>{formatCurrency(downPayment)}</span>
              <span className="text-primary">{Math.round((downPayment / propertyPrice) * 100)}%</span>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] flex items-center gap-2">
              <Percent size={14} className="text-primary" /> Interest Rate
            </label>
            <input
              type="range"
              min="0.1"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="text-xs font-bold text-rich-dark">{interestRate}%</div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold text-rich-dark/30 uppercase tracking-[0.2em] flex items-center gap-2">
              <Calendar size={14} className="text-primary" /> Loan Term
            </label>
            <div className="flex gap-3">
              {[15, 20, 30].map((years) => (
                <button
                  key={years}
                  onClick={() => setLoanTerm(years)}
                  className={`flex-1 py-3 rounded-xl border text-[10px] font-bold uppercase transition-all ${
                    loanTerm === years 
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                      : 'bg-white text-rich-dark/40 border-gray-100 hover:border-primary/30'
                  }`}
                >
                  {years} Years
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-[3rem] p-10 border border-primary/10 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-premium mb-6">
            <Calculator size={24} />
          </div>
          <p className="text-[10px] font-bold text-rich-dark/20 uppercase tracking-[0.3em] mb-2">Estimated Monthly Payment</p>
          <h4 className="text-4xl font-extrabold text-rich-dark mb-4">{formatCurrency(monthlyPayment)}</h4>
          <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">Competitive Rate Locked</p>
          
          <div className="mt-8 w-full space-y-3 pt-8 border-t border-primary/10">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-rich-dark/40">
              <span>Principal & Interest</span>
              <span className="text-rich-dark">{formatCurrency(monthlyPayment * 0.8)}</span>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-rich-dark/40">
              <span>Property Taxes</span>
              <span className="text-rich-dark">{formatCurrency(monthlyPayment * 0.15)}</span>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-rich-dark/40">
              <span>Insurance</span>
              <span className="text-rich-dark">{formatCurrency(monthlyPayment * 0.05)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
