import React, { useState } from "react";
import { MailIcon } from "@heroicons/react/outline";
import My_Navbar1 from "./navbar1";
import Searchbar1 from "./Searchbar1";
import My_Footer1 from "./footer1";
import { useAuth0 } from "@auth0/auth0-react";

function Contact1() {
  const { user, isAuthenticated } = useAuth0();
  const [contact_name, setContact_Name] = useState("");
  const [contact_email, setContact_Email] = useState("");
  const [contact_query, setContact_Query] = useState("");
  const [showThankYou, setShowThankYou] = useState(false); // Hiding the initial thanks box

  const Post_contact_info_into_db = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/post_contactus",
        {
          method: "POST",
          body: JSON.stringify({
            contact_name: contact_name,
            contact_email: contact_email,
            contact_query: contact_query,
          }),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);

      // Show the thank you message
      setShowThankYou(true);

      // Hide the thank you message after 2 minutes (120,000 milliseconds)
      setTimeout(() => {
        setShowThankYou(false);
      }, 420000); // 2 minutes in milliseconds
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <My_Navbar1 />
      <Searchbar1 />
      <div style={{ backgroundColor: "#121821" }} className="mb-12">
        <div className="relative w-full mx-auto text-white-700 max-w-7xl">
          <div className="grid grid-cols-2">
            {/* :MAP CONTAINER */}
            <div className="order-1 col-span-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7409892.492375784!2d62.62107892499996!3d24.928268900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338c830594287%3A0x465135664e72cfef!2sIqra%20University%20Gulshan%20Campus%202!5e0!3m2!1sen!2s!4v1693057313305!5m2!1sen!2s"
                title="map"
                scrolling="no"
                frameborder="0"
                width="100%"
                height="300px"
                className=""
                loading="lazy"
              />
            </div>

            {/* :CONTACT FORM CONTAINER */}
            <div className="bg-black/30 order-3 px-6 py-5 md:order-2 col-span-full md:col-span-1 md:py-10">
              <form
                action=""
                className="max-w-xl mx-auto space-y-4"
                onSubmit={Post_contact_info_into_db}>
                {/* ::Name Input */}
                <div>
                  {/* :::label */}
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  {/* :::input */}
                  <input
                    onChange={(e) => setContact_Name(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    value={isAuthenticated ? user.name : contact_name}
                    placeholder="Enter Your Name here"
                    className="block w-full p-2 pt-2 pl-3 text-base placeholder-gray-400 bg-gray-100 border-gray-300 rounded shadow-sm text-black/80 form-input focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  />
                </div>
                {/* ::Email Input */}
                <div>
                  {/* :::label */}
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  {/* :::input */}
                  <input
                    onChange={(e) => setContact_Email(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={isAuthenticated ? user.email : contact_email}
                    className="block w-full p-2 pt-2 pl-3 text-base placeholder-gray-400 bg-gray-100 border-gray-300 rounded shadow-sm text-black/80 form-input focus:border-green-400 focus:ring-1 focus:ring-green-400"
                  />
                </div>
                {/* ::Message Input */}
                <div className="col-span-full">
                  {/* :::label */}
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  {/* :::input */}
                  <textarea
                    onChange={(e) => setContact_Query(e.target.value)}
                    name="message"
                    id="message"
                    cols="30"
                    rows="9"
                    placeholder="How can we help?"
                    className="w-full pt-4 pl-3 text-base placeholder-gray-400 bg-gray-100 border-gray-300 rounded shadow-sm resize-none text-black/80 pad form-textarea focus:border-green-400 focus:ring-green-400"></textarea>
                </div>
                {/* ::Submit Button */}
                <div>
                  <button
                    onClick={() => {
                      if (isAuthenticated) {
                        setContact_Name(user.name);
                        setContact_Email(user.email);
                      } else {
                        setContact_Name(contact_name);
                        setContact_Email(contact_email);
                      }
                    }}
                    type="submit"
                    className="hover:text-blue-900 border-none px-6 py-2 text-base font-semibold text-black uppercase bg-gradient-to-br from-blue-100 to-white rounded-full ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* :CONTACT INFOS CONTAINER */}
            <div className="bg-black/30 shadow-xl order-2 px-6 py-5 md:order-3 col-span-full md:col-span-1 md:py-10">
              <div className="flex flex-col max-w-xl mx-auto space-y-5">
                {/* ::Title Contact Us */}
                <h2 className="text-white text-5xl font-semibold uppercase font-oswald ">
                  Contact us
                </h2>
                {/* ::Text */}
                <p className="text-gray-300 pt-2 leading-loose text-l text-white-700">
                  Feel free to get in touch with us! Whether you prefer a quick
                  message here or want to drop us an email, we're all ears.
                  Reach out and let's start the conversation!
                </p>
                {/* ::Email contact */}
                <a
                  href="#mail"
                  className="inline-flex items-center pt-4 text-sm font-semibold text-blue-400 hover:text-blue-500">
                  <MailIcon className="w-5 mr-2 text-gray-400" />
                  hello@mobtop.com
                </a>
                {/* ::Address */}
                <p className="text-gray-300 pt-4 text-sm leading-6 text-white-700">
                  Bungalow Number 507, <br /> 76500, Karachi
                  <br /> Pakistan
                </p>
                {/* ::Socials */}
                <div className="flex items-center pt-4">
                  {/* :Twitter */}
                  <a
                    href="#twitter"
                    className="m-1.5  w-11 h-11 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125"
                    style={{ backgroundColor: "#1DA1F2" }}>
                    {/* ::twitter svg */}
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  {/* :FACEBOOK */}
                  <a
                    href="#facebook"
                    className="m-1.5  ml-3 w-11 h-11 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                    style={{ backgroundColor: "#4267B2" }}>
                    {/* ::facebook svg */}
                    <svg
                      className="fill-current w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                    </svg>
                  </a>
                  {/* :Instagram */}
                  <a
                    href="#instagrap"
                    className="m-1.5 ml-3 w-11 h-11 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125">
                    {/* ::instagram svg */}
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Thanks Message */}
            {showThankYou && (
              <div className="fixed top-0 left-0 w-full p-4 text-center text-white bg-green-500">
                Thank you for dedicating your valuable time to us! We will be in
                touch with you shortly.
              </div>
            )}
          </div>
        </div>
      </div>
      <My_Footer1 />
    </>
  );
}

export default Contact1;
