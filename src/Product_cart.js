// import React from "react";
// import { CheckIcon, ClockIcon, XIcon } from "@heroicons/react/solid";
// import Iphone_Mobile_Data from "./Apple_mobile_data";
// import { useStateContext } from "./StateContext";

// function Product_cart() {
//   const { totalPrice, totalQuantities,setCartItems, cartItems, setShowCart } =
//     useStateContext();
//   const receivedData = localStorage.getItem("myDataKey");

//   let data = Iphone_Mobile_Data[receivedData];
//   setCartItems(data)

//   // const products = [
//   //   {
//   //     id: 1,
//   //     name: selectedData.name,
//   //     href: "#productLink",
//   //     price: selectedData.price,
//   //     color: "black",
//   //     size: "medium",
//   //     stock: "In stock",
//   //     imageSrc:selectedData.imageUrl,
//   //     imageAlt: selectedData.description,
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Iphone 14 Pro Max",
//   //     href: "#productLink",
//   //     price: 28,
//   //     color: "green",
//   //     size: "Large",
//   //     stock: "Will ship in 7-15 days",
//   //     imageSrc:
//   //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi84SyJY4sDpR-TnA6-QRC1cxQOR0OoruyDi6dxBCnMh47rDZ09aL-ewfC1AgD-R937W4&usqp=CAU",
//   //     imageAlt: "Description of the product picture",
//   //   },
//   // ];

//   return (
//     <div className="w-full max-w-3xl py-5 mx-auto bg-white">
//       <div className="flex flex-col items-center">
//         {/* :TITLE */}
//         <h2 className="text-3xl font-semibold text-center text-gray-700">
//           Shopping Cart
//         </h2>

//         {/* :PRODUCT LIST */}
//         <div className="min-w-full mt-5 border-t border-b border-gray-200">
//           <ul>
//             {cartItems.length >= 1 &&
//               cartItems.map((product, index) => (
//                 <li
//                   key={product.index}
//                   className={`p-4 flex ${
//                     index !== 0 && "border-t border-gray-200"
//                   }`}>
//                   {/* ::Picture */}
//                   <div className="flex-shrink-0 w-1/4 aspect-w-5 aspect-h-1 sm:w-1/5">
//                     <img
//                       src={product.imageUrl}
//                       alt={product.imageAlt}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   {/* ::Product Infos */}
//                   <div className="flex flex-col w-full ml-5">
//                     {/* :::Name & Price */}
//                     <div className="flex justify-between space-x-5">
//                       <a
//                         href={product.href}
//                         className="text-base font-semibold text-gray-700 hover:text-black hover:underline">
//                         {product.name}
//                       </a>
//                       <span className="text-lg font-semibold text-gray-700">
//                         ${product.price}
//                       </span>
//                     </div>
//                     {/* :::Color */}
//                     <p className="mt-1 text-sm text-gray-400 capitalize">
//                       {product.color}
//                     </p>
//                     {/* :::Size */}
//                     <p className="mt-1 mb-5 text-sm text-gray-400 capitalize">
//                       {product.size}
//                     </p>
//                     {/* :::Actions */}
//                     <div className="flex justify-between mt-auto space-x-5">
//                       {/* ::::stock */}
//                       <span className="inline-flex items-center space-x-2">
//                         {product.stock === "In stock" ? (
//                           <CheckIcon className="w-4 h-4 text-green-500" />
//                         ) : product.stock === "Out of stock" ? (
//                           <XIcon className="w-4 h-4 text-red-500" />
//                         ) : (
//                           <ClockIcon className="w-4 h-4 text-gray-300" />
//                         )}
//                         <span className="text-sm font-medium text-gray-500">
//                           {product.stock}
//                         </span>
//                       </span>
//                       {/* ::::remove */}
//                       <button className="text-sm font-semibold text-indigo-500 hover:underline hover:text-indigo-700">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//           </ul>
//         </div>

//         {/* :SUBTOTAL */}
//         <div className="w-full px-10 py-7">
//           {/* ::Subtotal */}
//           <p className="flex items-baseline justify-between">
//             <span className="text-base font-semibold text-gray-700">
//               Subtotal:
//             </span>
//             <span className="text-2xl font-bold text-black">${totalPrice}</span>
//           </p>
//           {/* ::Shipping Info */}
//           <p className="mt-2 text-sm text-gray-500">
//             Shipping and taxes will be calculated at checkout
//           </p>
//         </div>

//         {/* :ACTIONS */}
//         <div className="flex flex-col w-full px-10">
//           {/* ::Checkout Button */}
//           <a
//             href="#goToCheckout"
//             className="w-full py-2 text-base text-center text-white bg-indigo-500 rounded hover:bg-indigo-600">
//             Checkout
//           </a>
//           {/* ::Continue Shopping */}
//           <p className="mt-3 text-base text-center text-gray-500">
//             or{" "}
//             <a
//               href="#shoppingPage"
//               className="inline-flex items-center text-sm font-semibold text-center text-indigo-500 hover:text-indigo-600">
//               Continue Shopping
//               <span className="ml-2" aria-hidden="true">
//                 {" "}
//                 &rarr;
//               </span>
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product_cart;

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "./StateContext";
// import { urlFor } from '../lib/client';
import getStripe from "./api/getStripe";
import Dell_Laptop_Data from "./Dell_laptop_data";
import logo from "./logo2.png";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAuth0 } from "@auth0/auth0-react";

const Product_cart = () => {
  const { user, isAuthenticated } = useAuth0();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    console.log("Stripe object:", stripe); // Add this line

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className=" cart-num-items text-blue-100">
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} className="ml-44" />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className=" hover:bg-black hover:text-blue-100 btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="overflow-x-auto product-container bg-brown-50">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item.name}>
                <img src={logo} className="cart-product-image" />
                <div className="item-desc">
                  <div className="flex top">
                    <h5 className="font-bold">{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuanitity(item.name, "dec")
                          }>
                          <AiOutlineMinus className="text-[30px] text-blue-gray-900 ml-4 mb-2" />
                        </span>
                        <span className="num" onClick="">
                          {item.quantity}
                        </span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuanitity(item.name, "inc")
                          }>
                          <AiOutlinePlus className="text-[30px] text-blue-gray-900 ml-4 mt-2" />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}>
                      <TiDeleteOutline className="text-[60px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total mt-[20px]">
              <h3 className="font-bold">Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button
                type="button"
                className="hover:bg-black hover:text-blue-100 btn"
                onClick={handleOpen}>
                Place your order
              </button>
              <Dialog
                className="shadow-lg shadow-gray-900 bg-black/40"
                open={open}
                handler={handleOpen}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0.9, y: -100 },
                }}>
                <DialogHeader className="text-blue-100">
                  Thankyou! {user.name}
                </DialogHeader>
                <DialogBody divider className="text-white">
                  Your order has been placed successfully, igniting the
                  excitement! 🚀 Anticipate a confirmation email dancing into
                  your inbox shortly. 📩 We're thrilled to have you as a part of
                  our Mobtop.pk family! 😊 Thank you for choosing us, dear
                  customer. Your happiness is our priority! 🛒🌟
                </DialogBody>
                <DialogFooter>
                  <Link to="/">
                    <Button
                      variant="gradient"
                      color="green"
                      onClick={handleOpen}>
                      <span>Confirm</span>
                    </Button>
                  </Link>
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product_cart;
