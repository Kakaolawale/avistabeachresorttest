import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 mb-4 py-2">
      <div className="container mx-auto px-4">
        <h2 className="text-sm text-avista3 backdrop-blur-3xl bg-avista2 rounded-3xl m-2 p-2 flex justify-center w-full tracking-tight font-bold mb-4">CONTACT US</h2>

        <div className='flex items-center mt-4 mx-20'>
        <FaMapMarkerAlt className="text-avista2 mx-10 text-sm mr-2" />
          <p className="text-avista2">Raliatu Olorunfunmike, Ajah.</p>
        </div>
        
        <div className="flex items-center mt-4 mx-20">
          <FaPhoneAlt className="text-avista2 mx-10 text-sm mr-2" />
          <p className="text-avista2 font-bold">09126035876, 07083094217</p>
       
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
