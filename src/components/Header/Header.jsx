import React from "react";
import "./Header.css";
import NavItem from "./NavItem";
import logo from "../../assets/logo.png";
import digitalIndia from "../../assets/digital-india.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-section">
          <img src={logo} alt="CyberSec India Expo" className="main-logo" />
          <div className="logo-text">
            <span>Company</span>
            <span>AI India Expo 2026</span>
          </div>
        </div>

        <div className="supported-by">
          <span>Supported By</span>
          <div className="support-logos">
            <img src={digitalIndia} alt="Digital India" />
          </div>
        </div>
      </div>

      <nav className="navbar">
        <NavItem label="Home" active href="/" />
        <NavItem
          label="About"
          dropdown
          items={[
            { label: "About Company", href: "/about/company" },
            { label: "About Organizers", href: "/about/organizers" },
          ]}
        />
        <NavItem
          label="Visit"
          dropdown
          items={[
            { label: "Why Visit", href: "/visit/why-visit" },
            { label: "Who Should Visit ?", href: "/visit/who-should-visit" },
            { label: "Visitor Registration", href: "/visit/registration" },
            { label: "Plan Your Travel", href: "/visit/plan-travel" },
          ]}
        />
        <NavItem
          label="Conference"
          dropdown
          items={[
            { label: "About Conference", href: "/conference/about" },
            { label: "Advisory Board", href: "/conference/advisory" },
            { label: "Agenda", href: "/conference/agenda" },
            { label: "Speakers", href: "/conference/speakers" },
            { label: "Refer and Earn", href: "/conference/refer" },
          ]}
        />
        <NavItem
          label="Awards"
          dropdown
          items={[
            { label: "Shortlist", href: "/awards/shortlist" },
            { label: "About Awards", href: "/awards/about" },
            { label: "Awards Categories", href: "/awards/categories" },
            { label: "Eligibility Criterion", href: "/awards/eligibility" },
            { label: "FAQs", href: "/awards/faqs" },
          ]}
        />
        <NavItem
          label="Exhibit"
          dropdown
          items={[
            { label: "Exhibitor Profile", href: "/exhibit/profile" },
            { label: "Why Exhibit", href: "/exhibit/why" },
            { label: "Book a Stand", href: "/exhibit/book" },
            { label: "Sponsorship", href: "/exhibit/sponsorship" },
            { label: "Exhibitor List", href: "/exhibit/list" },
          ]}
        />
        <NavItem label="Coverage" href="/coverage" />
        <NavItem label="CyberSec World" href="/cybersec-world" />
        <NavItem label="Contact" href="/contact" />
      </nav>
    </header>
  );
};

export default Header;
