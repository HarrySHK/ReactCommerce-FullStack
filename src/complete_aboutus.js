import My_AboutUs from "./mobtopaboutus";
import My_Stats from "./stats";
import My_Brands from "./brands_associated";
import My_reviews from "./reviews";

export default function About_Us() {
  return (
    <div className="main mb-12">
      <My_AboutUs />

      <hr className="border-2 border-gray-500 " />

      <My_Stats />

      <hr className="border-2 border-gray-500 " />

      <My_reviews />

      <hr className="border-2 border-gray-500 " />
      <My_Brands />
    </div>
  );
}
