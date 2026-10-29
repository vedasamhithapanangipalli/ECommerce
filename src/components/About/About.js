import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-header">
          <h2>
            About <span className="highlight">TechStore</span>
          </h2>
          <p className="section-subtitle">India's most trusted electronics destination</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>
                To democratize technology access across India by providing authentic, 
                cutting-edge electronics at competitive prices with exceptional customer service.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">⭐</div>
              <h3>Our Vision</h3>
              <p>
                To become India's leading technology retail platform, empowering millions 
                with the latest innovations in smartphones, laptops, gaming, and smart devices.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🛡️</div>
              <h3>Our Promise</h3>
              <p>
                100% authentic products, competitive pricing, fast delivery, and dedicated 
                24/7 customer support. Your tech journey starts with trust.
              </p>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500" 
              alt="Modern Electronics Store" 
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h4>50,000+ Products</h4>
                <p>Latest technology at your fingertips</p>
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🚚</div>
            <h4>Fast Delivery</h4>
            <p>Same day delivery in major cities</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h4>Secure Payment</h4>
            <p>100% secure transactions</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h4>Latest Tech</h4>
            <p>Cutting-edge electronics</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎧</div>
            <h4>24/7 Support</h4>
            <p>Always here to help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
