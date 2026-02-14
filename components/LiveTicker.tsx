import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export function LiveTicker() {
  return (
    <div className="bg-[#FFF5ED] border-2 border-[#FF9933]/20 rounded-xl p-6 max-w-md mx-auto">
      <div className="flex items-center justify-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TrendingUp className="w-6 h-6 text-[#FF9933]" />
        </motion.div>
        <div className="text-center">
          <div className="text-3xl text-[#FF9933] mb-1">1,240</div>
          <div className="text-sm text-gray-700">Meals Served This Month</div>
        </div>
      </div>
    </div>
  );
}
