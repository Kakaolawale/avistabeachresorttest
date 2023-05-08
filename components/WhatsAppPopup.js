import { useEffect } from 'react';

const WhatsAppPopup = ({ phoneNumber, message }) => {
  useEffect(() => {
    const handleWhatsAppClick = () => {
      window.open(
        `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
        '_blank'
      );
    };

    document
      .getElementById('whatsapp-popup')
      .addEventListener('click', handleWhatsAppClick);

    return () => {
      document
        .getElementById('whatsapp-popup')
        .removeEventListener('click', handleWhatsAppClick);
    };
  }, []);

  return (
    <div
      id="whatsapp-popup"
      className="fixed bottom-0 right-0 mb-4 mr-4 rounded-full bg-green-500 text-white p-4 shadow-lg cursor-pointer"
    >
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.2 2.7c-5.5-5.5-14.3-5.5-19.8 0C-1.3 8.2-.6 16.6 4.2 22l1.7-4.4c-1.9-1-3.5-2.6-4.4-4.4-1.4-2.6-1.1-5.8.9-7.9 2.1-2.1 5.3-2.3 7.9-.9 1.8.9 3.4 2.5 4.4 4.4l4.4-1.7c-1.4-4.7-6-9.3-10.7-10.7L21.2 2.7z"
        ></path>
      </svg>
    </div>
  );
};

export default WhatsAppPopup;
