import styles from "./ProductAccordion.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CustomButton from "../../../Components/Button/Button";
import Rating from "@mui/material/Rating";
import moment from "moment";
import handleDate from "../../../Helpers/VerifyDate";

const ProductAccordion = ({ setDeliveryDetails }) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [instruction, setInstruction] = useState("");
  const [expanded, setExpanded] = useState("panel1");
  const [ratingValue, setValue] = useState(2);
  const [checked, setChecked] = useState(false);

  const handleRadioChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleUpdate = (e) => {
    const address = document.getElementById("update-address").value;
    const phone = document.getElementById("update-phone").value;
    const message = document.getElementById("update-message").value;
    const instruction = document.getElementById("update-instruction").value;
    const date = document.getElementById("update-date").value;
    const sender = document.getElementById("update-sender").value;
    const city = document.getElementById("update-city").value;
    if (!address || !phone || !date || !city) {
      notifyError("Please enter delivery details marked *");
    }
    if (address && phone && date && city) {
      if (handleDate(date)) {
        notifySuccess();
        setAddress(address);
        setPhone(phone);
        setMessage(message);
        setInstruction(instruction);
        setDeliveryDetails({
          address,
          phone,
          date,
          city,
          sender: sender ? sender : null,
          message: message ? message : null,
          instruction: instruction ? instruction : null,
          express: checked ? true : false,
        });
      } else {
        notifyError("Please enter a date 3 days after today");
      }
    }
  };

  const notifyError = (msg) =>
    toast.error(
      msg ? msg : "Please enter address, phone number and delivery date",
      {
        position: "top-center",
        duration: 3000,
      }
    );
  const notifySuccess = () =>
    toast.success(`Information saved`, {
      position: "top-center",
      duration: 3000,
    });

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
          <p className={styles.inputLabel}>
            Address <span style={{ color: "red" }}>*</span>
          </p>
          <textarea
            id="update-address"
            className={styles.inputs}
            name="address"
            rows="2"
          />
          <div className="d-flex ">
            <div className="w-50">
              <p className={styles.inputLabel}>
                City <span style={{ color: "red" }}>*</span>
              </p>
              <select
                className={styles.inputs}
                name="Select City"
                id="update-city"
              >
                <option value=""></option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="PH">Port Harcourt</option>
              </select>
            </div>
            <div className="w-50">
              <p className={styles.inputLabel}>
                Sender Email <span style={{ color: "red" }}>*</span>
              </p>
              <input
                id="update-sender"
                className={styles.inputs}
                name="phone"
                type="email"
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-inline w-50">
              <p className={styles.inputLabel}>
                Phone Number <span style={{ color: "red" }}>*</span>
              </p>
              <input
                id="update-phone"
                className={styles.inputs}
                name="phone"
                type="number"
              />
            </div>
            <div className="d-inline w-50">
              <p className={styles.inputLabel}>
                Delivery date <span style={{ color: "red" }}>*</span>
              </p>
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
          <div className="d-flex align-items-center gap-1">
            <span>Express Delivery:</span>
            <Checkbox
              checked={checked}
              onChange={handleRadioChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <small>
              Item will be delivered within 24 hours and includes an extra
              charge of $20
            </small>
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
