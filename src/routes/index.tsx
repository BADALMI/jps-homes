import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Home,
  Landmark,
  ShieldCheck,
  KeyRound,
  Handshake,
  ArrowRight,
} from "lucide-react";

import logoAsset from "@/assets/jps-logo.jpeg.asset.json";
import heroImg from "@/assets/hero.jpg";
import villaImg from "@/assets/project-villa.jpg";
import towerImg from "@/assets/project-tower.jpg";
import plotsImg from "@/assets/project-plots.jpg";
import hazratganjImg from "@/assets/project-hazratganj.jpg";
import golfCityImg from "@/assets/project-golf-city.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JPS Real Estates — Trusted Property Dealer in Gomti Nagar, Lucknow" },
      {
        name: "description",
        content:
          "JPS Real Estates (JPS Associate), led by Jitendra Pratap Singh, helps you buy, sell and invest in premium homes, villas and plots across Lucknow. Office: 3/104 Viram Khand, Gomti Nagar, Lucknow.",
      },
      { property: "og:title", content: "JPS Real Estates — Lucknow Property Experts" },
      {
        property: "og:description",
        content:
          "Premium apartments, villas and plots in Gomti Nagar and across Lucknow. Visit us at 3/104 Viram Khand, Gomti Nagar, Lucknow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    name: "Palm Ville",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "4 BHK villas",
    rera: "Phase details to confirm",
    source: "https://www.squareyards.com/lucknow-residential-property/ansal-api-palm-ville/48120/project",
    image: heroImg,
  },
  {
    name: "Akanksha Enclave",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential · configuration to confirm",
    rera: "Confirm phase registration",
    source: "https://www.thirdvendor.com/portfolio/ansal-api-akansha-enclave/",
    image: villaImg,
  },
  {
    name: "Serene Lakeview",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential · configuration to confirm",
    rera: "Confirm phase registration",
    source: "https://www.rathiglobalrealty.com/ansal-serene-lakeview",
    image: towerImg,
  },
  {
    name: "Larchwood Villa",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Villas · configuration to confirm",
    rera: "Confirm phase registration",
    source: "https://www.commonfloor.com/ansal-larchwood-villa-lucknow/povp-ulllx2",
    image: plotsImg,
  },
  {
    name: "Golf Vista",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential apartments",
    rera: "UPRERAPRJ5801 · verify current phase status",
    source: "https://www.up-rera.in/Projectsummary?IRSAHEB=D6PY3lyims8%3D&NPJ6RAme=1l4uItwMl94ChAP0nf31obwy1fcMcSdxxF+cP+ndQvY%3D&PaURJEMAN4=ZL9MNERkNdaYwfeqOz9YrnA%3D%3D&UI0aPA1ISD=leZx60cJ64c%3D&hfFlag=GL34ZTSSjlw%3D",
    image: hazratganjImg,
  },
  {
    name: "Golf Gateway",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential apartments",
    rera: "UPRERAPRJ3331 · verify current phase status",
    source: "https://uprera.azurewebsites.net/Frm_View_Project_Details.aspx?id=3331",
    image: golfCityImg,
  },
  {
    name: "Bliss Delight",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential apartments",
    rera: "UPRERAPRJ4754 · confirm current status",
    source: "https://up-rera.in/Projectsummary?IRSAHEB=D6PY3lyims8%3D&NPJ6RAme=52tIwuAdn9%2F6vXVGQZ6np%2FLeIkAsf+Fnp%2FYvBsTFqJEETF5W+2eLWN7gLgx3xQ88hipm7PcEykU%3D&PaURJEMAN4=ZL9MNERkNda4UBBTeO5eHg%3D%3D&UI0aPA1ISD=DI6FN+4ZEbA%3D",
    image: heroImg,
  },
  {
    name: "Basera Enclave",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential apartments · configuration to confirm",
    rera: "Confirm phase registration",
    source: "https://houssed.com/lucknow/ansal-api/ansal-basera-enclave-4835",
    image: villaImg,
  },
  {
    name: "Celebrity Greens",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential apartments",
    rera: "UPRERAPRJ8838 / UPRERAPRJ3405 · check phase",
    source: "https://up-rera.in/Projectsummary?hfFlag=GL34ZTSSjlw%3D&IRSAHEB=D6PY3lyims8%3D&NPJ6RAme=qrx0mMaBZuSz3VsqG+HCRO4CrrfGAPph86TpaHgFZma8DIDpFsikfPYJW2VbbhRd%2Fl%2FsLHF%2Fphg%3D&PaURJEMAN4=ZL9MNERkNdbf2+oZ7dp03A%3D%3D&UI0aPA1ISD=diQlR%2FG5Zbo%3D",
    image: towerImg,
  },
  {
    name: "Celebrity Meadows",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Residential apartments",
    rera: "UPRERAPRJ3206 / UPRERAPRJ5602 · check phase",
    source: "https://www.up-rera.in/Projectsummary?hfFlag=GL34ZTSSjlw%3D&IRSAHEB=D6PY3lyims8%3D&NPJ6RAme=qrx0mMaBZuSz3VsqG+HCRFbIz1d5sNBPUb%2FwA8f1%2Fx3eptFuIt1xLRIfKO%2FedoLs0PdEO4zsm+4%3D&PaURJEMAN4=ZL9MNERkNda4UBBTeO5eHg%3D%3D&UI0aPA1ISD=nXEuIrMYSvQ%3D",
    image: plotsImg,
  },
  {
    name: "Ansal Business Park 2",
    developer: "Ansal API",
    location: "Sushant Golf City, Lucknow",
    type: "Commercial development",
    rera: "Confirm registration and current status",
    source: "https://ayanaprop.tech/rera-lucknow/ansal-projects/",
    image: hazratganjImg,
  },
  {
    name: "Omaxe Waterscapes",
    developer: "Omaxe",
    location: "Gomti Nagar Extension, Lucknow",
    type: "3 BHK · 3 BHK + servant",
    rera: "UPRERAPRJ1538 / UPRERAPRJ1263",
    source: "https://www.omaxe.com/residential-property-in-lucknow/omaxe-waterscapes",
    image: golfCityImg,
  },
  {
    name: "Omaxe The Resort",
    developer: "Omaxe",
    location: "Gomti Nagar Extension, Lucknow",
    type: "3 & 4 BHK residences · penthouses",
    rera: "UPRERAPRJ326163 · under construction",
    price: "₹2.79 Cr onwards*",
    source: "https://www.omaxe.com/residential-property-in-lucknow/the-resort-1",
    image: villaImg,
  },
  {
    name: "Hazratganj Residency",
    developer: "Omaxe",
    location: "Gomti Nagar Extension, Lucknow",
    type: "1, 2 & 3 BHK · penthouses",
    rera: "UPRERAPRJ2050",
    source: "https://www.omaxe.com/residential-property-in-lucknow/hazratganj-residency",
    image: hazratganjImg,
  },
  {
    name: "Omaxe Residency II",
    developer: "Omaxe",
    location: "Gomti Nagar Extension, Lucknow",
    type: "2 & 3 BHK · 3 BHK + servant",
    rera: "UPRERAPRJ1682 / UPRERAPRJ1720 / UPRERAPRJ368818",
    source: "https://www.omaxe.com/residential-property-in-lucknow/omaxe-residency-ii",
    image: villaImg,
  },
  {
    name: "Omaxe Metro City · Cassia",
    developer: "Omaxe",
    location: "Kalli Pashchim, Raebareli Road, Lucknow",
    type: "2 BHK + study to 4 BHK + servant",
    rera: "UPRERAPRJ344049/7/2024 · UPRERAPRJ166763/8/2024",
    price: "₹87 lakh onwards*",
    source: "https://www.omaxe.com/residential-property-in-lucknow/cassia",
    image: towerImg,
  },
  {
    name: "Gomti Greens",
    developer: "Emaar India",
    location: "Gomti Nagar Extension, Lucknow",
    type: "Residential plots",
    rera: "UPRERAPRJ5635 · integrated township",
    source: "https://in.emaar.com/en/properties/gomti-greens-plots/",
    image: plotsImg,
  },
  {
    name: "Elite Oasis",
    developer: "Emaar India",
    location: "Gomti Greens, Sector 7, Lucknow",
    type: "3 & 4 BHK residences",
    rera: "UPRERAPRJ944123/02/2025",
    source: "https://in.emaar.com/en/properties/elite-oasis/",
    image: heroImg,
  },
  {
    name: "Rishita Mulberry Heights",
    developer: "Rishita Developers",
    location: "Sushant Golf City, Lucknow",
    type: "2 & 3 BHK apartments",
    rera: "Phases 1, 3 & 4: UPRERAPRJ357829 · UPRERAPRJ308470 · UPRERAPRJ192087",
    source: "https://www.rishitagroup.in/rishita-mulberry-heights/",
    image: golfCityImg,
  },
  {
    name: "Gomti Green City",
    developer: "Shree Raj Infrahousing",
    location: "Kisan Path, near New Jail Road, Lucknow",
    type: "Residential plots",
    rera: "UPRERAPRJ17806",
    source: "https://www.shreerajinfra.com/gomti-green-city/",
    image: plotsImg,
  },
];

const locations = [
  { name: "Gomti Nagar" },
  { name: "Gomti Nagar Extension" },
  { name: "Hazratganj" },
  { name: "Indira Nagar" },
  { name: "Aliganj" },
  { name: "Sushant Golf City" },
  { name: "Shaheed Path" },
  { name: "Faizabad Road" },
];

const services = [
  {
    icon: Home,
    title: "Buy a Home",
    text: "Verified apartments, villas and plots matched to your budget and lifestyle.",
  },
  {
    icon: KeyRound,
    title: "Sell Your Property",
    text: "Right pricing, genuine buyers and complete paperwork support till registry.",
  },
  {
    icon: Landmark,
    title: "Investment Advisory",
    text: "High-growth corridors of Lucknow identified for safe, profitable investment.",
  },
  {
    icon: ShieldCheck,
    title: "Legal & Documentation",
    text: "Title verification, agreement drafting and registration handled end-to-end.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="JPS Real Estates logo"
              className="h-11 w-11 rounded-md object-cover"
            />
            <div className="leading-tight">
              <p className="font-serif text-lg font-bold tracking-wide">JPS Real Estates</p>
              <p className="text-xs text-muted-foreground">JPS Associate · Lucknow</p>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#projects" className="text-muted-foreground transition-colors hover:text-primary">
              Projects
            </a>
            <a href="#locations" className="text-muted-foreground transition-colors hover:text-primary">
              Locations
            </a>
            <a href="#services" className="text-muted-foreground transition-colors hover:text-primary">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Book a Visit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium residential community in Lucknow"
            className="animate-ken-burns h-full w-full object-cover"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-28 sm:px-6 md:py-40">
          <p className="animate-fade-up mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            <Building2 className="h-3.5 w-3.5" /> Lucknow's Trusted Property Partner
          </p>
          <h1
            className="animate-fade-up max-w-2xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: "150ms" }}
          >
            Find Your Dream Home in the Heart of Lucknow
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-xl text-base text-white/85 sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            From premium apartments in Gomti Nagar to gated plots on Faizabad Road — JPS Real
            Estates guides you to the right property with complete transparency.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "450ms" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Featured Projects
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Lucknow Projects to Explore
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
              Browse developments from Lucknow builders. Ask JPS to confirm current availability and pricing.
          </p>
        </div>
        </Reveal>
        <p className="mb-8 max-w-4xl border-l-2 border-primary pl-4 text-xs leading-relaxed text-muted-foreground">
          Project details are summarized from developer, public RERA, and property-listing sources. Registrations and possession timelines can vary by phase. Photos are illustrative, not project-specific. *Price shown is the developer-listed starting price; confirm the current offer.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 100} className="h-full">
            <article
              key={p.name}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                  {p.developer}
                </span>
                <span className="absolute bottom-3 right-3 rounded bg-background/90 px-2 py-1 text-[10px] font-medium text-foreground">
                  Illustrative photo
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
                </p>
                <p className="mt-2 text-sm font-medium">{p.type}</p>
                <p className="mt-3 min-h-9 text-xs text-muted-foreground">{p.rera}</p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <p className="font-serif text-base font-bold text-primary">{p.price ?? "Price on request"}</p>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Project details ↗
                  </a>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Where We Operate
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
            Popular Locations in Lucknow
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((l, i) => (
              <Reveal key={l.name} delay={(i % 4) * 80} className="h-full">
              <a
                href="#contact"
                className="group block h-full rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold group-hover:text-primary">{l.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">Lucknow</p>
              </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">What We Do</p>
        <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
          End-to-End Property Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 100} className="h-full">
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
              Get in Touch
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
              Visit Our Office in Gomti Nagar
            </h2>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
              Drop by for a cup of chai and an honest conversation about your property goals. We
              are happy to arrange site visits across Lucknow.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Handshake className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-semibold">Jitendra Pratap Singh</p>
                  <p className="text-primary-foreground/75">Proprietor, JPS Real Estates (JPS Associate)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <p>3/104 Viram Khand, Gomti Nagar, Lucknow, Uttar Pradesh</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0" />
                <div>
                  <p>+91 73552 23299</p>
                  <p>+91 96963 32889</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <p>contact@jpsrealestates.in</p>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal delay={150}>
          <form
            className="rounded-xl bg-background p-6 text-foreground shadow-xl sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-serif text-xl font-bold">Request a Callback</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Share your details and we will reach out within a day.
            </p>
            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
              <select
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                defaultValue=""
              >
                <option value="" disabled>
                  I'm interested in…
                </option>
                <option>Buying a home</option>
                <option>Selling a property</option>
                <option>Investing in plots</option>
                <option>Renting</option>
              </select>
              <textarea
                placeholder="Message (optional)"
                rows={3}
                className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Callback
              </button>
            </div>
          </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="JPS Real Estates logo"
              className="h-9 w-9 rounded-md object-cover"
              loading="lazy"
            />
            <p className="font-serif font-bold text-foreground">JPS Real Estates</p>
          </div>
          <p>3/104 Viram Khand, Gomti Nagar, Lucknow · © {new Date().getFullYear()} JPS Real Estates</p>
        </div>
      </footer>
    </div>
  );
}
