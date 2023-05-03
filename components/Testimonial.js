import { useState, useEffect } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac nulla vel nibh malesuada fermentum.",
     
    },
    {
      id: 2,
      name: "Jane Doe",
      testimony:
        "Sed nec mauris sem. Sed non mauris vitae erat consequat auctor eu in elit. Nam nec ante sed lacinia.",
     
    },
    {
      id: 3,
      name: "Bob Smith",
      testimony:
        "In et hendrerit massa, sed maximus mi. Vestibulum nec ligula ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
     
    },
  ]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="px-4 text-avista3 bg-gradient-to-br from-avista via-avista2 m-4 shadow overflow-hidden rounded-3xl">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-xl leading-6 text-center font-bold tracking-tight text-gray-900">
         TESTIMONIALS
        </h3>
        <div className="mt-5">
          <div className="flex flex-col items-center">
            <div className="relative">
              
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="p-4 bg-gray-900 bg-opacity-75">
                  <blockquote className="text-center">
                    <p className="text-white text-lg font-semibold">
                      {testimonials[currentTestimonial].testimony}
                    </p>
                    <footer className="mt-2 text-white">
                      <cite>
                        {testimonials[currentTestimonial].name}
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

