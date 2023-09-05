import My_AboutUs from "./mobtopaboutus";
import My_Stats from "./stats";
import My_Brands from "./brands_associated";
import My_reviews from "./reviews";
import My_Navbar1 from "./navbar1";
import Searchbar1 from "./Searchbar1";
import My_Footer1 from "./footer1";

export default function About_Us1() {
  return (
    <>
      <My_Navbar1 />
      <Searchbar1 />
      <div className="main mb-12">
        <My_AboutUs />

        <hr className="border-2 border-gray-500 " />

        <My_Stats />

        <hr className="border-2 border-gray-500 " />

        <My_reviews />

        <hr className="border-2 border-gray-500 " />
        <My_Brands />
      </div>
      <My_Footer1 />
    </>
  );
}
