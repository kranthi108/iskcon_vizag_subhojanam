import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { CheckCircle, Video, FileText, Users } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { seva, formData, isMonthly } = location.state || {};

  // Redirect to landing if no data
  useEffect(() => {
    if (!seva) {
      navigate('/');
    }
  }, [seva, navigate]);

  const handleWhatsAppCommunity = () => {
    // Mock WhatsApp community link
    window.open('https://wa.me/?text=Join%20Subhojanam%20Community', '_blank');
  };

  // Don't render if no seva
  if (!seva) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      
      <div className="pt-16 px-6 py-8">
        {/* Success Icon & Message */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#FF9933] to-[#E68A2E] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
          
          <h1 
            className="text-3xl text-[#1A237E] mb-3"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            धन्यवाद! Dhanyavad!
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Your Seva has been received
          </p>
          {formData?.donorName && (
            <p className="text-gray-600">
              {formData.donorName}, may you be blessed abundantly
            </p>
          )}
        </div>

        {/* Donation Summary */}
        {seva && (
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-600 mb-1">Your Contribution</p>
                <p className="text-[#1A237E]">
                  {seva.label || `Feed ${seva.people} People`}
                </p>
                {isMonthly && (
                  <div className="inline-block bg-[#1A237E] text-white text-xs px-2 py-1 rounded mt-2">
                    Monthly Seva
                  </div>
                )}
              </div>
              <div className="text-right">
                <p className="text-3xl text-[#FF9933]">
                  ₹{seva.amount.toLocaleString('en-IN')}
                </p>
                {isMonthly && (
                  <p className="text-xs text-gray-500 mt-1">/month</p>
                )}
              </div>
            </div>
            
            {formData?.personName && formData?.occasion && (
              <div className="pt-4">
                <p className="text-sm text-gray-600">Seva dedicated for:</p>
                <p className="text-[#1A237E]">
                  {formData.personName} - {formData.occasion}
                </p>
              </div>
            )}
          </div>
        )}

        {/* The Allocation Logic */}
        <div className="bg-gradient-to-br from-[#FFF5ED] to-[#FFE8D6] border-2 border-[#FF9933]/30 rounded-xl p-6 mb-6">
          <h3 
            className="text-lg text-[#1A237E] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <span className="text-2xl">🙏</span>
            What Happens Next
          </h3>
          
          <div className="bg-white/70 rounded-lg p-4 mb-4">
            <p className="text-gray-700 leading-relaxed">
              Our team is now allocating your donation to the <strong>next available meal session</strong>. 
              You will receive a personalized video of the distribution and your <strong>80G receipt</strong> on 
              WhatsApp within <strong>48 hours</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              {
                icon: Video,
                title: 'Video Proof',
                desc: 'Live footage from the meal session',
              },
              {
                icon: FileText,
                title: '80G Certificate',
                desc: 'Tax exemption document',
              },
              {
                icon: Users,
                title: 'Impact Report',
                desc: 'Details of people served',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-3 bg-white/50 rounded-lg p-3">
                  <div className="w-10 h-10 bg-[#FF9933]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#FF9933]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1A237E]">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Community CTA */}
        <button
          onClick={handleWhatsAppCommunity}
          className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-5 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-3 mb-6"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span className="text-lg">Join our WhatsApp Community</span>
        </button>

        {/* Additional Info */}
        <div className="bg-[#1A237E] text-white rounded-xl p-6 mb-6">
          <h4 className="mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            Why Join the Community?
          </h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="flex items-start gap-2">
              <span className="text-[#FF9933] mt-0.5">•</span>
              <span>Get real-time updates on meal sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9933] mt-0.5">•</span>
              <span>See photos and videos of impact</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9933] mt-0.5">•</span>
              <span>Connect with other donors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9933] mt-0.5">•</span>
              <span>Receive monthly impact reports</span>
            </li>
          </ul>
        </div>

        {/* Back to Home */}
        <button
          onClick={() => navigate('/')}
          className="w-full py-4 border-2 border-[#FF9933] text-[#FF9933] rounded-xl hover:bg-[#FFF5ED] transition-colors"
        >
          Back to Home
        </button>

        {/* Trust Message */}
        <div className="text-center mt-8 pb-8">
          <p className="text-sm text-gray-600 italic">
            "The best among you are those who feed others"
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Thank you for being part of this sacred service
          </p>
        </div>
      </div>
    </div>
  );
}