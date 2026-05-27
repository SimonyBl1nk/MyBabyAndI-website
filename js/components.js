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

// Scrolling partners bar
const PARTNERS_HTML = `
<section class="partners-bar">
  <div class="partners-bar__label">Our Partners &amp; Funders</div>
  <div class="partners-bar__track-wrap">
    <div class="partners-bar__track">
      <a href="https://www.oneren.org/" target="_blank" rel="noopener" class="partners-bar__item"><img src="images/images/partners/oneren-opt.png" alt="OneRen"/></a>
      <a href="https://engagerenfrewshire.org/" target="_blank" rel="noopener" class="partners-bar__item"><img src="images/images/partners/engage-opt.png" alt="Engage Renfrewshire"/></a>
      <a href="#" class="partners-bar__item"><img src="images/images/partners/clothedinlove-opt.png" alt="Clothed in Love"/></a>
      <a href="https://www.corra.scot/" target="_blank" rel="noopener" class="partners-bar__item"><img src="images/images/partners/corra-opt.png" alt="Corra Foundation"/></a>
      <a href="https://www.oneren.org/" target="_blank" rel="noopener" class="partners-bar__item"><img src="images/images/partners/oneren-opt.png" alt="OneRen"/></a>
      <a href="https://engagerenfrewshire.org/" target="_blank" rel="noopener" class="partners-bar__item"><img src="images/images/partners/engage-opt.png" alt="Engage Renfrewshire"/></a>
      <a href="#" class="partners-bar__item"><img src="images/images/partners/clothedinlove-opt.png" alt="Clothed in Love"/></a>
      <a href="https://www.corra.scot/" target="_blank" rel="noopener" class="partners-bar__item"><img src="images/images/partners/corra-opt.png" alt="Corra Foundation"/></a>
    </div>
  </div>
</section>
<style>
.partners-bar{background:var(--cream);border-top:1px solid rgba(59,35,20,0.1);border-bottom:1px solid rgba(59,35,20,0.1);padding:1.5rem 0;overflow:hidden;}
.partners-bar__label{text-align:center;font-size:0.7rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--charcoal);opacity:0.45;margin-bottom:1.2rem;}
.partners-bar__track-wrap{overflow:hidden;width:100%;}
.partners-bar__track{display:flex;align-items:center;gap:4rem;width:max-content;animation:scroll-partners 18s linear infinite;}
.partners-bar__track:hover{animation-play-state:paused;}
.partners-bar__item{display:flex;align-items:center;flex-shrink:0;opacity:0.7;transition:opacity 0.3s;filter:grayscale(30%);}
.partners-bar__item:hover{opacity:1;filter:grayscale(0%);}
.partners-bar__item img{height:48px;width:auto;display:block;object-fit:contain;}
@keyframes scroll-partners{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@media(max-width:600px){.partners-bar__item img{height:36px;}.partners-bar__track{gap:2.5rem;animation-duration:14s;}}
</style>`;

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
document.getElementById('footer-placeholder').innerHTML = PARTNERS_HTML + FOOTER_HTML;
