import React, { useState } from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/solid";

function Product_details() {
  const product = {
    name: "Iphone 15 Pro Max",
    price: 2000,
    rating: 4.4,
    reviews: 96,
    hrefReviews: "#link",
    description:
      "The iPhone 14 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532 × 1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz.",
    features: [
      { name: "Materials", details: "Bamboo, Glass" },
      { name: "Teapot", details: '7"L x 4.5"W x 4.5"H' },
      { name: "Capacity", details: "650 ml." },
      { name: "Cleaning", details: "Silk Clothe" },
    ],
    colors: [
      { name: "Black", class: "bg-black" },
      { name: "White", class: "bg-white" },
      { name: "Blue", class: "bg-sky-400" },
    ],
    sizes: [
      { name: "16 GB", inStock: true },
      { name: "32 GB", inStock: true },
      { name: "64 GB", inStock: false },
    ],
    pictures: [
      {
        src: "https://www.telkomsel.com/sites/default/files/device-bundling-new/product/2022-10/Silver_2.jpg",
        alt: "Teapot model",
      },
      {
        src: "https://images.ctfassets.net/vx12w8gtks6f/gx3YdZ2AmIS93NBiCyAeS/f2a735d92aaaaecfd84663d69952bdd0/PEP_Carousel_2_leftside_iphone14ProMax_purple_PreOrder_EN.png",
        alt: "Teapot to pour water",
      },
      {
        src: "https://www.fixservis.sk/media/carousel_images/1100258463-002_8450165668259381979.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg",
        alt: "Teapot for breakfast",
      },
      {
        src: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-max-deep-purple-back.png?v=35",
        alt: "Teapot on warming machine",
      },
    ],
  };

  const [mainPicture, setMainPicture] = useState(0);

  const starsNumber = Math.floor(product.rating);
  const isHalfStar = !Number.isInteger(product.rating);
  const emptyStars = 5 - Math.ceil(product.rating);
  return (
    <div className="w-full px-4 mx-auto text-gray-700 bg-white max-w-7xl">
      <div className="flex flex-col lg:flex-row">
        {/* :PICTURES CONTAINER */}
        <div className="flex flex-col items-center w-full py-8 lg:w-1/2">
          {/* ::Like Button */}
          <span className="self-start ml-10">
            <button className="text-gray-300 hover:text-red-500">
              <HeartIcon className="w-10 h-10" />
            </button>
          </span>
          {/* ::Main Picture */}
          <div className="w-auto h-56 overflow-hidden sm:h-72 lg:h-full max-h-96">
            <img
              src={product.pictures[mainPicture].src}
              alt={product.pictures[mainPicture].alt}
              className="object-contain w-full h-full"
            />
          </div>
          {/* ::Gallery */}
          <div className="mx-auto mt-6">
            <ul className="grid grid-flow-col gap-4 auto-cols-fr">
              {product.pictures
                .slice(0, 4) // Here you can manage the number of pictures displayed
                .map((picture, index) => (
                  <li
                    key={picture.alt}
                    className={`col-span-1 p-1 w-16 rounded border-2 ${
                      index === mainPicture
                        ? "border-yellow-600"
                        : "border-transparent"
                    }`}>
                    <button
                      type="button"
                      className="block h-full overflow-hidden rounded"
                      onClick={() => setMainPicture(index)}>
                      <img
                        src={picture.src}
                        alt={picture.alt}
                        className="object-contain"
                      />
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* :PRODUCT DETAILS */}
        <div className="flex flex-col w-full border-gray-200 lg:py-8 lg:w-1/2 lg:border-l-2">
          {/* ::Description Container */}
          <div className="order-3 pb-5 border-gray-200 lg:order-1 sm:px-6 lg:border-b-2">
            {/* :::Name */}
            <h1 className="hidden text-4xl font-light tracking-wide text-gray-700 lg:block">
              {product.name}
            </h1>
            {/* :::Description */}
            <p className="mt-10 text-base text-gray-500">
              {product.description}
            </p>
            {/* :::Features */}
            <ul className="flex flex-col my-5 space-y-2">
              {product.features.map((feature) => (
                <li
                  key={feature.name}
                  className="inline-flex items-center space-x-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">{feature.name}:</span>
                  <span className="text-sm font-normal">{feature.details}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ::Customization Container */}
          <div className="order-1 py-8 border-b-2 border-gray-200 lg:order-2 sm:px-6">
            {/* :::Name */}
            <h1 className="block mb-5 text-3xl font-light tracking-wide text-gray-700 lg:hidden sm:text-4xl">
              {product.name}
            </h1>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              {/* :::Quantity */}
              <label htmlFor="quantity" className="sr-only">
                Select the quantity
              </label>
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-20 py-1 pl-2 bg-gray-100 border-2 border-gray-300 rounded form-input focus:border-yellow-600 focus:ring-0"
                placeholder="Quantity"
              />
              {/* :::Color */}
              <label htmlFor="color" className="sr-only">
                Select your color
              </label>
              <select
                name="color"
                id="color"
                className="w-full max-w-xs py-1 pl-2 text-gray-500 bg-gray-100 border-2 border-gray-300 rounded form-select focus:border-yellow-600 focus:ring-0">
                <option value="">Blue</option>
                {product.colors.map((color) => (
                  <option value={color.name}>{color.name}</option>
                ))}
              </select>
              {/* :::Size */}
              <label htmlFor="size" className="sr-only">
                Select your Memory
              </label>
              <select
                name="size"
                id="size"
                className="w-full max-w-xs py-1 pl-2 text-gray-500 bg-gray-100 border-2 border-gray-300 rounded form-select focus:border-yellow-600 focus:ring-0">
                <option value="">8 GB</option>
                {product.sizes.map((size) => (
                  <option value={size.name}>{size.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* ::Actions Container */}
          <div className="flex flex-wrap items-center justify-around order-2 pt-8 border-b-2 border-gray-200 lg:order-3 sm:px-6 lg:flex-nowrap lg:border-none">
            {/* :::Price */}
            <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
              <span className="font-normal">$</span>
              {product.price}
            </span>
            {/* :::Add to cart button */}
            <button
              type="button"
              className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600">
              <ShoppingBagIcon className="w-6 h-6 mr-3" />
              Add to cart
            </button>
            {/* :::Reviews */}
            <div className="m-2.5 flex items-center">
              {/* ::::rating stars */}
              <div className="flex items-center space-x-1">
                {/* full stars */}
                {[...Array(starsNumber)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  </span>
                ))}
                {/* half star */}
                {isHalfStar && (
                  <span className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </span>
                )}
                {/* empty stars */}
                {[...Array(emptyStars)].map((star, index) => (
                  <span key={index} className="flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                    </svg>
                  </span>
                ))}
              </div>
              {/* ::::all reviews */}
              <a
                href={product.hrefReviews}
                className="ml-2 text-sm font-medium tracking-wide text-sky-400 hover:text-sky-500 hover:underline">{`${product.reviews} reviews`}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_details;
