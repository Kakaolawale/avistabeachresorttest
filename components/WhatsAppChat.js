import React from 'react';
import { isMobile } from 'react-device-detect';

const WhatsAppChat = () => {
  const phoneNumber = '09126035876'; // Replace with your WhatsApp phone number

  const handleWhatsAppChat = () => {
    let link = '';
    if (isMobile) {
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isIOS) {
        link = `https://wa.me/${phoneNumber}`;
      } else {
        link = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
      }
      window.open(link, '_blank');
    }
  };

  return (
    <button
      onClick={handleWhatsAppChat}
      className="fixed bottom-4 p-4 bg-blue-500 z-40 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
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



