import { DropdownLink } from "../ServicesDropdown/ServicesDropdown";
import styles from "./CategoryDropdown.module.css";

const CategoryDropdown = () => {
  return (
    <div className={styles.categoryDropdown}>
      <DropdownLink item="birthday" url="birthday" usage="category" />
      <DropdownLink item="romance" url="romance" usage="category" />
      <DropdownLink item="omugwo" url="omugwo" usage="category" />
      <DropdownLink item="retirement" url="retirement" usage="category" />
      <DropdownLink item="corporate" url="corporate" usage="category" />
      <DropdownLink item="kids" url="kids" usage="category" />
      <DropdownLink item="care package" url="care-package" usage="category" />
      <DropdownLink item="others" url="others" usage="category" />
    </div>
  );
};

export default CategoryDropdown;
