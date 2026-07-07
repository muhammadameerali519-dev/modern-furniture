import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const message = "Hello MODERN FURNITURE, I'm interested in your furniture collection. Please share your latest catalog, prices, and delivery details.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/923295588925?text=${encodedMessage}`;

  return (
    <a
      id="whatsapp-floating-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group cursor-pointer border-2 border-white/20"
      title="Chat with Modern Furniture on WhatsApp"
    >
      <div className="absolute right-14 bg-black/80 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-medium border border-stone-800">
        Chat with Modern Furniture GRW
      </div>
      <MessageSquare className="w-6 h-6 animate-pulse" />
    </a>
  );
}
