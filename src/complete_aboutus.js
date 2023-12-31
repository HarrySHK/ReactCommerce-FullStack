import My_AboutUs from "./mobtopaboutus";
import My_Stats from "./stats";
import My_Brands from "./brands_associated";
import My_reviews from "./reviews";
import My_Footer1 from "./footer1";
import Searchbar1 from "./Searchbar1";
import My_Navbar1 from "./navbar1";
import My_Navbar from "./navbar";
import Searchbar from "./Searchbar";
import My_Footer from "./footer";

export default function About_Us() {
  return (
    <>
      <My_Navbar />
      <Searchbar />
      <div className="main mb-12">
        <My_AboutUs />

        <hr className="border-2 border-gray-500 " />

        <My_Stats />

        <hr className="border-2 border-gray-500 " />

        <My_reviews />

        <hr className="border-2 border-gray-500 " />
        <My_Brands />
      </div>
      <My_Footer />
    </>
  );
}
