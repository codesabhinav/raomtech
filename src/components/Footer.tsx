'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* footer-area */}
      <footer className="footer-area" style={{ background: '#1a1a1a', color: '#fff', padding: '60px 0 30px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer-widget">
                <div className="footer-logo mb-3">
                  <a href="/" style={{ textDecoration: 'none', fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>
                    Raom<span style={{ color: '#FF6B35' }}>Tech</span>
                  </a>
                </div>
                <p style={{ color: '#999', lineHeight: '1.8', marginBottom: '20px' }}>
                  Empowering businesses with innovative technology solutions. We deliver cutting-edge software and digital experiences that drive growth.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-widget">
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#header" className="footer-link">Home</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#features" className="footer-link">Features</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#demo" className="footer-link">Services</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#review" className="footer-link">About</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="footer-widget">
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Services</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#" className="footer-link">Web Development</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#" className="footer-link">Mobile Apps</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#" className="footer-link">Cloud Solutions</a>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <a href="#" className="footer-link">Consulting</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Contact Us</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#999' }}>
                  <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <Mail size={18} style={{ marginRight: '10px', color: '#FF6B35', marginTop: '4px', flexShrink: 0 }} />
                    <span>info@Raomtech.com</span>
                  </li>
                  <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <Phone size={18} style={{ marginRight: '10px', color: '#FF6B35', marginTop: '4px', flexShrink: 0 }} />
                    <span>+91 9898649660</span>
                  </li>
                  <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <Phone size={18} style={{ marginRight: '10px', color: '#FF6B35', marginTop: '4px', flexShrink: 0 }} />
                    <span>+91 7623846723</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ borderTop: '1px solid #333', marginTop: '40px', paddingTop: '30px' }}>
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom text-center">
                <p style={{ color: '#999', margin: 0 }}>
                  &copy; {new Date().getFullYear()} RaomTech. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer-area-end */}
    </>
  );
}

