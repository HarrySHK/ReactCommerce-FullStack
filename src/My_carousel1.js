import { Carousel, Typography, Button } from "@material-tailwind/react";
import Trending_products from "./Trending_products";
import { Link } from "react-router-dom";
import My_Navbar1 from "./navbar1";
import Searchbar1 from "./Searchbar1";
import My_Footer1 from "./footer1";
import Trending_products1 from "./Trending_products1";

function My_carousel1() {
  return (
    <>
      <My_Navbar1 />
      <Searchbar1 />
      <div className="flex justify-center items-center">
        <Carousel
          className="rounded-xl w-[1400px] h-[500px]"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1558864559-ed673ba3610b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  Apple
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-90">
                  Apple laptops, known for their premium design and M1
                  chip-powered performance, offer a seamless macOS experience.
                  Their longevity justifies the investment, making them a choice
                  for discerning users.
                </Typography>
                <div className="flex justify-center gap-2">
                  {/* <Link to="/cards"> */}
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                  {/* </Link> */}
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  DELL
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-90">
                  Dell laptops cater to various budgets and needs, offering
                  durability, customization, and reliable performance. Strong
                  support services add to their appeal, ensuring peace of mind.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link to="/cards/laptop/Dell">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                  </Link>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  HP
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-90">
                  HP laptops balance affordability with reliability, offering a
                  range of configurations for diverse users. Their innovations
                  in design and extended battery life provide versatility and
                  productivity, making them suitable for various lifestyles.
                </Typography>
                <div className="flex justify-center gap-2">
                  {/* <Link to="/cards"> */}
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                  {/* </Link> */}
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <Trending_products1 />
      <My_Footer1 />
    </>
  );
}

export default My_carousel1;
