export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: string;
}

export interface StoryMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface WeddingData {
  bride: {
    name: string;
    fullName: string;
    parents: string;
    intro: string;
    image: string;
  };
  groom: {
    name: string;
    fullName: string;
    parents: string;
    intro: string;
    image: string;
  };
  weddingDate: string;
  displayDate: string;
  heroInviteLine: string;
  welcomeMessage: string;
  muhurtham: {
    date: string;
    time: string;
    nakshatra: string;
    tithi: string;
    dressSuggestion: string;
    quote: string;
    quoteTelugu: string;
    quoteTranslation: string;
  };
  venue: {
    name: string;
    address: string;
    mapUrl: string;
  };
  contact: {
    name: string;
    phone: string;
  };
  footerInvitation: string;
  events: WeddingEvent[];
  story: StoryMilestone[];
  gallery: GalleryImage[];
}

export const weddingData: WeddingData = {
  bride: {
    name: "Roshni",
    fullName: "Roshni",
    parents: "Beloved daughter of Mr. Premlal Ambulkar",
    intro:
      "Warm, graceful, and full of light — Roshni brings joy and calm to every moment she enters.",
    image: "/images/bride.jpg",
  },

  groom: {
    name: "SaiPavan",
    fullName: "SaiPavan",
    parents: "Cherished son of Mr. Srinivas Rao",
    intro:
      "Thoughtful, steadfast, and devoted — SaiPavan is the kind of person who makes everyone around him feel at home.",
    image: "/images/groom.jpg",
  },

  // ISO 8601 with IST offset — used for the live countdown
  weddingDate: "2026-08-18T04:02:00+05:30",
  displayDate: "Tuesday, 18 August 2026",

  heroInviteLine: "With joy in our hearts,",
  welcomeMessage:
    "We met as professional colleagues, and somewhere between the workdays and conversations, something beautiful happened. With the blessings of both our families, we are now beginning the most special chapter of our lives together. We warmly invite you to celebrate our wedding with us.",

  muhurtham: {
    date: "Tuesday, 18 August 2026",
    time: "4:02 AM (18 Aug) – Early hours of 19 August",
    nakshatra: "Swathi Nakshatram",
    tithi: "—",
    dressSuggestion:
      "Traditional South Indian attire — Silk sarees or Pattu pavadai for ladies; Dhoti or Kurta for gentlemen",
    quote: "विवाहः परमो धर्मः",
    quoteTelugu: "వివాహః పరమో ధర్మః",
    quoteTranslation: "Marriage is the highest dharma",
  },

  venue: {
    name: "Sai Madhura Banquet Hall",
    address: "Alwyn Cross Road, Hafeezpet, Miyapur, Hyderabad",
    mapUrl: "https://maps.app.goo.gl/rqB3E56iHbnZ5wfu6",
  },

  contact: {
    name: "Sai Madhura Banquet Hall",
    phone: "+91 83286 14174",
  },

  footerInvitation:
    "We request the honour of your presence and blessings as we begin this beautiful journey together.",

  events: [
    {
      id: "haldi",
      name: "Haldi Ceremony",
      date: "Sunday, 16 August 2026",
      time: "4:00 PM onwards",
      venue: "Royal Pride Apartment, Pride Park Colony, Ameenpur, Hyderabad",
      description:
        "A joyful ceremony where turmeric paste is lovingly applied to bless the couple with radiance and ward off evil before the wedding.",
      icon: "sun",
    },
    {
      id: "muhurtham",
      name: "Muhurtham (Wedding)",
      date: "Tuesday, 18 August 2026",
      time: "4:02 AM – Early hours of 19 August",
      venue: "Sai Madhura Banquet Hall, Hafeezpet, Miyapur, Hyderabad",
      description:
        "The sacred ceremony of Saptapadi and Mangalsutra under Swathi Nakshatram — the auspicious moment when two souls become one.",
      icon: "heart",
    },
    {
      id: "reception",
      name: "Wedding Reception",
      date: "Tuesday, 18 August 2026",
      time: "6:00 PM onwards",
      venue: "Sai Madhura Banquet Hall, Hafeezpet, Miyapur, Hyderabad",
      description:
        "An elegant evening celebration to welcome SaiPavan and Roshni as a couple, and to shower them with your blessings and love.",
      icon: "star",
    },
  ],

  story: [
    {
      id: "meet",
      title: "Professional Colleagues",
      date: "Where It All Began",
      description:
        "We met as professional colleagues — and somewhere between the workdays and conversations, something beautiful happened.",
      icon: "sparkles",
    },
    {
      id: "connection",
      title: "A Simple Connection",
      date: "Growing Closer",
      description:
        "What started as a simple connection — a smile in the corridor, a conversation over coffee — began to grow into something neither of us could ignore.",
      icon: "heart",
    },
    {
      id: "friendship",
      title: "Friendship, Trust & Love",
      date: "Over Two Years",
      description:
        "Over two beautiful years, the friendship deepened into trust, and the trust blossomed into love. Every moment together felt natural and right.",
      icon: "star",
    },
    {
      id: "family",
      title: "Family Blessings",
      date: "The Decision",
      description:
        "With the blessings and full support of both our families, we made the decision that felt like the most natural step in the world — to be together, forever.",
      icon: "flower",
    },
    {
      id: "wedding",
      title: "A New Chapter",
      date: "18 August 2026",
      description:
        "Now we are beginning the most special chapter of our lives together. We warmly invite you to witness and celebrate this beautiful beginning with us.",
      icon: "heart",
    },
  ],

  gallery: [
    {
      id: "g1",
      src: "/images/couple-1.jpg",
      alt: "SaiPavan and Roshni together",
      caption: "Our favourite moment",
      gradientFrom: "#C69A3B",
      gradientTo: "#6D1628",
    },
    {
      id: "g2",
      src: "/images/couple-2.jpg",
      alt: "A candid smile",
      caption: "Candid happiness",
      gradientFrom: "#8B1E2D",
      gradientTo: "#3a0915",
    },
    {
      id: "g3",
      src: "/images/couple-3.jpg",
      alt: "Together outdoors",
      caption: "Golden hour",
      gradientFrom: "#1F4A3D",
      gradientTo: "#0a1f19",
    },
    {
      id: "g4",
      src: "/images/couple-4.jpg",
      alt: "SaiPavan and Roshni together",
      caption: "City lights",
      gradientFrom: "#1a1a2e",
      gradientTo: "#6D1628",
    },
    {
      id: "g5",
      src: "/images/couple-5.jpg",
      alt: "SaiPavan and Roshni portrait",
      caption: "Always together",
      gradientFrom: "#C69A3B",
      gradientTo: "#1F4A3D",
    },
    {
      id: "g6",
      src: "/images/couple-6.jpg",
      alt: "SaiPavan and Roshni together",
      caption: "Our journey",
      gradientFrom: "#8B1E2D",
      gradientTo: "#3a0915",
    },
  ],
};
