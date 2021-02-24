import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";

// Format
const Home = lazy(() => import("../views/Home"));
const MealInfo = lazy(() => import("../views/MealInfo"));
const SearchResult = lazy(() => import("../views/SearchResult"));
const SearchBar = lazy(() => import("../components/SearchBar"));
const Ingredients = lazy(() => import("../views/IngredientMeal"));

const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <Suspense fallback={"Fallback"}>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meal/:id" component={MealInfo} />
          <Route path="/search/q=:param" component={SearchResult} />
          <Route path="/ingredients/:id" component={Ingredients} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
