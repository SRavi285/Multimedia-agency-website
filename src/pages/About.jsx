

const About = () => {
  return (
    <section>
      <div className="text-3xl font-bold text-center mb-8"> About Us</div>
      <div className="container m-auto py-12 px-6 bg-[#f7f7f7] rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#B85042]">Welcome to Multimedia Agency</h1>
        <p className="text-lg text-center mb-10 text-gray-700">
          At Multimedia Agency, we are passionate about bringing your ideas to life through innovative and engaging multimedia solutions. Our team of creative professionals specializes in a wide range of services, from graphic design and video production to digital marketing and web development.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-[#EA738D]">Our Mission</h2>
        <p className="mb-8 text-gray-600">
          Our mission is to empower businesses and individuals by providing high-quality multimedia services that captivate audiences and drive results. We believe in the power of storytelling and creativity to connect brands with their customers.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-[#EA738D]">Our Vision</h2>
        <p className="mb-8 text-gray-600">
          We envision a world where every brand can effectively communicate its message and value through compelling multimedia content. Our goal is to be at the forefront of the multimedia industry, setting trends and delivering exceptional results for our clients.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-[#EA738D]">What We Offer</h2>
        <ul className="list-disc list-inside mb-8 text-gray-600">
          <li><strong>Graphic Design:</strong> Stunning graphics that resonate with your brand identity, from logos and brochures to social media posts.</li>
          <li><strong>Video Production:</strong> High-quality videos that tell your story, including scripting, shooting, editing, and post-production.</li>
          <li><strong>Digital Marketing:</strong> Tailored strategies to enhance your online presence, including SEO, content marketing, and social media management.</li>
          <li><strong>Web Development:</strong> Responsive websites that not only look great but also function seamlessly for user-friendly experiences.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-6 text-[#EA738D]">Our Process</h2>
        <ol className="list-decimal list-inside mb-8 text-gray-600">
          <li><strong>Consultation:</strong> Understanding your needs, goals, and challenges through thorough research.</li>
          <li><strong>Strategy Development:</strong> A comprehensive strategy outlining project scope, objectives, and timeline.</li>
          <li><strong>Execution:</strong> Our team brings the strategy to life while maintaining open communication.</li>
          <li><strong>Review & Launch:</strong> Thorough reviews to ensure quality before launching the final product.</li>
        </ol>

        <h2 className="text-3xl font-semibold mb-6 text-[#EA738D]">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-8 text-gray-600">
          <li><strong>Experienced Team:</strong> Skilled professionals with years of experience in their fields.</li>
          <li><strong>Client-Centric Approach:</strong> We prioritize your needs and work closely with you.</li>
          <li><strong>Innovative Solutions:</strong> We provide cutting-edge solutions based on industry trends.</li>
          <li><strong>Affordable Pricing:</strong> Competitive pricing without compromising quality.</li>
        </ul>

        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-[#B85042] mb-4">Get in Touch</h3>
          <p className="mb-2 text-gray-600">Ready to elevate your brand with multimedia solutions? Contact us today!</p>
          <p className="text-gray-600">Email: <a href="mailto:info@multimediaagency.com" className="text-[#EA738D]">info@multimediaagency.com</a></p>
          <p className="text-gray-600">Phone: <span className="text-[#EA738D]">(123) 456-7890</span></p>
        </div>
      </div>
    </section>
  );
};

export default About;
