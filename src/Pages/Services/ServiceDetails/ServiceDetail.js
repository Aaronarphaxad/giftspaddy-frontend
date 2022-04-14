import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServicesData } from "../../../Data/ServicesData";
import styles from "./ServiceDetail.module.css";

const ServiceDetail = () => {
  const { service } = useParams();
  const [serviceObj, setServiceObj] = useState({});
  const { title, image, text } = serviceObj;

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
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
