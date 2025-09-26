import React from "react";

export default function About() {
  return (
    <div
      className="min-h-screen px-6 flex flex-col items-center justify-start py-16 mt-15"
      style={{
        background: "radial-gradient(circle at top left, #001a33, #000d1a)",
      }}
    >
      {/* Intro Section */}
      <h2
        className="text-2xl text-[#2563eb] font-bold md:text-4xl text-center"
        style={{ textShadow: "0 0 15px #2563eb" }}
      >
        React development is carried out by passionate developers
      </h2>
      <p className="mt-6 max-w-2xl text-white text-center text-lg">
        We build modern, responsive, and dynamic applications using React.
        Innovation and creativity are at the core of everything we do. Our goal
        is to deliver seamless user experiences that empower businesses and
        individuals alike.
      </p>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16 max-w-6xl">
        <img
          src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg"
          alt="Developers working"
          className="rounded-2xl shadow-lg object-cover"
        />
        <div className="space-y-4">
          <h3
            className="text-2xl sm:text-3xl font-semibold "
            style={{ textShadow: "0 0 15px #2563eb" }}
          >
            A Team of Creative Minds
          </h3>
          <p className="text-white text-lg">
            Our developers are not just coders, they are innovators. We believe
            in writing clean, scalable, and maintainable code. Every line of
            code we write is driven by a vision of excellence and long-term
            impact.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20 max-w-6xl">
        <div className="space-y-4">
          <h3
            className="text-2xl sm:text-3xl font-bold"
            style={{ textShadow: "0 0 15px #2563eb" }}
          >
            Our Mission
          </h3>
          <p className="text-white text-lg">
            We aim to transform ideas into reality by building applications that
            are not only functional but also visually stunning. From startups to
            enterprises, our mission is to deliver digital solutions that scale.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2770.jpg"
          alt="Mission"
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Values Section */}
      <div className="mt-20 text-center max-w-4xl">
        <h3
          className="text-2xl sm:text-4xl font-semibold "
          style={{ textShadow: "0 0 15px #2563eb" }}
        >
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white/10 rounded-xl shadow-lg border border-blue-500/30">
            <h4 className="font-bold text-xl mb-2 text-blue-300">🚀 Innovation</h4>
            <p className="text-white">
              We embrace new technologies to stay ahead of the curve and deliver
              cutting-edge solutions.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl shadow-lg border border-blue-500/30">
            <h4 className="font-bold text-xl mb-2 text-blue-300">🤝 Collaboration</h4>
            <p className="text-white">
              Our team works closely with clients to understand their needs and
              provide tailored solutions.
            </p>
          </div>
          <div className="p-6 bg-white/10 rounded-xl shadow-lg border border-blue-500/30">
            <h4 className="font-bold text-xl mb-2 text-blue-300">💡 Creativity</h4>
            <p className="text-white">
              We think outside the box to craft designs and experiences that
              truly stand out.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h3
          className="text-3xl sm:text-4xl font-bold "
          style={{ textShadow: "0 0 15px #2563eb" }}
        >
          Want to Build Something Amazing Together?
        </h3>
        <p className="text-white mt-4 text-lg">
          Let’s collaborate and turn your ideas into a powerful digital
          experience with React.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition shadow-lg">
         <a href="/contact"> Contact Us</a>
        </button>
      </div>
    </div>
  );
}
