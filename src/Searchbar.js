import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, ListItem, Card } from "@material-tailwind/react";
import Iphone_Mobile_Data from "./Apple_mobile_data";

function Searchbar() {
  const [search, setSearch] = useState("");
  const filteredContacts = Iphone_Mobile_Data.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  const isSearching = search.trim() !== ""; // Check if search has text
  return (
    <div className="search -mt-6 mb-4">
      <form class="shadow-lg border-4 border-black mt-10 mx-auto max-w-xs md:max-w-xl sm:max-w-md py-2 px-6 rounded-full bg-gray-50 flex focus-within:border-blue-100">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search anything"
          class="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
          name="topic"
        />
        <button class="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-small  border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-blue-100 font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3 hover:bg-white hover:text-black hover:font-extrabold hover:duration-300">
          Search
        </button>
      </form>
      <div className="absolute left-0 right-0 mt-2 max-w-xs md:max-w-xl sm:max-w-md z-50 mx-auto flex justify-center">
        {isSearching && (
          <Card className="shadow-xl bg-black/70 lg:w-[400px] md:w-[400px] sm:w-[300px]">
            <List className="text-center">
              {filteredContacts.map((contact) => (
                <>
                  <hr className="border-t-4 border-blue-100" />
                  <Link to="/cards/mobile/Apple">
                    <ListItem
                      className="text-white hover:bg-black hover:text-white"
                      key={contact.name}>
                      {contact.name}
                    </ListItem>
                  </Link>
                  <hr className="border-t-4 border-blue-100" />
                </>
              ))}
            </List>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
