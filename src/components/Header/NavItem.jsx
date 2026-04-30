import React, { useState, useRef, useEffect } from "react";

const NavItem = ({
  label,
  dropdown = false,
  active,
  href = "#",
  items = [],
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const className = `nav-item ${active ? "active" : ""} ${dropdown ? "has-dropdown" : ""}`;

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Dropdown with items: support hover (CSS) and click toggle (JS)
  if (dropdown && items.length > 0) {
    return (
      <div ref={ref} className={`${className} ${open ? "open" : ""}`}>
        <span
          className="label"
          role="button"
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setOpen((v) => !v);
          }}
        >
          {label}
          <span className="arrow">▾</span>
        </span>

        <ul className="dropdown-menu" role="menu" aria-hidden={!open}>
          {items.map((it, idx) => (
            <li key={idx} role="none">
              <a
                role="menuitem"
                href={it.href || "#"}
                onClick={() => setOpen(false)}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (dropdown) {
    return (
      <div className={className}>
        {label}
        <span className="arrow">▾</span>
      </div>
    );
  }

  return (
    <a className={className} href={href}>
      {label}
    </a>
  );
};

export default NavItem;
