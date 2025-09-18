import React from "react";

export default function About() {
  return (
    <div className="py-16 w-full lg:w-[90%]">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 sm:mx-10 sm:py-10 py-20">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
              alt="image"
              className="w-md rounded-3xl shadow-sm shadow-amber-200"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-black font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-white">
              At <span className="font-semibold">[Your Company Name]</span>, we believe in creating solutions that make
              life simpler, smarter, and more connected. Our team is driven by
              innovation, guided by integrity, and committed to delivering
              exceptional value to our customers.
            </p>
            <p className="mt-4 text-white">
              From day one, our mission has been to combine creativity with technology
              to build products and services that truly make a difference. We’re
              passionate about growth—not just for our business, but for the communities
              and people we serve.
            </p>
            <p className="mt-4 text-white">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>

        {/* New Content Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 ml-24">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=60"
              alt="Innovation"
              className="w-full h-56 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
            <p className="mt-4 text-gray-600">
              We thrive on pushing boundaries, exploring new technologies, and
              creating forward-thinking solutions for tomorrow.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=60"
              alt="Teamwork"
              className="w-full h-56 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900">Teamwork</h3>
            <p className="mt-4 text-gray-600">
              Collaboration is at the heart of everything we do, ensuring every
              voice is heard and every idea matters.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=60"
              alt="Impact"
              className="w-full h-56 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-bold text-gray-900">Impact</h3>
            <p className="mt-4 text-gray-600">
              Our goal is to leave a lasting impact, not only in technology but
              in the lives of people and communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
