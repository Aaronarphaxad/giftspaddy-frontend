import ReactLoading from "react-loading";

const Loading = ({ type, color }) => {
  return (
    <div className="loading-div">
      <ReactLoading
        type={type}
        color={"#058196"}
        height={"80px"}
        width={"80px"}
      />
    </div>
  );
};

export default Loading;
