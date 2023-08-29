import React from "react";
import { CheckIcon, ClockIcon, XIcon } from "@heroicons/react/solid";

function Product_cart() {
  const products = [
    {
      id: 1,
      name: "Iphone 14",
      href: "#productLink",
      price: 40,
      color: "black",
      size: "medium",
      stock: "In stock",
      imageSrc:
        "https://coolstuf.com.pg/wp-content/uploads/2022/10/iPhone-14-pro-model-1.jpg",
      imageAlt: "Description of the product picture",
    },
    {
      id: 2,
      name: "Iphone 14 Pro Max",
      href: "#productLink",
      price: 28,
      color: "green",
      size: "Large",
      stock: "Will ship in 7-15 days",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi84SyJY4sDpR-TnA6-QRC1cxQOR0OoruyDi6dxBCnMh47rDZ09aL-ewfC1AgD-R937W4&usqp=CAU",
      imageAlt: "Description of the product picture",
    },
  ];

  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );
  return (
    <div className="w-full max-w-3xl py-5 mx-auto bg-white">
      <div className="flex flex-col items-center">
        {/* :TITLE */}
        <h2 className="text-3xl font-semibold text-center text-gray-700">
          Shopping Cart
        </h2>

        {/* :PRODUCT LIST */}
        <div className="min-w-full mt-5 border-t border-b border-gray-200">
          <ul>
            {products.map((product, index) => (
              <li
                key={product.id}
                className={`p-4 flex ${
                  index !== 0 && "border-t border-gray-200"
                }`}>
                {/* ::Picture */}
                <div className="flex-shrink-0 w-1/4 aspect-w-5 aspect-h-1 sm:w-1/5">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* ::Product Infos */}
                <div className="flex flex-col w-full ml-5">
                  {/* :::Name & Price */}
                  <div className="flex justify-between space-x-5">
                    <a
                      href={product.href}
                      className="text-base font-semibold text-gray-700 hover:text-black hover:underline">
                      {product.name}
                    </a>
                    <span className="text-lg font-semibold text-gray-700">{`$${product.price.toFixed(
                      2
                    )}`}</span>
                  </div>
                  {/* :::Color */}
                  <p className="mt-1 text-sm text-gray-400 capitalize">
                    {product.color}
                  </p>
                  {/* :::Size */}
                  <p className="mt-1 mb-5 text-sm text-gray-400 capitalize">
                    {product.size}
                  </p>
                  {/* :::Actions */}
                  <div className="flex justify-between mt-auto space-x-5">
                    {/* ::::stock */}
                    <span className="inline-flex items-center space-x-2">
                      {product.stock === "In stock" ? (
                        <CheckIcon className="w-4 h-4 text-green-500" />
                      ) : product.stock === "Out of stock" ? (
                        <XIcon className="w-4 h-4 text-red-500" />
                      ) : (
                        <ClockIcon className="w-4 h-4 text-gray-300" />
                      )}
                      <span className="text-sm font-medium text-gray-500">
                        {product.stock}
                      </span>
                    </span>
                    {/* ::::remove */}
                    <button className="text-sm font-semibold text-indigo-500 hover:underline hover:text-indigo-700">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* :SUBTOTAL */}
        <div className="w-full px-10 py-7">
          {/* ::Subtotal */}
          <p className="flex items-baseline justify-between">
            <span className="text-base font-semibold text-gray-700">
              Subtotal:
            </span>
            <span className="text-2xl font-bold text-black">{`$${totalPrice.toFixed(
              2
            )}`}</span>
          </p>
          {/* ::Shipping Info */}
          <p className="mt-2 text-sm text-gray-500">
            Shipping and taxes will be calculated at checkout
          </p>
        </div>

        {/* :ACTIONS */}
        <div className="flex flex-col w-full px-10">
          {/* ::Checkout Button */}
          <a
            href="#goToCheckout"
            className="w-full py-2 text-base text-center text-white bg-indigo-500 rounded hover:bg-indigo-600">
            Checkout
          </a>
          {/* ::Continue Shopping */}
          <p className="mt-3 text-base text-center text-gray-500">
            or{" "}
            <a
              href="#shoppingPage"
              className="inline-flex items-center text-sm font-semibold text-center text-indigo-500 hover:text-indigo-600">
              Continue Shopping
              <span className="ml-2" aria-hidden="true">
                {" "}
                &rarr;
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product_cart;
