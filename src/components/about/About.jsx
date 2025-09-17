import React from "react";

export default function About() {
  return (
    <div className="py-16 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 sm:mx-10 sm:py-10 py-20 ">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1584448098255-234156529929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="image"
              className="w-md rounded-3xl shadow-sm shadow-amber-600"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              At [Your Company Name], we believe in creating solutions that make
              life simpler, smarter, and more connected. Our team is driven by
              innovation, guided by integrity, and committed to delivering
              exceptional value to our customers. From day one, our mission has
              been to combine creativity with technology to build products and
              services that truly make a difference. We’re passionate about
              growth—not just for our business, but for the communities and
              people we serve.
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
