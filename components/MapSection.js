import React from 'react';

const MapSection = () => {
  return (
    <section className=" m-4 rounded-3xl">
      <div className="container mx-auto py-8">
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-avista3 text-center tracking-tight font-bold">MAP US</h2>
          <div className="relative h-80">
            <iframe
              className="absolute bg-avista2 rounded-3xl inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.301060378048!2d3.464262114770294!3d6.450720024370709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b898cb1d6a1ff%3A0x16d40f8405d51e42!2sRaliatu%20Olorunfunmike%20St%2C%20Eti-Osa%20106104%2C%20Okunajah%2C%20Lekki%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sin!4v1657583738302!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
