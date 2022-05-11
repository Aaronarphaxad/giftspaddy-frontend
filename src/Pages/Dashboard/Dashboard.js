import { useState } from "react";
import styles from "./Dashboard.module.css";

// Menu card
const MenuCard = ({ menu, children }) => {
  return (
    <div className={styles.cardDiv}>
      <div className={styles.cardTop}>
        <h3>{menu}</h3>
      </div>
      <hr />
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
};

const Dashboard = () => {
  const [menu, setMenu] = useState("account");
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardMenu}>
        <div className={styles.menuCard}>
          <div
            id={menu === "account" ? styles.active : undefined}
            onClick={() => setMenu("account")}
            className={styles.menuRow}
          >
            Account
          </div>
          <div
            id={menu === "order" ? styles.active : undefined}
            onClick={() => setMenu("order")}
            className={styles.menuRow}
          >
            Order History
          </div>
          <div
            id={menu === "favourite" ? styles.active : undefined}
            onClick={() => setMenu("favourite")}
            className={styles.menuRow}
          >
            Favourite Gifts
          </div>
          <div
            id={menu === "saved" ? styles.active : undefined}
            onClick={() => setMenu("saved")}
            className={styles.menuRow}
          >
            Saved Recipients
          </div>
          <div id={styles.logout} className={styles.menuRow}>
            LOGOUT
          </div>
        </div>
      </div>
      <div className={styles.dashboardSpace}>
        <MenuCard menu={menu}>
          {menu === "account" && <div>Account</div>}
          {menu === "order" && <div>Order History</div>}
          {menu === "favourite" && <div>Favourite Gifts</div>}
          {menu === "saved" && <div>Saved recipients</div>}
        </MenuCard>
      </div>
    </div>
  );
};

export default Dashboard;
