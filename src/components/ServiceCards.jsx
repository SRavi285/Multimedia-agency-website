import { useState } from 'react';

const ServiceCards = () => {
  const productsData =
    [
      {
        "id": 1,
        "title": "Portfolio Design",
        "description": "Create stunning portfolios to showcase your work.",
        "image": "https://img.freepik.com/free-vector/flat-design-portfolio-template_23-2151032742.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/portfolio"
      },
      {
        "id": 2,
        "title": "Digital Marketing",
        "description": "Comprehensive digital marketing strategies to grow your business.",
        "image": "https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/digital-marketing"
      },
      {
        "id": 3,
        "title": "Graphic Design",
        "description": "Unique graphic designs tailored to your brand identity.",
        "image": "https://img.freepik.com/free-vector/design-concept-illustration-idea-style-creativity-projects_613284-3229.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/graphic-design"
      },
      {
        "id": 4,
        "title": "UI/UX Design",
        "description": "Intuitive UI/UX designs for better user engagement.",
        "image": "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038912.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/ui-ux-design"
      },
      {
        "id": 5,
        "title": "Web Development",
        "description": "Responsive and functional websites to boost your online presence.",
        "image": "https://img.freepik.com/premium-photo/web-developer_127934-40290.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/web-development"
      },
      {
        "id": 6,
        "title": "SEO Services",
        "description": "Optimize your website to rank higher in search engine results.",
        "image": "https://img.freepik.com/premium-photo/3d-seo-optimization-promotion-web-browser-digital-marketing-concept_1237084-100341.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/seo-services"
      },
      {
        "id": 7,
        "title": "Content Creation",
        "description": "Engaging content to attract and retain your audience.",
        "image": "https://img.freepik.com/free-photo/media-journalism-global-daily-news-content-concept_53876-123733.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/content-creation"
      },
      {
        "id": 8,
        "title": "Social Media Management",
        "description": "Manage your social media presence effectively.",
        "image": "https://img.freepik.com/premium-photo/social-media-marketing-concept-marketing-with-applications_1237084-103519.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/social-media-management"
      },
      {
        "id": 9,
        "title": "Email Marketing",
        "description": "Targeted email campaigns to engage your customers.",
        "image": "https://img.freepik.com/free-photo/letter-envelop-message-notification-concept_53876-13786.jpg?size=626&ext=jpg&ga=GA1.2.1627237834.1706810793&semt=ais_hybrid",
        "link": "/email-marketing"
      },
      {
        "id": 10,
        "title": "Branding",
        "description": "Develop a strong brand identity to stand out in the market.",
        "image": "https://img.freepik.com/premium-photo/corporate-management-strategy-solution-branding-concept_1108314-381114.jpg?ga=GA1.1.1627237834.1706810793&semt=ais_hybrid",
        "link": "/branding"
      }
    ]

  const [products] = useState(productsData)


  return (
    <section className="mx-auto py-4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:border hover:border-[#EA738D]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-[#EA738D] font-semibold mb-2">{product.title}</h2>
              <p className="text-black">{product.description}</p>
            </div>
            <div className="p-4 border-t flex justify-between">
              <a href='/' className="px-4 text-lg bg-[#77a50c] text-white py-2 rounded-lg font-semibold hover:bg-[#5e840b] transition-colors duration-300
              
              ">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
