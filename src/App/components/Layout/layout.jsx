import "./style.scss";
export const Body = ({ children }) => {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <div className="body__mainContainer">{children}</div>
      </div>
    </>
  );
};

export default Body;
