// ── SHARED NAV ────────────────────────────────────
const NAV_HTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <img src="images/logo-nav.png" alt="My Baby And I — We Thrive" class="nav__logo-img"/>
    </a>
    <div class="nav__links" id="navLinks">
      <a href="about.html">About Us</a>
      <a href="get-involved.html">Get Involved</a>
      <a href="news.html">News</a>
      <a href="blog.html">Blog</a>
      <a href="contact.html">Contact</a>
      <a href="get-involved.html#donate" class="nav__cta">Donate</a>
    </div>
    <button class="nav__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

// ── SCROLLING PARTNERS BAR ────────────────────────
const PARTNERS_HTML = `
<section class="partners-bar">
  <div class="partners-bar__label">Our Partners &amp; Funders</div>
  <div class="partners-bar__track-wrap">
    <div class="partners-bar__track">
      <a href="https://www.oneren.org/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/images/partners/oneren-opt.png" alt="OneRen"/>
      </a>
      <a href="https://engagerenfrewshire.org/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/images/partners/engage-opt.png" alt="Engage Renfrewshire"/>
      </a>
      <a href="https://www.tnlcommunityfund.org.uk/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/partners/tnl-logo.jpg" alt="National Lottery Community Fund"/>
      </a>
      <a href="https://www.corra.scot/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/images/partners/corra-opt.png" alt="Corra Foundation"/>
      </a>
      <a href="#" class="partners-bar__item partners-bar__item--text">
        <span class="partner-text-badge">Clothed in Love</span>
      </a>
      <a href="https://www.oneren.org/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/images/partners/oneren-opt.png" alt="OneRen"/>
      </a>
      <a href="https://engagerenfrewshire.org/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/images/partners/engage-opt.png" alt="Engage Renfrewshire"/>
      </a>
      <a href="https://www.tnlcommunityfund.org.uk/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/partners/tnl-logo.jpg" alt="National Lottery Community Fund"/>
      </a>
      <a href="https://www.corra.scot/" target="_blank" rel="noopener" class="partners-bar__item">
        <img src="images/images/partners/corra-opt.png" alt="Corra Foundation"/>
      </a>
      <a href="#" class="partners-bar__item partners-bar__item--text">
        <span class="partner-text-badge">Clothed in Love</span>
      </a>
    </div>
  </div>
</section>
<style>
.partners-bar{background:var(--cream);border-top:1px solid rgba(59,35,20,0.1);border-bottom:1px solid rgba(59,35,20,0.1);padding:1.5rem 0;overflow:hidden;}
.partners-bar__label{text-align:center;font-size:0.7rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--charcoal);opacity:0.45;margin-bottom:1.2rem;}
.partners-bar__track-wrap{overflow:hidden;width:100%;}
.partners-bar__track{display:flex;align-items:center;gap:4rem;width:max-content;animation:scroll-partners 22s linear infinite;}
.partners-bar__track:hover{animation-play-state:paused;}
.partners-bar__item{display:flex;align-items:center;flex-shrink:0;opacity:0.8;transition:opacity 0.3s;}
.partners-bar__item:hover{opacity:1;}
.partners-bar__item img{height:52px;width:auto;display:block;object-fit:contain;}
.partner-text-badge{font-family:var(--font-display);font-size:0.9rem;font-weight:700;color:var(--deep-brown);line-height:1.3;text-align:center;border:1.5px solid rgba(59,35,20,0.25);padding:0.4rem 0.9rem;border-radius:2px;white-space:nowrap;}
@keyframes scroll-partners{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@media(max-width:600px){.partners-bar__item img{height:38px;}.partners-bar__track{gap:2.5rem;animation-duration:16s;}}
</style>`;

// ── SOCIAL STRIP ──────────────────────────────────
const SOCIAL_HTML = `
<section style="background:var(--deep-brown);padding:2rem 1.5rem;text-align:center;">
  <p style="color:rgba(247,243,239,0.55);font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:1rem;">Follow Our Community</p>
  <div style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;">
    <a href="https://www.facebook.com/mybabyandiUK" target="_blank" rel="noopener"
       style="display:flex;align-items:center;gap:0.5rem;color:var(--sand);font-size:0.9rem;font-weight:500;transition:opacity 0.2s;"
       onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      @mybabyandiUK
    </a>
    <a href="https://www.instagram.com/mybabyandi_uk" target="_blank" rel="noopener"
       style="display:flex;align-items:center;gap:0.5rem;color:var(--sand);font-size:0.9rem;font-weight:500;transition:opacity 0.2s;"
       onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      @mybabyandi_uk
    </a>
  </div>
</section>`;

// ── FOOTER ────────────────────────────────────────
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <img src="images/logo-footer-white.png" alt="My Baby And I — We Thrive"
             style="height:70px;width:auto;margin-bottom:0.85rem;"/>
        <p>Empowering ethnic minority mothers to connect, learn and thrive across Glasgow and Renfrewshire.</p>
        <a href="mailto:info@mybabyandi.co.uk"
           style="color:var(--sand);font-size:0.86rem;margin-top:0.6rem;display:inline-block;">
          info@mybabyandi.co.uk
        </a>
        <div style="display:flex;gap:1rem;margin-top:0.9rem;flex-wrap:wrap;">
          <a href="https://www.facebook.com/mybabyandiUK" target="_blank" rel="noopener"
             style="display:flex;align-items:center;gap:0.35rem;color:var(--sand);font-size:0.82rem;opacity:0.8;transition:opacity 0.2s;"
             onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            mybabyandiUK
          </a>
          <a href="https://www.instagram.com/mybabyandi_uk" target="_blank" rel="noopener"
             style="display:flex;align-items:center;gap:0.35rem;color:var(--sand);font-size:0.82rem;opacity:0.8;transition:opacity 0.2s;"
             onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            mybabyandi_uk
          </a>
        </div>
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
          <li><a href="https://www.facebook.com/mybabyandiUK" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href="https://www.instagram.com/mybabyandi_uk" target="_blank" rel="noopener">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 My Baby And I Community Association. Registered in Scotland.</span>
      <span>Glasgow &amp; Renfrewshire</span>
    </div>
  </div>
</footer>`;

// ── INJECT ────────────────────────────────────────
document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
document.getElementById('footer-placeholder').innerHTML = SOCIAL_HTML + PARTNERS_HTML + FOOTER_HTML;
