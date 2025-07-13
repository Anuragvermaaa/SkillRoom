import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = ({ openFaq, setOpenFaq }) => {
  const faqs = [
    {
      question: "What makes SkillRoom different?",
      answer:
        "SkillRoom offers practical industrial training with real-world projects and mentorship from working professionals. We focus on hands-on experience that employers value.",
    },
    {
      question: "Who can enroll for training at SkillRoom?",
      answer:
        "Students, fresh graduates, and working professionals looking to upskill in tech domains can join. We support a wide range of learners with different goals.",
    },
    {
      question: "Is the training online or offline?",
      answer:
        "We offer both formats. Online sessions are live and interactive, while offline batches are available in select Indian cities for in-person engagement.",
    },
    {
      question: "What technical skills are covered?",
      answer:
        "We focus on industry-relevant skills like web development, programming languages (Java, Python, etc.), databases, and tools used in real tech teams.",
    },
    {
      question: "Do you provide job or internship assistance?",
      answer:
        "Yes, we provide placement support, resume preparation, mock interviews, and connect learners with our hiring network for jobs and internships.",
    },
    {
      question: "What is the typical duration of a training program?",
      answer:
        "Our industrial training programs typically span 8 to 16 weeks, depending on the track and learner availability.",
    },
    {
      question: "Is there a certificate after training completion?",
      answer:
        "Yes, every participant receives an industry-recognized certificate after successfully completing the training with project evaluation.",
    },
    {
      question: "Can I join while working or studying full-time?",
      answer:
        "Definitely. We offer flexible scheduling including weekend and evening batches, designed for those with other commitments.",
    },
    {
      question: "What if I miss a session?",
      answer:
        "Every session is recorded and uploaded for on-demand access, so you can catch up anytime from your dashboard.",
    },
    {
      question: "How do I get support during the training?",
      answer:
        "You can reach trainers through discussion forums, live chat, and direct mentorship sessions available in select programs.",
    },
  ];

  return (
    <section
      className="py-20 px-4 md:px-16 bg-gray-100 max-w-7xl mx-auto"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 tracking-wide uppercase relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-2"
      >
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Explore our most commonly asked questions. If you still have queries,
        feel free to reach out to us directly.
      </p>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm bg-white"
          >
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center text-lg font-medium text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              {openFaq === index ? (
                <ChevronUp className="h-5 w-5 text-blue-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {openFaq === index && (
              <div
                id={`faq-answer-${index}`}
                className="px-6 pb-5 text-gray-600 animate-fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
