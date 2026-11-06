import {
  ArrowRight, ArrowUpRight, BadgeCheck, Boxes, Building2, Cable, Check,
  ChevronRight, Cpu, Factory, Globe2, Headphones, Lightbulb, PackageSearch,
  Settings2, ShieldCheck, Ship, Truck, Wrench, Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

const products = [
  { name: "Electronics", category: "Electronics", desc: "A range of electronic products and components for personal, commercial and technical applications.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85", icon: Cpu },
  { name: "Industrial Machinery", category: "Industrial", desc: "Machinery and industrial equipment sourced to match operational and project requirements.", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=85", icon: Factory },
  { name: "Electrical Components", category: "Electrical", desc: "Electrical components and equipment for installation, maintenance and industrial systems.", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85", icon: Cable },
  { name: "Automation Equipment", category: "Automation", desc: "Automation and control products to support modern industrial processes and applications.", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85", icon: Settings2 },
];

const steps = [
  ["01", "Share your requirements", "Tell us what product, specifications, quantity and destination you have in mind."],
  ["02", "Sourcing & quotation", "We review your brief and work on suitable sourcing options and a quotation."],
  ["03", "Confirm the details", "Review the proposed product, pricing, lead time and importation arrangements before proceeding."],
  ["04", "Procurement support", "We coordinate the agreed next steps and keep communication clear throughout the process."],
];

const industries = [
  [Factory, "Manufacturing & production"], [Building2, "Construction & engineering"],
  [Zap, "Energy & utilities"], [Cable, "Telecommunications"], [Wrench, "Maintenance & technical services"],
  [Boxes, "Commercial & retail businesses"]
] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <div className="hero-kicker"><Globe2 size={14}/> Kenya · International sourcing</div>
              <h1>Powering business through <span>technology.</span></h1>
              <p>Electronics, industrial equipment and sourcing support for individuals and businesses. We help you find the products your projects and operations need.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#products">Explore our products <ArrowUpRight size={16}/></a>
                <a className="btn btn-outline" href="#quote">Request a quotation <ArrowRight size={16}/></a>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="container trust-grid">
            <div className="trust-item"><span className="trust-icon"><PackageSearch size={20}/></span>Product sourcing support</div>
            <div className="trust-item"><span className="trust-icon"><Globe2 size={20}/></span>Kenya & international markets</div>
            <div className="trust-item"><span className="trust-icon"><Headphones size={20}/></span>Responsive customer communication</div>
          </div>
        </div>

        <section className="section" id="products">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What we offer</span>
              <h2>Products and equipment for the work that matters.</h2>
              <p>Explore our core product categories. Looking for a specific model, technical specification or industrial-grade product? Send us your requirements and ask about sourcing options.</p>
            </div>
            <div className="product-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:18}}>
              {products.map((p) => {
                const Icon = p.icon;
                return <article className="card" key={p.name}>
                  <div className="card-image" style={{backgroundImage:`url("${p.image}")`}}/>
                  <div className="card-body">
                    <div style={{display:"flex",alignItems:"center",gap:8,color:"#0879D5",fontSize:10,fontWeight:850,textTransform:"uppercase",letterSpacing:".1em",marginBottom:12}}><Icon size={15}/>{p.category}</div>
                    <h3>{p.name}</h3><p>{p.desc}</p>
                    <a className="text-link" href="#quote">Enquire about this category <ChevronRight size={14}/></a>
                  </div>
                </article>;
              })}
            </div>
            <p style={{fontSize:11,color:"#8493A4",marginTop:20}}>Product images are illustrative. Specific brands, models, availability, pricing and lead times are confirmed during quotation.</p>
          </div>
        </section>

        <section className="section section-soft" id="importation">
          <div className="container split">
            <div className="photo-panel">
              <div className="photo-note"><strong>Source beyond borders.</strong><span>Tell us what you need and where it needs to go. We can discuss suitable sourcing and importation support.</span></div>
            </div>
            <div>
              <span className="eyebrow">Sourcing & importation</span>
              <div className="section-heading" style={{marginBottom:0}}>
                <h2>Finding the right product should not be the hard part.</h2>
                <p>When the product you need is not readily available locally, Cosmic Chill Limited can assist with sourcing and importation enquiries for electronics and industrial-grade equipment.</p>
              </div>
              <ul className="check-list">
                <li><span className="check"><Check size={13}/></span><span><strong>Product identification</strong><br/>Share a product name, model, specification sheet or reference image.</span></li>
                <li><span className="check"><Check size={13}/></span><span><strong>Supplier and sourcing enquiries</strong><br/>Discuss sourcing options for your specific requirements.</span></li>
                <li><span className="check"><Check size={13}/></span><span><strong>Quotation coordination</strong><br/>Review product details, pricing and estimated timelines before confirming.</span></li>
                <li><span className="check"><Check size={13}/></span><span><strong>Importation support</strong><br/>Discuss shipping and importation arrangements for the agreed order.</span></li>
              </ul>
              <a className="btn btn-primary" href="#quote">Discuss your sourcing needs <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How we work</span>
              <h2>A clear process, from product brief to procurement.</h2>
              <p>Whether you are buying a single item or enquiring about equipment for a business project, we start by understanding what you need.</p>
            </div>
            <div className="process-grid">
              {steps.map(([number,title,desc])=><article className="process-card" key={number}>
                <span className="process-number">{number} / PROCESS</span><h3>{title}</h3><p>{desc}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="industries">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Who we serve</span>
              <h2>Supporting people, projects and businesses.</h2>
              <p>Our product categories and sourcing approach are intended to serve a broad range of customers, from individual buyers to organizations with specialized procurement needs.</p>
            </div>
            <div className="industry-grid">
              {industries.map(([Icon,label])=><div className="industry" key={label}><span className="industry-icon"><Icon size={19}/></span>{label}</div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-band">
              <div><span className="eyebrow" style={{color:"#8BCBFF"}}>Have a product in mind?</span><h2>Let's find the right solution for your requirements.</h2><p>Send us a product name, specification or project brief. Our team can discuss the next steps with you.</p></div>
              <a className="btn btn-light" href="#quote" style={{whiteSpace:"nowrap"}}>Start an enquiry <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="quote">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Request a quotation</span>
              <h2>Tell us what you are looking for.</h2>
              <p>Give us a few details about the product or equipment you need. The form will prepare your enquiry in WhatsApp so you can review and send it.</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"minmax(0,1.25fr) minmax(280px,.75fr)",gap:25,alignItems:"start"}}>
              <div className="contact-card"><QuoteForm/></div>
              <div className="contact-card" id="contact">
                <span className="eyebrow">Contact our team</span>
                <h3 style={{fontSize:23,color:"#0B2344",letterSpacing:"-.035em",margin:"14px 0 8px"}}>Let's talk about your requirements.</h3>
                <p style={{fontSize:13,color:"#718196",lineHeight:1.75,margin:"0 0 24px"}}>Reach out directly for product enquiries, sourcing discussions and general questions.</p>
                <div className="contact-row"><span className="trust-icon"><PhoneIcon/></span><div><strong>Call us</strong><a href="tel:+254721992966">+254 721 992 966</a></div></div>
                <div className="contact-row"><span className="trust-icon"><MailIcon/></span><div><strong>Email</strong><a href="mailto:cosmicchill254@gmail.com">cosmicchill254@gmail.com</a></div></div>
                <div className="contact-row"><span className="trust-icon"><MapPinIcon/></span><div><strong>Office</strong><span>Grand Pri Building, Nandi Road<br/>Eldoret, Uasin Gishu, Kenya</span></div></div>
                <a className="btn btn-primary" href="https://wa.me/254721992966" target="_blank" rel="noreferrer" style={{width:"100%",marginTop:25}}>Chat on WhatsApp <ArrowUpRight size={15}/></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
      <style jsx>{`
        @media(max-width:900px){.product-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
        @media(max-width:640px){.product-grid{grid-template-columns:1fr!important}#quote .container>div[style*="grid-template-columns"]{grid-template-columns:1fr!important}}
      `}</style>
    </>
  );
}

function PhoneIcon(){ return <span style={{fontSize:18}}>☎</span>; }
function MailIcon(){ return <span style={{fontSize:18}}>✉</span>; }
function MapPinIcon(){ return <span style={{fontSize:18}}>⌖</span>; }
