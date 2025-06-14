const Home = () => {
  return (
    <>
      {/* <div id="preloader">
        <div id="loader"></div>
      </div> */}

      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img
              src="Resource/nk-logo-nobg3.png"
              style={{ objectFit: "contain", height: "80px" }}
              alt="Homepage"
            />
          </a>
        </div>

        <nav className="header-nav-wrap">
          <ul className="header-main-nav">
            <li className="current">
              <a className="smoothscroll" href="#intro" title="intro">
                Intro
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="services">
                Services
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works" title="works">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact" title="contact us">
                Say Hello
              </a>
            </li>
          </ul>

          <ul className="header-social">
            <li>
              <a
                href="https://in.linkedin.com/in/neel-buhecha"
                target="_blank"
                rel="noopener,noreferer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </nav>

        <a className="header-menu-toggle" href="#">
          <span>Menu</span>
        </a>
      </header>

      <section id="intro" className="s-intro target-section">
        <div className="row intro-content">
          <div className="column large-9 mob-full intro-text">
            <h3>Hello, I'm Neel Buhecha</h3>
            <h1>
              Full stack <br />
              Web Developer <br />
              Based In Ahmedabad.
            </h1>
          </div>

          <div className="intro-scroll">
            <a href="#about" className="intro-scroll-link smoothscroll">
              Scroll For More
            </a>
          </div>

          <div className="intro-grid"></div>
          <div className="intro-pic"></div>
        </div>
      </section>

      <section id="about" className="s-about target-section">
        <div className="about-me">
          <div className="row heading-block" data-aos="fade-up">
            <div className="column large-full">
              <h2 className="section-heading">About Me</h2>
            </div>
          </div>

          <div className="row about-me__content" data-aos="fade-up">
            <div className="column large-full about-me__text">
              <p className="lead">
                Hello! I'm a passionate Full Stack Web Developer with a strong
                foundation in both front-end and back-end technologies. I love
                building responsive, user-friendly web applications that not
                only look great but also perform seamlessly.
              </p>

              <p>
                With experience in technologies like <strong>React</strong>,{" "}
                <strong>Node.js</strong>, <strong>Express</strong>,{" "}
                <strong>MongoDB</strong>, and <strong>MySQL</strong>, I enjoy
                crafting complete solutions—from designing intuitive interfaces
                to managing robust server-side logic and databases.
              </p>

              <p>
                I'm always curious to learn new tools and best practices to
                improve my craft. I believe in writing clean, maintainable code
                and delivering projects that solve real-world problems. Whether
                it's a small business site or a complex web platform, I approach
                every project with attention to detail and a love for
                technology.
              </p>

              <p>
                When I'm not coding, you might find me exploring new tech
                trends, working on side projects, or sharing what I learn with
                the developer community.
              </p>
            </div>
          </div>

          <div className="row about-me__buttons">
            <div className="column large-half tab-full" data-aos="fade-up">
              <a
                href="mailto:nk.buhecha4302@gmail.com"
                className="btn btn--stroke full-width"
              >
                Hire Me
              </a>
            </div>
            <div className="column large-half tab-full" data-aos="fade-up">
              <a
                href="Resource/Neel_Buhecha_Resume_xRect-1.pdf"
                className="btn btn--primary full-width"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="about-experience">
          <div className="row heading-block" data-aos="fade-up">
            <div className="column large-full">
              <h2 className="section-heading">Work & Education</h2>
            </div>
          </div>

          <div className="row about-experience__timeline">
            <div className="column large-half tab-full" data-aos="fade-up">
              <div className="timeline">
                <div className="timeline__icon-wrap">
                  <span className="timeline__icon timeline__icon--education"></span>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">2018 - 2020</p>
                    <h3 className="item-title">Shakti Schools of science</h3>
                    <h5>Higher Secondary Education</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">2020 - 2024</p>
                    <h3 className="item-title">Darshan University</h3>
                    <h5>Bachlor's Degree</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column large-half tab-full" data-aos="fade-up">
              <div className="timeline">
                <div className="timeline__icon-wrap">
                  <span className="timeline__icon timeline__icon--work"></span>
                </div>

                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <p className="timeline__timeframe">2024 - Current</p>
                    <h3 className="item-title">iSyncEvolution</h3>
                    <h5>Fullstack Web Developer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="s-services ss-dark target-section">
        <div className="shadow-overlay"></div>

        <div
          className="row heading-block heading-block--center"
          data-aos="fade-up"
        >
          <div className="column large-full">
            <h2 className="section-heading section-heading--centerbottom">
              Capabilities
            </h2>

            <p className="section-desc">
              I focus on building robust, full-stack systems that power your
              business operations and deliver real value to your users.{" "}
            </p>
          </div>
        </div>

        {/* <div className="row services-list block-large-1-3 block-medium-1-2 block-tab-full">
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Brand Identity</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Illustration</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Web Design</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Product Strategy</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">UI/UX Design</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Mobile Design</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>
        </div> */}
        <div className="row services-list block-large-1-3 block-medium-1-2 block-tab-full">
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Full Stack Web Development</h4>
              <p>
                End-to-end web development using modern technologies like React
                for the frontend and Node.js with Express for the backend. I
                build scalable, responsive, and efficient web applications
                tailored to your business needs.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Frontend Development (React)</h4>
              <p>
                Specialized in crafting clean and interactive user interfaces
                using React.js. From reusable components to seamless user
                experiences, I bring design and functionality together in a
                dynamic frontend.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">
                Backend Development (Node & Express)
              </h4>
              <p>
                Developing robust server-side applications and APIs using
                Node.js and Express. I ensure secure authentication, structured
                routing, and smooth database integration with MongoDB or SQL.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Database Integration</h4>
              <p>
                Integration and management of databases like MongoDB and MySQL.
                I structure data for flexibility and performance, ensuring
                reliable storage, retrieval, and interaction with your
                application’s backend.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">RESTful API Development</h4>
              <p>
                Creating RESTful APIs to connect frontend interfaces with
                backend logic. My APIs are optimized, well-documented, and
                designed for seamless communication across platforms and
                devices.
              </p>
            </div>
          </div>

          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Deployment & Maintenance</h4>
              <p>
                Deploying web applications on platforms like Vercel, Netlify, or
                DigitalOcean. I also offer continuous support and updates to
                keep your app running smoothly and securely post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="s-works target-section">
        <div
          className="row heading-block heading-block--center"
          data-aos="fade-up"
        >
          <div className="column large-full">
            <h2 className="section-heading section-heading--centerbottom">
              Selected Works
            </h2>
            <p className="section-desc">
              Here are some of my selected works I have done lately. Feel free
              to check them out.
            </p>
          </div>
        </div>

        <div className="masonry-wrap">
          <div className="masonry">
            <div className="grid-sizer"></div>

            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="Resource/images/Samana_site.png"
                    className="thumb-link"
                    title="Shutterbug"
                    data-size="1050x700"
                    target="_blank"
                    rel="noopener,noreferer"
                  >
                    <img
                      src="Resource/images/Samana_site.png"
                      srcSet="Resource/images/Samana_site.png 1x, Resource/images/Samana_site.png 2x"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://samanarealestate.com.do/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noopener,noreferer"
                  ></a>
                </div>

                <div className="item-folio__text">
                  <h4 className="item-folio__title">Samana Real Estate</h4>
                  <p className="item-folio__cat">MERN Stack</p>
                </div>

                <div className="item-folio__cat">
                  <p>
                    A real estate management platform built using the MERN
                    stack. It includes features like property listing, admin
                    dashboard, authentication, and dynamic search functionality.
                    Built during my office project work.
                  </p>
                </div>
              </div>
            </div>

            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="Resource/images/Samana_Lux.png"
                    className="thumb-link"
                    title="Woodcraft"
                    data-size="1050x700"
                    target="_blank"
                    rel="noopener,noreferer"
                  >
                    <img
                      src="Resource/images/Samana_Lux.png"
                      srcSet="Resource/images/Samana_Lux.png 1x, Resource/images/Samana_Lux.png 2x"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://samanaluxury.demo-available.com/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noopener,noreferer"
                  ></a>
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">Samana Luxury Rentals</h4>
                  <p className="item-folio__cat">MERN Stack</p>
                </div>
                <div className="item-folio__cat">
                  <p>
                    A luxury property rental platform developed using the MERN
                    stack. It features user authentication, property filtering,
                    booking management, and an admin panel to manage listings.
                    Built as part of a professional project at my workplace.
                  </p>
                </div>
              </div>
            </div>

            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="Resource/images/OverTIme.png"
                    className="thumb-link"
                    title="The Beetle Car"
                    data-size="1050x700"
                    target="_blank"
                    rel="noopener,noreferer"
                  >
                    <img
                      src="Resource/images/OverTIme.png"
                      srcSet="Resource/images/OverTIme.png 1x, Resource/images/OverTIme.png 2x"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://overtimeedge.demo-available.com/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noopener,noreferer"
                  ></a>
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">OverTime Edge</h4>
                  <p className="item-folio__cat">API & Admin Development</p>
                </div>
                <div className="item-folio__cat">
                  <p>
                    A mobile application project where I’m responsible for
                    developing RESTful APIs and a feature-rich admin panel. The
                    backend is built using Node.js and Express, focusing on data
                    management, authentication, and smooth integration with the
                    mobile frontend. This project is currently under development
                    as part of my professional role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="s-contact ss-dark target-section">
        <div className="row heading-block" data-aos="fade-up">
          <div className="column large-full">
            <h2 className="section-heading">Get In Touch</h2>
          </div>
        </div>

        <div className="row contact-main" data-aos="fade-up">
          <div className="column large-full">
            <p className="contact-email">
              <a href="mailto:nk.buhecha4302@gmail.com">nk.buhecha@gmail.com</a>
            </p>

            <p className="section-desc">
              I'm happy to connect, listen and help. Let's work together and
              build something awesome. Let's turn your idea to an even greater
              product.
              <a href="mailto:nk.buhecha4302@gmail.com">Email Me</a>.
            </p>
          </div>
        </div>

        <div
          className="row contact-infos"
          data-aos="fade-up"
          data-aos-anchor=".contact-main"
        >
          <div className="column large-5 medium-full contact-phone">
            <h4>Contact me</h4>
            <a
              target="_blank"
              rel="noopener,noreferer"
              href="https://github.com/lonewolfNK"
            >
              gitHub
            </a>
          </div>

          <div className="column large-7 medium-full contact-social">
            <h4>Social</h4>
            <ul>
              <li>
                <a
                  href="https://in.linkedin.com/in/neel-buhecha"
                  target="_blank"
                  rel="noopener,noreferer"
                  title="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#0" rel="noopener,noreferer" title="Instagram">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="row">
          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top"></a>
          </div>
        </div>
      </footer>

      <div aria-hidden="true" className="pswp" role="dialog" tabIndex="-1">
        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>

          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              ></button>{" "}
              <button
                className="pswp__button pswp__button--share"
                title="Share"
              ></button>{" "}
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              ></button>{" "}
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              ></button>
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            ></button>{" "}
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            ></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
