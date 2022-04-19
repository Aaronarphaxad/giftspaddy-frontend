import styles from "./ProductAccordion.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CustomButton from "../../../Components/Button/Button";
import Rating from "@mui/material/Rating";
import moment from "moment";

const ProductAccordion = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [instruction, setInstruction] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [ratingValue, setValue] = useState(2);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleUpdate = (e) => {
    const address = document.getElementById("update-address").value;
    const phone = document.getElementById("update-phone").value;
    const message = document.getElementById("update-message").value;
    const instruction = document.getElementById("update-instruction").value;
    const date = document.getElementById("update-date").value;
    if (!address || !phone || !date) {
      notifyError();
    }
    if (address || phone || date) {
      if (handleDate(date)) {
        notifySuccess();
        setAddress(address);
        setPhone(phone);
        setMessage(message);
        setInstruction(instruction);
      } else {
        notifyError("Please enter a date 3 days after today");
      }
    }
  };

  const notifyError = (msg) =>
    toast.error(
      msg ? msg : "Please enter address, phone number and delivery date",
      {
        position: "bottom-left",
        duration: 3000,
      }
    );
  const notifySuccess = () =>
    toast.success(`Information saved`, {
      position: "bottom-left",
      duration: 3000,
    });

  // Function to verify date
  const handleDate = (pickedDate) => {
    const selectedDate = moment(pickedDate);
    const threeDays = moment().add(2, "days");

    if (selectedDate.isSameOrBefore(threeDays)) {
      return false;
    }
    return true;
  };
  return (
    <div className={styles.accordionContainer}>
      <Toaster />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            What is inside this Product?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Red wine (Cabernet Sauvignon, Italian/Spain)</li>
              <li>Ferrero Rocher chocolates 300g</li>
              <li>Rose flower 5 stems with vase</li>
              <li>Rolex watch gold</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            Delivery Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is where you enter details of the delivery. Also special
            requests/instruction.
          </Typography>
          <p className={styles.inputLabel}>Address *</p>
          <textarea
            id="update-address"
            className={styles.inputs}
            name="address"
            rows="2"
          />
          <div className="d-flex align-items-center">
            <div className="w-50">
              <p className={styles.inputLabel}>Phone Number *</p>
              <input
                id="update-phone"
                className={styles.inputs}
                name="phone"
                type="number"
              />
            </div>
            <div className="w-50">
              <p className={styles.inputLabel}>Delivery date *</p>
              <input
                id="update-date"
                className={styles.inputs}
                name="date"
                type="date"
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="d-inline w-50">
              <p className={styles.inputLabel}>
                Message to the recipient (optional)
              </p>
              <textarea
                id="update-message"
                className={styles.inputs}
                rows="2"
                name="message"
              />
            </div>
            <div className="d-inline w-50">
              <p className={styles.inputLabel}>
                Special instructions (optional)
              </p>
              <textarea
                id="update-instruction"
                className={styles.inputs}
                rows="2"
                name="instruction"
              />
            </div>
          </div>

          <div className="my-2">
            <CustomButton
              onClick={handleUpdate}
              bgColor="#058196"
              height="40px"
              width="100px"
              color="white"
            >
              Save
            </CustomButton>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            variant="h6"
            component="h4"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            Add a review
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Rate this product.
            <p className={styles.inputLabel}>Review</p>
            <textarea
              id="update-review"
              className={styles.inputs}
              name="review"
              rows="3"
            />
            <div>
              <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="my-2">
              <CustomButton
                bgColor="#058196"
                height="40px"
                width="100px"
                color="white"
              >
                Send
              </CustomButton>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductAccordion;
