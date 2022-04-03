import { Button } from "antd";
import styles from "./Button.module.css";

const CustomButton = ({
  children,
  width,
  onClick,
  color,
  bgColor = "black",
}) => {
  return (
    <Button
      onClick={onClick ? onClick : undefined}
      style={{
        width: width ? width : undefined,
        backgroundColor: bgColor,
        color: color,
      }}
      className={styles.btn}
      type="primary"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
