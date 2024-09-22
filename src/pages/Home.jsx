const Home = () => {
  return (
    <section className=" h-screen  ">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#B85042]">
          Welcome to Multimedia Agency
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Delivering exceptional creative solutions for your brand
        </p>

        <a
          href="./Services"
          className="px-6 text-lg bg-[#77a50c] text-white py-3 rounded-lg font-semibold hover:bg-[#5e840b] transition-colors duration-300">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Home;
