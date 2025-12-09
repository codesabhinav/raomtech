'use client';

import { useState, useEffect } from 'react';
import { ChevronUp, Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (contactOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [contactOpen]);

  return (
    <>
      {/* preloader */}
      <div className="preloader" style={{ display: 'none' }}>
        <div className="preloader-inner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* preloader-end */}

      {/* Scroll-top */}
      <button className="scroll-top scroll-to-target" data-target="html" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ChevronUp size={20} />
      </button>
      {/* Scroll-top-end*/}

      {/* header-area */}
      <header id="header">
        <div id="header-fixed-height" className=""></div>
        <div id="sticky-header" className="menu-area">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <a href="/" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
                        Roam<span style={{ color: '#FF6B35' }}>Tech</span>
                      </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#inner_demo">Inner Pages</a></li>
                        <li><a href="#review">Customer Review</a></li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li>
                          <button
                            type="button"
                            className="btn contact-btn"
                            onClick={() => setContactOpen(true)}
                            aria-label="Contact us"
                          >
                            <span className="contact-btn__icon" aria-hidden="true">
                              <Mail size={18} />
                            </span>
                            <span className="contact-btn__tooltip">Contact Us</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-nav-toggler" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                      <Menu size={24} />
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu  */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                  <nav className="menu-box">
                    <div className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                      <X size={24} />
                    </div>
                    <div className="nav-logo">
                      <a href="/" style={{ textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', color: 'inherit' }}>
                        Roam<span style={{ color: '#FF6B35' }}>Tech</span>
                      </a>
                    </div>
                    <div className="menu-outer">
                      <ul className="navigation">
                        <li><a href="#header" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
                        <li><a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
                        <li><a href="#inner_demo" onClick={() => setMobileMenuOpen(false)}>Inner Pages</a></li>
                        <li><a href="#review" onClick={() => setMobileMenuOpen(false)}>Customer Review</a></li>
                      </ul>
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li><a href="#"><Facebook size={18} /></a></li>
                        <li><a href="#"><Twitter size={18} /></a></li>
                        <li><a href="#"><Instagram size={18} /></a></li>
                        <li><a href="#"><Linkedin size={18} /></a></li>
                        <li><a href="#"><Youtube size={18} /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className={`menu-backdrop ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}

      {/* contact modal */}
      {contactOpen && (
        <div className="contact-modal">
          <div className="contact-modal__backdrop" onClick={() => setContactOpen(false)} />
          <div className="contact-modal__content">
            <button className="contact-modal__close" aria-label="Close contact form" onClick={() => setContactOpen(false)}>
              <X size={18} />
            </button>
            <h3>Contact RoamTech</h3>
            <p style={{ color: '#666', marginBottom: '16px' }}>Tell us briefly what you need and we will reach out.</p>
            <form className="contact-modal__form">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" placeholder="Project details or questions..." rows={4}></textarea>
              </label>
              <div className="contact-modal__actions">
                <button type="button" className="btn" onClick={() => setContactOpen(false)}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

