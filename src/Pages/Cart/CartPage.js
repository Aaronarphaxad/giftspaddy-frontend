import styles from "./CartPage.module.css";
import Checkbox from "@mui/material/Checkbox";
import CustomButton from "../../Components/Button/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  reduceQuantity,
  increaseQuantity,
  removeFromCart,
  editAddress,
} from "./redux/cartSlice";
import Modal from "react-bootstrap/Modal";
import EditIcon from "../../Assets/icons/EditIcon";

// CART COMPONENT
const CartComponent = ({ cartData }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [newAddress, setNewAddress] = useState(
    cartData.deliveryDetails.address
  );
  const [loading, setLoading] = useState(false);

  // Modals control
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const handleRemove = () => {
    dispatch(removeFromCart(cartData.id));
    handleClose();
  };

  const handleAddressChange = (e) => {
    setNewAddress(e.target.value);
  };

  const handleEditAddress = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(
        editAddress({
          id: cartData.id,
          newAddress: newAddress,
        })
      );
      setLoading(false);
      handleEditClose();
    }, 2500);
  };

  /**
   * It takes an action as an argument and if the action is "increment" it dispatches the addToCart
   * action with the cartData as an argument. If the action is "decrement" it dispatches the
   * reduceQuantity action with the cartData.id as an argument
   * @param action - This is the action that will be performed on the cart item.
   */
  const handleQuantity = (action) => {
    if (action === "increment") {
      dispatch(increaseQuantity(cartData.id));
    }
    if (action === "decrement") {
      dispatch(reduceQuantity(cartData.id));
    }
  };
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove {cartData.title} from your cart?
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex align-items-center gap-1">
            <Button onClick={handleClose} variant="contained" size="small">
              No
            </Button>
            <Button onClick={handleRemove} variant="outlined" size="small">
              Yes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal centered show={showEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className={styles.inputs}
            value={newAddress}
            onChange={handleAddressChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex align-items-center gap-1">
            <Button onClick={handleEditClose} variant="outlined" size="small">
              Cancel
            </Button>
            <Button
              onClick={handleEditAddress}
              variant="contained"
              size="small"
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <div className={styles.cartCompDiv}>
        <div className={styles.cartImgDiv}>
          <img
            className={styles.cartImg}
            src={
              "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773208/featured-img_siaqbe.png"
            }
            alt="cart img"
            height="100%"
            width="100%"
          />
        </div>
        <div className={styles.cartCompBody}>
          <p className={styles.cartCompBodyTitle}>
            {cartData.title} ${cartData.price}
          </p>
          <p className={styles.cartCompBodyTitleAddress}>
            Address: <br /> {cartData.deliveryDetails.address}{" "}
            <span onClick={handleEditShow}>
              <EditIcon />
            </span>
          </p>
          <p style={{ textTransform: "capitalize" }}>
            City: {cartData.deliveryDetails.city}
          </p>
          <p>Phone: {cartData.deliveryDetails.phone}</p>
        </div>
        <div className={styles.cartCompActions}>
          <div className="d-flex align-items-center gap-2">
            <Button
              onClick={() => handleQuantity("decrement")}
              variant="outlined"
              size="small"
            >
              -
            </Button>
            <span>{cartData.quantity}</span>
            <Button
              onClick={() => handleQuantity("increment")}
              variant="outlined"
              size="small"
            >
              +
            </Button>
          </div>
          <div onClick={handleShow} className={styles.removeBtn}>
            <IconButton aria-label="delete" color="primary">
              <DeleteIcon />
            </IconButton>
            <span>REMOVE</span>
          </div>
        </div>
      </div>
    </>
  );
};

// CART PAGE
const CartPage = () => {
  const [checked, setChecked] = useState(true);
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const express = cartList.filter(
    (item) => item.deliveryDetails.express === true
  );

  /**
   * It returns the sum of the service fee and the total price of all the items in the cart
   * @returns The total price of the items in the cart, including the service fee.
   */
  const getGrandTotal = () => {
    const serviceFee = cartList.length * 20;
    const totalPrice = cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return serviceFee + totalPrice + express.length * 20;
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartWrapper}>
        <div className={styles.cartGroup}>
          <h5 className="mb-0 px-2 pt-2">CART ({cartList.length})</h5>
          <hr />
          <div className={styles.cartGroupBody}>
            {cartList.map((item) => (
              <CartComponent cartData={item} />
            ))}

            {cartList.length === 0 && (
              <div>
                All items in your cart will appear here. Cart is empty :(
              </div>
            )}
            {/* <CartComponent />
            <CartComponent />
            <CartComponent />
            <CartComponent /> */}
          </div>
        </div>
        {cartList.length !== 0 && (
          <div className={styles.cartSummary}>
            <h5 className="mb-0 px-2 pt-2">CART SUMMARY</h5>
            <hr />
            <div>
              <div className="d-flex align-items-center justify-content-between w-100 px-2">
                <span className={styles.subtotal}>Service fee:</span>
                <span className={styles.subtotalNumber}>
                  ${cartList.length * 20}
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100 px-2">
                <span className={styles.subtotal}>Express delivery:</span>
                <span className={styles.subtotalNumber}>
                  ${express.length * 20}
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100 px-2">
                <span
                  style={{ fontWeight: "bold" }}
                  className={styles.subtotal}
                >
                  Total:
                </span>
                <span
                  style={{ fontWeight: "bold" }}
                  className={styles.subtotalNumber}
                >
                  $
                  {cartList.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
              <div className="d-flex align-items-center w-100 px-2 mt-3">
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <small>Accept our Terms & Policy</small>
              </div>
              <div className="px-2">
                <CustomButton
                  bgColor="#058196"
                  width="100%"
                  height="45px"
                  disabled={checked ? false : true}
                >
                  CHECKOUT ${getGrandTotal()}
                </CustomButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
