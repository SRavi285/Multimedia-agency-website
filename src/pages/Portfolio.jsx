
const portfolioItems = [
  {
    id: 1,
    title: "UI/UX Design for Mobile App",
    category: "UI/UX Design",
    image: "https://img.freepik.com/free-vector/template-learning-languages-app-interface_23-2148636705.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
    description: "A clean and intuitive mobile app design focused on improving user experience and engagement."
  },
  {
    id: 2,
    title: "Corporate Website Development",
    category: "Web Development",
    image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241233.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
    description: "Developed a responsive corporate website with modern UI, SEO optimization, and lightning-fast performance."
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    image: "https://img.freepik.com/free-vector/digital-marketing-isometric-concept-with-megaphone_107791-138.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
    description: "An effective digital marketing strategy that boosted online engagement and increased brand visibility."
  },
  {
    id: 4,
    title: "Graphic Design for E-Commerce",
    category: "Graphic Design",
    image: "https://img.freepik.com/free-vector/online-shopping-concept-landing-page_23-2148253518.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
    description: "Designed banners, product images, and promotional materials for an e-commerce platform."
  },
  {
    id: 5,
    title: "Promotional Video Production",
    category: "Video Production",
    image: "https://img.freepik.com/free-vector/video-production-landing-page_52683-76086.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
    description: "Produced a high-quality promotional video that showcased the client's brand story and products."
  },

];

const Portfolio = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Our Portfolio</h1>
      <p className="text-lg text-center mb-8">
        Explore some of our recent work across different categories. From UI/UX design to web development, we deliver high-quality results that drive success for our clients.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
