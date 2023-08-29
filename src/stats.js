export default function My_Stats() {
  return (
    <div className="main">
      <section
        style={{ backgroundColor: "#121821" }}
        class="p-6 py-24 text-gray-100">
        <div class="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3 ">
          <div class="flex flex-col justify-start m-2 lg:m-6">
            <p class="text-4xl font-bold leadi lg:text-6xl">450+</p>
            <p class="text-sm sm:text-base sm:mt-3 lg:mt-3">Clients Dealt</p>
          </div>
          <div class="flex flex-col justify-start m-2 lg:m-6">
            <p class="text-4xl font-bold leadi lg:text-6xl ">86K</p>
            <p class="text-sm sm:text-base sm:mt-3 lg:mt-3">
              Followers on different social media platforms
            </p>
          </div>
          <div class="flex flex-col justify-start m-2 lg:-m-1">
            <p class="text-4xl font-bold leadi lg:text-6xl sm:mt-8">4.5</p>
            <p class="text-sm sm:text-base sm:mt-3 lg:mt-3">
              Star Rating on PlayStore
            </p>
          </div>

          <div class="flex flex-col justify-start m-2 lg:m-6 sm:mt-8 lg:mt-10">
            <p class="text-4xl font-bold leadi lg:text-6xl sm:mt-2">36%</p>
            <p class="text-sm sm:text-base sm:mt-3 lg:mt-3">Website visits</p>
          </div>
          <div class="flex flex-col justify-start m-2 lg:m-6 sm:mt-8 lg:mt-10">
            <p class="text-4xl font-bold leadi lg:text-6xl">10+</p>
            <p class="text-sm sm:text-base sm:mt-3 lg:mt-3">
              Years of experience
            </p>
          </div>
          <div class="flex flex-col justify-start m-2 lg:m-6 sm:mt-8 lg:mt-10">
            <p class="text-4xl font-bold leadi lg:text-6xl">8+</p>
            <p class="text-sm sm:text-base sm:mt-3 lg:mt-3">
              Countries Shipments Available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
