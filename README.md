# Cosmic Chill Limited — Website

A responsive Next.js website for an electronics, industrial equipment and international sourcing business.

## Requirements
- Node.js 20.9+ (Node 22 recommended)
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Build and run production locally

```bash
npm run build
npm start
```

## Deploy to Render

1. Create a GitHub repository and push this project.
2. In Render, choose **New → Web Service** and connect the repository.
3. Render can detect `render.yaml`. Alternatively configure:
   - Runtime: Node
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
4. Deploy. Render will provide a temporary `onrender.com` URL.
5. Add a custom domain later under the Render service's Settings → Custom Domains.

The included `render.yaml` is a starting configuration. You can change the service plan in Render based on your budget and traffic needs.

## Important before launch

- Confirm the business phone, email and address.
- Replace or approve the product category descriptions and imagery.
- Confirm which products you actually supply and which are sourced on request.
- Test the WhatsApp quote flow on a real mobile device.
- Add a privacy policy and any required business/legal disclosures before collecting customer information at scale.

## Quote requests

The quote form opens WhatsApp with a pre-filled enquiry to the company phone number. It does not claim to submit a server-side order or guarantee product availability. Customers can also use the displayed email and telephone details.

## Image licensing

The demo uses image URLs from Unsplash for visual placeholders. Before commercial launch, confirm the selected images are suitable and retain appropriate usage rights. Replace them with company-owned or properly licensed product and project photography where possible.
