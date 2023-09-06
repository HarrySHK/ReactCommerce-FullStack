import React from "react";
import { Link, useParams } from "react-router-dom";
import Iphone_Mobile_Data from "./Apple_mobile_data";
import My_Footer from "./footer";
import My_Navbar from "./navbar";
import Searchbar from "./Searchbar";
import pic1 from "./Iphone_Data/Iphone_Data/pic1.jpg";
import pic2 from "./Iphone_Data/Iphone_Data/pic2.jpg";
import pic3 from "./Iphone_Data/Iphone_Data/pic3.jpg";
import pic4 from "./Iphone_Data/Iphone_Data/pic4.jpg";
import pic5 from "./Iphone_Data/Iphone_Data/pic5.jpg";
import pic6 from "./Iphone_Data/Iphone_Data/pic6.jpg";

function My_cards() {
  const selectedData0 = Iphone_Mobile_Data[0];
  const selectedData1 = Iphone_Mobile_Data[1];
  const selectedData2 = Iphone_Mobile_Data[2];
  const selectedData3 = Iphone_Mobile_Data[3];
  const selectedData4 = Iphone_Mobile_Data[4];
  const selectedData5 = Iphone_Mobile_Data[5];

  const { category } = useParams();
  let data;
  if (category === "Apple") {
    data = [
      {
        imageUrl: selectedData0.imageUrl,
        // description: "16 GB  • 256 GB ROM",
        // name: "Iphone 14 Pro-Max",
        // price: " $1766 ",
        description: selectedData0.description,
        name: selectedData0.name,
        price: selectedData0.price,
      },
      {
        imageUrl: selectedData1.imageUrl,
        // Description: "16 GB • 256 GB ROM",
        // name: "IPhone 13 Pro",
        // price: "$1899",
        description: selectedData1.description,
        name: selectedData1.name,
        price: selectedData1.price,
      },
      {
        imageUrl: selectedData2.imageUrl,
        // Description: "32 GB • 512 GB ROM",
        // name: "IPhone SE Plus",
        // price: "$1199",
        description: selectedData2.description,
        name: selectedData2.name,
        price: selectedData2.price,
      },
      {
        imageUrl: selectedData3.imageUrl,
        // Description: "32 GB • 1TB ROM",
        // name:" IPhone X",
        // price: "$1599",
        description: selectedData3.description,
        name: selectedData3.name,
        price: selectedData3.price,
      },
      {
        imageUrl: selectedData4.imageUrl,
        // Description:" 16 GB • 512 GB ROM",
        // name: "IPhone 8",
        // price: "$2499",
        description: selectedData4.description,
        name: selectedData4.name,
        price: selectedData4.price,
      },
      {
        imageUrl: selectedData5.imageUrl,
        // Description: "32 GB • 1TB ROM",
        // name: "Iphone 11 Pro",
        // price:" $3799",
        description: selectedData5.description,
        name: selectedData5.name,
        price: selectedData5.price,
      },
    ];
  }

  return (
    <>
      <My_Navbar />
      <Searchbar />
      <div className="grid grid-cols-1 gap-6 px-12 mt-7 mb-16 bg-white md:grid-cols-3 sm:grid-cols-2 md:mt-7 sm:px-6 sm:mt-7">
        {data.map((card, index) => (
          <div
            key={index}
            className="antialiased text-gray-900 bg-white wrapper">
            <div>
              <img
                src={card.imageUrl}
                alt=" random image"
                className="object-cover object-center w-full rounded-lg shadow-md"
              />

              <div className="relative flex justify-center px-4 -mt-16">
                <div className="w-2/3 p-4 bg-white rounded-lg shadow-lg ">
                  <div className="flex items-baseline">
                    <span className="inline-block px-2 text-xs font-semibold tracking-wide text-teal-800 uppercase bg-teal-200 rounded-full">
                      New
                    </span>
                    <div className="ml-2 text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      {card.description}
                    </div>
                  </div>

                  <h4 className="mt-2 text-xl font-semibold leading-tight uppercase truncate">
                    {card.name}
                  </h4>

                  <div className="mt-1">
                    {card.price}
                    <span className="text-sm text-gray-600"> /wk</span>
                  </div>

                  <div className="flex flex-col mt-3">
                    <div className="flex grid justify-center gap-10 mt-4 prod-info">
                      {/* <Link to={`/data/${index}`}> */}

                      <Link
                        style={{ backgroundColor: "#000d1a" }}
                        to={`/product/mobile/${index}`}
                        className="hover:text-black hover:font-bold hover:bg-gradient-to-br hover:from-blue-100 hover:to-white shadow-lg px-4 py-2 mt-[-24px] text-center text-white bg-blue-500 rounded-full  w-3/3"
                        onClick={() => localStorage.setItem("myDataKey", index)}

                        //localStorage.setItem('myDataKey', index)
                      >
                        Click Me
                      </Link>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <My_Footer />
    </>
  );
}

export default My_cards;
