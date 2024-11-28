import React, { useState } from "react";
import styled from "styled-components";
import Thefaq from '../components/Thefaq'

function Faq() {
    const [faqs, setFaqs] = useState([
        {
            question: "How long does shipping take?",
            answer:
                " Shipping times vary depending on your location and the shipping method you choose. Typically, domestic orders are shipped within 3-4 business days, and international orders may take 8-10 business days.",
            open: true
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 7 day return policy for most items. To be eligible for a return, the item must be unused and in its original condition. Please contact our customer support team for specific return instructions and to initiate a return.",
            open: false
        },
        {
            question:
                "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination country. Please contact our customer support team for more information on international shipping rates and estimated delivery times.",
            open: false
        },
        {
            question:
                "What if my order arrives damaged?",
            answer: "If your order arrives damaged, please contact our customer support team immediately. We will assist you with a replacement or refund.",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <Wrapper>
            <div className="App">
                <div className="faqs">
                    <p>Top Queries:</p>
                    {faqs.map((faq, index) => (
                        <Thefaq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
.App{
    background-color: black;
    margin-top: -119px;
    width: 105%;
}
.faqs {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 15px;
}

.faqs .faq {
  margin: 15px;
  padding: 15px;
  background: black;
  color:white;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.faqs .faq .faq-question {
  position: relative;
  font-size: 20px;
  font-weight: bold;
  padding-right: 80px;
  transition: all 0.4s ease;
}

.faqs .faq .faq-question::after {
  content: "+";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  transition: all 0.2s ease;
}

.faqs .faq .faq-answer {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease;
  font-size: 14px;
}

.faqs .faq.open .faq-question {
  margin-bottom: 15px;
}

.faqs .faq.open .faq-question::after {
  content: "-";
}

.faqs .faq.open .faq-answer {
  max-height: 1000px;
  opacity: 1;
}

`;

export default Faq;