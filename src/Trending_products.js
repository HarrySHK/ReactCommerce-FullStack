import React from "react";

function Trending_products() {
  return (
    <div className="w-full max-w-md px-4 py-5 mx-auto sm:max-w-2xl lg:max-w-7xl">
      <div className="mb-5 text-center">
        <h1
          className="text-5xl flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent textsm:text-7xl font-extrabold tracking-wide antialiased"
          style={{
            backgroundImage:
              "url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif)",
          }}>
          Trending Products
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-rows-2 lg:grid-cols-5 lg:grid-flow-col">
        {/* :TITLE */}
        <h2 className="sr-only">Categories preview</h2>

        {/* :CATEGORY 1 -> LARGEST, LEFT */}
        <div className="relative order-1 col-span-2 overflow-hidden bg-pink-100 rounded-md shadow lg:row-span-2 filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="block w-full h-full px-5 pt-8 pb-20">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
            </div>
            {/* ::Category Infos */}
            <div className="relative flex flex-col items-start h-full text-white">
              {/* :::name */}
              <h3 className="text-3xl antialiased leading-relaxed tracking-wider font-playfair">
                <span className="block font-bold">Mobile</span>
                <span className="block font-bold">Collection</span>
              </h3>
              {/* :::collection */}
              <p className="mt-4 font-serif text-base font-medium">
                Summer 2022
              </p>
              {/* :::badge tag */}
              <span className="inline-flex items-center justify-center px-3 py-1 mt-4 font-bold text-white bg-black border-none rounded text-s bg-opacity-40">
                Popular
              </span>
            </div>
          </a>
        </div>

        {/* :CATEGORY 2 -> SMALL, CENTER LEFT */}
        <div className="relative order-2 overflow-hidden bg-gray-800 rounded-md shadow lg:row-span-1 col-span-full sm:col-span-1 filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="block w-full h-full px-5 py-5">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
                alt=""
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
            </div>
            {/* ::Category Infos */}
            <div className="relative flex flex-col items-start justify-end h-full pt-10 text-white">
              {/* :::description
            <p className="text-sm font-light">To have that <br /> "je ne sais quoi"</p> */}
              {/* :::name */}
              <h3 className="text-2xl antialiased font-bold leading-relaxed tracking-wide font-playfair">
                Laptop Collection
              </h3>
            </div>
          </a>
        </div>

        {/* :CATEGORY 3 -> LARGE, CENTER BOTTOM*/}
        <div className="relative order-4 w-full overflow-hidden bg-black rounded-md shadow bg-opacity-60 lg:order-3 lg:row-span-1 col-span-full sm:col-span-1 lg:col-span-2 filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="block w-full h-full px-5 py-5">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img
                src="https://images.unsplash.com/photo-1509701852059-c221a6f1e878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxsYXB0b3BzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="absolute top-0 right-0 object-cover object-center w-full h-full lg:w-auto lg:object-contain"
              />
              {/* :::overlay */}
              {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-300 lg:via-gray-400" /> */}
            </div>
            {/* ::Category Infos */}
            <div className="relative flex flex-col items-start justify-between h-full text-white">
              {/* :::badge tag */}
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-white bg-black border-none rounded bg-opacity-40">
                Trendy
              </span>
              {/* :::name */}
              <h3 className="mt-20 text-2xl antialiased font-bold leading-relaxed tracking-wide text-white-400 font-playfair text-bold">
                Tech Products
              </h3>
            </div>
          </a>
        </div>

        {/* :CATEGORY 4 -> SMALL, CENTER RIGHT */}
        <div className="relative order-3 overflow-hidden bg-gray-500 rounded-md shadow lg:order-4 lg:row-span-1 col-span-full sm:col-span-1 filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="block w-full h-full px-5 py-5">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-transparent opacity-70" />
            </div>
            {/* ::Category Infos */}
            <div className="relative flex flex-col items-start justify-between h-full space-y-16 text-white">
              {/* :::badge tag */}
              <span className="inline-flex items-center justify-center px-5 font-semibold text-white bg-black border-none rounded p-3text-xs bg-opacity-40">
                New
              </span>
              {/* :::name */}
              <h3 className="text-2xl antialiased font-bold leading-relaxed tracking-wide font-playfair">
                Mobiles
              </h3>
            </div>
          </a>
        </div>

        {/* :CATEGORY 5 -> TALL, RIGHT */}
        <div className="relative order-5 overflow-hidden bg-blue-800 rounded-md shadow lg:row-span-2 col-span-full sm:col-span-1 filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="block w-full h-full px-5 py-5">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img
                src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full opacity-50 bg-gradient-to-r from-gray-500/60" />
            </div>
            {/* ::Category Infos */}
            <div className="relative flex flex-col items-start justify-between h-full space-y-10 text-white">
              {/* :::badge tag */}
              <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-white bg-black border-none rounded bg-opacity-40">
                Popular
              </span>
              {/* :::name */}
              <h3 className="text-2xl antialiased font-bold leading-relaxed tracking-wider font-playfair">
                <span className="block">Top</span>
                <span className="block">Accessories</span>
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Trending_products;
