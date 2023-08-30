import { Carousel, Typography, Button } from "@material-tailwind/react";
import Trending_products from "./Trending_products";
import { Link } from "react-router-dom";

export function My_carousel() {
  return (
    <>
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
              src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  Samsung
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-90">
                  It is not just the exquisite design that defines Samsung's
                  legacy, but the essence of innovation that breathes life into
                  every creation. The amalgamation of cutting-edge technology
                  and artistic craftsmanship produces a symphony that transcends
                  time, reinvigorating weary souls with its enigmatic allure.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link to="/cards">
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
              src="https://images.unsplash.com/photo-1616353071855-2c045c4458ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                  It is not just the aesthetic allure that defines Apple's
                  essence, but the marriage of innovation and sophistication
                  that breathes life into every creation. The fusion of
                  cutting-edge technology and timeless design yields a symphony
                  that rejuvenates weary souls with its ethereal charm.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link to="/cards">
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
              src="https://images.unsplash.com/photo-1659080382102-176e51b4f5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  Google Pixel
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-90">
                  It is not merely the visual splendor that distinguishes Google
                  Pixel, but the fusion of innovation and creativity that
                  breathes vitality into every creation. The harmonious blend of
                  state-of-the-art technology and artistic finesse weaves a
                  tapestry that revitalizes weary souls with its captivating
                  allure.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link to="/cards">
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
        </Carousel>
      </div>
      <Trending_products />
    </>
  );
}
