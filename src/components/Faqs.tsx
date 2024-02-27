import { useState } from "react";
import { faqs } from "../faqs";

const Faqs = () => {
  const [faqList, setFaqList] = useState(faqs);
  const toggleFaq = (id: number) => {
    setFaqList((prevFaqs) => {
      return prevFaqs.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      });
    });
  };
  return (
    <div className="bg-white text-Dark-purple  p-6 pb-2 w-[320px]  rounded-xl md:w-[420px] xl:-mt-12 ">
      <div className="flex items-center gap-4 mb-3">
        <img src="./assets/images/icon-star.svg" alt="" className="w-6" />
        <h1 className="text-3xl font-bold"> FAQs</h1>
      </div>

      <div className="flex flex-col  divide-y-[1px] ">
        {faqList.map((faq) => {
          return (
            <div key={faq.id} className="pt-4 pb-2">
              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="text-Dark-purple duration-300 hover:text-purple-800"
                >
                  <h3 className="text-[13px] max-w-[220px] font-semibold  md:max-w-lg">
                    {faq.question}{" "}
                  </h3>
                </button>
                <button onClick={() => toggleFaq(faq.id)}>
                  {faq.isOpen ? (
                    <img src="./assets/images/icon-minus.svg" alt="" />
                  ) : (
                    <img src="./assets/images/icon-plus.svg" alt="" />
                  )}
                </button>
              </div>
              <p
                className={`text-sm  transition-[max-height] duration-300 overflow-hidden text-Grayish-purple  ${
                  faq.isOpen ? " max-h-[1000px]" : "max-h-0 mt-0 "
                }`}
                style={{}}
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
