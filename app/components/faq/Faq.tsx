"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import faq from "./page.module.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const faqData = [
  {
    question: "How do i make a claim?",
    answer:
      "All claims must be reported within 24 hours of the incident occurring. Contact information can be found in your policy documents or use the in house claim reporting form found on our website.",
  },
  {
    question: "Can i cancel my policy?",
    answer:
      "Our refund policy is determined by the product purchased.Short Term Car/Van Insurance:You are entitled to cancel your policy at any time. Due to the short period nature of this policy there will be no refund of premium.Due to the short term nature of 1 to 28-day policies, there is no cooling-off period. Monthly Insurance:There is administrative charge (Please refer to our T&C's for a breakdown)",
  },
  {
    question: "What if I haven’t received my email with the documents?",
    answer:
      " Providing you entered your email address correctly; you will receive an email from us. If you do not receive a confirmation e-mail from us within the hour, please check your spam or junk mail folders. If you have still not received your documents, get in contact with us to request they are sent again.",
  },
  {
    question: "When will my vehicle appear on the MID listing?",
    answer:
      "Once you have purchased a policy from us, your insurance details will be passed to the Motor Insurance Database (MID). They are passed within the timescales required by the MID, but due to the short term nature of these types of insurance, it is possible your policy may have expired before the details are loaded to the database. We always recommend that you print your Insurance Certificate and have this with you as this remains valid proof of your insurance and legal entitlement to drive the vehicle.",
  },
  {
    question: "Can I insure my SORN vehicle?",
    answer:
      "As long as your vehicle is in a roadworthy condition, and you either have tax or will tax the vehicle with our insurance certificate, we can allow insurance for this purpose. The vehicle must have a current MOT or you must have a pre-booked MOT appointment to attend whilst insured with us in order for the insurance to be valid (please check our insurers criteria before purchasing).",
  },
];

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <h1>Car insurance FAQs</h1>
      <div className={faq.wrapper}>
        {faqData.map((item: any, idx: number) => (
          <Accordion
            className={faq.accordion}
            expanded={expanded === `$panel${idx}`}
            onChange={handleChange(`$panel${idx}`)}>
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon className={faq.chevron} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <HelpOutlineIcon className={faq.icon} />
              <h3 className={faq.question}>{item.question}</h3>
            </AccordionSummary>
            <AccordionDetails className={faq.details}>
              <p>{item.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
