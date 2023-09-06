import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Myimg from "./logo.png";
import Product_cart from "./Product_cart";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Avatar,
  Spinner,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  HomeIcon,
  MenuAlt1Icon,
  XIcon,
  LocationMarkerIcon,
  ChatIcon,
  UsersIcon,
  FolderIcon,
  CubeIcon,
  ArrowNarrowUpIcon,
  EmojiHappyIcon,
  PuzzleIcon,
  GiftIcon,
  DeviceMobileIcon,
  CogIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  LogoutIcon,
  AtSymbolIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";
import { Link, useLocation, useParams } from "react-router-dom";
import Brand_Nav from "./Brand_Nav";
import { useStateContext } from "./StateContext";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-white",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  lime: "bg-blue-100 text-blue-100",
};

// =============================================================================================================
// Login dropdown

function ProfileMenu() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const profileMenuItems = [
    {
      label: user.name,
      icon: UserCircleIcon,
    },
    {
      label: user.email,
      icon: AtSymbolIcon,
    },
    {
      label: "Sign Out",
      icon: LogoutIcon,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="h-8 w-8 border border-gray-900 p-0.5"
            src={user.picture}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                if (label === "Sign Out") {
                  localStorage.removeItem("alertShown"); // Remove the alertShown item
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                } else {
                  closeMenu();
                }
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}>
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// ========================================================================================================

function NavListMenu() {
  // const { brandType, brands } = Brand_Nav();

  const navListMenuItems = [
    {
      color: "blue",
      icon: DesktopComputerIcon,
      title: "Apple",
      description: "Seamless blend of innovation and aesthetics in laptops.",
    },
    {
      color: "orange",
      icon: DesktopComputerIcon,
      title: "Dell",
      description: "Reliable and versatile laptops catering to diverse needs.",
    },
    {
      color: "green",
      icon: DesktopComputerIcon,
      title: (
        <div className="flex items-center gap-1">
          Toshiba{" "}
          <Chip
            size="sm"
            color="green"
            variant="blue"
            value="Sale!"
            className="capitalize"
          />
        </div>
      ),
      description: "Innovative laptops with a balance of performance and style",
    },
    {
      color: "blue-gray",
      icon: DesktopComputerIcon,
      title: "HP",
      description: "Performance and innovation in one package.",
    },
    {
      color: "purple",
      icon: DesktopComputerIcon,
      title: "Lenovo",
      description: "Smart, reliable, and stylish computing solutions.",
    },
    {
      color: "teal",
      icon: DesktopComputerIcon,
      title: "ASUS",
      description: "Innovative technology for every need",
    },
    {
      color: "cyan",
      icon: DesktopComputerIcon,
      title: "Acer",
      description: "Affordable and reliable computing solutions",
    },
    {
      color: "pink",
      icon: DesktopComputerIcon,
      title: "LG",
      description:
        "Sleek design and reliable performance for various computing needs",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href={`/cards/laptop/${title}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="white"
              className="flex items-center text-sm">
              {title}
            </Typography>
            <Typography variant="small" color="white" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}>
        <MenuHandler>
          <button className="mx-5 group relative px-5 py-2.5 inline-block text-base text-purple-800 font-medium tracking-wide active:top-0.5 active:outline-none focus:outline-none">
            <Typography
              as="div"
              variant="small"
              color="white"
              className="hover:text-black hover:font-bold block translate-3d-14 group-hover:translate-3d-h-14 font-normal">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
                <CubeIcon className="h-[18px] w-[18px]" />
                Brands
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
            <span
              className="absolute -bottom-1 -top-1 -right-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-20 duration-200 origin-top group-hover:scale-3d-111 group-hover:delay-100 group-hover:duration-200 group-hover:origin-bottom"
              aria-hidden="true"
            />
            <span
              className="absolute -top-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform delay-200 duration-150 ease-linear origin-left group-hover:scale-3d-111 group-hover:delay-200 group-hover:duration-150 group-hover:origin-right"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 -top-1 -left-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-350 duration-150 ease-linear origin-bottom group-hover:scale-3d-111 group-hover:delay-350 group-hover:duration-200 group-hover:origin-top"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform duration-100 origin-right group-hover:scale-3d-111 group-hover:delay-500 group-hover:duration-500 group-hover:origin-left"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-1 left-3.5 right-3.5 h-1 bg-gradient-to-br from-blue-100 to-white transition-after-14 origin-left group-hover:scale-3d-011 group-hover:-right-1 group-hover:-left-1 group-hover:origin-right group-hover:transition-after-h-14"
              aria-hidden="true"
            />
          </button>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block bg-black/50 border-none ">
          <ul className="grid grid-cols-4 gap-y-2 ">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <button className="mx-5 group relative px-5 py-2.5 inline-block text-base text-purple-800 font-medium tracking-wide active:top-0.5 active:outline-none focus:outline-none">
        <Typography
          as="a"
          href="/home/laptop"
          variant="small"
          color="white"
          className="hover:text-black hover:font-bold block translate-3d-14 group-hover:translate-3d-h-14 font-normal">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <HomeIcon className="h-[18px] w-[18px]" />
            Home
          </ListItem>
        </Typography>
        <span
          className="absolute -bottom-1 -top-1 -right-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-20 duration-200 origin-top group-hover:scale-3d-111 group-hover:delay-100 group-hover:duration-200 group-hover:origin-bottom"
          aria-hidden="true"
        />
        <span
          className="absolute -top-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform delay-200 duration-150 ease-linear origin-left group-hover:scale-3d-111 group-hover:delay-200 group-hover:duration-150 group-hover:origin-right"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -top-1 -left-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-350 duration-150 ease-linear origin-bottom group-hover:scale-3d-111 group-hover:delay-350 group-hover:duration-200 group-hover:origin-top"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform duration-100 origin-right group-hover:scale-3d-111 group-hover:delay-500 group-hover:duration-500 group-hover:origin-left"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 left-3.5 right-3.5 h-1 bg-gradient-to-br from-blue-100 to-white transition-after-14 origin-left group-hover:scale-3d-011 group-hover:-right-1 group-hover:-left-1 group-hover:origin-right group-hover:transition-after-h-14"
          aria-hidden="true"
        />
      </button>
      <NavListMenu />
      <button className="mx-5 group relative px-5 py-2.5 inline-block text-base text-purple-800 font-medium tracking-wide active:top-0.5 active:outline-none focus:outline-none">
        <Typography
          as="a"
          href="/aboutus/laptop"
          variant="small"
          color="white"
          className="hover:text-black hover:font-bold block translate-3d-14 group-hover:translate-3d-h-14 font-normal">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            About
          </ListItem>
        </Typography>
        <span
          className="absolute -bottom-1 -top-1 -right-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-20 duration-200 origin-top group-hover:scale-3d-111 group-hover:delay-100 group-hover:duration-200 group-hover:origin-bottom"
          aria-hidden="true"
        />
        <span
          className="absolute -top-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform delay-200 duration-150 ease-linear origin-left group-hover:scale-3d-111 group-hover:delay-200 group-hover:duration-150 group-hover:origin-right"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -top-1 -left-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-350 duration-150 ease-linear origin-bottom group-hover:scale-3d-111 group-hover:delay-350 group-hover:duration-200 group-hover:origin-top"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform duration-100 origin-right group-hover:scale-3d-111 group-hover:delay-500 group-hover:duration-500 group-hover:origin-left"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 left-3.5 right-3.5 h-1 bg-gradient-to-br from-blue-100 to-white transition-after-14 origin-left group-hover:scale-3d-011 group-hover:-right-1 group-hover:-left-1 group-hover:origin-right group-hover:transition-after-h-14"
          aria-hidden="true"
        />
      </button>
      <button className="mx-5 group relative px-5 py-2.5 inline-block text-base text-purple-800 font-medium tracking-wide active:top-0.5 active:outline-none focus:outline-none">
        <Typography
          as="a"
          href="/contactus/laptop"
          variant="small"
          color="white"
          className="hover:text-black hover:font-bold block translate-3d-14 group-hover:translate-3d-h-14 font-normal">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <UserCircleIcon className="h-[18px] w-[18px]" />
            Contact Us
          </ListItem>
        </Typography>
        <span
          className="absolute -bottom-1 -top-1 -right-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-20 duration-200 origin-top group-hover:scale-3d-111 group-hover:delay-100 group-hover:duration-200 group-hover:origin-bottom"
          aria-hidden="true"
        />
        <span
          className="absolute -top-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform delay-200 duration-150 ease-linear origin-left group-hover:scale-3d-111 group-hover:delay-200 group-hover:duration-150 group-hover:origin-right"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -top-1 -left-1 w-1 bg-gradient-to-br from-blue-100 to-white scale-3d-101 transition-transform delay-350 duration-150 ease-linear origin-bottom group-hover:scale-3d-111 group-hover:delay-350 group-hover:duration-200 group-hover:origin-top"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 -left-1 -right-1 h-1 bg-gradient-to-br from-blue-100 to-white scale-3d-011 transition-transform duration-100 origin-right group-hover:scale-3d-111 group-hover:delay-500 group-hover:duration-500 group-hover:origin-left"
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-1 left-3.5 right-3.5 h-1 bg-gradient-to-br from-blue-100 to-white transition-after-14 origin-left group-hover:scale-3d-011 group-hover:-right-1 group-hover:-left-1 group-hover:origin-right group-hover:transition-after-h-14"
          aria-hidden="true"
        />
      </button>
    </List>
  );
}

export default function My_Navbar1() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar
        style={{ backgroundColor: "#000d1a" }}
        className="shadow-lg mx-auto max-w-screen-xl px-4 py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Typography
            color="white"
            as="a"
            href="/home/laptop"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2">
            <img className="h-8" src={Myimg} alt="logo" />
          </Typography>
          <div className="hidden gap-4 lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mt-1 cursor-pointer text-blue-100 hover:fill-red-700 hover:text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            {/* <Link to="/cart"> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mt-1 cursor-pointer text-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setShowCart(true)}>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {/* </Link> */}
            <span class="flex absolute mt-0 ml-[55px]">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              <span className="text-white text-xs -ml-[9px] -mt-[2px] relative">
                {totalQuantities}
              </span>
            </span>
            {/* <Link to="/login"> */}
            {isAuthenticated ? (
              <ProfileMenu />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 cursor-pointer mt-1 text-blue-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => loginWithRedirect()}>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            )}

            {/* </Link> */}
          </div>
          <IconButton
            variant="text"
            className="text-blue-100 lg:hidden"
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <XIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <MenuAlt1Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full justify-center items-center gap-6 lg:hidden">
            <Button variant="gradient" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-100 hover:fill-red-700 hover:text-red-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </Button>
            <Button variant="gradient" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-blue-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setShowCart(true)}>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </Button>
            {/* <Link to="/login"> */}
            <Button variant="gradient" size="sm">
              {isAuthenticated ? (
                <ProfileMenu />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-blue-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => loginWithRedirect()}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )}
            </Button>
            {/* </Link> */}
          </div>
        </Collapse>
      </Navbar>
      {showCart && <Product_cart />}
    </>
  );
}
