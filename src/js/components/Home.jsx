import React from "react";
import Contador from "/workspaces/Daniel-F.Contador-simple/src/js/components/Counter.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Contador />
    </div>
  );
};

export default Home;