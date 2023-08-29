import React from "react";

function My_cards() {
  const Mobile_Data = [
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "16 GB &bull; 256 ROM",
      name: "Iphone 14 Pro-Max",
      price: "$3800",
    },

    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 64 ROM",
      name: "Iphone 12 Pro-Max",
      price: "$2800",
    },

    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "16 GB &bull; 256 ROM",
      name: "iPhone 14 Pro Max",
      price: "$3800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 64 ROM",
      name: "iPhone 12 Pro Max",
      price: "$2800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 128 ROM",
      name: "iPhone 13 Pro",
      price: "$3200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 11",
      price: "$1500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 64 ROM",
      name: "iPhone XR",
      price: "$1000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone SE (2020)",
      price: "$1200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "10 GB &bull; 512 ROM",
      name: "iPhone 15 Pro",
      price: "$4200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 256 ROM",
      name: "iPhone 13 Mini",
      price: "$2500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 12",
      price: "$2000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 64 ROM",
      name: "iPhone X",
      price: "$1100",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 256 ROM",
      name: "iPhone 13",
      price: "$1700",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 128 ROM",
      name: "iPhone XS",
      price: "$1200",
    },

    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "10 GB &bull; 256 ROM",
      name: "iPhone 13 Pro Mini",
      price: "$2200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 64 ROM",
      name: "iPhone 11 Pro",
      price: "$1800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 12 Mini",
      price: "$1500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 128 ROM",
      name: "iPhone X",
      price: "$900",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 15",
      price: "$5000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "16 GB &bull; 512 ROM",
      name: "iPhone 15 Pro Max",
      price: "$4800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 14",
      price: "$3500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 12 Mini",
      price: "$1200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 11 Pro Max",
      price: "$2100",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 14 Pro",
      price: "$4000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 256 ROM",
      name: "iPhone 13 Pro Max",
      price: "$2900",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "10 GB &bull; 128 ROM",
      name: "iPhone 12 Mini",
      price: "$1800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 64 ROM",
      name: "iPhone 8",
      price: "$700",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 14 Mini",
      price: "$3300",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 12 Pro",
      price: "$2400",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 13 Mini",
      price: "$2600",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 128 ROM",
      name: "iPhone 7",
      price: "$600",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 14 Pro",
      price: "$3800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 12",
      price: "$1900",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 13",
      price: "$2700",
    },

    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 64 ROM",
      name: "iPhone 12 Mini",
      price: "$1500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 128 ROM",
      name: "iPhone 11",
      price: "$900",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 16",
      price: "$5000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "16 GB &bull; 512 ROM",
      name: "iPhone 16 Pro Max",
      price: "$4800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 13",
      price: "$3500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 12",
      price: "$1200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 11 Pro Max",
      price: "$2100",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 15 Pro",
      price: "$4000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 256 ROM",
      name: "iPhone 14 Pro Max",
      price: "$2900",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "10 GB &bull; 128 ROM",
      name: "iPhone 12 Mini",
      price: "$1800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 64 ROM",
      name: "iPhone 9",
      price: "$700",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 15 Mini",
      price: "$3300",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 13 Pro",
      price: "$2400",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 14 Mini",
      price: "$2600",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 128 ROM",
      name: "iPhone 8 Plus",
      price: "$600",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 15 Pro",
      price: "$3800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 11 Pro",
      price: "$1900",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 14",
      price: "$2700",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 64 ROM",
      name: "iPhone 12 Pro Mini",
      price: "$2200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 256 ROM",
      name: "iPhone 13 Plus",
      price: "$3200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 16 Pro",
      price: "$3600",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "10 GB &bull; 128 ROM",
      name: "iPhone 14 Mini",
      price: "$2400",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 17 Pro Max",
      price: "$5000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 15S",
      price: "$3300",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 13 Mini Plus",
      price: "$2700",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 128 ROM",
      name: "iPhone XS Plus",
      price: "$2600",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 18",
      price: "$5500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 15 Pro",
      price: "$3900",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 256 ROM",
      name: "iPhone 14S",
      price: "$2800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "10 GB &bull; 256 ROM",
      name: "iPhone 17",
      price: "$4200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 16 Mini",
      price: "$2500",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 19 Pro Max",
      price: "$5200",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 256 ROM",
      name: "iPhone 14 Pro",
      price: "$3100",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "10 GB &bull; 128 ROM",
      name: "iPhone 16 Mini Plus",
      price: "$2600",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 256 ROM",
      name: "iPhone 20",
      price: "$6000",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 256 ROM",
      name: "iPhone 17S",
      price: "$3700",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "6 GB &bull; 128 ROM",
      name: "iPhone 15 Mini Plus",
      price: "$2800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "4 GB &bull; 128 ROM",
      name: "iPhone 11 Plus",
      price: "$2400",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "12 GB &bull; 512 ROM",
      name: "iPhone 21",
      price: "$5800",
    },
    {
      imageUrl: "https://source.unsplash.com/random/300x350",
      description: "8 GB &bull; 128 ROM",
      name: "iPhone 18 Pro",
      price: "$4100",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 px-12 mt-4 bg-white md:grid-cols-3 sm:grid-cols-2 md:mt-4 sm:px-6 sm:mt-4">
      {Mobile_Data.map((card, index) => (
        <div key={index} className="antialiased text-gray-900 bg-white wrapper">
          <div>
            <img
              src={card.imageUrl}
              alt=" random imgee"
              className="object-cover object-center w-full rounded-lg shadow-md"
            />

            <div className="relative px-4 -mt-16">
              <div className="p-4 bg-white rounded-lg shadow-lg">
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

                {/* Additional card content */}
                {/* You can add the color options and "Click Me" button here */}
                <div class="mt-3 flex flex-col">
                  <span class="text-teal-600 text-md font-semibold">
                    Available Color:{" "}
                  </span>
                  <div class="prod-info grid gap-10 mt-4">
                    <div>
                      <ul class="flex flex-row justify-center items-center">
                        <li class="mr-4 last:mr-0">
                          <span class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#blue"
                              class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                          </span>
                        </li>
                        <li class="mr-4 last:mr-0">
                          <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#yellow"
                              class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                          </span>
                        </li>
                        <li class="mr-4 last:mr-0">
                          <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#red"
                              class="block w-6 h-6 bg-red-500 rounded-full"></a>
                          </span>
                        </li>
                        <li class="mr-4 last:mr-0">
                          <span class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                            <a
                              href="#green"
                              class="block w-6 h-6 bg-green-500 rounded-full"></a>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href="https://www.google.co.uk/"
                      className="px-4 py-2 mt-[-24px] text-center text-white bg-blue-500 rounded">
                      Click Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default My_cards;
