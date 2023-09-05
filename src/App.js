import logo from "./logo.svg";
import "./App.css";
import My_Navbar from "./navbar";
import My_Footer from "./footer";
import Searchbar from "./Searchbar";
import { My_carousel } from "./Mycarousel";
import Firstpage from "./Firstpage";
import Product_details from "./Product_details";
import Product_details1 from "./Product_details1";
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
import My_carousel1 from "./My_carousel1";
import About_Us1 from "./complete_aboutus1";
import My_cards1 from "./My_cards1";
import Contact1 from "./Contact1";
import Registration1 from "./Registration1";
import { StateContext } from "./StateContext";
import { Toaster } from "react-hot-toast";

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
<StateContext>
    <ThemeProvider theme={theme}>
      <Router>
        <Toaster/>
        <Main />
        <Routes>
          <Route path="/" element={<Front_page />}></Route>
          <Route path="/home/mobile" element={<My_carousel />}></Route>
          <Route path="/home/laptop" element={<My_carousel1 />}></Route>
          <Route path="/aboutus/mobile" element={<About_Us />}></Route>
          <Route path="/aboutus/laptop" element={<About_Us1 />}></Route>
          <Route path="/contactus/mobile" element={<Contact />}></Route>
          <Route path="/contactus/laptop" element={<Contact1 />}></Route>
          <Route path="/cards/mobile/:category" element={<My_cards />}></Route>
          <Route path="/cards/laptop/:category" element={<My_cards1 />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/login/mobile" element={<Registration />}></Route>
          <Route path="/login/laptop" element={<Registration1 />}></Route>
          <Route path="/cart" element={<Product_cart />}></Route>
          <Route path="/product/mobile/0" element={<Product_details />}></Route>
          <Route path="/product/mobile/1" element={<Product_details />}></Route>
          <Route path="/product/mobile/2" element={<Product_details />}></Route>
          <Route path="/product/mobile/3" element={<Product_details />}></Route>
          <Route path="/product/mobile/4" element={<Product_details />}></Route>
          <Route path="/product/mobile/5" element={<Product_details />}></Route>
          <Route path="/product/laptop/0" element={<Product_details1 />}></Route>
          <Route path="/product/laptop/1" element={<Product_details1 />}></Route>
          <Route path="/product/laptop/2" element={<Product_details1 />}></Route>
          <Route path="/product/laptop/3" element={<Product_details1 />}></Route>
          <Route path="/product/laptop/4" element={<Product_details1 />}></Route>
          <Route path="/product/laptop/5" element={<Product_details1 />}></Route>
          {/* <Route path="/cart" element={<Product_details1 />}></Route> */}
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
      </Router>
    </ThemeProvider>
    </StateContext>
  );
}

export default App;
