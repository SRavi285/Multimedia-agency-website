
const ProjectDetails = () => {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity for XYZ Corporation',
      description: `We developed a cohesive brand identity for XYZ Corporation, including logo design, color schemes, and typography guidelines. Our creative team focused on ensuring the brand reflects the company's vision and values.`,
      image: 'https://img.freepik.com/free-vector/bones-business-logo_1057-10901.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid',
      services: ['Graphic Design', 'Brand Strategy', 'Logo Design'],
      timeline: '3 Months',
      client: 'XYZ Corporation',
      url: 'https://xyzcorporation.com',
    },
    {
      id: 2,
      title: 'E-commerce Website for ABC Retail',
      description: `Our web development team created a fully responsive e-commerce platform for ABC Retail, featuring user-friendly navigation, seamless checkout processes, and integrated payment gateways.`,
      image: 'https://img.freepik.com/free-vector/landing-page-stores-online-products_23-2148541584.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid',
      services: ['Web Development', 'UI/UX Design', 'E-commerce'],
      timeline: '5 Months',
      client: 'ABC Retail',
      url: 'https://abcretail.com',
    },
    {
      id: 3,
      title: 'Digital Marketing Campaign for FashionHub',
      description: `We launched a digital marketing campaign for FashionHub to increase their online visibility and drive sales. The campaign included SEO, social media marketing, and paid advertisements.`,
      image: 'https://img.freepik.com/premium-photo/young-lady-touching-huge-display-panel-buying-clothes-online-store-standing-blue-studio-background_968529-275405.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid',
      services: ['Digital Marketing', 'SEO', 'Social Media Management'],
      timeline: '6 Months',
      client: 'FashionHub',
      url: 'https://fashionhub.com',
    },
  ];

  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Our Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:border hover:border-[#EA738D]">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#B85042] mb-3">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>

              <ul className="list-disc list-inside text-sm mb-4">
                <li><strong>Services:</strong> {project.services.join(', ')}</li>
                <li><strong>Timeline:</strong> {project.timeline}</li>
                <li><strong>Client:</strong> {project.client}</li>
              </ul>

              <a href="/" className="w-full bg-[#77a50c] text-white py-3 px-3 rounded-lg font-semibold hover:bg-[#5e840b] transition-colors duration-300">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
