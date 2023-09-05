import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function My_reviews() {
  const [error, setError] = useState("");
  const [reviewsData, setReviewsData] = useState([]);

  // Commenting out the useEffect to hide the automatic fetch
  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/get_all_reviews"
      );

      if (response.status === 200) {
        const data = await response.json();
        setReviewsData(data); // Store the data in state

        {
          console.log(data.message);
        }
        {
          console.log(reviewsData[0]);
        }
        setReviewsData(data.message);
      } else {
        setError("Error fetching reviews data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fetching reviews data.");
    }
  };

  return (
    <div className="main">
      <section style={{ backgroundColor: "#121821" }} class=" text-gray-100">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid items-center gap-4 xl:grid-cols-5">
            <div class="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 class="text-5xl font-bold">Reviews From Customer</h2>
              <p class="text-gray-400 lg:pt-3 sm:pt-4 text-base">
                Our proudest achievement over the last decade? Countless smiles
                on the faces of our satisfied customers. Your happiness fuels
                our journey, and we're dedicated to delivering exceptional
                phones and laptops that make every moment extraordinary.
              </p>
            </div>
            <div class="p-6 xl:col-span-3">
              <div class="grid gap-4 md:grid-cols-2">
                <div class="grid content-center gap-4">
                  {reviewsData.length > 0 && (
                    <div class="p-6 rounded bg-black/30 shadow-xl">
                      <p className="text-base">
                        {reviewsData[0].review_content}
                      </p>
                      <div class="flex items-center mt-4 space-x-4">
                        <img
                          src="https://www.shareicon.net/data/2016/05/24/770136_man_512x512.png"
                          alt=""
                          class="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div className="pt-7">
                          <p class="text-lg font-semibold">
                            {reviewsData[0].review_user}
                          </p>
                          <p class="text-sm text-gray-400">
                            {reviewsData[0].review_country}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {reviewsData.length > 0 && (
                    <div class="p-6 rounded bg-black/30 shadow-xl">
                      <p className="text-base">
                        {reviewsData[1].review_content}
                      </p>
                      <div class="flex items-center mt-4 space-x-4">
                        <img
                          src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
                          alt=""
                          class="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div className="pt-7">
                          <p class="text-lg font-semibold">
                            {reviewsData[1].review_user}
                          </p>
                          <p class="text-sm text-gray-400">
                            {reviewsData[1].review_country}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {reviewsData.length > 0 && (
                  <div class="grid content-center gap-4">
                    <div class="p-6 rounded bg-black/30 shadow-xl">
                      <p className="text-base">
                        {reviewsData[2].review_content}
                      </p>
                      <div class="flex items-center mt-4 space-x-4">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU"
                          alt=""
                          class="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div className="pt-7">
                          <p class="text-lg font-semibold">
                            {reviewsData[2].review_user}
                          </p>
                          <p class="text-sm text-gray-400">
                            {reviewsData[2].review_country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="p-6 rounded bg-black/30 shadow-xl">
                      <p className="text-base">
                        {reviewsData[3].review_content}
                      </p>
                      <div class="flex items-center mt-4 space-x-4">
                        <img
                          src="https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png"
                          alt=""
                          class="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div className="pt-7">
                          <p class="text-lg font-semibold">
                            {reviewsData[3].review_user}
                          </p>
                          <p class="text-sm text-gray-400">
                            {reviewsData[3].review_country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
