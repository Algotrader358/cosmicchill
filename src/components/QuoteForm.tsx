"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const categories = ["Electronics", "Industrial machinery", "Electrical components", "Automation equipment", "Other / Not sure"];

export default function QuoteForm() {
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const category = String(form.get("category") || "");
    const product = String(form.get("product") || "").trim();
    const quantity = String(form.get("quantity") || "").trim();
    const destination = String(form.get("destination") || "").trim();
    const details = String(form.get("details") || "").trim();
    const message = [
      "Hello Cosmic Chill Limited, I would like to request a quotation.",
      `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`,
      `Category: ${category}`, `Product / specifications: ${product}`,
      `Quantity: ${quantity || "Not specified"}`,
      `Delivery destination: ${destination || "Not specified"}`,
      `Additional details: ${details || "None"}`
    ].join("\n");
    const number = process.env.NEXT_PUBLIC_COMPANY_PHONE || "254721992966";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("Your enquiry is ready in WhatsApp. Please review and send it to complete your request.");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} style={{display:"grid",gap:16}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:14}}>
        <div className="form-field"><label htmlFor="name">Full name *</label><input id="name" name="name" required placeholder="Your name"/></div>
        <div className="form-field"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" required placeholder="you@company.com"/></div>
        <div className="form-field"><label htmlFor="phone">Phone / WhatsApp *</label><input id="phone" name="phone" required placeholder="+254..."/></div>
        <div className="form-field"><label htmlFor="category">Product category *</label><select id="category" name="category" required defaultValue=""><option value="" disabled>Select category</option>{categories.map(c=><option key={c}>{c}</option>)}</select></div>
        <div className="form-field"><label htmlFor="product">Product / specifications *</label><input id="product" name="product" required placeholder="Product name, model or requirements"/></div>
        <div className="form-field"><label htmlFor="quantity">Quantity</label><input id="quantity" name="quantity" placeholder="e.g. 5 units"/></div>
        <div className="form-field" style={{gridColumn:"1 / -1"}}><label htmlFor="destination">Delivery destination</label><input id="destination" name="destination" placeholder="City and country"/></div>
        <div className="form-field" style={{gridColumn:"1 / -1"}}><label htmlFor="details">Additional details</label><textarea id="details" name="details" placeholder="Tell us about technical requirements, preferred brand, target timeline or importation assistance needed."/></div>
      </div>
      <button className="btn btn-primary" type="submit" style={{width:"100%"}}>Continue to WhatsApp <MessageCircle size={16}/></button>
      {status && <p role="status" style={{fontSize:12,color:"#0879D5",lineHeight:1.6,margin:0}}>{status}</p>}
      <p style={{fontSize:10,color:"#8493A4",lineHeight:1.6,margin:0}}>This form prepares an enquiry in WhatsApp; it does not place an order or confirm stock, pricing or delivery.</p>
      <style jsx>{`@media(max-width:560px){form div[style*="grid-template-columns"]{grid-template-columns:1fr!important}form div[style*="grid-column"]{grid-column:auto!important}}`}</style>
    </form>
  );
}
