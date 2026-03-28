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
    title: "Leading commercial and asset finance professionals in Aotearoa",
    description:
      "CAFAA supports advisers, lenders, and industry partners through education, advocacy, and professional standards across New Zealand.",
    intro:
      "CAFAA is the professional home for New Zealand’s commercial and asset finance community, championing capability, credibility, and better outcomes for clients and industry.",
    sections: [
      {
        heading: "What CAFAA stands for",
        bullets: [
          "Professional standards that build trust in the market",
          "Education and continuing development for advisers",
          "Industry advocacy with regulators, policymakers, and stakeholders",
          "A stronger, better-connected commercial finance community across Aotearoa",
        ],
      },
      {
        heading: "Who we serve",
        body:
          "Our membership includes advisers, brokers, lender representatives, and industry service providers who contribute to a healthy and professional commercial and asset finance sector.",
      },
      {
        heading: "Why join",
        bullets: [
          "Access practical education and CPD opportunities",
          "Connect with peers and industry leaders",
          "Stay informed on policy, compliance, and market developments",
          "Be part of a collective voice for the sector",
        ],
      },
    ],
    ctas: [
      { label: "Join CAFAA", href: "/membership", variant: "accent" },
      { label: "Explore education", href: "/education", variant: "secondary" },
    ],
  },

  "/about": {
    title: "About CAFAA",
    description:
      "Learn about CAFAA’s purpose, role, and commitment to the commercial and asset finance profession in New Zealand.",
    intro:
      "CAFAA exists to advance commercial and asset finance advice in Aotearoa through professionalism, education, advocacy, and industry leadership.",
    sections: [
      {
        heading: "Our purpose",
        body:
          "We bring together professionals across the sector to share knowledge, lift standards, and support a sustainable, respected profession.",
      },
      {
        heading: "Our focus",
        bullets: [
          "Represent the interests of members and the wider industry",
          "Support ethical, client-centred advisory practice",
          "Provide pathways for education and capability building",
          "Create opportunities for connection and collaboration",
        ],
      },
      {
        heading: "How we work",
        body:
          "CAFAA is designed as a member-focused organisation with a practical, professional approach. We aim to create value through services that are useful, credible, and relevant to the New Zealand market.",
      },
    ],
    ctas: [
      { label: "Who we are", href: "/about/who-we-are" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
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
    title: "Advocacy",
    description:
      "CAFAA advocates for a strong, professional, and practical commercial and asset finance environment in New Zealand.",
    intro:
      "We work to ensure the voice of the sector is heard where policy, regulation, and industry settings affect advisers, businesses, and clients.",
    sections: [
      {
        heading: "Our advocacy focus",
        bullets: [
          "Industry regulation and licensing settings",
          "Responsible commercial finance practice",
          "Market access and competition",
          "Practical compliance outcomes for members",
        ],
      },
      {
        heading: "How we engage",
        body:
          "CAFAA contributes through submissions, stakeholder dialogue, member feedback, and constructive engagement with relevant industry and public-sector bodies.",
      },
      {
        heading: "Member input matters",
        body:
          "Advocacy is strongest when it reflects real member experience. CAFAA aims to gather practical feedback from across the country and use it to inform our positions.",
      },
    ],
    ctas: [
      { label: "Contact advocacy team", href: "/contact" },
      { label: "Become a member", href: "/membership", variant: "secondary" },
    ],
  },

  "/membership": {
    title: "Membership",
    description:
      "Discover the value of joining CAFAA and the membership options available to professionals across the commercial and asset finance sector.",
    intro:
      "Membership connects you with a professional community focused on standards, capability, advocacy, and long-term industry development.",
    sections: [
      {
        heading: "Why join CAFAA",
        bullets: [
          "Industry representation and a collective professional voice",
          "Education, training, and CPD opportunities",
          "Networking with peers, lenders, and partners",
          "Access to practical resources and updates",
        ],
      },
      {
        heading: "Who membership suits",
        bullets: [
          "Commercial and asset finance advisers",
          "Broker and advisory businesses",
          "Lender representatives",
          "Service providers aligned to the sector",
        ],
      },
      {
        heading: "Built for growth",
        body:
          "Whether you are an experienced adviser, a growing firm, or an industry partner, CAFAA membership is designed to support credibility, capability, and connection.",
      },
    ],
    ctas: [
      { label: "View membership types", href: "/membership/types" },
      { label: "Apply or enquire", href: "/contact", variant: "secondary" },
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
    title: "Education",
    description:
      "Education, capability-building, and ongoing development for the commercial and asset finance profession.",
    intro:
      "CAFAA’s education offering is intended to help members build confidence, competence, and credibility in a changing market.",
    sections: [
      {
        heading: "Education priorities",
        bullets: [
          "Foundational and advanced learning pathways",
          "Continuing professional development",
          "Practical industry-focused content",
          "Training relevant to the New Zealand market",
        ],
      },
      {
        heading: "Who it is for",
        body:
          "Education should support new entrants, experienced advisers, business leaders, and related professionals who want to stay capable and current.",
      },
      {
        heading: "How it can be delivered",
        body:
          "Programmes may include webinars, workshops, online modules, qualifications, and event-based learning.",
      },
    ],
    ctas: [
      { label: "CPD platform", href: "/education/cpd-platform" },
      { label: "Professional qualification", href: "/education/certified-commercial-finance-professional", variant: "secondary" },
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
    title: "Events",
    description:
      "Conferences, webinars, networking, and professional events for CAFAA members and the wider industry.",
    intro:
      "CAFAA events are designed to bring the profession together, create practical learning opportunities, and support meaningful industry connection.",
    sections: [
      {
        heading: "What to expect",
        bullets: [
          "Annual flagship events",
          "Regional networking and member gatherings",
          "Webinars and focused development sessions",
          "Awards and recognition programmes",
        ],
      },
      {
        heading: "Why events matter",
        body:
          "Good events strengthen community, surface ideas, and help advisers and industry participants stay engaged with what matters.",
      },
      {
        heading: "For launch",
        body:
          "This page can promote a simple event calendar and highlight any upcoming programmes while CAFAA’s event schedule grows.",
      },
    ],
    ctas: [
      { label: "Upcoming events", href: "/events/upcoming" },
      { label: "Awards", href: "/events/awards", variant: "secondary" },
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
    title: "Resources",
    description:
      "Practical guidance, policy documents, governance materials, and tools for members and stakeholders.",
    intro:
      "The resources section is where CAFAA can house its most useful reference material for members and the wider industry.",
    sections: [
      {
        heading: "Resource categories",
        bullets: [
          "Governance documents",
          "Policies and member guidance",
          "Templates and practical tools",
          "Industry updates and reference materials",
        ],
      },
      {
        heading: "Launch approach",
        body:
          "At launch, keep this section focused on core documents and a small number of practical resources. It can expand over time as the association grows.",
      },
      {
        heading: "Member value",
        body:
          "Useful resources help members save time, stay aligned, and access consistent information from a central place.",
      },
    ],
    ctas: [
      { label: "Constitution", href: "/resources/constitution" },
      { label: "CPD policy", href: "/resources/cpd-policy", variant: "secondary" },
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
    title: "Contact us",
    description:
      "Get in touch with CAFAA for membership, education, events, advocacy, or general enquiries.",
    intro:
      "Whether you are interested in joining, partnering, or learning more about the association, we would be glad to hear from you.",
    sections: [
      {
        heading: "How we can help",
        bullets: [
          "Membership enquiries and renewals",
          "Education and CPD questions",
          "Events, sponsorship, and partnerships",
          "Advocacy and industry matters",
        ],
      },
      {
        heading: "Best way to reach us",
        body:
          "Use the contact form for the quickest route to the right team, especially if your enquiry relates to membership, education, or partnerships.",
      },
      {
        heading: "For launch",
        body:
          "Keep placeholder contact details clear and simple until official office and phone details are finalised.",
      },
    ],
    ctas: [
      { label: "Join CAFAA", href: "/membership" },
      { label: "Explore resources", href: "/resources", variant: "secondary" },
    ],
  },

  "/legal/privacy-policy": {
    title: "Privacy policy",
    description:
      "How CAFAA collects, uses, stores, and protects personal information.",
    intro:
      "This page should clearly explain how personal information is handled in connection with membership, events, website use, and enquiries.",
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
      "This page should explain that website content is general in nature and not a substitute for specific legal, financial, or professional advice.",
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
      "This page should set out the basic terms governing use of the CAFAA website, forms, and resources.",
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
