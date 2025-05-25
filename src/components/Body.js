import ResterauntCard from "./ResterauntCard";
import resObj from "../utils/mockData";
//Do named import for hooks from react
import { useState } from "react";

const Body = () => {
  //Below mentioned code is to create a react state variable using useState with initial value = resObj, second param is used to update the value of this state var
  const [resObjState, setResObjState] = useState(resObj);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = resObjState.filter(
            (res) => res.info.avgRating >= 4.6
          );
          setResObjState(filteredList);
        }}
      >
        Find Top Resteraunts
      </button>
      <button onClick={() => setResObjState(resObj)}>Clear</button>
      <div className="res-container">
        {resObjState.map((item) => (
          <ResterauntCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
