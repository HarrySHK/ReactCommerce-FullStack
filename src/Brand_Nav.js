// import {
//   Navbar,
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Chip,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   UserCircleIcon,
//   HomeIcon,
//   MenuAlt1Icon,
//   XIcon,
//   LocationMarkerIcon,
//   ChatIcon,
//   UsersIcon,
//   FolderIcon,
//   CubeIcon,
//   ArrowNarrowUpIcon,
//   EmojiHappyIcon,
//   PuzzleIcon,
//   GiftIcon,
//   DeviceMobileIcon,
//   DesktopComputerIcon,
// } from "@heroicons/react/outline";
// import React, { createContext, useContext, useState } from "react";

// const BrandContext = createContext();

// export function BrandProvider({ children }) {
//   const [brandType, setBrandType] = useState(); // Default to "mobile"
//   const [brands, setBrands] = useState({
//     mobile: [
//       {
//         color: "blue",
//         icon: DeviceMobileIcon,
//         title: "Apple",
//         description: "Experience innovation with Apple devices.",
//       },
//       {
//         color: "orange",
//         icon: DeviceMobileIcon,
//         title: "Samsung",
//         description: "Discover the latest Samsung technologies.",
//       },
//       {
//         color: "green",
//         icon: DeviceMobileIcon,
//         title: (
//           <div className="flex items-center gap-1">
//             Google Pixel{" "}
//             <Chip
//               size="sm"
//               color="green"
//               variant="blue"
//               value="Sale!"
//               className="capitalize"
//             />
//           </div>
//         ),
//         description: "Explore the world of Google Pixel products and services.",
//       },
//       {
//         color: "blue-gray",
//         icon: DeviceMobileIcon,
//         title: "Huawei",
//         description: "Empowering the future with Huawei technologies.",
//       },
//       {
//         color: "purple",
//         icon: DeviceMobileIcon,
//         title: "OnePlus",
//         description: "Never settle with OnePlus flagship devices.",
//       },
//       {
//         color: "teal",
//         icon: DeviceMobileIcon,
//         title: "Xiaomi",
//         description: "Smart living with Xiaomi's range of products.",
//       },
//       {
//         color: "cyan",
//         icon: DeviceMobileIcon,
//         title: "Motorola",
//         description: "Unleash the possibilities with Motorola.",
//       },
//       {
//         color: "pink",
//         icon: DeviceMobileIcon,
//         title: "Realme",
//         description: "Connecting people with Realme's innovative solutions.",
//       },
//     ],
    // laptop: [
    //   {
    //     color: "blue",
    //     icon: DesktopComputerIcon,
    //     title: "Apple",
    //     description: "Seamless blend of innovation and aesthetics in laptops.",
    //   },
    //   {
    //     color: "orange",
    //     icon: DesktopComputerIcon,
    //     title: "Dell",
    //     description:
    //       "Reliable and versatile laptops catering to diverse needs.",
    //   },
    //   {
    //     color: "green",
    //     icon: DesktopComputerIcon,
    //     title: (
    //       <div className="flex items-center gap-1">
    //         Toshiba{" "}
    //         <Chip
    //           size="sm"
    //           color="green"
    //           variant="blue"
    //           value="Sale!"
    //           className="capitalize"
    //         />
    //       </div>
    //     ),
    //     description:
    //       "Innovative laptops with a balance of performance and style",
    //   },
    //   {
    //     color: "blue-gray",
    //     icon: DesktopComputerIcon,
    //     title: "HP",
    //     description: "Performance and innovation in one package.",
    //   },
    //   {
    //     color: "purple",
    //     icon: DesktopComputerIcon,
    //     title: "Lenovo",
    //     description: "Smart, reliable, and stylish computing solutions.",
    //   },
    //   {
    //     color: "teal",
    //     icon: DesktopComputerIcon,
    //     title: "ASUS",
    //     description: "Innovative technology for every need",
    //   },
    //   {
    //     color: "cyan",
    //     icon: DesktopComputerIcon,
    //     title: "Acer",
    //     description: "Affordable and reliable computing solutions",
    //   },
    //   {
    //     color: "pink",
    //     icon: DesktopComputerIcon,
    //     title: "LG",
    //     description:
    //       "Sleek design and reliable performance for various computing needs",
    //   },
    // ],
//   });

//   return (
//     <BrandContext.Provider
//       value={{ brandType, setBrandType, brands, setBrands }}>
//       {children}
//     </BrandContext.Provider>
//   );
// }
// function Brand_Nav() {
//   return useContext(BrandContext);
// }

// export default Brand_Nav;
