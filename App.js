import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/001/241/135/large_2x/female-chef-holding-platter-with-lid-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return <>{"Search"}</>;
};
//inline css
const ResterauntCard = () => {
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
      <img
        className="res-logo"
        src="https://tse4.mm.bing.net/th?id=OIP.TnX-DRtsSpc6_g-seWiIIgHaFj&pid=Api&P=0&h=180"
      />
      <h3>Vishal Chat</h3>
      <h5>Vishal Chat</h5>
      <h5>Vishal Chat</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="res-container">
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
        <ResterauntCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
