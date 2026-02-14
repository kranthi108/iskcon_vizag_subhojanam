import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Header } from '../components/Header';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function DonateForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const seva = location.state?.seva;

  const [isMonthly, setIsMonthly] = useState(false);
  const [formData, setFormData] = useState({
    occasion: '',
    personName: '',
    donorName: '',
    mobile: '',
    email: '',
    pan: '',
  });

  // Redirect to landing if no seva data
  useEffect(() => {
    if (!seva) {
      navigate('/');
    }
  }, [seva, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success', { state: { seva, formData, isMonthly } });
  };

  // Don't render if no seva
  if (!seva) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-24">
      <Header />
      
      <div className="pt-16 px-6 py-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#1A237E] mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF9933]" />
              <span className="text-sm text-[#FF9933]">Details</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 mx-3" />
            <div className="flex items-center gap-2">
              <Circle className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-400">Payment</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 mx-3" />
            <div className="flex items-center gap-2">
              <Circle className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-400">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Selected Seva Summary */}
        {seva && (
          <div className="bg-white rounded-xl p-4 mb-6 border-2 border-[#FF9933]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Selected Seva</p>
                <p className="text-[#1A237E]">
                  {seva.label || `Feed ${seva.people} People`}
                </p>
              </div>
              <p className="text-2xl text-[#FF9933]">
                ₹{seva.amount.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section A: Sankalpa */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 
              className="text-lg text-[#1A237E] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Special Occasion Details (Sankalpa)
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Occasion
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#FF9933] focus:outline-none bg-white"
                >
                  <option value="">Select an occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="memory">In Memory of</option>
                  <option value="gratitude">Gratitude</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Name of Person for the Seva
                </label>
                <input
                  type="text"
                  value={formData.personName}
                  onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                  placeholder="e.g., Grandmother Lakshmi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#FF9933] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section B: Donor Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 
              className="text-lg text-[#1A237E] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Your Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.donorName}
                  onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#FF9933] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#FF9933] focus:outline-none pr-12"
                  />
                  <FaWhatsapp className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  You'll receive updates on WhatsApp
                </p>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#FF9933] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  PAN Number
                </label>
                <input
                  type="text"
                  value={formData.pan}
                  onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#FF9933] focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Required for 80G tax exemption certificate
                </p>
              </div>
            </div>
          </div>

          {/* Frequency Toggle */}
          <div className="bg-gradient-to-br from-[#1A237E] to-[#283593] rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Make this a Monthly Seva
                </h4>
                <p className="text-sm text-white/80">
                  Most impactful way to support - consistent monthly contributions help us plan better
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMonthly(!isMonthly)}
                className={`ml-4 w-14 h-8 rounded-full transition-colors flex-shrink-0 ${
                  isMonthly ? 'bg-[#FF9933]' : 'bg-white/30'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    isMonthly ? 'translate-x-7' : 'translate-x-1'
                  } mt-1`}
                />
              </button>
            </div>
            {isMonthly && (
              <div className="text-xs text-white/90 bg-white/10 rounded-lg p-3 mt-3">
                ✨ Monthly donors receive priority updates and exclusive impact reports
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-[#FF9933] hover:bg-[#E68A2E] text-white rounded-xl transition-colors shadow-lg"
        >
          Proceed to Secure Payment
        </button>
      </div>
    </div>
  );
}