import styles from "./WhatWeProvide.module.css";

const ProvideData = [
  {
    id: 1,
    text: "Trained Paddies (couriers) around major cities waiting for your orders",
  },
  {
    id: 2,
    text: "Affordable pricing",
  },
  {
    id: 3,
    text: "Fast and reliable service",
  },
  {
    id: 4,
    text: "You control what you send",
  },
  {
    id: 5,
    text: "Incredible online support",
  },
  {
    id: 6,
    text: "Reminders to send gifts",
  },
  {
    id: 7,
    text: "Gifts suggestion",
  },
  {
    id: 8,
    text: "A team that wants to make you look good",
  },
  {
    id: 9,
    text: "Make international deliveries look easy",
  },
  {
    id: 10,
    text: "Customise your gifts",
  },
];

// List Component
const ListComponent = ({ text, id }) => {
  return (
    <div key={id} className={styles.ListContainer}>
      <div>
        <img
          src={
            "https://res.cloudinary.com/gifts-paddy/image/upload/v1651773218/verify_guc9al.svg"
          }
          alt="verified"
          height="20px"
          width="20px"
        />
      </div>
      <div>{text}</div>
    </div>
  );
};

const WhatWeProvide = () => {
  return (
    <div className={styles.provideContainer}>
      <div>
        <h2>What we provide</h2>
        <p>
          We take away the stress of sending gifts to the people you care about.
        </p>
      </div>
      <div className={styles.provideList}>
        {ProvideData.map((data) => {
          return <ListComponent id={data.id} text={data.text} />;
        })}
      </div>
    </div>
  );
};

export default WhatWeProvide;
