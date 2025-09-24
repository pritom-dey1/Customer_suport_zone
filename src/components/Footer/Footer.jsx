import React from 'react'

const Footer = () => {
  return (
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-about">
        <h2>CS — Ticket System</h2>
        <p>
         Ticket System is a powerful solution for managing customer support and service requests. Users can submit tickets for issues or inquiries, which are automatically tracked, prioritized, and assigned to the right team members.
        </p>
      </div>

      <div class="footer-links">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Mission</a></li>
          <li><a href="#">Contact Sales</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h3>Services</h3>
        <ul>
          <li><a href="#">Products & Services</a></li>
          <li><a href="#">Customer Stories</a></li>
          <li><a href="#">Download Apps</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h3>Information</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Join Us</a></li>
        </ul>
      </div>

      <div class="footer-links">
        <h3>Social Links</h3>
        <ul>
          <li><i class="ri-twitter-x-line"></i> @CS — Ticket System</li>
          <li><i class="ri-linkedin-fill"></i> @CS — Ticket System</li>
          <li><i class="ri-facebook-fill"></i> @CS — Ticket System</li>
          <li><i class="ri-mail-fill"></i> support@cs.com</li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer