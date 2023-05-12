import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 mb-4 py-2">
      <div className="container mx-auto px-4">
        <h2 className="text-sm text-avista3 bg-gradient-to-bl from-avista via-avista2 rounded-3xl m-2 p-2 flex justify-center w-full tracking-tight font-bold mb-4">CONTACT US</h2>
        <div className='flex justify-center'>
        <div className="flex text-sm items-center mx-2">
          <FaMapMarkerAlt className="text-avista2 text-sm mr-2" />
          <p className="text-gray-800">Raliatu Olorunfunmike, Ajah</p>
        </div>
        <div className="flex items-center ml-2">
          <FaPhoneAlt className="text-avista2 text-sm mr-2" />
          <p className="text-gray-800">+234803094217</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
