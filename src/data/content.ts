// All real facts sourced from https://homegym.gr/ — no invented business data.
// Placeholders are explicitly marked where source data was unavailable.

export const brand = {
  name: "HomeGym",
  location: "Λαμία",
  tagline: "NOTHING WILL WORK UNLESS YOU DO",
  taglineGr: "Τίποτα δεν λειτουργεί αν δεν λειτουργήσεις εσύ",
  subline: "No More Comfort Zone",
};

export const contact = {
  addressLine1: "Αγριελιά",
  addressLine2: "Λαμία 35100",
  phone: "22310 50 111",
  phoneHref: "tel:+3022310050111",
  hours: [
    { days: "Δευτέρα – Παρασκευή", time: "09:00 – 23:00" },
    { days: "Σάββατο", time: "10:00 – 19:00" },
  ],
  instagram: {
    handle: "@home_for_health_fitness",
    href: "https://instagram.com/home_for_health_fitness",
  },
  mapQuery: "HomeGym Αγριελιά Λαμία",
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Υπηρεσίες", href: "#ypiresies" },
  { label: "Personal Training", href: "#personal-training" },
  { label: "Classes", href: "#classes" },
  { label: "Kids Pool Academy", href: "#kids-pool-academy" },
  { label: "Summer Camp", href: "#summer" },
  { label: "Συνδρομές", href: "#syndromes" },
  { label: "Επικοινωνία", href: "#epikoinonia" },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "gym",
    index: "01",
    title: "Συνδρομές Γυμναστηρίου",
    description:
      "Πλήρης πρόσβαση σε εξοπλισμό αιχμής, σε έναν χώρο σχεδιασμένο για να προπονείσαι χωρίς συμβιβασμούς — κάθε μέρα, με τον δικό σου ρυθμό.",
  },
  {
    id: "student",
    index: "02",
    title: "Φοιτητικές Συνδρομές",
    description:
      "Ειδικές συνδρομές για φοιτητές, γιατί η πειθαρχία στο σώμα χτίζεται νωρίς — χωρίς να βαραίνει το πορτοφόλι.",
  },
  {
    id: "personal-training",
    index: "03",
    title: "Personal Training",
    description:
      "Προσωπική καθοδήγηση, σχεδιασμένη γύρω από τους δικούς σου στόχους. Ένας προπονητής, ένα πλάνο, ένα αποτέλεσμα.",
  },
  {
    id: "classes",
    index: "04",
    title: "Group Classes",
    description:
      "Functional, Body Bars, Cross Training, HIIT — προγράμματα ομαδικής προπόνησης με ένταση και χαρακτήρα.",
  },
  {
    id: "pilates",
    index: "05",
    title: "Home Pilates",
    description:
      "Αφιερωμένο στούντιο Pilates. Έλεγχος, ευλυγισία και ισορροπία σώματος-μυαλού, σε κάθε επίπεδο.",
  },
  {
    id: "pool",
    index: "06",
    title: "Kids Pool Academy",
    description:
      "Μαθήματα κολύμβησης για παιδιά, σε ένα ασφαλές και οργανωμένο περιβάλλον — από τα πρώτα βήματα στο νερό έως την τεχνική.",
  },
];

export const groupClasses = [
  "FUNCTIONAL",
  "BODY BARS",
  "CROSS TRAINING",
  "HIIT",
  "PILATES",
];

export type SummerProgram = {
  id: string;
  title: string;
  description: string;
};

export const summerPrograms: SummerProgram[] = [
  {
    id: "kids-pool-academy",
    title: "Kids Pool Academy",
    description:
      "Οργανωμένα μαθήματα κολύμβησης για παιδιά, με έμφαση στην ασφάλεια στο νερό, την τεχνική και την αυτοπεποίθηση.",
  },
  {
    id: "summer-camp",
    title: "Summer Camp",
    description:
      "Καλοκαιρινό πρόγραμμα δραστηριοτήτων για παιδιά — κίνηση, παιχνίδι και νερό, μέσα σε ένα δομημένο πλαίσιο.",
  },
  {
    id: "summer-pool-side",
    title: "Summer Pool Side",
    description:
      "Καλοκαιρινές δραστηριότητες γύρω από την πισίνα, για μικρούς και μεγάλους, σε ένα χαλαρό αλλά οργανωμένο περιβάλλον.",
  },
];

export const membershipTiers = [
  {
    id: "standard",
    title: "Standard",
    description:
      "Πλήρης πρόσβαση στο γυμναστήριο και τον εξοπλισμό, με ευελιξία στο πρόγραμμά σου.",
  },
  {
    id: "student",
    title: "Φοιτητική",
    description:
      "Ειδική τιμολόγηση για φοιτητές, με τα ίδια πρότυπα ποιότητας και εξοπλισμού.",
  },
  {
    id: "personal",
    title: "Personal Training",
    description:
      "Εξατομικευμένα πακέτα προπόνησης, σχεδιασμένα μαζί με τον προπονητή σου.",
  },
];
