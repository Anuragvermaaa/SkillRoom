import React from "react";
import { UserCircle } from "lucide-react";

const TestimonialsSection = ({ currentTestimonial, setCurrentTestimonial }) => {
  const testimonials = [
    {
      id: 1,
      name: "Abhishek Kumar",
      role: "Software Engineer",
      quote:
        "SkillRoom’s IT Development training transformed my career. The hands-on projects and mentorship prepared me for a dream job at a top tech firm!",
    },
    {
      id: 2,
      name: "Kapil Sharma",
      role: "College Student",
      quote:
        "The public speaking and leadership training at SkillRoom boosted my confidence. I now lead campus events and stand out in interviews!",
    },
    {
      id: 3,
      name: "Suraj Jha",
      role: "Team Lead",
      quote:
        "SkillRoom’s corporate training revolutionized our team’s productivity. The customized modules aligned perfectly with our business goals.",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "Data Scientist",
      quote:
        "The AI and Machine Learning course was a game-changer. I transitioned into a high-demand role with practical skills learned at SkillRoom.",
    },
    {
      id: 5,
      name: "Ravi Verma",
      role: "Frontend Developer",
      quote:
        "The real-world assignments at SkillRoom were exactly what I needed to crack my job interview and join an MNC.",
    },
    {
      id: 6,
      name: "Meena Rani",
      role: "HR Executive",
      quote:
        "Soft skills sessions were insightful. I now manage communications better and lead with more confidence.",
    },
    {
      id: 7,
      name: "Pooja Thakur",
      role: "Entrepreneur",
      quote:
        "SkillRoom gave me clarity and structure to take my startup idea from vision to execution.",
    },
    {
      id: 8,
      name: "Rajeev Nair",
      role: "Product Manager",
      quote:
        "I used SkillRoom to brush up on tech fundamentals. It helped bridge the gap between tech and product teams.",
    },
  ];

  return (
    <section
      className="py-20 px-4 md:px-16 text-center max-w-7xl mx-auto"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-wide uppercase relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2"
      >
        Learner Success Stories
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
        Hear from our learners who have transformed their careers with
        SkillRoom’s training programs. Their stories inspire us to keep pushing
        the boundaries of education.
      </p>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        From landing dream jobs to leading teams, our learners are making an
        impact worldwide.
      </p>
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full p-6 bg-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                role="article"
              >
                <div className="w-20 h-20 mx-auto mb-4 text-blue-600">
                  <UserCircle className="w-full h-full" />
                </div>
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
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          onClick={() =>
            setCurrentTestimonial(
              (prev) => (prev - 1 + testimonials.length) % testimonials.length
            )
          }
          aria-label="Previous testimonial"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          onClick={() =>
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
          }
          aria-label="Next testimonial"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
