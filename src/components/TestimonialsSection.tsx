import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      text: 'Received photos of the meal session within hours. Truly transparent and blessed to contribute.',
      location: 'Mumbai',
    },
    {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      text: 'The WhatsApp updates make me feel connected to the cause. Great initiative!',
      location: 'Bangalore',
    },
    {
      name: 'Arun Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      text: 'Monthly donation setup was seamless. Happy to support this noble cause regularly.',
      location: 'Delhi',
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      <h2 className="text-center mb-12">What Donors Say</h2>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <Quote className="w-8 h-8 text-[#FF9933]/30 mb-4" />
            <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div>{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
