import { FAQItem, Project, ServiceItem } from './types';

// Updated images for Christian
export const CHRISTIAN_IMAGES = {
  img1: "https://i.postimg.cc/C5RJXGSM/4995ad88-01bd-465e-9b20-c3178ee83d1e.png",
  img2: "https://i.postimg.cc/wvf0wfKC/70585c11-a1e8-444e-b6aa-c12fcbe61985.png"
};

export const PROJECTS: Project[] = [
  {
    title: "Thomas Rott",
    url: "https://thomasrott.de",
    category: "Webdesign",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F29db4c14-6cb2-4895-8060-5ba48c7082e4.png&w=1080&q=75"
  },
  {
    title: "Kleeb",
    url: "https://kleeb.netlify.app",
    category: "Corporate",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F94316c16-a657-43c4-a7cd-8840d782ed32.png&w=1080&q=75"
  },
  {
    title: "Push MMA",
    url: "https://pushmma.netlify.app",
    category: "Sports",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fd7b360e0-a8de-4f19-9ae9-5b7678e10796.png&w=1080&q=75"
  },
  {
    title: "Barber Moosburg",
    url: "https://barbermoosburg.netlify.app",
    category: "Local",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F66216d36-d005-40de-af00-06f0f9ddc245.png&w=1080&q=75"
  },
  {
    title: "Coremis 2",
    url: "https://coremis2.netlify.app",
    category: "Tech",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Ff46238e1-c962-4db8-93c7-e63d42c50ba8.png&w=1080&q=75"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "YouTube Branding",
    description: "Thumbnails & Banner, die Klicks generieren.",
    icon: "📺",
    color: "bg-vamela-purple text-white"
  },
  {
    title: "Corporate Design",
    description: "Logos, Visitenkarten, Flyer – konsistenter Markenauftritt.",
    icon: "🎨",
    color: "bg-vamela-lime-vivid text-vamela-dark"
  },
  {
    title: "Webdesign",
    description: "Mobile-first, SEO-optimiert, individuell (kein Baukasten).",
    icon: "💻",
    color: "bg-white text-vamela-dark border border-gray-100"
  }
];

export const FAQS: FAQItem[] = [
  // Allgemein
  {
    category: "Ablauf",
    question: "Wie starten wir?",
    answer: "Kurzes Kennenlernen per Chat oder Call. Wir klären Ziele, ich mache ein Angebot. Nach Freigabe geht's sofort los."
  },
  // Grafikdesign
  {
    category: "Preise",
    question: "Was kostet ein Logo?",
    answer: "Kommt drauf an. Ein Redesign ist günstiger als eine komplette Markenentwicklung. Ich habe faire Pakete für jeden Start."
  },
  {
    category: "Print",
    question: "Machst du auch Visitenkarten?",
    answer: "Ja. Haptik ist wichtig. Ich liefere druckfertige Daten oder übernehme die Bestellung für dich."
  },
  // Webdesign
  {
    category: "Tech",
    question: "Webdesigner oder Agentur?",
    answer: "Bei mir hast du einen Ansprechpartner, schnelle Wege und zahlst nicht den Agentur-Overhead. Qualität bleibt gleich."
  },
  {
    category: "CMS",
    question: "Kann ich Inhalte selbst ändern?",
    answer: "Ja. Ich baue Systeme so, dass du Texte und Bilder später einfach selbst tauschen kannst."
  },
  // Vertrauen
  {
    category: "Garantie",
    question: "Was wenn es mir nicht gefällt?",
    answer: "Wir arbeiten so lange an den Entwürfen, bis du 100% zufrieden bist. Mein Ziel ist eine langfristige Partnerschaft."
  }
];