import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart"
import Error from "./Error"
import {GlobalStyle} from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  const theme = {
    colors:{
      heading: "#000",
      text: "white",
      white: "#fff",
      black:"#212529",
      helper:"rgb(243 68 84)",
      bg: "black",
      footer_bg: "black",
      btn: "rgb(243 68 84)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      
    },
    media:{
      mobile: "768px",
      tab: "998px",
    }
  }

  return (

    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
    
  )
};

export default App;