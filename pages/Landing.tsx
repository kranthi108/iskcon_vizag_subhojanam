import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Heart, Shield, Video, ArrowRight, Check, Users, Clock, MapPin } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();
  const [donationType, setDonationType] = useState<'onetime' | 'monthly'>('onetime');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);

  const amounts = [
    { value: 500, people: 10, label: 'Feed 10 People' },
    { value: 1000, people: 20, label: 'Feed 20 People' },
    { value: 2500, people: 50, label: 'Feed 50 People' },
    { value: 5000, people: 100, label: 'Feed 100 People' },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountClick = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = value.replace(/[^0-9]/g, '');
    setCustomAmount(numValue);
    if (numValue) {
      setSelectedAmount(parseInt(numValue));
    } else {
      setSelectedAmount(null);
    }
  };

  const handleDonate = () => {
    if (selectedAmount) {
      const seva = isCustom 
        ? { value: selectedAmount, people: Math.floor(selectedAmount / 50), label: `Feed ${Math.floor(selectedAmount / 50)} People`, amount: selectedAmount }
        : { ...amounts.find(a => a.value === selectedAmount), amount: selectedAmount };
      navigate('/donate', { state: { seva, isMonthly: donationType === 'monthly' } });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[45vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1662101875545-0b0cb8b7795b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5hZGFuYW0lMjBmb29kJTIwc2VydmluZyUyMGluZGlhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MDc4Njg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hospital Food Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A237E]/85 via-[#1A237E]/70 to-[#1A237E]/90" />
          
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-2xl">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30">
                  <Heart className="w-4 h-4 text-[#FF9933]" fill="#FF9933" />
                  <span className="text-sm">Serving with Love & Compassion</span>
                </div>
              </div>
              <h1 
                className="text-4xl md:text-5xl mb-4 leading-tight"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Nourish Those Who Care<br/>
                <span className="text-[#FF9933]">For Our Loved Ones</span>
              </h1>
              <p className="text-lg text-white/95 mb-6 leading-relaxed">
                Support patient attendees at hospitals with fresh, sattvic meals prepared with devotion
              </p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF9933]" />
                  <span>Major Hospitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF9933]" />
                  <span>Daily Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FF9933]" />
                  <span>1000+ Fed Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Section - First After Hero */}
      <div className="px-6 -mt-8 relative z-10 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 
                className="text-2xl md:text-3xl text-[#1A237E] mb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Support Subhojanam Seva
              </h2>
              <p className="text-gray-600 text-sm">
                Every meal brings comfort to caregivers watching over their loved ones
              </p>
            </div>

            {/* Toggle */}
            <div className="flex gap-2 p-1.5 bg-[#FAFAFA] rounded-xl mb-6">
              <button
                onClick={() => setDonationType('onetime')}
                className={`flex-1 py-3 px-4 rounded-lg transition-all text-sm md:text-base ${
                  donationType === 'onetime'
                    ? 'bg-white shadow-md text-[#1A237E]'
                    : 'text-gray-600 hover:text-[#1A237E]'
                }`}
              >
                One-time Donation
              </button>
              <button
                onClick={() => setDonationType('monthly')}
                className={`flex-1 py-3 px-4 rounded-lg transition-all relative text-sm md:text-base ${
                  donationType === 'monthly'
                    ? 'bg-gradient-to-r from-[#1A237E] to-[#283593] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#1A237E]'
                }`}
              >
                Monthly Donation
                {donationType === 'monthly' && (
                  <span className="absolute -top-2 -right-2 bg-[#FF9933] text-white text-xs px-2 py-0.5 rounded-full">
                    Most Impact
                  </span>
                )}
              </button>
            </div>

            {/* Amount Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => handleAmountSelect(amount.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedAmount === amount.value && !isCustom
                      ? 'border-[#FF9933] bg-gradient-to-br from-[#FFF5ED] to-white shadow-lg'
                      : 'border-gray-200 hover:border-[#FF9933]/50 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg md:text-2xl text-[#FF9933]">
                      ₹{amount.value.toLocaleString('en-IN')}
                    </span>
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedAmount === amount.value && !isCustom
                          ? 'border-[#FF9933] bg-[#FF9933]'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedAmount === amount.value && !isCustom && (
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    {amount.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    @ ₹50 per meal
                  </p>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <button
              onClick={handleCustomAmountClick}
              className={`w-full p-4 rounded-xl border-2 transition-all mb-6 ${
                isCustom
                  ? 'border-[#FF9933] bg-gradient-to-br from-[#FFF5ED] to-white shadow-lg'
                  : 'border-gray-200 hover:border-[#FF9933]/50 bg-white'
              }`}
            >
              {isCustom ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-[#FF9933]">₹</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    placeholder="Enter custom amount"
                    className="flex-1 text-2xl text-[#FF9933] bg-transparent outline-none"
                    autoFocus
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF9933] bg-[#FF9933] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-[#1A237E]">Custom Amount</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              )}
              {isCustom && customAmount && (
                <p className="text-xs text-gray-600 text-left mt-2">
                  Feeds approximately {Math.floor(parseInt(customAmount) / 50)} people
                </p>
              )}
            </button>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!selectedAmount}
              className={`w-full py-5 rounded-xl text-white transition-all flex items-center justify-center gap-2 text-lg ${
                selectedAmount
                  ? 'bg-gradient-to-r from-[#FF9933] to-[#E68A2E] hover:shadow-2xl shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <span>Proceed to Donate</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Video className="w-4 h-4 text-[#FF9933]" />
                <span>Video Proof</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-600" />
                <span>80G Tax Benefit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the Program */}
      <div className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 
              className="text-3xl text-[#1A237E] mb-4"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              About Subhojanam
            </h2>
            <div className="w-16 h-1 bg-[#FF9933] mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <h3 
                className="text-xl text-[#1A237E] mb-3"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Subhojanam is ISKCON's compassionate initiative to serve <strong>nutritious, sattvic meals</strong> to patient attendees at major hospitals. When families are under stress caring for their loved ones, we ensure they don't have to worry about their next meal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every day, we serve <strong>fresh, hygienic prasadam</strong> prepared with devotion in our temple kitchens — providing not just nourishment for the body, but spiritual strength during difficult times.
              </p>
            </div>

            <div className="space-y-4">
              <h3 
                className="text-xl text-[#1A237E] mb-3"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Who We Serve
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF9933]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#FF9933]" />
                  </div>
                  <span className="text-gray-700">Patient attendees at government & private hospitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF9933]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#FF9933]" />
                  </div>
                  <span className="text-gray-700">Families traveling from distant villages for treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF9933]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#FF9933]" />
                  </div>
                  <span className="text-gray-700">Caregivers spending nights at hospital bedsides</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF9933]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#FF9933]" />
                  </div>
                  <span className="text-gray-700">Anyone in need, regardless of background or faith</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What's in a Meal */}
          <div className="bg-gradient-to-br from-[#FFF5ED] to-[#FFE8D6] rounded-2xl p-8 border-2 border-[#FF9933]/20">
            <h3 
              className="text-2xl text-[#1A237E] mb-6 text-center"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              What's Included in Every Meal
            </h3>
            <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
              <img
                src="https://images.unsplash.com/photo-1672477179695-7276b0602fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWwlMjB0cmFkaXRpb25hbCUyMHBsYXRlfGVufDF8fHx8MTc3MDc4Njg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh Prasadam Meal"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: '🍚', name: 'Steaming Rice', desc: 'Freshly cooked' },
                { emoji: '🍲', name: 'Dal/Sambar', desc: 'Rich in protein' },
                { emoji: '🥗', name: 'Seasonal Sabji', desc: 'Fresh vegetables' },
                { emoji: '🥛', name: 'Buttermilk', desc: 'Cooling & healthy' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <p className="text-sm text-[#1A237E] mb-1">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-sm mt-6 italic">
              Prepared in ISKCON temple kitchens with the highest standards of cleanliness and devotion
            </p>
          </div>
        </div>
      </div>

      {/* Scriptural Quote */}
      <div className="px-6 py-12 bg-gradient-to-b from-[#FAFAFA] to-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white to-[#FFF5ED] border-2 border-[#FF9933]/20 rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="inline-block mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent" />
              </div>
              <p 
                className="text-[#1A237E] text-xl md:text-2xl mb-3"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                "अन्नदानं समं दानं त्रिलोकेषु न विद्यते"
              </p>
              <p className="text-gray-600 mb-6">
                Giving food is the greatest charity in the three worlds
              </p>
              <div className="inline-block">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="px-6 py-12 bg-gradient-to-br from-[#1A237E] to-[#283593] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 
              className="text-3xl mb-3 text-white"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Our Impact
            </h2>
            <p className="text-white/80">
              Serving with love, one meal at a time
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '3,65,000+', label: 'Meals Served', icon: '🍽️' },
              { value: '15+', label: 'Hospitals Covered', icon: '🏥' },
              { value: '1,000+', label: 'Daily Beneficiaries', icon: '🙏' },
              { value: '100%', label: 'Transparency', icon: '✨' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl text-[#FF9933] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Trust Us */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 
              className="text-3xl text-[#1A237E] mb-3"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Why Donate to Subhojanam?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📹',
                title: 'Complete Transparency',
                desc: 'Receive video proof and photos of meal distribution on WhatsApp within 48 hours'
              },
              {
                icon: '🏛️',
                title: '80G Tax Benefit',
                desc: 'Get official 80G tax exemption certificate for all donations'
              },
              {
                icon: '💯',
                title: '100% Utilization',
                desc: 'Every rupee goes directly to preparing and serving meals'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 
                  className="text-xl text-[#1A237E] mb-3"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-6 py-12 bg-gradient-to-br from-[#FF9933] to-[#E68A2E] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl mb-4 text-white"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Be Part of This Sacred Service
          </h2>
          <p className="text-white/95 text-lg mb-8 leading-relaxed">
            Your contribution brings comfort, nourishment, and hope to those caring for their loved ones in hospitals
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-[#FF9933] px-10 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-xl text-lg"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A237E] text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🕉️</span>
            <span className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>Subhojanam - ISKCON Hospital Feeding Program</span>
          </div>
          <p className="text-white/80 italic mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            "The best among you are those who feed others"
          </p>
          <p className="text-sm text-white/60">
            © 2026 ISKCON Subhojanam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
