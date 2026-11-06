"use client";

import { useState } from "react";
import { Menu, X, Zap, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "#home"], ["Products", "#products"], ["Importation", "#importation"],
  ["Industries", "#industries"], ["About", "#about"], ["Contact", "#contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.96)", backdropFilter: "blur(14px)", borderBottom: "1px solid #E8EEF4" }}>
      <div className="container" style={{ height: 78, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#home" aria-label="Cosmic Chill Limited home" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 42, height: 42, borderRadius: 10, display: "grid", placeItems: "center", color: "white", background: "#0879D5" }}><Zap size={23} fill="white" /></span>
          <span style={{ display: "grid", gap: 1 }}>
            <strong style={{ color: "#0B2344", fontSize: 16, letterSpacing: ".045em", lineHeight: 1 }}>COSMIC CHILL</strong>
            <small style={{ color: "#7890A8", fontSize: 9, fontWeight: 800, letterSpacing: ".27em" }}>LIMITED</small>
          </span>
        </a>
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 25 }}>
          {links.map(([label, href]) => <a className="nav-link" key={label} href={href}>{label}</a>)}
        </nav>
        <a className="btn btn-primary desktop-quote" href="#quote">Request a Quote <ArrowUpRight size={15}/></a>
        <button className="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} style={{ border: 0, background: "transparent", color: "#0B2344" }}>
          {open ? <X size={25}/> : <Menu size={25}/>}
        </button>
      </div>
      {open && <nav style={{ display: "grid", padding: "8px 22px 22px", gap: 17, background: "white" }}>
        {links.map(([label, href]) => <a key={label} className="nav-link" href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="btn btn-primary" href="#quote" onClick={() => setOpen(false)}>Request a Quote <ArrowUpRight size={15}/></a>
      </nav>}
      <style jsx>{`@media(max-width:900px){.desktop-nav,.desktop-quote{display:none!important}.mobile-menu{display:block!important}}`}</style>
    </header>
  );
}
