import React from "react";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-blue-500">Hello, Welcome to Rexee</h1>
      
      <Card
        children={<div>Hello world</div>}
        cardSize="base"
        cardStyle="primary"
      />
    </div>
  );
};

export default Homepage;