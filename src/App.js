import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/home/Navbar";
import Homepage from "./components/home/Homepage";
import City from "./components/city/City";
import Footer from "./components/home/Footer";
import NewsPage from "./components/news/NewsPage";
import CountriesPage from "./components/countries/CountriesPage";
import CitiesPage from "./components/cities/CitiesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="main-container">
        <Routes>
          <Route exact path="/*" element={<Homepage />}></Route>
          <Route
            exact
            path="/search/:cityName/city/:cityId"
            element={<City />}
          ></Route>
          <Route exact path="/news" element={<NewsPage />}></Route>
          <Route exact path="/countries" element={<CountriesPage />}></Route>
          <Route exact path="/cities/*" element={<CitiesPage />}></Route>
        </Routes>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
