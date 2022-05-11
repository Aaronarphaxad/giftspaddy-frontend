import React from "react";
import styles from "./FAQSection.module.css";
import Collapse from "antd/es/collapse";
import { AccordionData } from "../../Data/AccordionData";

const { Panel } = Collapse;

function FAQAccordion({ children, body, title, index }) {
  return (
    <div id={styles.container}>
      <Collapse expandIconPosition={"right"} bordered={false} accordion ghost>
        {children}
      </Collapse>
    </div>
  );
}

const FAQSection = () => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqLeft}>
        <p>
          Here are some Frequently Asked Questions from our esteemed customers.
        </p>
      </div>
      <div className={styles.faqRight}>
        <FAQAccordion>
          {AccordionData.map((item, index) => {
            return (
              <Panel header={item.title} key={index}>
                {item.body}
              </Panel>
            );
          })}
        </FAQAccordion>
      </div>
    </div>
  );
};

export default FAQSection;
