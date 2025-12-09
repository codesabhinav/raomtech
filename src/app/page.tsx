import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const demos = [
    { img: 'home01.jpg', title: 'Digital Agency', url: 'https://html.themegenix.com/frisk/' },
    { img: 'home02.jpg', title: 'Creative Agency', url: 'https://html.themegenix.com/frisk/home-2.html' },
    { img: 'home03.jpg', title: 'Design Studio', url: 'https://html.themegenix.com/frisk/home-3.html' },
    { img: 'home04.jpg', title: 'Digital Marketing', url: 'https://html.themegenix.com/frisk/home-4.html' },
    { img: 'home05.jpg', title: 'Modern Agency', url: 'https://html.themegenix.com/frisk/home-5.html' },
    { img: 'home06.jpg', title: 'Creative Studio', url: 'https://html.themegenix.com/frisk/home-6.html', badge: 'TREND' },
    { img: 'home07.jpg', title: 'Startup Agency', url: 'https://html.themegenix.com/frisk/home-7.html' },
    { img: 'home08.jpg', title: 'Personal Portfolio', url: 'https://html.themegenix.com/frisk/home-8.html', badge: 'POPULAR' },
    { img: 'home09.jpg', title: 'Portfolio Showcase', url: 'https://html.themegenix.com/frisk/home-9.html', badge: 'NEW v.1.5' },
    { img: 'home10.jpg', title: 'Interactive Link', url: 'https://html.themegenix.com/frisk/home-10.html', badge: 'NEW v.1.5' },
    { img: 'home11.jpg', title: 'Showcase Carousel', url: 'https://html.themegenix.com/frisk/home-11.html', badge: 'NEW v.2.0' },
    { img: 'home12.jpg', title: 'Full Screen Slider', url: 'https://html.themegenix.com/frisk/home-12.html', badge: 'NEW v.2.0' },
    { img: 'home13.jpg', title: 'Branding Agency', url: 'https://html.themegenix.com/frisk/home-13.html', badge: 'NEW v.3.0' },
    { img: 'home14.jpg', title: 'Marketing Agency', url: 'https://html.themegenix.com/frisk/home-14.html', badge: 'NEW v.3.0' },
    { img: 'home15.jpg', title: 'Web Studio', url: 'https://html.themegenix.com/frisk/home-15.html', badge: 'NEW v.3.0' },
    { img: 'home16.jpg', title: 'Agency Classic', url: 'https://html.themegenix.com/frisk/home-16.html', badge: 'NEW v.3.0' },
    { img: 'home17.jpg', title: 'AI Startup', url: 'https://html.themegenix.com/frisk/home-17.html', badge: 'NEW v.3.0' },
    { img: 'home18.jpg', title: 'WooCommerce Home', url: 'https://html.themegenix.com/frisk/home-18.html', badge: 'NEW v.3.0' },
  ];

  const innerDemos = [
    { img: 'inner_demo01.jpg', url: 'https://html.themegenix.com/frisk/project.html' },
    { img: 'inner_demo02.jpg', url: 'https://html.themegenix.com/frisk/about.html' },
    { img: 'inner_demo03.jpg', url: 'https://html.themegenix.com/frisk/service-details.html' },
    { img: 'inner_demo04.jpg', url: 'https://html.themegenix.com/frisk/service.html' },
    { img: 'inner_demo05.jpg', url: 'https://html.themegenix.com/frisk/blog.html' },
    { img: 'inner_demo06.jpg', url: 'https://html.themegenix.com/frisk/team-details.html' },
    { img: 'inner_demo07.jpg', url: 'https://html.themegenix.com/frisk/pricing.html' },
    { img: 'inner_demo08.jpg', url: 'https://html.themegenix.com/frisk/project-6.html' },
    { img: 'inner_demo09.jpg', url: 'https://html.themegenix.com/frisk/project-details.html' },
  ];

  const reviews = [
    [
      { title: 'Web Development', text: 'RaomTech delivered an exceptional website for our business. The team was professional, responsive, and delivered exactly what we needed. Highly recommended!', author: 'Sarah Johnson' },
      { title: 'Mobile App Development', text: 'Our mobile app exceeded expectations. The development process was smooth and the final product is outstanding. Great work!', author: 'Michael Chen' },
      { title: 'Customer Support', text: 'Outstanding support throughout the entire project. The team at RaomTech is responsive, knowledgeable, and truly cares about delivering quality solutions.', author: 'David Martinez' },
      { title: 'Project Delivery', text: 'RaomTech completed our project on time and within budget. The quality of work is exceptional and the team is a pleasure to work with.', author: 'Emily Thompson' },
      { title: 'Design Quality', text: 'Beautiful, modern designs that perfectly capture our brand identity. The UI/UX is intuitive and user-friendly.', author: 'James Wilson' },
      { title: 'Technical Expertise', text: 'The technical expertise of RaomTech is impressive. They solved complex challenges and delivered a robust solution.', author: 'Lisa Anderson' },
    ],
    [
      { title: 'Full-Stack Development', text: 'RaomTech built our complete web application from scratch. The architecture is solid and the code quality is excellent. Very satisfied!', author: 'Robert Taylor' },
      { title: 'E-commerce Solutions', text: 'Our e-commerce platform is performing exceptionally well. RaomTech understood our requirements and delivered beyond expectations.', author: 'Jennifer Lee' },
      { title: 'Responsive Design', text: 'The website works perfectly on all devices. The responsive design implementation is flawless. Great job!', author: 'Mark Davis' },
      { title: 'API Integration', text: 'Seamless integration with third-party services. The API development and integration work was handled professionally.', author: 'Amanda White' },
      { title: 'Performance Optimization', text: 'Our website loads incredibly fast. The performance optimization work done by RaomTech has significantly improved user experience.', author: 'Chris Brown' },
      { title: 'Maintenance & Support', text: 'Ongoing support has been excellent. RaomTech is always available to help with updates and maintenance.', author: 'Nicole Garcia' },
    ],
    [
      { title: 'Startup Solutions', text: 'As a startup, we needed a reliable development partner. RaomTech delivered a scalable solution that grows with our business.', author: 'Alex Rodriguez' },
      { title: 'Enterprise Development', text: 'RaomTech handled our enterprise-level project with expertise. The solution is robust, secure, and meets all our requirements.', author: 'Patricia Moore' },
      { title: 'UI/UX Design', text: 'The design team at RaomTech created an intuitive and beautiful user interface. Our users love the experience!', author: 'Kevin Jackson' },
      { title: 'Cloud Solutions', text: 'Excellent cloud infrastructure setup and deployment. RaomTech ensured our application is scalable and reliable.', author: 'Rachel Green' },
      { title: 'Agile Development', text: 'The agile development process was well-managed. Regular updates and transparent communication throughout the project.', author: 'Daniel Kim' },
      { title: 'Quality Assurance', text: 'Thorough testing and quality assurance. The final product is bug-free and production-ready. Excellent work!', author: 'Michelle Adams' },
    ],
  ];

  return (
    <>
      <Header />
      
      {/* main-area */}
      <main className="fix">
        {/* banner-area */}
        <section className="banner-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <h1 className="title">Your Vision <br /> Our Revenue Engine</h1>
                  <p>RaomTech is a <span style={{ color: '#FF6B35' }}>top-rated agency</span> building modern mobile apps and high-quality websites.</p>
                </div>
                <div className="banner-img">
                  <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/banner_img01.jpg" alt="img" data-aos="fade-left" data-aos-delay="400" className="aos-init aos-animate" />
                  <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/banner_img02.png" alt="img" data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate" />
                  <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/banner_img03.jpg" alt="img" data-aos="fade-right" data-aos-delay="400" className="aos-init aos-animate" />
                </div>
              </div>
            </div>
          </div>
          <div className="banner-shape">
            <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/banner_shape01.png" alt="" className="rightToLeft" />
          </div>
        </section>
        {/* banner-area-end */}

        {/* features-area */}
        <section id="features" className="features-area">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-7">
                <div className="section-title mb-80">
                  <h2 className="title">Our Services <br /> Web &amp; App Development</h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="section-text mb-80">
                  <p>RaomTech is a leading web &amp; app development agency specializing in creating modern, scalable digital solutions. We deliver cutting-edge websites and mobile applications that drive business growth and enhance user experiences.</p>
                </div>
              </div>
            </div>
            <div className="row gutter-24">
              <div className="col-lg-6 d-none">
                <div className="features-item">
                  <div className="features-img">
                    <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/features_img01.png" alt="img" />
                  </div>
                  <div className="features-content">
                    <h2 className="title">Responsive Web Development</h2>
                    <p>We build responsive websites that work flawlessly across all devices, ensuring optimal user experience on desktop, tablet, and mobile platforms.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none">
                <div className="features-item">
                  <div className="features-img">
                    <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/features_img02.png" alt="img" />
                  </div>
                  <div className="features-content">
                    <h2 className="title">Mobile App Development</h2>
                    <p>We develop native and cross-platform mobile applications for iOS and Android, delivering high-performance apps that engage users and drive business growth.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-item features-item-two">
                  <div className="features-img">
                    <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/features_img03.png" alt="img" />
                  </div>
                  <div className="features-content features-content-two">
                    <h2 className="title">Top Notch <br /> Performance</h2>
                    <p>We build high-performance web and mobile applications with clean, scalable architecture and optimized code that ensures fast loading times and smooth user experiences.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-item features-item-two">
                  <div className="features-img">
                    <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/features_img04.png" alt="img" />
                  </div>
                  <div className="features-content features-content-two">
                    <h2 className="title">Custom Design <br /> Solutions</h2>
                    <p>We create unique, modern designs tailored to your brand identity. From color schemes to UI/UX patterns, every element is crafted to reflect your business vision.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-item features-item-two">
                  <div className="features-img">
                    <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/features_img05.png" alt="img" />
                  </div>
                  <div className="features-content features-content-two">
                    <h2 className="title">Full-Stack <br /> Development</h2>
                    <p>RaomTech provides end-to-end development services from frontend to backend, ensuring seamless integration and robust functionality across all platforms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features-area-end */}

        {/* portfolio-area */}
        <section id="portfolio" className="demo-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center mb-80">
                  <h2 className="count">{demos.length}+</h2>
                  <h2 className="title">Multiple Segments <br /> We Worked</h2>
                  <p>Explore our diverse portfolio showcasing projects across various industries and segments. <br /> We deliver innovative solutions tailored to each client&apos;s unique needs and challenges.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {demos.map((demo, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="demo-item">
                    <div className="demo-img">
                      {/* <a href={demo.url} target="_blank" rel="noopener noreferrer"> */}
                        {/* {demo.badge && <div className="new-demo">{demo.badge}</div>} */}
                        <img src={`/Frisk - Creative Agency & Portfolio HTML Template_files/${demo.img}`} alt="img" />
                      {/* </a> */}
                    </div>
                    <div className="demo-content">
                      <h6 className="title"><a href={demo.url} target="_blank" rel="noopener noreferrer">{demo.title}</a></h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* portfolio-area-end */}

        {/* device-area */}
        <section className="device-area fix pt-140">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-60">
                  <h2 className="title">Looks Amazing <br /> on Any Device</h2>
                  <p>RaomTech builds fully responsive web and mobile applications that automatically adapt to any screen size, <br /> ensuring optimal user experience across all devices and platforms.</p>
                </div>
              </div>
            </div>
            <div className="device-item-wrap mb-60">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="device-item">
                    <div className="icon"><img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_icon01.svg" alt="" /></div>
                    <div className="content">
                      <h4 className="title">1920 x 1080px</h4>
                      <p>Full Screen Layout</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="device-item">
                    <div className="icon"><img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_icon02.svg" alt="" /></div>
                    <div className="content">
                      <h4 className="title">1364 x 768px</h4>
                      <p>Notebook Screen Layout</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="device-item">
                    <div className="icon"><img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_icon03.svg" alt="" /></div>
                    <div className="content">
                      <h4 className="title">1024 x 768px</h4>
                      <p>Tablet Screen Layout</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="device-item">
                    <div className="icon"><img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_icon04.svg" alt="" /></div>
                    <div className="content">
                      <h4 className="title">375 x 667px</h4>
                      <p>Mobile Screen Layout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="device-img-wrap">
              <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_img01.png" alt="" data-aos="fade-right" data-aos-delay="400" className="aos-init aos-animate" />
              <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_img02.png" alt="" data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate" />
              <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_img03.png" alt="" data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate" />
              <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/device_img04.png" alt="" data-aos="fade-left" data-aos-delay="400" className="aos-init aos-animate" />
            </div>
          </div>
        </section>
        {/* device-area-end */}

        {/* development-showcase-area */}
        <section id="inner_demo" className="development-showcase-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title white-title text-center mb-60">
                  <h2 className="title">Our Development <br /> Showcase</h2>
                  <p>Explore our comprehensive range of web and mobile development projects. <br /> From enterprise solutions to innovative startups, we deliver excellence across all platforms.</p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {innerDemos.map((demo, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="showcase-item">
                    <div className="showcase-image">
                      <img src={`/Frisk - Creative Agency & Portfolio HTML Template_files/${demo.img}`} alt="Development showcase" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* development-showcase-area-end */}

        {/* trusted-platforms-area */}
        <section className="trusted-platforms-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center mb-60">
                  <h2 className="title">Trusted on Leading <br /> Platforms</h2>
                  <p>We are verified and trusted by clients on top freelancing and professional platforms worldwide. <br /> Our expertise in web &amp; app development has earned us recognition across these platforms.</p>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center align-items-center">
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="platform-card">
                  <div className="platform-logo">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="200" rx="20" fill="#14A800"/>
                      <text x="100" y="120" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle">U</text>
                    </svg>
                  </div>
                  <h4 className="platform-name">Upwork</h4>
                  <p className="platform-badge">Top Rated</p>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="platform-card">
                  <div className="platform-logo">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="200" rx="20" fill="#1DBF73"/>
                      <text x="100" y="120" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="white" text-anchor="middle">F</text>
                    </svg>
                  </div>
                  <h4 className="platform-name">Fiverr</h4>
                  <p className="platform-badge">Level 2</p>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="platform-card">
                  <div className="platform-logo">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="200" rx="20" fill="#0B0F19"/>
                      <text x="100" y="120" font-family="Arial, sans-serif" font-size="45" font-weight="bold" fill="white" text-anchor="middle">FL</text>
                    </svg>
                  </div>
                  <h4 className="platform-name">Freelancer</h4>
                  <p className="platform-badge">Verified</p>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="platform-card">
                  <div className="platform-logo">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="200" rx="20" fill="#0A66C2"/>
                      <text x="100" y="120" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="white" text-anchor="middle">in</text>
                    </svg>
                  </div>
                  <h4 className="platform-name">LinkedIn</h4>
                  <p className="platform-badge">Featured</p>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="platform-card">
                  <div className="platform-logo">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="200" rx="20" fill="#FF6B35"/>
                      <text x="100" y="120" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="white" text-anchor="middle">C</text>
                    </svg>
                  </div>
                  <h4 className="platform-name">Clutch</h4>
                  <p className="platform-badge">Top Performer</p>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="platform-card">
                  <div className="platform-logo">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="200" height="200" rx="20" fill="#6366F1"/>
                      <text x="100" y="120" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="white" text-anchor="middle">G</text>
                    </svg>
                  </div>
                  <h4 className="platform-name">GoodFirms</h4>
                  <p className="platform-badge">Rated</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* trusted-platforms-area-end */}

        {/* portfolio-area */}
        <section className="portfolio-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio-img">
                  <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/protfolio_img01.png" alt="img" data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate" />
                  <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/protfolio_img02.png" alt="img" data-aos="fade-right" data-aos-delay="600" className="aos-init aos-animate" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-content">
                  <div className="section-title mb-30">
                    <h2 className="title">Our Development Portfolio</h2>
                  </div>
                  <p>Explore our portfolio of successful web and mobile applications across various industries. From e-commerce platforms to enterprise solutions, <br /> we deliver innovative digital products that drive results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* portfolio-area-end */}

        {/* blog-area */}
        <section className="blog-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="blog-img">
                  <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/blog_img01.png" alt="img" data-aos="fade-left" data-aos-delay="400" className="aos-init aos-animate" />
                  <img src="/Frisk - Creative Agency & Portfolio HTML Template_files/blog_img02.png" alt="img" data-aos="fade-right" data-aos-delay="600" className="aos-init aos-animate" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-content">
                  <div className="section-title mb-30">
                    <h2 className="title">Development Insights &amp; Updates</h2>
                  </div>
                  <p>Stay updated with the latest trends in web and mobile development. Our blog covers best practices, technology insights, and case studies from our projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-area-end */}

        {/* review-area */}
        <section id="review" className="review-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center mb-80">
                  <h2 className="title">Trusted by Thousands</h2>
                  <p>RaomTech is trusted by businesses worldwide for delivering exceptional web &amp; app development services <br /> that transform ideas into powerful digital solutions</p>
                </div>
              </div>
            </div>
            <div className="customer-review-wrapper">
              <div className="row gutter-24">
                {reviews.map((column, colIndex) => (
                  <div key={colIndex} className="col-lg-4">
                    <div className="review-item-wrap">
                      {column.map((review, index) => (
                        <div key={index} className="review-item">
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <img key={i} src="/Frisk - Creative Agency & Portfolio HTML Template_files/star.svg" alt="" />
                            ))}
                          </div>
                          <h2 className="title"><span>for</span> {review.title}</h2>
                          <p>{review.text}</p>
                          <span>by {review.author}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* review-area-end */}
      </main>
      {/* main-area-end */}

      <Footer />
    </>
  );
}
