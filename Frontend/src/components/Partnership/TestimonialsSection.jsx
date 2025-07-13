import React from "react";

const TestimonialsSection = ({
  currentBenefit,
  setCurrentBenefit,
  testimonials,
}) => {
  const updatedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    name: testimonial.name || `Partner ${index + 1}`,
    role: testimonial.role || "Training Coordinator, Client Organization",
    quote:
      testimonial.quote ||
      "SkillRoom brought a structured and engaging learning experience to our team. It made a real difference.",
    image: testimonial.image || "https://via.placeholder.com/150", // generic placeholder image
  }));

  return (
    <section
      className="py-24 px-4 md:px-16 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 text-center max-w-7xl mx-auto"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase tracking-wide relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-pink-500 after:mx-auto after:mt-2"
      >
        What Our Partners Say
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 animate-fade-in">
        Our partners share how SkillRoom helped them upskill efficiently,
        streamline their training processes, and prepare their teams for modern
        tech challenges.
      </p>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 animate-fade-in animation-delay-200">
        From curriculum design to implementation, our programs create meaningful
        impact across teams and industries.
      </p>
      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentBenefit * 100}%)` }}
          >
            {updatedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full p-6 bg-white rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-500"
                />
                <p className="text-gray-600 mb-4 italic max-w-md mx-auto">
                  "{testimonial.quote}"
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-1 tracking-tight">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300"
          onClick={() =>
            setCurrentBenefit(
              (prev) => (prev - 1 + testimonials.length) % testimonials.length
            )
          }
          aria-label="Previous testimonial"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300"
          onClick={() =>
            setCurrentBenefit((prev) => (prev + 1) % testimonials.length)
          }
          aria-label="Next testimonial"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="flex justify-center gap-2 mt-6">
          {updatedTestimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentBenefit
                  ? "bg-gradient-to-r from-cyan-500 to-pink-500"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentBenefit(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
