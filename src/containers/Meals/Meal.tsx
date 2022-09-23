import React from "react";
import { useParams } from "react-router-dom";

const Meal = () => {
  const params = useParams();

  console.log(params);

  return <div>Meal</div>;
};

export default Meal;
