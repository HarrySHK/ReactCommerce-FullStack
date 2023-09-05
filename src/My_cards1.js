import React from "react";
import { useParams, Link } from "react-router-dom";
import My_Footer1 from "./footer1";
import My_Navbar1 from "./navbar1";
import Searchbar1 from "./Searchbar1";
import Dell_Laptop_Data from "./Dell_laptop_data";
import pica from "./Dell_Data/pic0.png";
import picb from "./Dell_Data/pic1.jpg";
import picc from "./Dell_Data/pic2.jpg";
import picd from "./Dell_Data/pic3.png";
import pice from "./Dell_Data/pic4.jpeg";
import picf from "./Dell_Data/pic5.jpg";

function My_cards1() {
  const selectedData0 = Dell_Laptop_Data[0];
  const selectedData1 = Dell_Laptop_Data[1];
  const selectedData2 = Dell_Laptop_Data[2];
  const selectedData3 = Dell_Laptop_Data[3];
  const selectedData4 = Dell_Laptop_Data[4];
  const selectedData5 = Dell_Laptop_Data[5];

  const { category } = useParams();
  let data;
  if (category === "Dell") {
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
      <My_Navbar1 />
      <Searchbar1 />
      <div className="grid grid-cols-1 gap-6 px-12 mt-4 bg-white md:grid-cols-3 sm:grid-cols-2 md:mt-4 sm:px-6 sm:mt-4">
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
                        to={`/product/laptop/${index}`}
                        className="px-4 py-2 mt-[-24px] text-center text-white bg-blue-500 rounded  w-3/3"
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
      <My_Footer1 />
    </>
  );
}

export default My_cards1;
