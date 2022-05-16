import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../../../Components/Button/Button";
import { ServicesData } from "../../../Data/ServicesData";
import styles from "./ServiceDetail.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const { service } = useParams();
  const [serviceObj, setServiceObj] = useState({});
  const { title, image, text, active } = serviceObj;
  const navigate = useNavigate();

  const handleClick = (service) => {
    if (service === "special") navigate("/register");
    if (service === "secret") navigate("/secret-paddy");
  };

  useEffect(() => {
    const serviceToSave = ServicesData.find((item) => item.service === service);
    setServiceObj(serviceToSave);
  }, []);

  const styling = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "50%",
  };
  return (
    <div className={styles.serviceDetailDiv}>
      <div style={styling} className={styles.top}></div>
      <div className={styles.serviceBottom}>
        <div className={styles.serviceCard}>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className={styles.serviceBtnDiv}>
            {!active && (
              <Button variant="outlined" disabled>
                Coming soon
              </Button>
            )}
            {active && (
              <CustomButton onClick={() => handleClick(service)} height="45px">
                GET STARTED
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
