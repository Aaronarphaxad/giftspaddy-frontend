import styles from "./CartPage.module.css";
import Checkbox from "@mui/material/Checkbox";
import CustomButton from "../../Components/Button/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, reduceQuantity, removeFromCart } from "./redux/cartSlice";
import Modal from "react-bootstrap/Modal";

// CAR COMPONENT
const CartComponent = ({ cartData }) => {
  const [cartItems, setCartItems] = useState(1);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = () => {
    console.log(cartData.id);
    dispatch(removeFromCart(cartData.id));
    handleClose();
  };

  /**
   * If the action is increment, increment the cartItems by 1. If the action is decrement, decrement the
   * cartItems by 1
   * @param action - This is the action that we want to perform on the cart.
   */
  const handleCart = (action) => {
    if (cartItems === 1) {
      //   return;
    }
    if (action === "increment") {
      setCartItems((prev) => (prev = prev + 1));
    }
    if (action === "decrement") {
      cartItems > 1 && setCartItems((prev) => (prev = prev - 1));
    }
  };

  const handleQuantity = (action) => {
    if (action === "increment") {
      dispatch(addToCart(cartData));
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
            Special Hamper ${cartData.price}
          </p>
          <p className={styles.cartCompBodyTitleAddress}>
            Address: <br /> Road 2, opposite Zenith bank, senator Peter street,
            garki, FCT, Abuja
          </p>
          <p>Phone: +2347085769003</p>
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

const CartPage = () => {
  const [checked, setChecked] = useState(true);
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  console.log(cartList);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartWrapper}>
        <div className={styles.cartGroup}>
          <h5 className="mb-0 px-2 pt-2">CART (4)</h5>
          <hr />
          <div className={styles.cartGroupBody}>
            {cartList.map((item) => (
              <CartComponent cartData={item} />
            ))}

            {cartList.length === 0 && <div>No items in cart :(</div>}
            {/* <CartComponent />
            <CartComponent />
            <CartComponent />
            <CartComponent /> */}
          </div>
        </div>
        <div className={styles.cartSummary}>
          <h5 className="mb-0 px-2 pt-2">CART SUMMARY</h5>
          <hr />
          <div>
            <div className="d-flex align-items-center justify-content-between w-100 px-2">
              <span className={styles.subtotal}>Service fee:</span>
              <span className={styles.subtotalNumber}>$18.00</span>
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 px-2">
              <span className={styles.subtotal}>Express delivery:</span>
              <span className={styles.subtotalNumber}>$20.00</span>
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 px-2">
              <span style={{ fontWeight: "bold" }} className={styles.subtotal}>
                Total:
              </span>
              <span
                style={{ fontWeight: "bold" }}
                className={styles.subtotalNumber}
              >
                $1538.00
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
                CHECKOUT ($1538.00)
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
