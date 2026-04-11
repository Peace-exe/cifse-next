"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What undergraduate programs does the university offer?",
    answer:
      "The university offers a wide range of undergraduate programs across faculties including Engineering, Law, Management, Sciences, Humanities, and Education. Each program is designed to meet industry standards and is approved by relevant statutory bodies.",
  },
  {
    question: "How can I apply for admission to the university?",
    answer:
      "Admissions are processed through the official university portal. Candidates must register, fill out the application form, upload required documents, and pay the application fee. Shortlisted candidates are notified via email.",
  },
  {
    question: "What scholarships and financial aid options are available?",
    answer:
      "The university offers merit-based scholarships, need-based financial assistance, and government-sponsored schemes. Students may also apply for external fellowships. Details are available on the Scholarships & Financial Aid page.",
  },
  {
    question: "Is on-campus accommodation available for students?",
    answer:
      "Yes, the university provides hostel facilities for both male and female students on campus. Allocation is subject to availability and is prioritized for outstation students. Applications for accommodation open alongside the admission process.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-background text-foreground py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          {/* Heading */}
          <h2 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight">
            Frequently
            <br />
            Asked
            <br />
            <span className="italic font-medium text-red-600">Questions</span>
          </h2>

          {/* Right side */}
          <div className="flex flex-col gap-7 pt-2">
            <p className="text-muted-foreground text-base leading-relaxed">
              Find answers to the most common questions about admissions,
              programs, campus life, and more. If you need further assistance,
              our support team is always ready to help.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-red-600 hover:border-0 hover:text-background"
              >
                Learn More <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-t border-border py-7 cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div className="flex items-start gap-5 hover:text-red-600">
                <span
                  className="text-xl shrink-0 transition-transform duration-300 inline-block"
                  style={{
                    transform: openIndex === i ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  ›
                </span>
                <div className="flex-1 ">
                  <p className="text-base italic leading-relaxed">
                    {faq.question}
                  </p>
                  {openIndex === i && (
                    <p className="text-muted-foreground text-sm leading-loose mt-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>

      </div>
    </section>
  );
}