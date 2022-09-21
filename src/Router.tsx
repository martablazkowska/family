import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import Meals from "./containers/Meals/Meals";
import Meal from "./containers/Meals/Meal";
import Plans from "./containers/Plans/Plans";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="meals" element={<Meals />}>
            <Route path=":mealId" element={<Meal />} />
            {/*<Route path="new" element={<NewTeamForm />} />*/}
            {/*<Route index element={<LeagueStandings />} />*/}
          </Route>
          <Route path="plans" element={<Plans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
