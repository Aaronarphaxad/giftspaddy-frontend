import moment from "moment";

/**
 * If the selected date is before or the same as the current date plus two days, return false.
 * Otherwise, return true
 * @param pickedDate - The date that the user has selected.
 * @returns A boolean value.
 */
const handleDate = (pickedDate) => {
  const selectedDate = moment(pickedDate);
  const threeDays = moment().add(2, "days");

  if (selectedDate.isSameOrBefore(threeDays)) {
    return false;
  }
  return true;
};

export default handleDate;
