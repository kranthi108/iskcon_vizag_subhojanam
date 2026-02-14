import { Heart, Calendar, MessageCircle } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      icon: Heart,
      title: 'You Donate',
      description: 'Choose amount',
    },
    {
      icon: Calendar,
      title: 'We Allocate',
      description: 'To next meal session',
    },
    {
      icon: MessageCircle,
      title: 'Receive Proof',
      description: 'Via WhatsApp',
    },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="text-center mb-12">How It Works</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-[#FFF5ED] rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-10 h-10 text-[#FF9933]" strokeWidth={2} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#FF9933]/30 to-transparent" />
                  )}
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-[#FF9933]">Step {index + 1}</div>
                  <h3>{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
