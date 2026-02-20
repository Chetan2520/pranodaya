// Start of Components JS

/* 
   Please Note: 
   The content for Header, Sidebar, Menubar, and Footer is loaded via JavaScript 
   to simulate PHP includes for a static site structure.
   
   If you need to edit the menu links or footer text, EDIT THIS FILE.
*/

// --- COMPONENT DATA ---

const MENUBAR_HTML = `
    <div class="off-canvas-menubar">
      <div class="off-canvas-menubar-body">
        <div class="off-canvas-head">
          <div class="off-canvas-logo">
            <a href="index.html">
              <img src="assets/img/logo/logo-2.png" alt="logo" />
            </a>
          </div>
          <div class="off-canvas-menubar-close" data-close="menubar">
            <i class="fa-regular fa-xmark"></i>
          </div>
        </div>
        <div class="off-canvas-menu">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">Who we are?</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="project.html">Projects</a></li>
            <li><a href="camping-donation.html">Donation</a></li>
            <li class="has-dropdown">
              <a href="#">Others</a>
              <ul class="sub-menu">
                <li><a href="blog-standard.html">Blogs</a></li>
                <li><a href="be-volunteer.html">Become a Volunteer</a></li>
                <li><a href="volunteer.html">Volunteers</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="off-canvas-menubar-overlay" data-close="menubar"></div>
    </div>
`;

const SIDEBAR_HTML = `
<div class="off-canvas-sidebar">
	<div class="off-canvas-sidebar-body">
		<div class="off-canvas-sidebar-close" data-close="sidebar">
			<i class="fa-regular fa-xmark"></i>
		</div>
		<div class="off-canvas-logo m-b-20">
			<a href="index.html">
				<img src="assets/img/logo/logo-2.png" alt="logo"/>
			</a>
		</div>
		<div class="off-canvas-text m-b-30">
				Pranodaya Foundation is dedicated to empowering the underprivileged through education, healthcare, and sustainable development. Join us in creating a better world by supporting our initiatives.
		</div>
		<div class="off-canvas-thumb m-b-40">
			<img src="assets/img/thumbs/thumb-3.webp" alt="thumb"/>
		</div>
		<div class="off-canvas-contact m-b-40">
			<div class="off-canvas-contact-item">
				<div class="icon">
					<i class="fa-solid fa-location-dot"></i>
				</div>
				<div class="text">
					<h6>Address</h6>
					<p>Jones Street, New York, USA</p>
				</div>
			</div>
			<a href="mailto:support@example.com" class="off-canvas-contact-item">
				<div class="icon">
					<i class="fa-solid fa-paper-plane"></i>
				</div>
				<div class="text">
					<h6>Email</h6>
					<p>Support@example.com</p>
				</div>
			</a>
			<a href="tel:+70264566579" class="off-canvas-contact-item">
				<div class="icon">
					<i class="fa-solid fa-phone-arrow-up-right"></i>
				</div>
				<div class="text">
					<h6>Phone</h6>
					<p>+70 264 566 579</p>
				</div>
			</a>
		</div>
		<div class="off-canvas-social-links">
			<a href="https://facebook.com">
				<i class="fab fa-facebook-f"></i>
			</a>
			<a href="https://twitter.com">
				<i class="fab fa-x-twitter"></i>
			</a>
			<a href="https://www.instagram.com">
				<i class="fab fa-instagram"></i>
			</a>
			<a href="https://linkedin.com">
				<i class="fab fa-linkedin-in"></i>
			</a>
		</div>
	</div>
	<div class="off-canvas-sidebar-overlay" data-close="sidebar"></div>
</div>
`;

// Standard Header (Note: Some homepages use custom headers, check index-X.html)
const HEADER_HTML = `
<header class="header-section">
	<div class="top-bar d-none d-md-block">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12">
					<div class="top-bar-content text-center">
						<div class="text-wrap">
							<img src="assets/img/icons/calendar-time.svg" alt="icon"/>
							<span>Join Our Event (28 Nov, 2024) New Market, California.</span>
						</div>
						<a href="camping-donation.html" class="e-primary-btn is-hover-white top-btn">Donate Now</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="header-bottom">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12">
					<div class="header-bottom-layout">
						<div class="header-left">
							<div  class="logo-wrap">
								<a href="index.html">
									<img
									 style="width: 90px; height: 90px"
									src="assets/img/logo/logo-2.png" alt="logo"/>
								</a>
							</div>
							<nav class="main-menu d-none d-xl-block">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li><a href="about.html">Who we are?</a></li>
									<li><a href="services.html">Services</a></li>
									<li><a href="project.html">Projects</a></li>
									<li><a href="camping-donation.html">Donation</a></li>
									<li class="has-dropdown">
										<a href="#">Others</a>
										<ul class="sub-menu">
											<li><a href="blog-standard.html">Blogs</a></li>
											<li><a href="be-volunteer.html">Become a Volunteer</a></li>
											<li><a href="volunteer.html">Volunteers</a></li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
						<div class="header-right">
							<div class="header-info d-none d-xl-flex">
								<div class="header-info-icon">
									<i class="fa-regular fa-phone-volume"></i>
								</div>
								<div class="header-info-content">
									<span>Contact Us!</span>
									<p>
										<a href="tel:+919752196053">+91 9752196053</a>
									</p>
								</div>
							</div>
							<div class="header-btn-wrap d-none d-xl-flex">
								<a href="contact.html" class="e-primary-btn has-icon">
									Contact Us
									<span class="icon-wrap"><span class="icon"><i class="fa-regular fa-arrow-right"></i><i class="fa-regular fa-arrow-right"></i></span></span>
								</a>
							</div>
							
							<div class="header-bar open-mobile-menu d-xl-none" data-toggle="menubar">
								<div class="bar bar-1"></div>
								<div class="bar bar-2"></div>
								<div class="bar bar-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
`;

const FOOTER_HTML = `
<footer class="footer-section p-t-125" style="background-image: url(assets/img/bg/footer-bg.png)">
	<div class="container">
		<div class="row justify-content-between row-gap-md-5 row-gap-4 p-b-30">
			<div class="col-xl-4 col-lg-8 col-md-7">
				<div class="footer-widget">
					<div class="about-widget">
						<div class="footer-logo">
							<a href="index.html"><img alt="logo" src="assets/img/logo/logo-2.png"></a>
						</div>
						<div class="text">
							<p>Introducing our team of talented and skilled professionals who are ready to increase your productivity and bring your business.</p>
						</div>
						<div class="info">
							<p><b>We Are Available !!</b></p>
							<p>Mon-Sat: <span>10:00am to 07:30pm</span></p>
						</div>
						<div class="social-links">
							<a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a> <a href="https://twitter.com"><i class="fab fa-x-twitter"></i></a> <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a> <a href="https://linkedin.com"><i class="fab fa-linkedin-in"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-2 col-lg-4 col-md-5">
				<div class="footer-widget">
					<h3 class="w-title">Quick Links</h3>
					<ul>
						<li><a href="about.html">About Company</a></li>
						<li><a href="services.html">Our Causes</a></li>
						<li><a href="camping-donation.html">Investor Presentation</a></li>
						<li><a href="donations.html">Pricing Plan</a></li>
						<li><a href="volunteer.html">Meet Our Team</a></li>
						<li><a href="contact.html">Contact Us</a></li>
					</ul>
				</div>
			</div>
			<div class="col-xl-2 col-lg-4 col-md-5">
				<div class="footer-widget">
					<h3 class="w-title">Our Services</h3>
					<ul>
						<li><a href="camping-details.html">Tree Plantation</a></li>
						<li><a href="camping-donation.html">Forest Cleaning</a></li>
						<li><a href="services-details.html">Plastic Recycling</a></li>
						<li><a href="project.html">Natural Power</a></li>
						<li><a href="project.html">Renewable Energy</a></li>
						<li><a href="project-details.html">Water Refine</a></li>
					</ul>
				</div>
			</div>
			<div class="col-xl-3 col-lg-4 col-md-5">
				<div class="footer-widget">
					<h3 class="w-title">Newsletter</h3>
					<div class="subscribe-form">
						<form>
							<div class="input-wrap">
								<input placeholder="example@gmail.com" type="email" name="email">
							</div>
							<div class="input-button">
								<button class="e-primary-btn has-icon is-hover-white" type="submit">Subscribe Now <span class="icon-wrap"><span class="icon"><i class="fa-regular fa-arrow-right"></i> <i class="fa-regular fa-arrow-right"></i></span></span></button>
							</div>
							<div class="input-checkbox">
								<input id="agree" type="checkbox"> <label for="agree"><span class="check-mark"></span> I agree the policy</label>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom-3">
			<div class="footer-bottom-layout-2">
				<div class="footer-copyright">
					© 2025 Pranodaya. All Rights Reserved.
				</div>
				<div class="footer-bottom-menu">
					<ul>
						<li><a href="contact.html">Terms & Condition</a></li>
						<li><a href="contact.html">Privacy Policy</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer>
`;

// --- INJECTION LOGIC ---

function injectComponents() {
  // Inject Menu (used everywhere)
  const menubarPlaceholder = document.getElementById("menubar-placeholder");
  if (menubarPlaceholder) menubarPlaceholder.innerHTML = MENUBAR_HTML;

  // Inject Sidebar (used everywhere)
  const sidebarPlaceholder = document.getElementById("sidebar-placeholder");
  if (sidebarPlaceholder) sidebarPlaceholder.innerHTML = SIDEBAR_HTML;

  // Inject Header (only if placeholder is present, usually inner pages)
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) headerPlaceholder.innerHTML = HEADER_HTML;

  // Inject Footer (used everywhere)
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Inject Breadcrumb
  const breadcrumbPlaceholder = document.getElementById(
    "breadcrumb-placeholder",
  );
  if (breadcrumbPlaceholder) {
    const title =
      breadcrumbPlaceholder.getAttribute("data-title") || "Page Name";
    const subTitle =
      breadcrumbPlaceholder.getAttribute("data-subtitle") || "Page Title";

    breadcrumbPlaceholder.innerHTML = `
        <!-- breadcrumb-section start -->
        <section class="breadcrumb-section">
            <div class="container-fluid">
                <div class="row g-0">
                    <div class="col-xl-6 col-lg-6">
                        <div class="breadcrumb-content" style="background-image: url(assets/img/bg/breadcrumb-bg.png)">
                            <div class="breadcrumb-nav" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="#">${title}</a></li>
                                </ul>
                            </div>
                            <div class="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <h2>${subTitle}</h2>
                            </div>
                            <div class="shape-1">
                                <img src="assets/img/shapes/shape-1.webp" alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block">
                        <div class="breadcrumb-thumb">
                            <img src="assets/img/thumbs/thumb-1.png" alt="thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb-section end -->
        `;
  }
}

document.addEventListener("DOMContentLoaded", injectComponents);
