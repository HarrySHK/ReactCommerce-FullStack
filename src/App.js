import logo from "./logo.svg";
import "./App.css";
import My_Navbar from "./navbar";
import My_Footer from "./footer";
import Searchbar from "./Searchbar";
import { My_carousel } from "./Mycarousel";
import Firstpage from "./Firstpage";
import Product_details from "./Product_details";
import My_cards from "./My_cards";
import Trending_products from "./Trending_products";
import Contact from "./Contact";
import About_Us from "./complete_aboutus";
import Front_page from "./Front_page";
import Registration from "./Registration";
import Product_cart from "./Product_cart";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrandProvider } from "./Brand_Nav";
import Main from "./Main";
import Error from "./Error";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrandProvider>
        <Router>
          <Main />
          <My_Navbar />
          <Searchbar />
          <Routes>
            <Route path="/" element={<Front_page />}></Route>
            <Route path="/home" element={<My_carousel />}></Route>
            <Route path="/aboutus" element={<About_Us />}></Route>
            <Route path="/contactus" element={<Contact />}></Route>
            <Route path="/cards" element={<My_cards />}></Route>
            <Route path="/error" element={<Error />}></Route>
            <Route path="/login" element={<Registration />}></Route>
            {/* <Route path="/navListMenuItems/:type" element={<My_Navbar />}></Route> */}
            {/* <My_carousel />  */}
            {/* <Firstpage /> */}
            {/* <Product_details /> */}
            {/* <My_cards /> */}
            {/* <Trending_products/> */}
            {/* <Contact /> */}
            {/* <About_Us /> */}
            {/* <Front_page /> */}
            {/* <Registration/> */}
            {/* <Product_cart /> */}
            {/* <Checkout /> */}
          </Routes>
          <My_Footer />
        </Router>
      </BrandProvider>
    </ThemeProvider>
  );
}

export default App;
