import { Button } from "antd";
import styles from "./Button.module.css";

const CustomButton = ({
  children,
  width,
  height,
  onClick,
  color = "white",
  fontSize,
  bgColor = "black",
  loading,
  disabled,
}) => {
  return (
    <Button
      onClick={onClick ? onClick : undefined}
      style={{
        width: width ? width : undefined,
        height: height ? height : undefined,
        fontSize: fontSize ? fontSize : undefined,
        backgroundColor: bgColor,
        color: color ? color : "white",
      }}
      className={styles.btn}
      type="primary"
      loading={loading}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
