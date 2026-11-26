'use client';

import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '918280788689';
  const defaultText = encodeURIComponent('Hi NovaSpark, I would like to explore a digital growth and marketing consultation for my business.');
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group focus:outline-none"
      aria-label="Chat on WhatsApp with NovaSpark"
    >
      <MessageSquare className="w-5 h-5 fill-white stroke-none group-hover:scale-110 transition-transform" />
      <span className="text-xs sm:text-sm font-bold tracking-wide">Chat on WhatsApp</span>
    </a>
  );
}
