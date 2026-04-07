export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "accent";
};

export type Section = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type PageContent = {
  title: string;
  description: string;
  intro: string;
  sections: Section[];
  ctas?: Cta[];
};

export const siteContent: Record<string, PageContent> = {
  "/": {
    title: "Empowering Aotearoa’s Commercial & Asset Finance Professionals",
    description:
      "CAFAA is the peak industry body championing capability, credibility, and commercial growth for commercial and asset finance professionals in New Zealand.",
    intro:
      "Welcome to the Commercial and Asset Finance Association of Aotearoa (CAFAA). We are the professional home for New Zealand’s commercial and asset finance community. In an increasingly complex financial landscape, businesses need capital to grow, and they rely on highly skilled, ethical, and connected advisers to secure it. CAFAA exists to champion those professionals. We elevate industry standards, provide world-class education, and deliver fierce advocacy to ensure our members and the Kiwi businesses they support can thrive.",
    sections: [
      {
        heading: "Why CAFAA Exists",
        bullets: [
          "Uncompromising Professional Standards: We build absolute trust in the market by holding our members to the highest ethical and operational benchmarks.",
          "Elite Education & CPD: We future-proof our advisers through continuous, highly relevant professional development tailored to the NZ market.",
          "Relentless Industry Advocacy: We represent the sector’s interests in Wellington and with regulators, ensuring policy supports—rather than stifles—commercial growth.",
          "A Connected Ecosystem: We forge a powerful, collaborative network of brokers, lenders, and service providers across Aotearoa.",
        ],
      },
      {
        heading: "Who We Serve",
        bullets: [
          "Commercial & Asset Finance Advisers: Independent professionals structuring complex debt for Kiwi enterprises.",
          "Brokerages & Advisory Firms: High-performing teams seeking to elevate their market credibility.",
          "Lenders & Financiers: Banks and non-bank lenders looking to partner with elite, accredited intermediaries.",
          "Industry Service Providers: Legal, tech, and compliance firms that fuel the sector.",
        ],
      },
      {
        heading: "What CAFAA Delivers",
        body:
          "Our association delivers member value through accredited membership, capability-building education, policy influence, and high-value networking across Aotearoa.",
      },
    ],
    ctas: [
      { label: "Join CAFAA Today – Elevate Your Practice", href: "/membership", variant: "accent" },
      { label: "Explore Our Education Pathways", href: "/education", variant: "secondary" },
    ],
  },

  "/about": {
    title: "About CAFAA: Advancing New Zealand’s Finance Profession",
    description:
      "CAFAA unites the commercial and asset finance sector to lift standards, share knowledge, and foster a sustainable financial future for Aotearoa.",
    intro:
      "CAFAA exists to advance the commercial and asset finance advisory profession in New Zealand. We believe that when brokers and advisers are highly educated, ethically grounded, and strongly advocated for, Kiwi businesses get better access to the capital they need to innovate, scale, and employ.",
    sections: [
      {
        heading: "Our Mission",
        body:
          "CAFAA exists to advance the commercial and asset finance advisory profession in New Zealand. We believe that when brokers and advisers are highly educated, ethically grounded, and strongly advocated for, Kiwi businesses get better access to the capital they need to innovate, scale, and employ.",
      },
      {
        heading: "Our Strategic Vision (2024–2027)",
        bullets: [
          "Lifting Industry Capability: Transitioning the sector from a transactional mindset to a highly respected advisory profession.",
          "Recognized Education Frameworks: Establishing the gold standard for commercial finance qualifications in New Zealand.",
          "Strengthening Sector Representation: Becoming the indispensable voice consulted by the Financial Markets Authority (FMA) and the NZ Government on all commercial lending matters.",
          "Fostering Future Talent: Ensuring the industry is attractive to young professionals and diverse voices.",
        ],
      },
      {
        heading: "Diversity, Equity & Inclusion (DEI) at CAFAA",
        bullets: [
          "Women in Finance: CAFAA actively supports the visibility, growth, and leadership of women in NZ’s commercial finance sector through exclusive networking, mentorship programs, and leadership profiling.",
          "Young Professionals Network: We are cultivating the next generation of finance leaders by providing clear entry pathways, peer networks, and specialized early-career CPD.",
        ],
      },
    ],
    ctas: [
      { label: "Meet the Board of Directors", href: "/about/board-of-directors" },
      { label: "Read our 2024-2027 Strategy Document", href: "/about/strategy-2024-2027", variant: "secondary" },
    ],
  },

  "/about/who-we-are": {
    title: "Who we are",
    description:
      "CAFAA is New Zealand’s industry association for commercial and asset finance advisers and aligned professionals.",
    intro:
      "We are a professional association built for the people and organisations shaping commercial and asset finance in Aotearoa.",
    sections: [
      {
        heading: "An industry body with a practical purpose",
        body:
          "CAFAA supports advisers and associated professionals by promoting capability, consistency, and confidence across the sector.",
      },
      {
        heading: "Our members",
        bullets: [
          "Commercial and asset finance advisers",
          "Broker and advisory firms",
          "Lender and finance company representatives",
          "Service providers supporting the commercial finance ecosystem",
        ],
      },
      {
        heading: "Our role in New Zealand",
        body:
          "We provide a trusted platform for education, member services, industry engagement, and thought leadership that reflects local market conditions and regulation.",
      },
    ],
    ctas: [
      { label: "View membership options", href: "/membership/types" },
      { label: "Meet the board", href: "/about/board-of-directors", variant: "secondary" },
    ],
  },

  "/about/board-of-directors": {
    title: "Board of Directors",
    description:
      "Meet the governance leadership of CAFAA and learn how the board supports the association’s direction and accountability.",
    intro:
      "CAFAA is governed by a board committed to strengthening the profession and ensuring the association delivers long-term value to members.",
    sections: [
      {
        heading: "Board responsibilities",
        bullets: [
          "Setting strategic direction and priorities",
          "Overseeing governance, risk, and accountability",
          "Supporting sound financial stewardship",
          "Ensuring CAFAA remains member-focused and future-ready",
        ],
      },
      {
        heading: "Representation",
        body:
          "The board is intended to reflect a cross-section of the New Zealand commercial and asset finance community, with experience spanning advisory, lending, leadership, compliance, and industry development.",
      },
      {
        heading: "Director appointments",
        body:
          "Director profiles, appointment terms, and committee responsibilities can be published here as positions are confirmed.",
      },
    ],
    ctas: [
      { label: "Read our strategy", href: "/about/strategy-2024-2027" },
      { label: "Contact the association", href: "/contact", variant: "secondary" },
    ],
  },

  "/about/strategy-2024-2027": {
    title: "Strategy 2024–2027",
    description:
      "CAFAA’s strategic priorities for building a stronger, more capable commercial and asset finance profession in New Zealand.",
    intro:
      "Our strategy focuses on practical outcomes for members and the wider market over the 2024–2027 period.",
    sections: [
      {
        heading: "Strategic priorities",
        bullets: [
          "Lift professional standards and industry capability",
          "Build a recognised education and CPD framework",
          "Strengthen advocacy and sector representation",
          "Grow membership and deepen member value",
          "Support inclusion, leadership, and future talent",
        ],
      },
      {
        heading: "Implementation",
        body:
          "Progress is measured through programme delivery, member engagement, partnerships, policy contributions, and the development of practical tools and resources.",
      },
      {
        heading: "What success looks like",
        body:
          "A more connected, better trained, and more respected commercial finance profession serving clients and businesses across Aotearoa.",
      },
    ],
    ctas: [
      { label: "View education", href: "/education" },
      { label: "Become a member", href: "/membership", variant: "secondary" },
    ],
  },

  "/about/diversity-equity-inclusion": {
    title: "Diversity, Equity & Inclusion",
    description:
      "CAFAA is committed to a profession that is inclusive, representative, and accessible.",
    intro:
      "A stronger industry is built by welcoming diverse perspectives, supporting equitable opportunity, and creating a professional community where people can thrive.",
    sections: [
      {
        heading: "Our commitment",
        bullets: [
          "Encourage broader participation across the industry",
          "Promote equitable access to development opportunities",
          "Support respectful, inclusive professional environments",
          "Celebrate leadership from a wide range of backgrounds and experiences",
        ],
      },
      {
        heading: "Practical action",
        body:
          "This page can house future initiatives such as mentoring, discussion forums, event programmes, and member resources focused on inclusive leadership and participation.",
      },
      {
        heading: "Why it matters",
        body:
          "Inclusion improves decision-making, broadens the profession’s talent base, and helps the sector better reflect the clients and communities it serves.",
      },
    ],
    ctas: [
      { label: "Women in Finance", href: "/about/women-in-finance" },
      { label: "Young Professionals", href: "/about/young-professionals", variant: "secondary" },
    ],
  },

  "/about/women-in-finance": {
    title: "Women in Finance",
    description:
      "Supporting the visibility, growth, and leadership of women across commercial and asset finance in New Zealand.",
    intro:
      "CAFAA wants to help create an industry where women are well represented, well connected, and well supported at every stage of their careers.",
    sections: [
      {
        heading: "What this initiative can include",
        bullets: [
          "Networking and leadership events",
          "Mentoring and peer connection",
          "Profiles highlighting women across the profession",
          "Resources focused on progression and participation",
        ],
      },
      {
        heading: "Why it matters",
        body:
          "Better representation strengthens leadership pipelines and helps create a more resilient, innovative profession.",
      },
      {
        heading: "Get involved",
        body:
          "This page can be used to invite expressions of interest from members who would like to contribute to events, mentoring, or working groups.",
      },
    ],
    ctas: [
      { label: "Join CAFAA", href: "/membership" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/about/young-professionals": {
    title: "Young Professionals",
    description:
      "Supporting the next generation of commercial and asset finance professionals in Aotearoa.",
    intro:
      "CAFAA aims to help emerging professionals build strong foundations through learning, connection, and visibility within the industry.",
    sections: [
      {
        heading: "What emerging members need",
        bullets: [
          "Clear pathways into the profession",
          "Access to mentors and peer networks",
          "Practical education and CPD",
          "Opportunities to attend events and contribute to the industry",
        ],
      },
      {
        heading: "How CAFAA can help",
        body:
          "This section can support future networking groups, entry-level learning pathways, industry introductions, and leadership development opportunities.",
      },
      {
        heading: "Career growth",
        body:
          "By supporting new entrants and rising advisers, CAFAA helps the profession remain sustainable and attractive to future talent.",
      },
    ],
    ctas: [
      { label: "Explore education", href: "/education" },
      { label: "Membership types", href: "/membership/types", variant: "secondary" },
    ],
  },

  "/about/faq": {
    title: "Frequently Asked Questions",
    description:
      "Common questions about CAFAA, membership, education, and how to get involved.",
    intro:
      "This page answers the questions prospective members and stakeholders most often ask about the association.",
    sections: [
      {
        heading: "Common topics",
        bullets: [
          "Who can join CAFAA",
          "How membership categories work",
          "What training and CPD opportunities are available",
          "How events and networking work",
          "How to contact the association",
        ],
      },
      {
        heading: "For prospective members",
        body:
          "If you are unsure which membership category fits, the membership team can help guide you to the most suitable option.",
      },
      {
        heading: "For partners and stakeholders",
        body:
          "We welcome enquiries from lenders, sponsors, industry organisations, and service providers interested in engaging with CAFAA.",
      },
    ],
    ctas: [
      { label: "Contact us", href: "/contact" },
      { label: "Join CAFAA", href: "/membership", variant: "secondary" },
    ],
  },

  "/advocacy": {
    title: "Industry Advocacy & Policy",
    description:
      "Fierce representation for the commercial finance sector in New Zealand.",
    intro:
      "CAFAA’s Advocacy unit is the collective political and regulatory voice of our members. We actively lobby government bodies, the Financial Markets Authority (FMA), the Commerce Commission, and major lending institutions to shape a fair, highly functional commercial finance market.",
    sections: [
      {
        heading: "Why it matters",
        body:
          "Without a unified voice, the commercial finance sector risks being burdened by legislation designed for consumer lending, which stifles business growth and broker efficiency. We ensure lawmakers understand the distinct difference between commercial and consumer finance.",
      },
      {
        heading: "What we deliver",
        bullets: [
          "Protection of Your Livelihood: We actively fight against red tape that slows down commercial deal-writing.",
          "A Seat at the Table: We ensure the broker channel is consulted before major policy shifts occur.",
          "Market Transparency: We push for fair market access and anti-competitive protections so brokers can offer clients the best possible lending solutions.",
        ],
      },
      {
        heading: "How CAFAA delivers it",
        body:
          "Through deeply researched submissions to Parliament, continuous dialogue with regulators, and leveraging aggregate data supplied by our nationwide membership to prove the economic value of the broker channel.",
      },
      {
        heading: "Why choose CAFAA",
        body:
          "A single broker cannot change government policy. As a collective, CAFAA wields the economic weight of billions of dollars in commercial lending, making our voice impossible for Wellington to ignore.",
      },
    ],
    ctas: [
      { label: "Read Our Latest Policy Submissions", href: "/contact", variant: "accent" },
      { label: "Contact the Advocacy Team", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership": {
    title: "Membership & Accreditation",
    description:
      "CAFAA membership is the mark of professional excellence for commercial and asset finance professionals in New Zealand.",
    intro:
      "CAFAA Membership is the premier credential for commercial and asset finance professionals in New Zealand. It is a formal recognition of your expertise, ethical standing, and commitment to the industry. We offer tiered membership pathways including Full, Associate, Affiliate, and Provisional memberships.",
    sections: [
      {
        heading: "Who it’s for",
        bullets: [
          "Full Members: Active, highly experienced commercial and asset finance advisers and brokerages.",
          "Associate Members: Allied professionals in related financial roles seeking industry connection.",
          "Affiliate Members: Lenders, aggregators, and service providers partnering with brokers.",
          "Provisional Members: Emerging professionals building their experience toward full accreditation.",
        ],
      },
      {
        heading: "Why it matters",
        body:
          "In a market where trust is paramount, businesses and lenders need a way to identify elite practitioners. CAFAA membership signals to the market—and to your clients—that you operate to the highest regulatory and ethical standards in New Zealand.",
      },
      {
        heading: "Key benefits",
        bullets: [
          "The CAFAA Trust Mark: Use our accreditation to win high-value clients and secure premium lender accreditations.",
          "Exclusive Resources: Access compliance templates, FMA guidance, and industry standard documents.",
          "Collective Power: Benefit from a unified voice that negotiates better conditions and standards on your behalf.",
          "Premium Networking: Unlock access to closed-door events with top-tier lenders and industry heavyweights.",
        ],
      },
    ],
    ctas: [
      { label: "Compare Membership Types & Apply", href: "/membership/types", variant: "accent" },
    ],
  },

  "/membership/types": {
    title: "Membership types",
    description:
      "Explore CAFAA membership categories for advisers, firms, emerging professionals, and industry partners.",
    intro:
      "CAFAA offers membership categories to reflect different roles in the commercial and asset finance ecosystem.",
    sections: [
      {
        heading: "Full membership",
        body:
          "For professionals actively engaged in commercial or asset finance advisory work and seeking full participation in the association.",
      },
      {
        heading: "Associate and affiliate options",
        body:
          "For related professionals, lender representatives, and service providers who support the industry and want to engage with CAFAA.",
      },
      {
        heading: "Provisional pathways",
        body:
          "For people entering the profession or working toward full eligibility, with access to learning and industry connection while capability develops.",
      },
    ],
    ctas: [
      { label: "Full membership", href: "/membership/types/full" },
      { label: "Schedule of fees", href: "/membership/schedule-of-fees", variant: "secondary" },
    ],
  },

  "/membership/types/full": {
    title: "Full membership",
    description:
      "For established professionals actively advising in the commercial and asset finance market.",
    intro:
      "Full membership is intended for advisers and firms seeking full engagement with CAFAA’s services, representation, and professional community.",
    sections: [
      {
        heading: "Best suited for",
        bullets: [
          "Active commercial and asset finance advisers",
          "Experienced brokers and advisory professionals",
          "Practitioners seeking full industry participation",
        ],
      },
      {
        heading: "Typical benefits",
        bullets: [
          "Professional recognition through membership",
          "Access to member communications and resources",
          "Eligibility for events, programmes, and opportunities",
        ],
      },
      {
        heading: "Assessment",
        body:
          "Eligibility criteria and documentation requirements can be published here once CAFAA finalises its membership framework.",
      },
    ],
    ctas: [
      { label: "Membership enquiry", href: "/contact" },
      { label: "Apply or renew", href: "/membership/renewal", variant: "secondary" },
    ],
  },

  "/membership/types/associate": {
    title: "Associate membership",
    description:
      "For professionals connected to the sector who want to engage with CAFAA and its community.",
    intro:
      "Associate membership supports broader industry participation while recognising different roles and levels of market involvement.",
    sections: [
      {
        heading: "Best suited for",
        bullets: [
          "Professionals in related financial or advisory roles",
          "People building toward greater participation in the sector",
          "Those seeking access to learning and networking",
        ],
      },
      {
        heading: "What it offers",
        bullets: [
          "Connection to the profession",
          "Selected member communications and events access",
          "A pathway to deeper involvement over time",
        ],
      },
      {
        heading: "Next steps",
        body:
          "Use this page to outline any future eligibility settings, fees, or progression pathways into other membership categories.",
      },
    ],
    ctas: [
      { label: "Compare membership types", href: "/membership/types" },
      { label: "Contact membership", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership/types/affiliate": {
    title: "Affiliate membership",
    description:
      "For organisations and service providers supporting the commercial and asset finance profession.",
    intro:
      "Affiliate membership is designed for businesses and partners who work alongside advisers and want to contribute to the broader CAFAA community.",
    sections: [
      {
        heading: "Suitable for",
        bullets: [
          "Lenders and finance providers",
          "Technology and service partners",
          "Professional services and specialist suppliers",
        ],
      },
      {
        heading: "Value for affiliates",
        bullets: [
          "Stronger visibility with the profession",
          "Opportunities to support events and initiatives",
          "Closer engagement with industry issues and developments",
        ],
      },
      {
        heading: "Partnership approach",
        body:
          "CAFAA can use this page to set expectations around affiliate participation, sponsorship, and member engagement.",
      },
    ],
    ctas: [
      { label: "Partner with CAFAA", href: "/contact" },
      { label: "View all membership types", href: "/membership/types", variant: "secondary" },
    ],
  },

  "/membership/types/provisional": {
    title: "Provisional membership",
    description:
      "For emerging professionals or those working toward full participation in the industry.",
    intro:
      "Provisional membership offers a structured starting point for people entering or transitioning into the commercial and asset finance profession.",
    sections: [
      {
        heading: "Designed for",
        bullets: [
          "Early-career professionals",
          "People changing into the sector",
          "Those building capability and experience",
        ],
      },
      {
        heading: "What it supports",
        bullets: [
          "Industry connection and visibility",
          "Learning and development opportunities",
          "A pathway to higher membership levels over time",
        ],
      },
      {
        heading: "Development pathway",
        body:
          "This page can later include experience thresholds, supervision expectations, or education milestones needed to progress.",
      },
    ],
    ctas: [
      { label: "Explore education", href: "/education" },
      { label: "Contact membership", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership/renewal": {
    title: "Membership renewal",
    description:
      "Renew your CAFAA membership and keep your organisation or individual profile current.",
    intro:
      "Renewal helps ensure member records, compliance details, and engagement preferences stay accurate and up to date.",
    sections: [
      {
        heading: "What renewal covers",
        bullets: [
          "Confirming your details and current role",
          "Updating business and contact information",
          "Checking any category-specific requirements",
          "Maintaining continuity of access and benefits",
        ],
      },
      {
        heading: "Before you renew",
        body:
          "Members should have their contact information, organisation details, and any relevant compliance documents ready before submitting a renewal.",
      },
      {
        heading: "Need help?",
        body:
          "If your role, business structure, or membership category has changed, contact the membership team for guidance before submitting.",
      },
    ],
    ctas: [
      { label: "Contact membership", href: "/contact" },
      { label: "Review fees", href: "/membership/schedule-of-fees", variant: "secondary" },
    ],
  },

  "/membership/schedule-of-fees": {
    title: "Schedule of fees",
    description:
      "Indicative fee structure for CAFAA membership categories and related participation options.",
    intro:
      "This page is the right place to outline annual membership pricing and any category-specific costs once confirmed.",
    sections: [
      {
        heading: "Suggested structure",
        bullets: [
          "Full membership annual fee",
          "Associate membership annual fee",
          "Affiliate membership annual fee",
          "Provisional membership annual fee",
        ],
      },
      {
        heading: "What fees support",
        body:
          "Fees help fund member services, advocacy work, education initiatives, administration, and the broader development of the association.",
      },
      {
        heading: "Transparency",
        body:
          "CAFAA should present fees clearly and simply, with any application, renewal, or event-related charges explained separately.",
      },
    ],
    ctas: [
      { label: "Membership types", href: "/membership/types" },
      { label: "Membership enquiry", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership/compliance-requirements": {
    title: "Compliance requirements",
    description:
      "Guidance on expected professional and compliance standards for CAFAA members.",
    intro:
      "CAFAA supports a professional community that takes compliance, conduct, and client responsibility seriously.",
    sections: [
      {
        heading: "Core expectations",
        bullets: [
          "Operate lawfully and ethically",
          "Maintain appropriate records and processes",
          "Meet any applicable regulatory or organisational obligations",
          "Engage in ongoing professional development",
        ],
      },
      {
        heading: "Why it matters",
        body:
          "Clear expectations support member credibility, strengthen trust in the profession, and reduce confusion for advisers and clients alike.",
      },
      {
        heading: "Practical guidance",
        body:
          "This page can later include declarations, annual checks, document templates, or links to supporting resources.",
      },
    ],
    ctas: [
      { label: "View CPD policy", href: "/resources/cpd-policy" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/member-directory": {
    title: "Member directory",
    description:
      "Browse CAFAA member categories and discover participating professionals and organisations.",
    intro:
      "The member directory helps showcase the breadth of CAFAA’s community and provides a useful way to organise member listings by category.",
    sections: [
      {
        heading: "Directory structure",
        bullets: [
          "Full members",
          "Associate members",
          "Affiliate members",
        ],
      },
      {
        heading: "How this page should work",
        body:
          "For launch, a simple category-based directory or placeholder is enough. Later, this can evolve into a searchable member experience with location, specialty, and organisation filters.",
      },
      {
        heading: "Visibility and member consent",
        body:
          "Any public directory should reflect member preferences, privacy settings, and the level of information each member has agreed to display.",
      },
    ],
    ctas: [
      { label: "Full members", href: "/member-directory/full-members" },
      { label: "Join CAFAA", href: "/membership", variant: "secondary" },
    ],
  },

  "/member-directory/full-members": {
    title: "Full members",
    description:
      "A directory section for CAFAA full members.",
    intro:
      "This page can list full members or act as a placeholder until directory data is available.",
    sections: [
      {
        heading: "What to display here",
        bullets: [
          "Member name or business name",
          "Location",
          "Area of expertise",
          "Contact link or profile link",
        ],
      },
      {
        heading: "Trust and presentation",
        body:
          "A well-presented directory reinforces professionalism and helps users understand the breadth of the CAFAA network.",
      },
    ],
    ctas: [
      { label: "All member categories", href: "/member-directory" },
      { label: "My profile", href: "/my-profile", variant: "secondary" },
    ],
  },

  "/member-directory/associate-members": {
    title: "Associate members",
    description:
      "A directory section for CAFAA associate members.",
    intro:
      "Associate member listings can provide visibility for professionals connected to the sector and engaged with the association.",
    sections: [
      {
        heading: "Suggested listing fields",
        bullets: [
          "Name",
          "Organisation",
          "Region",
          "Professional focus",
        ],
      },
      {
        heading: "Future enhancements",
        body:
          "This section can later include filters, profile summaries, and member-controlled public details.",
      },
    ],
    ctas: [
      { label: "All member categories", href: "/member-directory" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/member-directory/affiliate-members": {
    title: "Affiliate members",
    description:
      "A directory section for CAFAA affiliate organisations and partners.",
    intro:
      "Affiliate listings can highlight lenders, service providers, and partner organisations working alongside the profession.",
    sections: [
      {
        heading: "Good uses for this page",
        bullets: [
          "Showcase affiliate organisations",
          "Highlight partner capabilities",
          "Support easier industry connection",
        ],
      },
      {
        heading: "Presentation options",
        body:
          "You can keep this simple at launch with logo cards or text listings, then expand to richer profile pages later.",
      },
    ],
    ctas: [
      { label: "Become an affiliate", href: "/membership/types/affiliate" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/members-area": {
    title: "Members area",
    description:
      "A placeholder members area for future secure access to member-only tools and resources.",
    intro:
      "The members area can become the central place for renewals, resources, event access, and profile management once authentication is implemented.",
    sections: [
      {
        heading: "Planned capabilities",
        bullets: [
          "Member login",
          "Profile management",
          "Resource access",
          "Event registrations and updates",
        ],
      },
      {
        heading: "Launch approach",
        body:
          "For now, keep this page as a simple login placeholder and a signpost for future functionality.",
      },
    ],
    ctas: [
      { label: "My profile", href: "/my-profile" },
      { label: "Contact support", href: "/contact", variant: "secondary" },
    ],
  },

  "/my-profile": {
    title: "My profile",
    description:
      "A placeholder page for member profile details and account management.",
    intro:
      "This page can later support member record updates, directory settings, and communication preferences.",
    sections: [
      {
        heading: "Future profile features",
        bullets: [
          "Personal and organisation details",
          "Membership category and renewal status",
          "Directory visibility settings",
          "Communication and event preferences",
        ],
      },
      {
        heading: "For launch",
        body:
          "Keep this page simple and use it to indicate what profile tools will be available in future iterations.",
      },
    ],
    ctas: [
      { label: "Members area", href: "/members-area" },
      { label: "Contact support", href: "/contact", variant: "secondary" },
    ],
  },

  "/education": {
    title: "Education & CPD",
    description:
      "Industry-leading education and capability building designed for New Zealand’s commercial and asset finance sector.",
    intro:
      "A comprehensive, specialized education ecosystem designed specifically for New Zealand’s commercial finance sector. This includes our Continuing Professional Development (CPD) platform, foundational courses, and our flagship professional designation.",
    sections: [
      {
        heading: "Who it’s for",
        bullets: [
          "New entrants needing a structured learning pathway.",
          "Experienced brokers needing to fulfill annual regulatory CPD requirements.",
          "Ambitious advisers aiming for the pinnacle of industry recognition.",
        ],
      },
      {
        heading: "Why it matters",
        body:
          "The financial regulatory landscape in New Zealand is constantly shifting. Relying on outdated knowledge is a fast track to irrelevance and compliance breaches. Continuous education protects your business and enhances the strategic value you provide to your clients.",
      },
      {
        heading: "Key benefits",
        bullets: [
          "Certified Commercial Finance Professional (CCFP): Attain CAFAA’s flagship designation, proving your advanced technical capability in complex commercial structuring.",
          "Tailored NZ Content: Training that reflects local legislation, the OCR, New Zealand tax structures, and local lender appetites.",
          "Seamless CPD Tracking: An integrated platform to log your hours and easily prove compliance to regulators and aggregators.",
        ],
      },
      {
        heading: "How CAFAA delivers it",
        body:
          "Through a hybrid model of immersive in-person workshops, live-streamed masterclasses, and on-demand digital modules. Our content is designed and delivered by veteran NZ commercial brokers and legal experts.",
      },
    ],
    ctas: [
      { label: "Explore the CCFP Pathway", href: "/education/certified-commercial-finance-professional", variant: "accent" },
      { label: "Log in to the CPD Platform", href: "/education/cpd-platform", variant: "secondary" },
    ],
  },

  "/education/certified-commercial-finance-professional": {
    title: "Certified Commercial Finance Professional",
    description:
      "A professional designation or pathway supporting recognised capability in commercial and asset finance.",
    intro:
      "This page can present CAFAA’s flagship capability pathway for professionals who want to demonstrate advanced knowledge and commitment to the sector.",
    sections: [
      {
        heading: "Purpose of the programme",
        bullets: [
          "Recognise professional capability",
          "Support career progression",
          "Create a clear marker of industry commitment",
        ],
      },
      {
        heading: "Potential programme elements",
        bullets: [
          "Entry criteria",
          "Learning outcomes",
          "Assessment requirements",
          "Ongoing CPD expectations",
        ],
      },
      {
        heading: "Why it matters",
        body:
          "Recognised capability pathways help build confidence for employers, partners, and clients while supporting a stronger profession overall.",
      },
    ],
    ctas: [
      { label: "Contact education team", href: "/contact" },
      { label: "View CPD platform", href: "/education/cpd-platform", variant: "secondary" },
    ],
  },

  "/education/diploma-financial-services": {
    title: "Diploma in Financial Services",
    description:
      "A qualification pathway relevant to advisers and professionals working in finance-related roles.",
    intro:
      "This page can describe how a diploma-level qualification supports technical capability, professionalism, and career development within the CAFAA community.",
    sections: [
      {
        heading: "What this pathway can support",
        bullets: [
          "Structured learning and skill development",
          "A stronger technical base for advisers",
          "Professional credibility",
        ],
      },
      {
        heading: "Who may benefit",
        body:
          "This pathway may suit developing professionals, people transitioning into commercial finance, or organisations supporting adviser capability.",
      },
      {
        heading: "How to present this page",
        body:
          "Include provider information, learning outcomes, expected duration, and enrolment guidance once details are confirmed.",
      },
    ],
    ctas: [
      { label: "Education overview", href: "/education" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/education/cpd-platform": {
    title: "CPD platform",
    description:
      "A future home for continuing professional development tracking, resources, and learning opportunities.",
    intro:
      "CAFAA’s CPD platform can support members in planning, recording, and demonstrating ongoing professional development.",
    sections: [
      {
        heading: "What members may use it for",
        bullets: [
          "View upcoming education opportunities",
          "Track CPD hours or activities",
          "Access learning resources and recordings",
          "Support annual compliance or renewal requirements",
        ],
      },
      {
        heading: "Launch approach",
        body:
          "At launch, this can be a simple information page with future login-based functionality signposted.",
      },
      {
        heading: "Longer-term value",
        body:
          "A clear CPD framework helps members stay current and gives CAFAA a practical way to support capability across the profession.",
      },
    ],
    ctas: [
      { label: "View CPD policy", href: "/resources/cpd-policy" },
      { label: "Members area", href: "/members-area", variant: "secondary" },
    ],
  },

  "/events": {
    title: "Events, Networking & Awards",
    description:
      "Connecting Aotearoa’s finance ecosystem through targeted events, networking, and excellence recognition.",
    intro:
      "A premier calendar of regional and national events, ranging from intimate technical workshops to our flagship Annual Commercial Finance Summit and Excellence Awards.",
    sections: [
      {
        heading: "Why it matters",
        body:
          "Commercial finance is a relationship business. Who you know at a lending institution can be the difference between a declined application and a funded deal. Our events bridge the gap between advisers and capital providers.",
      },
      {
        heading: "Who it’s for",
        bullets: [
          "Members looking to build strategic relationships with lender Business Development Managers (BDMs).",
          "Professionals seeking to learn from peer success and market insight.",
          "Firms wanting to raise their profile within the commercial finance ecosystem.",
        ],
      },
      {
        heading: "What CAFAA offers",
        bullets: [
          "Direct Lender Access: Meet the decision-makers from major banks and niche non-bank lenders.",
          "Peer-to-Peer Learning: Discover how top-performing Kiwi brokers are structuring deals and scaling their firms.",
          "Brand Visibility: Nominate your firm for the CAFAA Excellence Awards to build massive credibility in the marketplace.",
        ],
      },
      {
        heading: "How we deliver it",
        body:
          "We host regular regional networking breakfasts, quarterly economic briefing webinars, and an annual gala that serves as the premier night on the NZ commercial finance calendar.",
      },
    ],
    ctas: [
      { label: "View the Events Calendar", href: "/events/calendar", variant: "accent" },
      { label: "Register for the Annual Summit", href: "/events/upcoming", variant: "secondary" },
    ],
  },

  "/events/upcoming": {
    title: "Upcoming events",
    description:
      "A forward-looking list of CAFAA’s next events, programmes, and member opportunities.",
    intro:
      "Use this page to highlight the next events on the calendar and encourage registrations or expressions of interest.",
    sections: [
      {
        heading: "Suggested event categories",
        bullets: [
          "Networking breakfasts or lunches",
          "Industry webinars",
          "Regional member events",
          "Annual conference or summit",
        ],
      },
      {
        heading: "What each listing should include",
        bullets: [
          "Event title",
          "Date and location or online format",
          "Short summary",
          "Registration call to action",
        ],
      },
    ],
    ctas: [
      { label: "View calendar", href: "/events/calendar" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/events/calendar": {
    title: "Events calendar",
    description:
      "A simple overview of CAFAA’s event programme across the year.",
    intro:
      "The event calendar can show members what is coming up and help them plan participation in advance.",
    sections: [
      {
        heading: "Recommended format",
        bullets: [
          "Monthly list view",
          "Event type label",
          "Location or online delivery format",
          "Link to registration or enquiry",
        ],
      },
      {
        heading: "Keep it simple",
        body:
          "At launch, a basic list or quarterly overview is easier to maintain than a full calendar interface.",
      },
    ],
    ctas: [
      { label: "Upcoming events", href: "/events/upcoming" },
      { label: "Awards", href: "/events/awards", variant: "secondary" },
    ],
  },

  "/events/awards": {
    title: "Awards",
    description:
      "Recognising excellence, leadership, and contribution across the commercial and asset finance profession.",
    intro:
      "An awards programme can help CAFAA celebrate achievement and raise the profile of outstanding professionals and organisations in the sector.",
    sections: [
      {
        heading: "What awards can recognise",
        bullets: [
          "Adviser excellence",
          "Innovation and leadership",
          "Emerging talent",
          "Contribution to the profession",
        ],
      },
      {
        heading: "Programme development",
        body:
          "This page can eventually outline award categories, nomination criteria, timelines, judging, and sponsorship opportunities.",
      },
      {
        heading: "Why it matters",
        body:
          "Recognition programmes build pride, highlight best practice, and help position the profession as credible and aspirational.",
      },
    ],
    ctas: [
      { label: "Contact CAFAA", href: "/contact" },
      { label: "View events", href: "/events", variant: "secondary" },
    ],
  },

  "/resources": {
    title: "Member Resource Exchange",
    description:
      "Your toolkit for operational excellence and compliance.",
    intro:
      "Operating a compliant, highly efficient commercial finance brokerage in New Zealand requires airtight documentation. The CAFAA Resource Exchange is an exclusive library of practical tools, policy documents, and governance materials designed to save you time and protect your business.",
    sections: [
      {
        heading: "What You Will Find",
        bullets: [
          "Compliance Templates: Ready-to-use disclosure statements, privacy waivers, and scope of engagement templates aligned with current FMA expectations.",
          "Practice Guides: Step-by-step frameworks for structuring complex asset finance deals, writing credit papers, and managing client data.",
          "Industry Briefings: Summaries of recent changes to the Financial Services Legislation Amendment Act (FSLAA) and how they specifically apply to commercial brokers.",
        ],
      },
      {
        heading: "The CAFAA Standard",
        body:
          "Every document in the Resource Exchange is vetted by our technical committee. By using CAFAA-approved templates, you reduce your operational friction and ensure your firm is always aligned with New Zealand’s highest regulatory standards.",
      },
    ],
    ctas: [
      { label: "Access the Resource Exchange (Members Only)", href: "/resources/resource-exchange", variant: "accent" },
    ],
  },

  "/resources/constitution": {
    title: "Constitution",
    description:
      "The constitutional and governance foundation of CAFAA.",
    intro:
      "This page should explain the role of the constitution and provide a downloadable copy once finalised.",
    sections: [
      {
        heading: "What the constitution covers",
        bullets: [
          "Purpose and objects of the association",
          "Governance arrangements",
          "Membership framework",
          "Meetings, decision-making, and administration",
        ],
      },
      {
        heading: "Why it is important",
        body:
          "The constitution provides clarity on how CAFAA is structured, governed, and expected to operate as a member-focused body.",
      },
    ],
    ctas: [
      { label: "View AGM page", href: "/resources/agm" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/resources/cpd-policy": {
    title: "CPD policy",
    description:
      "The framework and expectations for continuing professional development within CAFAA.",
    intro:
      "A clear CPD policy helps members understand how ongoing learning supports capability, professionalism, and good practice.",
    sections: [
      {
        heading: "What the policy can cover",
        bullets: [
          "Annual expectations or hours",
          "Eligible learning activities",
          "Record keeping and evidence",
          "How CPD connects to renewal or membership expectations",
        ],
      },
      {
        heading: "Practical intent",
        body:
          "The CPD policy should be simple to understand and practical to follow, especially for busy advisers and firms.",
      },
    ],
    ctas: [
      { label: "CPD platform", href: "/education/cpd-platform" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/resources/agm": {
    title: "AGM",
    description:
      "Information about CAFAA’s annual general meeting, notices, and key documents.",
    intro:
      "The AGM page should become the central place for annual meeting information, notices, and governance updates for members.",
    sections: [
      {
        heading: "What to publish here",
        bullets: [
          "Notice of AGM",
          "Agenda and timing",
          "Supporting papers or reports",
          "Voting information where relevant",
        ],
      },
      {
        heading: "Member transparency",
        body:
          "Providing clear AGM information supports good governance and keeps members informed about the association’s direction and performance.",
      },
    ],
    ctas: [
      { label: "Constitution", href: "/resources/constitution" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/resources/resource-exchange": {
    title: "Resource exchange",
    description:
      "A shared space for submitting and surfacing practical resources relevant to the profession.",
    intro:
      "The resource exchange can become a useful place for sharing tools, links, ideas, and practical references with the CAFAA community.",
    sections: [
      {
        heading: "What can be shared",
        bullets: [
          "Templates and checklists",
          "Industry links and references",
          "Practice guides",
          "Useful tools or recommended reading",
        ],
      },
      {
        heading: "Moderation and quality",
        body:
          "CAFAA should keep this section practical and curated so it remains useful and aligned with the association’s standards.",
      },
    ],
    ctas: [
      { label: "Submit a resource", href: "/resources/resource-exchange" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/news": {
    title: "News",
    description:
      "Updates, announcements, commentary, and industry developments from CAFAA.",
    intro:
      "The news section can keep members and stakeholders informed on what CAFAA is doing and what matters in the market.",
    sections: [
      {
        heading: "What to publish",
        bullets: [
          "Association announcements",
          "Event updates",
          "Industry commentary and submissions",
          "Education and member service updates",
        ],
      },
      {
        heading: "Editorial tone",
        body:
          "Content should be clear, professional, and useful, with an emphasis on practical relevance for members and the New Zealand market.",
      },
    ],
    ctas: [
      { label: "Contact us", href: "/contact" },
      { label: "View events", href: "/events", variant: "secondary" },
    ],
  },

  "/contact": {
    title: "Get in Touch with CAFAA",
    description:
      "Partner with the peak body for commercial finance in New Zealand.",
    intro:
      "Whether you are an adviser ready to elevate your career through membership, a lender looking to partner with our network, or a media representative seeking industry commentary, the CAFAA team is ready to assist.",
    sections: [
      {
        heading: "How We Can Help You",
        bullets: [
          "Membership & Renewals: Fast-track your application or understand which tier suits you best.",
          "Education & CPD: Enquiries regarding CCFP enrollment, cross-credits, or platform access.",
          "Advocacy & Feedback: Report a systemic market issue or contribute to our next government submission.",
          "Sponsorship & Events: Connect your brand with New Zealand's top commercial finance originators.",
        ],
      },
      {
        heading: "Contact Information",
        body:
          "Email: info@cafaa.co.nz (placeholder); Phone: +64 X XXX XXXX (placeholder); Office: Auckland, New Zealand (placeholder).",
      },
      {
        heading: "Enquiry Form",
        body:
          "Use the form below to send your enquiry, selecting the type that best matches your request.",
      },
    ],
    ctas: [
      { label: "Submit Enquiry", href: "/contact", variant: "accent" },
    ],
  },

  "/legal/privacy-policy": {
    title: "Privacy policy",
    description:
      "How CAFAA collects, uses, stores, and protects personal information.",
    intro:
      "CAFAA is committed to protecting member and website user data in line with New Zealand’s Privacy Act 2020 and best practice data handling standards.",
    sections: [
      {
        heading: "Key areas to cover",
        bullets: [
          "What information is collected",
          "Why it is collected",
          "How it is stored and used",
          "How users can request access or corrections",
        ],
      },
      {
        heading: "New Zealand context",
        body:
          "The final policy should be reviewed for alignment with applicable New Zealand privacy requirements before publication.",
      },
    ],
    ctas: [
      { label: "Terms and conditions", href: "/legal/terms-and-conditions" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/legal/disclaimer": {
    title: "Disclaimer",
    description:
      "Important information about the general nature of content published by CAFAA.",
    intro:
      "Content is for professional development and general information, not a substitute for specific legal, financial, or professional advice.",
    sections: [
      {
        heading: "Key points",
        bullets: [
          "General information only",
          "No guarantee of completeness or currentness",
          "Users should seek their own advice where appropriate",
        ],
      },
      {
        heading: "Practical purpose",
        body:
          "A clear disclaimer helps manage expectations and supports responsible use of the information published on the site.",
      },
    ],
    ctas: [
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      { label: "Terms and conditions", href: "/legal/terms-and-conditions", variant: "secondary" },
    ],
  },

  "/legal/terms-and-conditions": {
    title: "Terms and conditions",
    description:
      "Website terms, acceptable use, and general conditions relevant to CAFAA’s online presence.",
    intro:
      "These terms govern the acceptable use of CAFAA IP, the member portal, and directory representation.",
    sections: [
      {
        heading: "What to include",
        bullets: [
          "Use of website content",
          "Intellectual property",
          "Acceptable use of forms and submissions",
          "Changes to website content and services",
        ],
      },
      {
        heading: "Launch note",
        body:
          "The final legal wording should be reviewed before publication, especially once login, payments, or member-only services are introduced.",
      },
    ],
    ctas: [
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },
};
