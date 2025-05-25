//Doing named export's import (For module that had multiple exports)
import { CDN_URL } from "../utils/constants";
//inline css
const ResterauntCard = (props) => {
  //   console.log(props);//an object received as arguments from JSX by React
  const { resData } = props; //Destructing props to capture resData key
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info; // Optional Chaining
  return (
    // <div
    //   className="res-card"
    //   style={{
    //     width: "200px",
    //     height: "300px",
    //     backgroundColor: "antiquewhite",
    //     margin: "5px",
    //     padding: "7px",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignContent: "center",
    //   }}
    // >
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>{cuisines.join(" , ")}</h5>
        <h5>{avgRating}</h5>
      </div>
    </div>
  );
};

export default ResterauntCard;
