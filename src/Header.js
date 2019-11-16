import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header" class="header" itemscope itemtype="http://schema.org/WPHeader">
      
      <nav class="navigation-bar" data-become-sticky="600" data-no-placeholder>
        <div class="container">
          <div class="hamburger"><a href="#"></a></div>

          <div class="navigation-bar-flex">
            
            <div class="logo">
              <a href="index-2.html">
                <img class="logo-sticky" src="images/logo-sticky-x2.png" alt=""/>-->
                Ummah<span>Charity</span>
              </a>
            </div>

            <ul class="nav-menu clearfix" itemscope itemtype="http://schema.org/SiteNavigationElement">
              <li class="current-menu-item"><a href="#">Home</a></li>
              <li>
                <a href="#">About</a>
                <ul>
                  <li><a href="#">Mission and Vision</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Pillars</a></li>
                </ul>
              </li>
              <li><a href="#">Events</a></li>
              <li>
                <a href="#">How you can help</a>
                <ul>
                  <li><a href="#">Campaigns</a></li>
                  <li><a href="#">How to Donate</a></li>
                  <li><a href="#">Volunteering</a></li>
                  <li><a href="#">Online Form</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Alliance</a>
                <ul>
                  <li><a href="#">Campaigns</a></li>
                  <li><a href="#">How to Donate</a></li>
                  <li><a href="#">Volunteering</a></li>
                  <li><a href="#">Online Form</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Contact Us</a>
                <ul>
                  <li><a href="#">Campaigns</a></li>
                  <li><a href="#">How to Donate</a></li>
                  <li><a href="#">Volunteering</a></li>
                  <li><a href="#">Online Form</a></li>
                </ul>
              </li>
            </ul>

            <form action="#" class="form-search-header">
              <input type="search" name="site-search" class="form-control" placeholder="search for something" required />
              <button type="submit" name="site-search-submit" class="form-submit material-icons">search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};



export default Header;