import { useState } from 'react';
import { IndianRupee } from 'lucide-react';

export function DonationCard() {
  const [donationType, setDonationType] = useState<'onetime' | 'monthly'>('onetime');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [
    { value: 500, label: '₹500', subtitle: 'Feeds 10' },
    { value: 1000, label: '₹1000', subtitle: 'Feeds 20' },
    { value: 5000, label: '₹5000', subtitle: 'Full Session' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md mx-auto">
      {/* Toggle */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-xl mb-6">
        <button
          onClick={() => setDonationType('onetime')}
          className={`flex-1 py-3 px-4 rounded-lg transition-all ${
            donationType === 'onetime'
              ? 'bg-white shadow-sm'
              : 'bg-transparent text-gray-600'
          }`}
        >
          One-time Donation
        </button>
        <button
          onClick={() => setDonationType('monthly')}
          className={`flex-1 py-3 px-4 rounded-lg transition-all ${
            donationType === 'monthly'
              ? 'bg-white shadow-sm'
              : 'bg-transparent text-gray-600'
          }`}
        >
          Monthly Donation
        </button>
      </div>

      {/* Amount Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {amounts.map((amount) => (
          <button
            key={amount.value}
            onClick={() => {
              setSelectedAmount(amount.value);
              setCustomAmount('');
            }}
            className={`py-6 px-4 rounded-xl border-2 transition-all ${
              selectedAmount === amount.value
                ? 'border-[#FF9933] bg-[#FFF5ED]'
                : 'border-gray-200 hover:border-[#FF9933]/50'
            }`}
          >
            <div className="text-xl mb-1">{amount.label}</div>
            <div className="text-sm text-gray-600">{amount.subtitle}</div>
          </button>
        ))}
        
        {/* Custom Amount */}
        <button
          onClick={() => setSelectedAmount(null)}
          className={`py-6 px-4 rounded-xl border-2 transition-all ${
            selectedAmount === null && customAmount
              ? 'border-[#FF9933] bg-[#FFF5ED]'
              : 'border-gray-200 hover:border-[#FF9933]/50'
          }`}
        >
          <div className="text-xl mb-1">Custom</div>
          <div className="text-sm text-gray-600">Any Amount</div>
        </button>
      </div>

      {/* Custom Amount Input */}
      {(selectedAmount === null || customAmount) && (
        <div className="mb-6">
          <div className="relative">
            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FF9933] focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Donate Button */}
      <button className="w-full bg-[#FF9933] hover:bg-[#E68A2E] text-white py-5 rounded-xl transition-colors shadow-md">
        Donate via UPI/Card
      </button>

      {/* Security Note */}
      <p className="text-center text-xs text-gray-500 mt-4">
        🔒 Secure payment • 80G Tax benefit available
      </p>
    </div>
  );
}
