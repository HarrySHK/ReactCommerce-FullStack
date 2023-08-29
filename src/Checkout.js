import {
  BadgeCheckIcon,
  InformationCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/solid";

function Checkout() {
  const order = {
    total: 110,
    vat: 15,
    items: [
      {
        id: 1,
        name: "Iphone ",
        details: "16-GB 256-GB",
        price: 3200,
        picture:
          "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png",
      },
      {
        id: 2,
        name: "HP Laptop i5 Generation-7",
        details: "Touchscreen 360-X rotation",
        price: 2450,
        picture: "https://pngimg.com/d/laptop_PNG101820.png",
      },
    ],
  };

  return (
    <div className="relative w-full mx-auto bg-white max-w-7xl">
      <div className="grid grid-cols-10">
        {/* :CHECKOUT FORM CONTAINER */}
        <div className="px-4 py-6 col-span-full lg:col-span-6 sm:py-12 lg:py-24">
          <div className="w-full max-w-lg mx-auto">
            {/* ::Title */}
            <h1 className="relative font-bold text-gray-700 lg:text-4xl sm:text-4xl ">
              Secure Checkout
              <span className="block w-10 h-1 mt-2 bg-indigo-600 sm:w-20" />
            </h1>

            {/* ::Checkout Form */}
            <form action="" className="flex flex-col mt-10 space-y-4">
              {/* :User Name */}
              <div>
                {/* :label */}
                <label
                  htmlFor="name"
                  className="text-base font-semibold text-gray-500">
                  Full Name
                </label>
                {/* :input */}
                <input
                  type="text"
                  id="text"
                  name="name"
                  placeholder="Robert Brown"
                  className="block w-full p-3 mt-1 text-sm text-black placeholder-gray-300 border-2 rounded shadow-sm text-opacity-45 border-black-500 form-input bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* :::Email address */}
              <div>
                {/* ::::label */}
                <label
                  htmlFor="email"
                  className="text-base font-semibold text-gray-500">
                  Email
                </label>
                {/* ::::input */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="myaddress@example.com"
                  className="block w-full p-3 mt-1 text-sm text-black placeholder-gray-300 border-2 rounded shadow-sm text-opacity-45 border-black-500 form-input bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              {/* :::Card number */}
              <div className="relative">
                {/* ::::label */}
                <label
                  htmlFor="address"
                  className="text-base font-semibold text-gray-500">
                  Address
                </label>
                {/* ::::input */}
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="House No: P-424 , Albania Street , Florida , America"
                  className="block w-full p-3 pr-10 text-sm text-black placeholder-gray-300 border-2 rounded shadow-sm text-opacity-45 border-black-500 form-input bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                {/* ::::visa logo */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-6"
                />
              </div>
              {/* :::Expiration date */}
              <div>
                {/* ::::title */}
                <p className="mt-2 text-base font-semibold text-gray-500">
                  Other Credentials
                </p>
                <div className="flex flex-wrap mr-6">
                  {/* ::::select month */}
                  <div className="my-1">
                    <label htmlFor="month" className="sr-only">
                      Select expiration month
                    </label>
                    <select
                      name="month"
                      id="month"
                      className={` mt-2 form-select shadow-sm rounded border-black-500 border-2 bg-gray-50 p-3 text-sm cursor-pointer focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-black `}>
                      <option value="" selected>
                        Select Your Country:
                      </option>
                      <option value="">Afghanistan</option>
                      <option value="">Albania</option>
                      <option value="">Algeria</option>
                      <option value="">Andorra</option>
                      <option value="">Angola</option>
                      <option value="">Antigua and Barbuda</option>
                      <option value="">Argentina</option>
                      <option value="">Armenia</option>
                      <option value="">Australia</option>
                      <option value="">Austria</option>
                      <option value="">Azerbaijan</option>
                      <option value="">Bahamas</option>
                      <option value="">Bahrain</option>
                      <option value="">Bangladesh</option>
                      <option value="">Barbados</option>
                      <option value="">Belarus</option>
                      <option value="">Belgium</option>
                      <option value="">Belize</option>
                      <option value="">Benin</option>
                      <option value="">Bhutan</option>
                      <option value="">Bolivia</option>
                      <option value="">Bosnia and Herzegovina</option>
                      <option value="">Botswana</option>
                      <option value="">Brazil</option>
                      <option value="">Brunei</option>
                      <option value="">Bulgaria</option>
                      <option value="">Burkina Faso</option>
                      <option value="">Burundi</option>
                      <option value="">Cabo Verde</option>
                      <option value="">Cambodia</option>
                      <option value="">Cameroon</option>
                      <option value="">Canada</option>
                      <option value="">Central African Republic</option>
                      <option value="">Chad</option>
                      <option value="">Chile</option>
                      <option value="">China</option>
                      <option value="">Colombia</option>
                      <option value="">Comoros</option>
                      <option value="">Congo</option>
                      <option value="">Costa Rica</option>
                      <option value="">Cote d'Ivoire</option>
                      <option value="">Croatia</option>
                      <option value="">Cuba</option>
                      <option value="">Cyprus</option>
                      <option value="">Czech Republic</option>
                      <option value="">Denmark</option>
                      <option value="">Djibouti</option>
                      <option value="">Dominica</option>
                      <option value="">Dominican Republic</option>
                      <option value="">Ecuador</option>
                      <option value="">Egypt</option>
                      <option value="">El Salvador</option>
                      <option value="">Equatorial Guinea</option>
                      <option value="">Eritrea</option>
                      <option value="">Estonia</option>
                      <option value="">Eswatini</option>
                      <option value="">Ethiopia</option>
                      <option value="">Fiji</option>
                      <option value="">Finland</option>
                      <option value="">France</option>
                      <option value="">Gabon</option>
                      <option value="">Gambia</option>
                      <option value="">Georgia</option>
                      <option value="">Germany</option>
                      <option value="">Ghana</option>
                      <option value="">Greece</option>
                      <option value="">Grenada</option>
                      <option value="">Guatemala</option>
                      <option value="">Guinea</option>
                      <option value="">Guinea-Bissau</option>
                      <option value="">Guyana</option>
                      <option value="">Haiti</option>
                      <option value="">Honduras</option>
                      <option value="">Hungary</option>
                      <option value="">Iceland</option>
                      <option value="">India</option>
                      <option value="">Indonesia</option>
                      <option value="">Iran</option>
                      <option value="">Iraq</option>
                      <option value="">Ireland</option>
                      <option value="">Israel</option>
                      <option value="">Italy</option>
                      <option value="">Jamaica</option>
                      <option value="">Japan</option>
                      <option value="">Jordan</option>
                      <option value="">Kazakhstan</option>
                      <option value="">Kenya</option>
                      <option value="">Kiribati</option>
                      <option value="">Korea, North</option>
                      <option value="">Korea, South</option>
                      <option value="">Kosovo</option>
                      <option value="">Kuwait</option>
                      <option value="">Kyrgyzstan</option>
                      <option value="">Laos</option>
                      <option value="">Latvia</option>
                      <option value="">Lebanon</option>
                      <option value="">Lesotho</option>
                      <option value="">Liberia</option>
                      <option value="">Libya</option>
                      <option value="">Liechtenstein</option>
                      <option value="">Lithuania</option>
                      <option value="">Luxembourg</option>
                      <option value="">Madagascar</option>
                      <option value="">Malawi</option>
                      <option value="">Malaysia</option>
                      <option value="">Maldives</option>
                      <option value="">Mali</option>
                      <option value="">Malta</option>
                      <option value="">Marshall Islands</option>
                      <option value="">Mauritania</option>
                      <option value="">Mauritius</option>
                      <option value="">Mexico</option>
                      <option value="">Micronesia</option>
                      <option value="">Moldova</option>
                      <option value="">Monaco</option>
                      <option value="">Mongolia</option>
                      <option value="">Montenegro</option>
                      <option value="">Morocco</option>
                      <option value="">Mozambique</option>
                      <option value="">Myanmar</option>
                      <option value="">Namibia</option>
                      <option value="">Nauru</option>
                      <option value="">Nepal</option>
                      <option value="">Netherlands</option>
                      <option value="">New Zealand</option>
                      <option value="">Nicaragua</option>
                      <option value="">Niger</option>
                      <option value="">Nigeria</option>
                      <option value="">North Macedonia</option>
                      <option value="">Norway</option>
                      <option value="">Oman</option>
                      <option value="">Pakistan</option>
                      <option value="">Palau</option>
                      <option value="">Palestine</option>
                      <option value="">Panama</option>
                      <option value="">Papua New Guinea</option>
                      <option value="">Paraguay</option>
                      <option value="">Peru</option>
                      <option value="">Philippines</option>
                      <option value="">Poland</option>
                      <option value="">Portugal</option>
                      <option value="">Qatar</option>
                      <option value="">Romania</option>
                      <option value="">Russia</option>
                      <option value="">Rwanda</option>
                      <option value="">Saint Kitts and Nevis</option>
                      <option value="">Saint Lucia</option>
                      <option value="">Saint Vincent and the Grenadines</option>
                      <option value="">Samoa</option>
                      <option value="">San Marino</option>
                      <option value="">Sao Tome and Principe</option>
                      <option value="">Saudi Arabia</option>
                      <option value="">Senegal</option>
                      <option value="">Serbia</option>
                      <option value="">Seychelles</option>
                      <option value="">Sierra Leone</option>
                      <option value="">Singapore</option>
                      <option value="">Slovakia</option>
                      <option value="">Slovenia</option>
                      <option value="">Solomon Islands</option>
                      <option value="">Somalia</option>
                      <option value="">South Africa</option>
                      <option value="">South Sudan</option>
                      <option value="">Spain</option>
                      <option value="">Sri Lanka</option>
                      <option value="">Sudan</option>
                      <option value="">Suriname</option>
                      <option value="">Sweden</option>
                      <option value="">Switzerland</option>
                      <option value="">Syria</option>
                      <option value="">Taiwan</option>
                      <option value="">Tajikistan</option>
                      <option value="">Tanzania</option>
                      <option value="">Thailand</option>
                      <option value="">Timor-Leste</option>
                      <option value="">Togo</option>
                      <option value="">Tonga</option>
                      <option value="">Trinidad and Tobago</option>
                      <option value="">Tunisia</option>
                      <option value="">Turkey</option>
                      <option value="">Turkmenistan</option>
                      <option value="">Tuvalu</option>
                      <option value="">Uganda</option>
                      <option value="">Ukraine</option>
                      <option value="">United Arab Emirates</option>
                      <option value="">United Kingdom</option>
                      <option value="">United States</option>
                      <option value="">Uruguay</option>
                      <option value="">Uzbekistan</option>
                      <option value="">Vanuatu</option>
                      <option value="">Vatican City</option>
                      <option value="">Venezuela</option>
                      <option value="">Vietnam</option>
                      <option value="">Yemen</option>
                      <option value="">Zambia</option>
                      <option value="">Zimbabwe</option>
                    </select>
                  </div>
                  {/* ::::select year */}
                  <div className="my-1 ml-3 mr-6">
                    {/* <label htmlFor="address" className="text-xs font-semibold text-gray-500">Postal Code</label> */}
                    <select
                      name="year"
                      id="year"
                      className={`form-select p-3  mt-14 shadow-sm rounded text-black border-black-500 border-2 bg-gray-50 text-sm cursor-pointer focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ml-[-3px]`}>
                      <option value="" selected>
                        Select City
                      </option>
                      <option value="">Abu Dhabi</option>
                      <option value="">Addis Ababa</option>
                      <option value="">Adelaide</option>
                      <option value="">Algiers</option>
                      <option value="">Amsterdam</option>
                      <option value="">Ankara</option>
                      <option value="">Antananarivo</option>
                      <option value="">Asunción</option>
                      <option value="">Athens</option>
                      <option value="">Atlanta</option>
                      <option value="">Auckland</option>
                      <option value="">Baghdad</option>
                      <option value="">Baku</option>
                      <option value="">Baltimore</option>
                      <option value="">Bangkok</option>
                      <option value="">Barcelona</option>
                      <option value="">Beijing</option>
                      <option value="">Beirut</option>
                      <option value="">Belfast</option>
                      <option value="">Belgrade</option>
                      <option value="">Berlin</option>
                      <option value="">Birmingham</option>
                      <option value="">Bogotá</option>
                      <option value="">Bratislava</option>
                      <option value="">Brisbane</option>
                      <option value="">Brussels</option>
                      <option value="">Bucharest</option>
                      <option value="">Budapest</option>
                      <option value="">Buenos Aires</option>
                      <option value="">Cairo</option>
                      <option value="">Calgary</option>
                      <option value="">Cape Town</option>
                      <option value="">Caracas</option>
                      <option value="">Casablanca</option>
                      <option value="">Chicago</option>
                      <option value="">Copenhagen</option>
                      <option value="">Dakar</option>
                      <option value="">Dallas</option>
                      <option value="">Damascus</option>
                      <option value="">Dar es Salaam</option>
                      <option value="">Delhi</option>
                      <option value="">Denver</option>
                      <option value="">Dhaka</option>
                      <option value="">Doha</option>
                      <option value="">Dubai</option>
                      <option value="">Dublin</option>
                      <option value="">Durban</option>
                      <option value="">Edinburgh</option>
                      <option value="">Frankfurt</option>
                      <option value="">Geneva</option>
                      <option value="">Guatemala City</option>
                      <option value="">Hanoi</option>
                      <option value="">Harare</option>
                      <option value="">Havana</option>
                      <option value="">Helsinki</option>
                      <option value="">Ho Chi Minh City</option>
                      <option value="">Hong Kong</option>
                      <option value="">Houston</option>
                      <option value="">Istanbul</option>
                      <option value="">Jakarta</option>
                      <option value="">Jeddah</option>
                      <option value="">Jerusalem</option>
                      <option value="">Johannesburg</option>
                      <option value="">Karachi</option>
                      <option value="">Kiev</option>
                      <option value="">Kigali</option>
                      <option value="">Kingston</option>
                      <option value="">Kinshasa</option>
                      <option value="">Kuala Lumpur</option>
                      <option value="">Kuwait City</option>
                      <option value="">Lagos</option>
                      <option value="">Lahore</option>
                      <option value="">Lima</option>
                      <option value="">Lisbon</option>
                      <option value="">London</option>
                      <option value="">Los Angeles</option>
                      <option value="">Luanda</option>
                      <option value="">Lusaka</option>
                      <option value="">Luxembourg City</option>
                      <option value="">Madrid</option>
                      <option value="">Manama</option>
                      <option value="">Manila</option>
                      <option value="">Maputo</option>
                      <option value="">Marrakech</option>
                      <option value="">Melbourne</option>
                      <option value="">Mexico City</option>
                      <option value="">Miami</option>
                      <option value="">Milan</option>
                      <option value="">Minneapolis</option>
                      <option value="">Minsk</option>
                      <option value="">Montreal</option>
                      <option value="">Moscow</option>
                      <option value="">Mumbai</option>
                      <option value="">Munich</option>
                      <option value="">Nairobi</option>
                      <option value="">Naples</option>
                      <option value="">New Delhi</option>
                      <option value="">New Orleans</option>
                      <option value="">New York City</option>
                      <option value="">Osaka</option>
                      <option value="">Oslo</option>
                      <option value="">Ottawa</option>
                      <option value="">Paris</option>
                      <option value="">Perth</option>
                      <option value="">Philadelphia</option>
                      <option value="">Phnom Penh</option>
                      <option value="">Phoenix</option>
                      <option value="">Prague</option>
                      <option value="">Quito</option>
                      <option value="">Rabat</option>
                      <option value="">Reykjavik</option>
                      <option value="">Rio de Janeiro</option>
                      <option value="">Riyadh</option>
                      <option value="">Rome</option>
                      <option value="">San Francisco</option>
                      <option value="">Santiago</option>
                      <option value="">São Paulo</option>
                      <option value="">Seattle</option>
                      <option value="">Seoul</option>
                      <option value="">Shanghai</option>
                      <option value="">Singapore</option>
                      <option value="">Stockholm</option>
                      <option value="">Sydney</option>
                      <option value="">Taipei</option>
                      <option value="">Tashkent</option>
                      <option value="">Tbilisi</option>
                      <option value="">Tehran</option>
                      <option value="">Tel Aviv</option>
                      <option value="">Tokyo</option>
                      <option value="">Toronto</option>
                      <option value="">Vancouver</option>
                      <option value="">Vienna</option>
                      <option value="">Warsaw</option>
                      <option value="">Washington, D.C.</option>
                      <option value="">Wellington</option>
                      <option value="">Windhoek</option>
                      <option value="">Yangon</option>
                      <option value="">Zagreb</option>
                      <option value="">Zurich</option>
                    </select>
                  </div>
                  {/* ::::security code */}
                  <div className="relative mt-4">
                    <label
                      htmlFor="address"
                      className="text-base font-semibold text-gray-500 ">
                      Postal Code
                    </label>
                    <label
                      htmlFor="security-code"
                      className="text-base sr-only">
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="security-code"
                      name="Postal Code"
                      placeholder="Postal Code"
                      className="text-black text-opacity-45 mt-4  block p-3.5 text-sm border-black-500 border-2 placeholder-gray-300  rounded shadow-sm form-input w-36 bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-gray-500"
                    />
                    <button className="absolute inline-flex items-center justify-center text-gray-400 transform -translate-y-1/2 top-1/2 -right-6 hover:text-gray-600">
                      <InformationCircleIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              {/* :::Card name */}
            </form>

            {/* ::Info */}

            <p className="mt-10 text-sm font-semibold text-center text-gray-500">
              <label className="flex items-center">
                <img
                  src="https://s3.amazonaws.com/freestock-prod/450/freestock_574736791.jpg"
                  className="w-6 h-6"
                />
                <span className="ml-2">
                  By placing this order you agree to the{" "}
                  <a
                    href="#link"
                    className="text-indigo-400 underline hover:text-indigo-600 whitespace-nowrap">
                    Terms and Conditions
                  </a>
                </span>
              </label>
            </p>

            {/* ::Submit Button */}
            <button
              type="submit"
              className="mt-4 py-2.5 px-4 w-full inline-flex justify-center items-center rounded bg-black bg-opacity-70 text-base sm:text-lg text-white text-opacity-90 font-semibold tracking-wide hover:text-black hover:bg-opacity-70 hover:border-black hover:border-2 hover:border-opacity-40 hover:bg-gray-500 hover:text-opacity-100">
              <LockClosedIcon className="w-5 h-5 mr-3" />
              Place Order
            </button>
          </div>
        </div>

        {/* :RECAP CONTAINER */}
        <div className="relative flex flex-col py-6 pl-8 pr-4 col-span-full lg:col-span-4 sm:py-12 lg:py-24">
          {/* ::Title */}
          <h2 className="sr-only">Order summary</h2>

          {/* ::Background Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt=""
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 w-full h-full opacity-75 bg-gradient-to-t from-black to-gray-400" />
          </div>

          {/* ::Order Summary */}
          <div className="relative">
            {/* :::Item list */}
            <ul className="space-y-5">
              {order.items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  {/* ::::item infos */}
                  <div className="inline-flex">
                    <img src={item.picture} alt="" className="max-h-16" />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="text-sm font-medium text-white text-opacity-80">
                        {item.details}
                      </p>
                    </div>
                  </div>
                  {/* ::::item price */}
                  <p className="text-sm font-semibold text-white">{`$${item.price.toFixed(
                    2
                  )}`}</p>
                </li>
              ))}
            </ul>
            {/* :::Separation */}
            <div className="my-5 w-full h-0.5 bg-white bg-opacity-30" />
            {/* :::Total */}
            <div className="space-y-2">
              {/* ::::total price */}
              <p className="flex justify-between text-lg font-bold text-white">
                <span>Total price:</span>
                <span>{`$${order.total.toFixed(2)}`}</span>
              </p>
              {/* ::::vat */}
              <p className="flex justify-between text-sm font-medium text-white">
                <span>Vat: 20%</span>
                <span>{`$${order.vat.toFixed(2)}`}</span>
              </p>
            </div>
          </div>

          {/* ::Contact Infos */}
          <div className="relative mt-10 text-white">
            <h3 className="mb-5 text-lg font-bold">Hotline</h3>
            <p className="text-sm font-semibold">
              +01 23 456 789 <span className="font-light">(International)</span>
            </p>

            <p className="mt-3 text-sm font-semibold">
              +92 313-3960313 <span className="font-light">(Pakistan)</span>
            </p>

            <p className="mt-3 text-sm font-semibold">
              +9(876) 543 210 <span className="font-light">(USA / Canada)</span>
            </p>
            <p className="mt-3 text-xs font-medium">
              (24/7 English phone support for online payment related issues)
            </p>
          </div>

          {/* ::Guarantee */}
          <div className="relative flex mt-10">
            <BadgeCheckIcon className="w-10 h-10 mr-3 text-yellow-400" />
            <p className="flex flex-col">
              <span className="text-sm font-bold text-white">
                Money Back Guarantee
              </span>
              <span className="text-xs font-medium text-white">
                within 30 days of purchase
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
