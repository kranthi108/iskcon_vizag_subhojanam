import { Menu, Award } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {/* ISKCON Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF9933]">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/ISKCON_logo.svg/1200px-ISKCON_logo.svg.png"
                alt="ISKCON"
                className="w-full h-full object-contain bg-white p-1"
                onError={(e) => {
                  // Fallback to emoji if image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl">🕉️</span>';
                }}
              />
            </div>
            <div>
              <h1 className="text-[#1A237E] text-lg leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Subhojanam
              </h1>
              <p className="text-xs text-gray-600">ISKCON Hospital Feeding</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
            <Award className="w-4 h-4 text-green-700" />
            <span className="text-xs text-green-700">80G Tax Exempt</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-6 h-6 text-[#1A237E]" />
          </button>
        </div>
      </div>
    </header>
  );
}