<script>
  import logo from "../assets/img/active-storage.jpg";
  import Headline from "../components/HeadlineText.svelte";
</script>

<svelte:head>
  <script src="/scripts/jquery-2.1.1.js"></script>
  <script src="/scripts/bootstrap.min.js"></script>
  <script src="/scripts/menu.js"></script>
  <script src="/scripts/util.js"></script>
  <script src="/scripts/animated-headline.js"></script>
  <script src="/scripts/isotope.pkgd.min.js"></script>
  <script src="/scripts/custom.js"></script>
  <link href="/styles/animated-headline.css" rel="stylesheet" />
</svelte:head>

<div>
  <div id="preloader">
    <div class="pre-container">
      <div class="spinner">
        <div class="double-bounce1" />
        <div class="double-bounce2" />
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <header class="box-header">
      <div class="box-logo">
        <a href="index.html"
          ><img src="img/logo.png" width="100" alt="Logo" /></a
        >
      </div>
      <a class="box-primary-nav-trigger" href="#0">
        <span class="box-menu-text">Menu</span><span class="box-menu-icon" />
      </a>
    </header>
    <nav>
      <ul class="box-primary-nav">
        <li class="box-label">What - When - Where - Who</li>
        <li>
          <a href="index.html">Home</a><i class="ion-ios-circle-filled color" />
        </li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="about.html">About me</a></li>
        <li><a href="contact.html">Contact me</a></li>
        <li><a href="tools.html">Tools / Gear / Softwares I use</a></li>
        <li>My services are currently unavailable.</li>
        <li class="box-label">Keep up with my work</li>
        <li class="box-social">
          <a href="https://github.com/Duckiduc"
            ><i class="ion-social-github" /></a
          >
        </li>
        <li class="box-social">
          <a href="https://linkedin.com/in/duc-thomas-nguyen"
            ><i class="ion-social-linkedin" /></a
          >
        </li>
        <script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="ducki"
          data-color="#FF813F"
          data-emoji=""
          data-font="Cookie"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#FFFFFF"
          data-coffee-color="#FFDD00"></script>
      </ul>
    </nav>
    <section class="box-intro">
      <div class="table-cell">
        <Headline />
        <h5>ladies & gentlemen, welcome to my portfolio.</h5>
      </div>
      <div class="mouse">
        <div class="scroll" />
      </div>
    </section>
  </div>
  <div class="portfolio-div">
    <div class="portfolio">
      <div class="no-padding portfolio_container">
        <div class="col-md-3 col-sm-6">
          <a href="projects/rails-active-storage.html" class="portfolio_item">
            <img loading="lazy" src={logo} alt="" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>Rails Active Storage</span>
                  <em>Code</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <!-- <div class="col-md-3 col-sm-6">
          <a href="projects/mackee-trading-app.html" class="portfolio_item">
            <img loading="lazy" src="img/mackee.gif" alt="" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>Mackee - Trading App</span>
                  <em>Webdesign / Mobile App / Mockup</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-sm-12">
          <a href="projects/mackee-website.html" class="portfolio_item">
            <img loading="lazy" src="img/mackee-website.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>Mackee - Website</span>
                  <em>Webdesign / Website / Mockup</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="projects/mackee-graphic-chart.html" class="portfolio_item">
            <img loading="lazy" src="img/mackee-chart.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>Mackee - Graphic Chart</span>
                  <em>Design / Graphic Chart</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="projects/marketplace-scraper.html" class="portfolio_item">
            <img loading="lazy" src="img/eshop-scraper.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>(WIP) Marketplace scraper</span>
                  <em>Code / Website</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-sm-12">
          <a href="projects/canyon-website-redesign.html" class="portfolio_item">
            <img loading="lazy" src="img/canyon-webstore.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>(WIP) Canyon Website Redesign</span>
                  <em>Code / Website / Webdesign</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="projects/playlists-covers-vibes-serie.html" class="portfolio_item">
            <img loading="lazy" src="img/vibes-covers.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>(WIP) Playlists Covers - Vibes Series</span>
                  <em>Design / Music</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="projects/sons-event-posters.html" class="portfolio_item">
            <img loading="lazy" src="img/sons-event-poster.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>Sons of EFREI - Event Poster</span>
                  <em>Design / Ads / Event</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="projects/canyon-app-concept.html" class="portfolio_item">
            <img loading="lazy" src="img/canyon-app-concept.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>Canyon - App Concept</span>
                  <em>Design - Mockup - Mobile App</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="projects/social-media-dashboard.html" class="portfolio_item">
            <img loading="lazy" src="img/social-media-dashboard.jpg" alt="image" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>(WIP) Social Media Dashboard</span>
                  <em>Code / Webdesign / Website</em>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="projects/personal-website.html" class="portfolio_item">
            <img loading="lazy" src="img/personal-website.jpg" alt="pht" class="img-responsive" />
            <div class="portfolio_item_hover">
              <div class="portfolio-border clearfix">
                <div class="item_info">
                  <span>Personal Website</span>
                  <em>Webdesign / Website</em>
                </div>
              </div>
            </div>
          </a>
        </div> -->
      </div>
    </div>
  </div>

  <footer>
    <div class="container-fluid">
      <p class="copyright">© Nguyen Duc-Thomas 2020</p>
      Images freely provided by<a href="https://unsplash.com">Unsplash</a>. The
      logos used are the property of their respective owners.
    </div>
  </footer>
  <a href="#0" class="cd-top"><i class="ion-android-arrow-up" /></a>

  <script
    data-name="BMC-Widget"
    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    data-id="ducki"
    data-description="Support me on Buy me a coffee!"
    data-message="Thanks for passing by! You can support me with a coffee ☕"
    data-color="#FF813F"
    data-position="left"
    data-x_margin="18"
    data-y_margin="18"></script>
</div>
