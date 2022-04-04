import { Button } from "antd";
import styles from "./Button.module.css";

const CustomButton = ({
  children,
  width,
  height,
  onClick,
  color,
  fontSize,
  bgColor = "black",
}) => {
  return (
    <Button
      onClick={onClick ? onClick : undefined}
      style={{
        width: width ? width : undefined,
        height: height ? height : undefined,
        fontSize: fontSize ? fontSize : undefined,
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
