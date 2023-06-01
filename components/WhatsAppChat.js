import React from 'react';

const WhatsAppChat = () => {
  const phoneNumber = '09126035876'; // Replace with your WhatsApp phone number
  
  const handleWhatsAppChat = () => {
    const link = `https://wa.me/${phoneNumber}`;
    window.open(link, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppChat}
      className="fixed bottom-4  p-4 bg-blue-500 z-40 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
    >
      <img
        src="/images/whatsapplogo2.png"
        alt="WhatsApp Chat"
        className="w-12 h-12 rounded-full"
      />
    </button>
  );
};

export default WhatsAppChat;
