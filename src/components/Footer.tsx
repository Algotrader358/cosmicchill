import { Mail, MapPin, Phone, Zap } from "lucide-react";

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "254721992966";
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "cosmicchill254@gmail.com";
  const location = process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Grand Pri Building, Nandi Road, Eldoret, Kenya";
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" style={{display:"inline-flex",alignItems:"center",gap:10}}>
              <span style={{width:39,height:39,display:"grid",placeItems:"center",borderRadius:9,background:"#0879D5"}}><Zap size={21} color="white" fill="white"/></span>
              <span style={{fontWeight:850,letterSpacing:".04em",fontSize:15}}>COSMIC CHILL<br/><small style={{fontSize:9,letterSpacing:".28em",color:"#9DB1C7"}}>LIMITED</small></span>
            </a>
            <p>Your partner in electronics, industrial equipment and global sourcing. Connecting customers with the products and procurement support their projects require.</p>
          </div>
          <div><h4>Explore</h4><a href="#products">Products</a><a href="#importation">Importation services</a><a href="#industries">Industries</a><a href="#about">About us</a></div>
          <div><h4>Product categories</h4><a href="#products">Electronics</a><a href="#products">Industrial machinery</a><a href="#products">Electrical components</a><a href="#products">Automation equipment</a></div>
          <div><h4>Get in touch</h4>
            <a href={`tel:+${phone}`}><Phone size={13} style={{display:"inline",marginRight:7}}/>+{phone}</a>
            <a href={`mailto:${email}`}><Mail size={13} style={{display:"inline",marginRight:7}}/>{email}</a>
            <a href="#contact"><MapPin size={13} style={{display:"inline",marginRight:7}}/>{location}</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Cosmic Chill Limited. All rights reserved.</span><span>Electronics · Industrial Equipment · Global Sourcing</span></div>
      </div>
    </footer>
  );
}
