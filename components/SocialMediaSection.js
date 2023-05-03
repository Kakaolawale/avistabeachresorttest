import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const SocialMediaSection = () => {
    const email = "avistabeachng@gmail.com";
  return (
    <section className="bg-avista rounded-3xl w-full">
      <div className="container pb-8 mx-auto px-4">
        <h2 className="text-sm font-bold pt-4 text-center tracking-tight mb-4">Follow Us</h2>
        <div className="flex justify-center">
          <a
            href="https://twitter.com/avistabeachresort"
            target="_blank"
            rel="noopener noreferrer"
            className="text-avista2 hover:text-blue-700 mx-2"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://instagram.com/avistabeachng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-avista2 hover:text-pink-700 mx-2"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://facebook.com/avistabeachresort"
            target="_blank"
            rel="noopener noreferrer"
            className="text-avista2 hover:text-blue-900 mx-2"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-avista2 hover:text-red-700 mx-2"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
