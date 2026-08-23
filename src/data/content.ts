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

export type NavLink = { label: string; href: string };
export type NavEntry = NavLink & { children?: NavLink[] };

export const navItems: NavEntry[] = [
  { label: "Αρχική", href: "/" },
  { label: "Το HomeGym", href: "/about" },
  {
    label: "Υπηρεσίες",
    href: "/services",
    children: [
      { label: "Personal Training", href: "/personal-training" },
      { label: "Group Programs", href: "/group-programs" },
      { label: "Συνδρομές", href: "/memberships" },
      { label: "Εγκαταστάσεις", href: "/facilities" },
    ],
  },
  {
    label: "Πισίνα & Καλοκαίρι",
    href: "/pool",
    children: [
      { label: "Πισίνα", href: "/pool" },
      { label: "Kids Pool Academy", href: "/kids-pool-academy" },
      { label: "Summer Camp", href: "/summer-camp" },
    ],
  },
  { label: "Επικοινωνία", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "gym",
    index: "01",
    title: "Συνδρομές Γυμναστηρίου",
    description:
      "Πλήρης πρόσβαση σε εξοπλισμό αιχμής, σε έναν χώρο σχεδιασμένο για να προπονείσαι χωρίς συμβιβασμούς — κάθε μέρα, με τον δικό σου ρυθμό.",
    href: "/memberships",
  },
  {
    id: "student",
    index: "02",
    title: "Φοιτητικές Συνδρομές",
    description:
      "Ειδικές συνδρομές για φοιτητές, γιατί η πειθαρχία στο σώμα χτίζεται νωρίς — χωρίς να βαραίνει το πορτοφόλι.",
    href: "/memberships",
  },
  {
    id: "personal-training",
    index: "03",
    title: "Personal Training",
    description:
      "Προσωπική καθοδήγηση, σχεδιασμένη γύρω από τους δικούς σου στόχους. Ένας προπονητής, ένα πλάνο, ένα αποτέλεσμα.",
    href: "/personal-training",
  },
  {
    id: "classes",
    index: "04",
    title: "Group Classes",
    description:
      "Functional, Body Bars, Cross Training, HIIT — προγράμματα ομαδικής προπόνησης με ένταση και χαρακτήρα.",
    href: "/group-programs",
  },
  {
    id: "pilates",
    index: "05",
    title: "Home Pilates",
    description:
      "Αφιερωμένο στούντιο Pilates. Έλεγχος, ευλυγισία και ισορροπία σώματος-μυαλού, σε κάθε επίπεδο.",
    href: "/group-programs",
  },
  {
    id: "pool",
    index: "06",
    title: "Kids Pool Academy",
    description:
      "Μαθήματα κολύμβησης για παιδιά, σε ένα ασφαλές και οργανωμένο περιβάλλον — από τα πρώτα βήματα στο νερό έως την τεχνική.",
    href: "/kids-pool-academy",
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
  href: string;
};

export const summerPrograms: SummerProgram[] = [
  {
    id: "kids-pool-academy",
    title: "Kids Pool Academy",
    description:
      "Οργανωμένα μαθήματα κολύμβησης για παιδιά, με έμφαση στην ασφάλεια στο νερό, την τεχνική και την αυτοπεποίθηση.",
    href: "/kids-pool-academy",
  },
  {
    id: "summer-camp",
    title: "Summer Camp",
    description:
      "Καλοκαιρινό πρόγραμμα δραστηριοτήτων για παιδιά — κίνηση, παιχνίδι και νερό, μέσα σε ένα δομημένο πλαίσιο.",
    href: "/summer-camp",
  },
  {
    id: "summer-pool-side",
    title: "Summer Pool Side",
    description:
      "Καλοκαιρινές δραστηριότητες γύρω από την πισίνα, για μικρούς και μεγάλους, σε ένα χαλαρό αλλά οργανωμένο περιβάλλον.",
    href: "/summer-camp",
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

export const about = {
  eyebrow: "Το HomeGym",
  title: "Ένας χώρος φτιαγμένος για ανθρώπους που θέλουν πραγματικά αποτελέσματα.",
  lead: "Το HomeGym γεννήθηκε στη Λαμία με μία ιδέα: ένα γυμναστήριο δεν χρειάζεται συμβιβασμούς — ούτε στον εξοπλισμό, ούτε στην καθοδήγηση, ούτε στη φροντίδα του σώματος.",
  paragraphs: [
    "Από τη συνδρομή γυμναστηρίου μέχρι το personal training, τα ομαδικά μαθήματα και την πισίνα, κάθε υπηρεσία στο HomeGym σχεδιάζεται με τα ίδια πρότυπα ποιότητας — γιατί η πρόοδος δεν σταματά όταν αλλάζει η δραστηριότητα.",
    "«No More Comfort Zone» δεν είναι σλόγκαν. Είναι η βάση πάνω στην οποία χτίσαμε τον χώρο: η πεποίθηση ότι η αληθινή αλλαγή ξεκινά έξω από τα όρια που έχουμε συνηθίσει.",
  ],
  values: [
    {
      title: "Χωρίς συμβιβασμούς",
      description:
        "Εξοπλισμός αιχμής και χώροι σχεδιασμένοι να αντέχουν στην ένταση της καθημερινής προπόνησης.",
    },
    {
      title: "Προσωπική καθοδήγηση",
      description:
        "Κάθε πρόγραμμα — ατομικό ή ομαδικό — χτίζεται γύρω από τον άνθρωπο, όχι το αντίστροφο.",
    },
    {
      title: "Ένας χώρος, κάθε ηλικία",
      description:
        "Από τα πρώτα μαθήματα κολύμβησης ως το personal training ενηλίκων, το HomeGym μεγαλώνει μαζί σου.",
    },
  ],
};

export type ExploreLink = { title: string; description: string; href: string };

export const exploreLinks: ExploreLink[] = [
  {
    title: "Το HomeGym",
    description: "Η ιδέα, οι αξίες και ο χώρος πίσω από το brand.",
    href: "/about",
  },
  {
    title: "Υπηρεσίες",
    description: "Όλες οι υπηρεσίες μας, σε μία σελίδα.",
    href: "/services",
  },
  {
    title: "Personal Training",
    description: "Ένας προπονητής, ένα πλάνο, ο δικός σου στόχος.",
    href: "/personal-training",
  },
  {
    title: "Group Programs",
    description: "Functional, HIIT, Pilates και άλλα, σε ομάδα.",
    href: "/group-programs",
  },
  {
    title: "Συνδρομές",
    description: "Standard, φοιτητική ή personal — διάλεξε τον δρόμο σου.",
    href: "/memberships",
  },
  {
    title: "Πισίνα",
    description: "Κολύμβηση, αποκατάσταση και χαλάρωση στο νερό.",
    href: "/pool",
  },
  {
    title: "Kids Pool Academy",
    description: "Μαθήματα κολύμβησης για παιδιά, με ασφάλεια και τεχνική.",
    href: "/kids-pool-academy",
  },
  {
    title: "Summer Camp",
    description: "Καλοκαιρινές δραστηριότητες για παιδιά, κίνηση, παιχνίδι και νερό.",
    href: "/summer-camp",
  },
  {
    title: "Εγκαταστάσεις",
    description: "Γυμναστήριο, στούντιο Pilates, πισίνα και αίθουσα μαθημάτων.",
    href: "/facilities",
  },
  {
    title: "Επικοινωνία",
    description: "Διεύθυνση, ωράριο και στοιχεία επικοινωνίας.",
    href: "/contact",
  },
];

export const pool = {
  eyebrow: "Πισίνα",
  title: "Το νερό ως μέρος της προπόνησής σου.",
  lead: "Η πισίνα του HomeGym είναι σχεδιασμένη για κολύμβηση, αποκατάσταση και χαλάρωση — για ενήλικες που θέλουν να προσθέσουν το νερό στο πρόγραμμά τους, πέρα από τα παιδικά μαθήματα του Kids Pool Academy.",
  paragraphs: [
    "Ελεύθερη κολύμβηση, βελτίωση τεχνικής και δραστηριότητες γύρω από την πισίνα λειτουργούν συμπληρωματικά με το πρόγραμμα γυμναστηρίου — ιδανικό για αποκατάσταση, καρδιοαναπνευστική άσκηση χωρίς επιβάρυνση στις αρθρώσεις, ή απλά για να σπάσεις τη ρουτίνα.",
    "Το καλοκαίρι, ο χώρος γύρω από την πισίνα φιλοξενεί το Summer Pool Side — δραστηριότητες για μικρούς και μεγάλους σε ένα χαλαρό αλλά οργανωμένο περιβάλλον.",
  ],
};
