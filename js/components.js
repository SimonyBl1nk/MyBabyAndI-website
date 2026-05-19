// Shared nav HTML
const NAV_HTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <img src="images/logo.jpeg" alt="My Baby And I — Caring Made Easy" class="nav__logo-img"/>
    </a>
    <div class="nav__links">
      <a href="about.html">About Us</a>
      <a href="get-involved.html">Get Involved</a>
      <a href="news.html">News</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
      <a href="get-involved.html#donate" class="nav__cta">Donate</a>
    </div>
    <button class="nav__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

// Shared footer HTML
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div style="font-family:var(--font-display);font-size:1.4rem;font-weight:900;color:var(--sand);margin-bottom:0.4rem;">My Baby And I</div><div style="font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(247,243,239,0.5);margin-bottom:0.85rem;">Caring Made Easy</div>
        <p>Empowering women from ethnically diverse backgrounds in Glasgow and Renfrewshire — building confidence, community, and careers.</p>
        <a href="mailto:info@mybabyandi.co.uk" style="color:var(--sand);font-size:0.88rem;margin-top:0.5rem;display:inline-block;">info@mybabyandi.co.uk</a>
      </div>
      <div class="footer__col">
        <h4>Organisation</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html#stories">Stories</a></li>
          <li><a href="about.html#faqs">FAQs</a></li>
          <li><a href="about.html#jobs">Jobs</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Get Involved</h4>
        <ul>
          <li><a href="get-involved.html#donate">Donate</a></li>
          <li><a href="get-involved.html#volunteer">Volunteer</a></li>
          <li><a href="get-involved.html#events">Events</a></li>
          <li><a href="get-involved.html#partners">Partnerships</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Connect</h4>
        <ul>
          <li><a href="news.html">News</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="mailto:info@mybabyandi.co.uk">Email Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2025 My Baby And I Community Association. Registered in Scotland.</span>
      <span>Glasgow &amp; Renfrewshire</span>
    </div>
  </div>
</footer>`;

// Inject into page
document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
