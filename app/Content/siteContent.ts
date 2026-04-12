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
    title: "The Professional Home for Aotearoa's Commercial & Asset Finance Advisers",
    description:
      "New Zealand's peak industry body — raising standards, building careers, and shaping policy for commercial finance professionals nationwide.",
    intro:
      "The commercial and asset finance sector is one of New Zealand's most important growth engines. Each year, Kiwi businesses rely on skilled finance advisers to unlock the capital they need to buy equipment, expand operations, and compete internationally. Yet the profession has historically lacked a single, authoritative body to represent its interests, raise its standards, and champion its people. CAFAA changes that. We are the Commercial and Asset Finance Advisers Association of Aotearoa — a member-led organisation built by and for New Zealand finance professionals. Whether you are an independent adviser structuring complex commercial deals, a brokerage firm seeking greater market credibility, or a lender looking to engage with elite, accredited intermediaries, CAFAA is your professional home.",
    sections: [
      {
        heading: "Why CAFAA Exists",
        bullets: [
          "Uncompromising Professional Standards: Trust is the foundation of every commercial finance transaction. CAFAA holds its members to the highest ethical and operational benchmarks in the industry — because Kiwi businesses deserve nothing less than advisers they can rely on completely.",
          "Future-Proof Education & CPD: The regulatory and lending landscape in New Zealand is in constant motion. From the evolving Financial Services Legislation Amendment Act (FSLAA) to shifting lender appetite across the OCR cycle, staying current is not optional — it is a professional obligation.",
          "Relentless Industry Advocacy: A solo adviser cannot change government policy. Together, CAFAA members command the economic weight of billions of dollars in annual commercial lending — a voice that Wellington cannot ignore. We actively engage with the FMA, the Commerce Commission, and Parliamentary select committees.",
          "A Connected National Ecosystem: Commercial finance is a relationship business. CAFAA creates the connections that matter: between advisers and lender BDMs, between emerging professionals and seasoned mentors, and between regional firms and national policy conversations.",
        ],
      },
      {
        heading: "Who We Serve",
        bullets: [
          "Commercial & Asset Finance Advisers: Independent advisers and self-employed professionals who structure complex equipment, property, and business finance solutions for Kiwi enterprises.",
          "Brokerage & Advisory Firms: Multi-adviser firms seeking a credible industry affiliation that enhances their brand, attracts quality talent, and signals the sector's highest standards.",
          "Lenders & Finance Providers: Banks, non-bank lenders, and specialist finance companies that want to engage with an accredited, professional intermediary channel.",
          "Allied Service Providers: Legal, technology, compliance, accounting, and insurance firms that support the commercial finance ecosystem.",
        ],
      },
      {
        heading: "The CAFAA Advantage",
        body:
          "New Zealand's commercial finance adviser sector is growing. As more Kiwi businesses recognise the value of independent advice over direct lender engagement, demand for accredited, professional advisers is rising. CAFAA exists to ensure the profession is ready — qualified, credible, and connected — to meet that demand. CAFAA membership is the clearest signal you can send to the market: that you are serious about your profession, your clients, and the future of commercial finance in Aotearoa.",
      },
    ],
    ctas: [
      { label: "Join CAFAA — Elevate Your Practice", href: "/membership", variant: "accent" },
      { label: "Explore Education Pathways", href: "/education", variant: "secondary" },
    ],
  },

  "/about": {
    title: "About CAFAA: Building a Stronger Commercial Finance Profession for Aotearoa",
    description:
      "CAFAA is New Zealand's dedicated industry association for professionals working in commercial and asset finance advisory — advancing the profession so New Zealand businesses have access to skilled, ethical, and well-connected advisers.",
    intro:
      "CAFAA — the Commercial and Asset Finance Advisers Association of Aotearoa — is New Zealand's dedicated industry association for professionals working in commercial and asset finance advisory. We exist for one reason: to advance the profession so that New Zealand businesses have access to the skilled, ethical, and well-connected advisers they need to grow. We are a member-led organisation, governed by practitioners with deep experience in the New Zealand finance landscape. Our priorities are shaped by the real-world challenges our members face — from navigating the Financial Markets Authority's evolving conduct expectations to winning lender accreditations in an increasingly competitive market.",
    sections: [
      {
        heading: "Our Mission",
        body:
          "To professionalise, protect, and promote the commercial and asset finance advisory sector in Aotearoa New Zealand — creating an industry that is highly capable, ethically grounded, and powerfully represented at every level of policy and practice.",
      },
      {
        heading: "Our Vision",
        body:
          "A New Zealand where every business that needs commercial finance has access to a qualified, independently regulated adviser who puts client outcomes first — and where those advisers are recognised, respected, and rewarded as the specialists they are.",
      },
      {
        heading: "Our Values",
        bullets: [
          "Integrity: We hold ourselves and our members to the highest ethical standards. No compromise.",
          "Excellence: We pursue the highest levels of knowledge, professionalism, and service quality across everything we do.",
          "Advocacy: We stand up for our members and the sector, bringing evidence and expertise to every policy conversation.",
          "Inclusion: We believe a stronger, more diverse profession serves New Zealand better. We actively work to broaden participation.",
          "Collaboration: We know that commercial finance is a relationship industry. We foster the connections that make the whole sector stronger.",
        ],
      },
      {
        heading: "Strategic Vision 2024–2027",
        bullets: [
          "Lifting Professional Standards: Transitioning New Zealand's commercial finance sector from a transactional model to a fully professionalised advisory discipline.",
          "Building Recognised Education Frameworks: Establishing CAFAA's education pathways as the definitive standard for commercial finance qualifications in New Zealand.",
          "Strengthening Sector Representation: Building CAFAA into the indispensable voice of the commercial finance sector in New Zealand's policy arena.",
          "Fostering Future Talent & Inclusion: Actively growing the pipeline of talent entering commercial finance through our Young Professionals Network and Women in Finance initiative.",
        ],
      },
    ],
    ctas: [
      { label: "Meet the Board of Directors", href: "/about/board-of-directors" },
      { label: "Read Our 2024–2027 Strategy", href: "/about/strategy-2024-2027", variant: "secondary" },
    ],
  },

  "/about/who-we-are": {
    title: "Who We Are: New Zealand's Commercial Finance Adviser Community",
    description:
      "CAFAA is a national, member-led professional association representing individuals and organisations in the commercial and asset finance advisory sector in Aotearoa New Zealand.",
    intro:
      "CAFAA is a national, member-led professional association representing individuals and organisations operating in the commercial and asset finance advisory sector in Aotearoa New Zealand. We were established to fill a critical gap: a purpose-built industry body that understands the unique demands of commercial finance advising — as distinct from residential mortgage broking or personal lending — and advocates specifically for those professionals.",
    sections: [
      {
        heading: "Our Regulatory Context",
        body:
          "Under New Zealand's Financial Services Legislation Amendment Act 2019, anyone providing regulated financial advice must operate under a licensed Financial Advice Provider (FAP) and be registered on the Financial Service Providers Register (FSPR). CAFAA helps members understand, meet, and exceed those obligations — while making the case to regulators that commercial finance advisers deserve recognition as the specialist professionals they are.",
      },
      {
        heading: "Our Members",
        bullets: [
          "Commercial and asset finance advisers — independent professionals and employed advisers structuring loans for business clients",
          "Advisory firms and brokerages — multi-adviser practices holding or operating under FAP licences",
          "Lender and aggregator representatives — finance companies, banks, and aggregator groups working with the adviser channel",
          "Allied service providers — legal, technology, compliance, and accounting firms supporting the sector",
        ],
      },
      {
        heading: "Our Role in Aotearoa",
        body:
          "CAFAA operates at the intersection of professional development, industry advocacy, and member services. We engage with the Financial Markets Authority on conduct standards, with Treasury and Parliament on commercial lending policy, and with the wider financial services community on issues that shape how businesses access capital in New Zealand. We are the only association focused exclusively on the commercial and asset finance advisory profession in this country.",
      },
    ],
    ctas: [
      { label: "View membership options", href: "/membership/types" },
      { label: "Meet the board", href: "/about/board-of-directors", variant: "secondary" },
    ],
  },

  "/about/board-of-directors": {
    title: "CAFAA Board of Directors",
    description:
      "CAFAA is governed by a volunteer board of directors drawn from across the New Zealand commercial and asset finance profession.",
    intro:
      "CAFAA is governed by a volunteer board of directors drawn from across the New Zealand commercial and asset finance profession. Board members bring experience spanning independent advisory, lending, legal, compliance, and business leadership — ensuring our governance reflects the full breadth of the sector we represent.",
    sections: [
      {
        heading: "Board Responsibilities",
        bullets: [
          "Setting the strategic direction and annual priorities of the association",
          "Overseeing governance, financial accountability, and organisational risk",
          "Ensuring CAFAA remains member-focused, operationally sound, and strategically relevant",
          "Approving membership standards, education frameworks, and advocacy positions",
          "Representing the association at national and industry forums",
        ],
      },
      {
        heading: "Board Composition",
        body:
          "The CAFAA board includes a Chairperson, Deputy Chair, Treasurer, and elected director positions. Director terms, committee memberships, and appointment processes are governed by the CAFAA Constitution. Director profiles will be published here as positions are confirmed and consent for publication is received.",
      },
      {
        heading: "Governance Commitment",
        body:
          "CAFAA is committed to transparent, accountable governance that reflects the interests of our members and the broader commercial finance profession. Our constitution governs how the board operates, how directors are appointed, and how the association makes decisions on behalf of its members.",
      },
    ],
    ctas: [
      { label: "Read our strategy", href: "/about/strategy-2024-2027" },
      { label: "Contact the association", href: "/contact", variant: "secondary" },
    ],
  },

  "/about/strategy-2024-2027": {
    title: "CAFAA Strategic Plan 2024–2027: Building the Profession of the Future",
    description:
      "CAFAA's 2024–2027 strategic plan sets out how we will position commercial finance advisers to lead New Zealand's evolving financial sector.",
    intro:
      "The commercial and asset finance advisory sector in New Zealand stands at an inflection point. Demand for specialist business finance advice is growing. The regulatory environment is maturing. And the expectations of both clients and lenders are rising. CAFAA's 2024–2027 Strategic Plan sets out how we will position the profession — and our members — to lead that evolution, not merely respond to it.",
    sections: [
      {
        heading: "Strategic Priority 1: Professionalisation",
        bullets: [
          "Define and publish a professional competency framework for commercial finance advisers",
          "Introduce a formal Code of Ethics as a condition of CAFAA membership",
          "Work with the FMA and industry partners to advocate for appropriate recognition of commercial advisers under existing licensing frameworks",
          "Develop a clear member pathway from Provisional to Full membership tied to competency milestones",
        ],
      },
      {
        heading: "Strategic Priority 2: Education",
        bullets: [
          "Launch the Certified Commercial Finance Professional (CCFP) designation",
          "Partner with tertiary providers to deliver the Diploma in Financial Services with a commercial finance specialisation",
          "Build and launch the CAFAA CPD Platform with seamless hour-tracking and compliance reporting",
          "Develop short-course modules on FMA compliance, credit analysis, asset structuring, and client engagement",
        ],
      },
      {
        heading: "Strategic Priority 3: Advocacy",
        bullets: [
          "Establish a formal submission programme with a minimum of four annual submissions to Parliament or regulators",
          "Build relationships with FMA, Treasury, and the Commerce Commission through regular bilateral engagement",
          "Commission or partner on research quantifying the economic contribution of the commercial finance adviser channel in NZ",
          "Join relevant peak bodies to amplify CAFAA's voice on cross-sector issues",
        ],
      },
      {
        heading: "Strategic Priority 4: Membership Growth & Inclusion",
        bullets: [
          "Launch dedicated Women in Finance and Young Professionals programmes",
          "Develop targeted recruitment campaigns for underrepresented regions and communities",
          "Introduce a mentoring programme pairing senior members with emerging advisers",
          "Review fee structures to ensure membership is accessible to sole practitioners and early-career advisers",
        ],
      },
    ],
    ctas: [
      { label: "View education pathways", href: "/education" },
      { label: "Become a member", href: "/membership", variant: "secondary" },
    ],
  },

  "/about/diversity-equity-inclusion": {
    title: "Diversity, Equity & Inclusion at CAFAA",
    description:
      "CAFAA is committed to a more diverse, equitable, and inclusive commercial finance profession in Aotearoa New Zealand.",
    intro:
      "CAFAA believes that a more diverse profession is a stronger profession. Commercial finance advisory in New Zealand has historically been dominated by a narrow demographic — and that narrowness has limited the sector's ability to reflect and serve the full breadth of New Zealand businesses and communities. We are committed to changing that. Our DEI commitment is not a statement — it is a programme of action.",
    sections: [
      {
        heading: "Why Inclusion Matters in Commercial Finance",
        body:
          "New Zealand's business community is extraordinarily diverse — from Pasifika-owned enterprises in South Auckland to Māori agribusiness in the regions, from migrant-founded tech startups in Wellington to multi-generational family businesses in the provinces. The advisers serving those businesses should reflect that diversity. When they do, client relationships are stronger, advice is more culturally attuned, and outcomes improve.",
      },
      {
        heading: "CAFAA DEI Initiatives",
        bullets: [
          "Women in Finance Network — dedicated events, mentoring, and leadership profiling for women across the sector",
          "Young Professionals Programme — structured entry pathways, peer networking, and early-career CPD",
          "Regional Inclusion — ensuring CAFAA resources, events, and representation extend beyond Auckland and Wellington",
          "Accessible Membership — fee structures and support pathways designed to welcome sole practitioners and career-changers",
          "Partnership with Māori and Pasifika professional networks — to actively recruit from communities underrepresented in the sector",
        ],
      },
      {
        heading: "Our Commitment",
        body:
          "We are working to lower barriers to entry for underrepresented groups, create safe and inclusive spaces within the profession, celebrate diverse leadership, and embed inclusion into every aspect of CAFAA's culture and operations.",
      },
    ],
    ctas: [
      { label: "Women in Finance", href: "/about/women-in-finance" },
      { label: "Young Professionals", href: "/about/young-professionals", variant: "secondary" },
    ],
  },

  "/about/women-in-finance": {
    title: "Women in Finance: Building a More Balanced Profession",
    description:
      "CAFAA's Women in Finance initiative supports the visibility, connection, education, and advocacy needed to build a more equitable commercial finance profession in New Zealand.",
    intro:
      "Women are underrepresented across the commercial finance advisory sector in New Zealand — and the profession is poorer for it. CAFAA's Women in Finance initiative is our commitment to changing that: through visibility, connection, education, and advocacy.",
    sections: [
      {
        heading: "What We Offer",
        bullets: [
          "Networking Events: Regular events designed specifically for women across the commercial finance sector, from informal breakfasts to leadership forums.",
          "Mentoring Programme: Structured connections between senior women in finance and emerging professionals navigating the early stages of their careers.",
          "Leadership Profiling: Showcasing the achievements, expertise, and career journeys of women across the sector.",
          "Advocacy: Ensuring that gender equity is embedded in CAFAA's policy submissions and industry positions.",
          "CPD Focused on Progression: Education content relevant to the specific challenges women face in building commercial finance careers.",
        ],
      },
      {
        heading: "Get Involved",
        body:
          "Whether you are a senior practitioner who wants to mentor, an emerging adviser looking for community, or a firm that wants to champion gender equity across its team — CAFAA's Women in Finance initiative welcomes you. Contact us to express your interest in events, mentoring, working groups, or member profiling.",
      },
    ],
    ctas: [
      { label: "Join CAFAA", href: "/membership" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/about/young-professionals": {
    title: "Young Professionals: The Future of Commercial Finance in Aotearoa",
    description:
      "CAFAA's Young Professionals programme attracts, develops, and retains emerging talent in the New Zealand commercial finance advisory sector.",
    intro:
      "The commercial finance advisory profession in New Zealand is growing — and it needs a new generation of skilled, ambitious professionals to grow with it. CAFAA's Young Professionals programme exists to attract, develop, and retain emerging talent in the sector.",
    sections: [
      {
        heading: "What We Provide",
        bullets: [
          "Clear Entry Pathways: We map the routes into commercial finance advising — from study through to FAP registration — so you know exactly where to start and what steps to take.",
          "Provisional Membership: Designed for early-career professionals, giving you access to CAFAA's resources, education, and community while you build your experience.",
          "Peer Networks: Connect with other young professionals across New Zealand who are at the same stage of their career — share insights, referrals, and support.",
          "Mentoring: We match emerging advisers with experienced members who can provide guidance, career advice, and industry perspective.",
          "Targeted Education: CPD modules designed for early-career advisers, covering the fundamentals of commercial credit, client engagement, lender relationships, and compliance.",
        ],
      },
      {
        heading: "Why Commercial Finance?",
        body:
          "Commercial and asset finance is one of the most intellectually stimulating, commercially rewarding, and socially impactful specialisations in the financial services sector. You are not processing transactions — you are helping businesses invest, grow, and create jobs. The complexity of the work is matched by the satisfaction of the outcomes. CAFAA is here to help you build that career.",
      },
    ],
    ctas: [
      { label: "Explore education", href: "/education" },
      { label: "Membership types", href: "/membership/types", variant: "secondary" },
    ],
  },

  "/about/faq": {
    title: "Frequently Asked Questions About CAFAA",
    description:
      "Everything you need to know about CAFAA, membership, education, and how to get involved in New Zealand's commercial finance adviser community.",
    intro:
      "Everything you need to know about CAFAA, membership, education, and how to get involved in New Zealand's commercial finance adviser community.",
    sections: [
      {
        heading: "What is CAFAA?",
        body:
          "CAFAA — the Commercial and Asset Finance Advisers Association of Aotearoa — is New Zealand's dedicated industry association for professionals working in commercial and asset finance advisory. We provide education, advocacy, professional standards, and member services to advisers, firms, lenders, and allied service providers across Aotearoa.",
      },
      {
        heading: "Who can become a CAFAA member?",
        body:
          "CAFAA offers four membership categories to reflect different roles in the sector: Full Membership (active commercial and asset finance advisers and advisory firms), Associate Membership (professionals in related financial roles), Affiliate Membership (lenders, aggregators, and service providers), and Provisional Membership (early-career professionals building their experience). If you are unsure which category suits you, contact our membership team.",
      },
      {
        heading: "Do I need to be a licensed Financial Advice Provider (FAP) to join CAFAA?",
        body:
          "Not necessarily. Membership eligibility varies by category. Full membership is designed for advisers operating under a FAP licence or as authorised bodies. Associate and Provisional membership pathways are available to those who are building toward FAP-registered roles. Contact us to discuss your specific situation.",
      },
      {
        heading: "What are the benefits of CAFAA membership?",
        bullets: [
          "Professional recognition through the CAFAA Trust Mark",
          "Access to our education platform and CPD resources",
          "Industry advocacy on your behalf with the FMA, Parliament, and major lenders",
          "A national network of peers, partners, and lender BDMs",
          "Exclusive member resources including compliance templates and practice guides",
          "Priority access to CAFAA events and the Annual Awards",
        ],
      },
      {
        heading: "What education does CAFAA offer?",
        body:
          "CAFAA's education framework includes: the Certified Commercial Finance Professional (CCFP) designation — our flagship professional credential; a Diploma in Financial Services with a commercial finance specialisation; and an integrated CPD platform for tracking and demonstrating ongoing professional development. All content is tailored to the New Zealand regulatory environment, including FMA requirements and the FSLAA framework.",
      },
      {
        heading: "How much does membership cost?",
        body:
          "Our fee schedule is published at /membership/schedule-of-fees. Fees are structured by membership category and are set to reflect the value delivered while remaining accessible to sole practitioners and small firms. Contact us if you would like to discuss payment options or confirm the most appropriate category before applying.",
      },
      {
        heading: "How do I renew my membership?",
        body:
          "Membership renewal information is available at /membership/renewal. Renewal is typically annual and involves confirming your current details, meeting any category-specific compliance requirements, and paying the annual fee. We will contact you ahead of your renewal date with a reminder and instructions.",
      },
      {
        heading: "What are CAFAA's compliance requirements for members?",
        body:
          "All CAFAA members are expected to: operate lawfully and ethically under applicable New Zealand legislation; maintain appropriate professional indemnity insurance; meet ongoing CPD requirements as outlined in the CAFAA CPD Policy; and adhere to CAFAA's Code of Ethics. Specific requirements vary by membership category and are detailed at /membership/compliance-requirements.",
      },
      {
        heading: "How does CAFAA engage with the FMA and government?",
        body:
          "CAFAA's advocacy programme includes formal submissions to Parliament and regulatory bodies, bilateral engagement with the Financial Markets Authority and Treasury, and active participation in financial services sector consultations. We aim to make at least four substantive advocacy submissions per year, and we brief members on outcomes and regulatory developments through our member communications.",
      },
      {
        heading: "How do I get involved beyond membership?",
        body:
          "There are many ways to contribute to CAFAA: volunteer for the board or a working group; participate in our Women in Finance or Young Professionals programmes; contribute to the member Resource Exchange; sponsor an event or award category; or share your expertise by speaking at a CAFAA event or contributing to a member briefing. Contact us to discuss how you can get more involved.",
      },
    ],
    ctas: [
      { label: "Contact us", href: "/contact" },
      { label: "Join CAFAA", href: "/membership", variant: "secondary" },
    ],
  },

  "/advocacy": {
    title: "Advocacy & Policy: The Collective Voice of Commercial Finance in Aotearoa",
    description:
      "CAFAA represents the collective interests of commercial finance advisers in every policy and regulatory forum that affects the sector — bringing evidence, expertise, and a clear understanding of commercial finance in practice.",
    intro:
      "The commercial and asset finance advisory sector in New Zealand is small enough to be overlooked — and consequential enough that poor policy can cause serious harm. Regulation designed for consumer lending can cripple commercial deal-making. Licensing frameworks that don't distinguish between mortgage brokers and commercial finance advisers create unnecessary compliance burdens without protecting business clients. Without a unified, expert voice in Wellington, those mistakes get made. CAFAA is that voice.",
    sections: [
      {
        heading: "Why Advocacy Matters",
        body:
          "We represent the collective interests of commercial finance advisers in every policy and regulatory forum that affects the sector — bringing evidence, expertise, and a clear understanding of what commercial finance actually looks like in practice.",
      },
      {
        heading: "What CAFAA Advocates For",
        bullets: [
          "Appropriate regulatory recognition of commercial finance advisers as distinct from residential mortgage advisers — with licensing and disclosure requirements tailored to the commercial context.",
          "Access to the Consumer Data Right (CDR) framework for commercial advisers, enabling faster and more accurate financial analysis for business clients.",
          "Fair and transparent lender accreditation standards that do not exclude smaller advisory firms or independent practitioners without objective justification.",
          "Anti-competitive protections ensuring the commercial adviser channel remains a genuine alternative to direct lender engagement for New Zealand businesses.",
          "A proportionate CPD framework that reflects the genuine professional development needs of commercial finance advisers.",
        ],
      },
      {
        heading: "The Regulatory Landscape",
        body:
          "New Zealand's financial advice sector is governed primarily by the Financial Markets Conduct Act 2013 (FMCA) and the Financial Services Legislation Amendment Act 2019 (FSLAA), which introduced the current FAP licensing framework. Commercial finance advisers operating in the regulated space must be registered on the Financial Service Providers Register (FSPR) and engage in ongoing CPD under FMA expectations. CAFAA monitors developments from the FMA, Treasury, the Commerce Commission, and the Parliamentary Finance and Expenditure Select Committee.",
      },
      {
        heading: "Recent Advocacy Topics",
        bullets: [
          "CoFI Regime Implementation: CAFAA is monitoring the Conduct of Financial Institutions regime and its implications for commercial finance advisers operating within bank-affiliated networks.",
          "Open Banking & Commercial Finance: We are engaging with Treasury and the Commerce Commission on ensuring commercial finance advisers have fair and timely access to open banking data frameworks.",
          "FMA Financial Advice Monitoring: CAFAA is preparing a submission on the FMA's financial advice monitoring review, advocating for proportionate conduct expectations for commercial advisers.",
        ],
      },
    ],
    ctas: [
      { label: "Read Our Latest Policy Submissions", href: "/contact", variant: "accent" },
      { label: "Contact the Advocacy Team", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership": {
    title: "CAFAA Membership: The Mark of Professional Excellence in New Zealand Commercial Finance",
    description:
      "CAFAA membership signals to clients, lenders, and regulators that you operate with integrity, competence, and accountability — the definitive professional credential for NZ commercial finance advisers.",
    intro:
      "In a market where clients and lenders have countless choices, CAFAA membership is the signal that sets elite advisers apart. It tells the market that you have met CAFAA's professional standards, that you are committed to ongoing education and development, and that you operate within an ethical framework that puts client outcomes first. It is not just an affiliation — it is a credential. New Zealand's commercial finance sector is growing in sophistication. Lenders are demanding higher standards from their adviser partners. Business clients are more discerning about who they trust with their capital strategy. In that environment, CAFAA membership is not just a nice-to-have — it is increasingly a commercial necessity.",
    sections: [
      {
        heading: "Membership Categories",
        bullets: [
          "Full Membership: CAFAA's primary professional credential — available to active commercial and asset finance advisers and advisory firms that meet CAFAA's eligibility, probity, and compliance standards.",
          "Associate Membership: Supports broader industry participation, recognising professionals in adjacent financial roles who are connected to the commercial finance sector.",
          "Affiliate Membership: Designed for organisations that support the commercial finance adviser channel — lenders, aggregators, technology providers, and professional services firms.",
          "Provisional Membership: Provides a structured starting point for professionals entering or transitioning into commercial finance advising.",
        ],
      },
      {
        heading: "Key Member Benefits",
        bullets: [
          "CAFAA Trust Mark — use the CAFAA credential in your client-facing materials, website, and lender accreditation applications",
          "Member Resource Library — compliance templates, disclosure frameworks, practice guides, and FMA regulatory summaries",
          "CPD Platform Access — track your professional development hours, access recorded masterclasses, and meet annual CPD requirements",
          "Industry Advocacy — benefit from CAFAA's engagement with the FMA, Parliament, and major lenders on your behalf",
          "National Events — priority access to CAFAA networking events, economic briefings, and the Annual Excellence Awards",
          "Peer Community — connect with the nationwide network of commercial finance advisers and allied professionals",
          "Education Pathways — member pricing on CAFAA's CCFP designation, Diploma programme, and short-course modules",
          "Member Communications — regular briefings on regulatory changes, market developments, and industry news",
        ],
      },
      {
        heading: "Compliance Requirements for Members",
        body:
          "CAFAA membership is not just a credential — it carries responsibilities. All members are expected to: operate lawfully under applicable NZ legislation; maintain appropriate professional indemnity insurance; meet CAFAA's annual CPD requirements; adhere to the CAFAA Code of Ethics; and participate in any required annual compliance declarations. Specific requirements vary by category and are detailed at /membership/compliance-requirements.",
      },
    ],
    ctas: [
      { label: "Compare Membership Types & Apply", href: "/membership/types", variant: "accent" },
    ],
  },

  "/membership/types": {
    title: "Membership Types",
    description:
      "Explore CAFAA membership categories for advisers, firms, emerging professionals, and industry partners.",
    intro:
      "CAFAA offers four membership categories to reflect different roles in the commercial and asset finance ecosystem. Whether you are an experienced adviser, a lender, a service provider, or someone building toward a career in commercial finance, there is a CAFAA membership pathway for you.",
    sections: [
      {
        heading: "Full Membership",
        body:
          "CAFAA's primary professional credential — for active commercial and asset finance advisers and advisory firms that meet CAFAA's eligibility, probity, and compliance standards. Best for: experienced advisers, established brokerages, and firms seeking full industry recognition and the complete suite of CAFAA member benefits.",
      },
      {
        heading: "Associate Membership",
        body:
          "Supports broader industry participation, recognising professionals in adjacent financial roles who are connected to the commercial finance sector. Best for: professionals in related advisory, financial services, or industry roles who want to engage with the commercial finance community and access CAFAA resources and events.",
      },
      {
        heading: "Affiliate Membership",
        body:
          "Designed for organisations that support the commercial finance adviser channel — lenders, aggregators, technology providers, and professional services firms. Best for: banks, non-bank lenders, aggregator groups, legal firms, technology companies, insurance providers, and accounting firms working with the commercial finance sector.",
      },
      {
        heading: "Provisional Membership",
        body:
          "Provides a structured starting point for professionals entering or transitioning into commercial finance advising. Best for: early-career professionals, career changers, and those building toward FAP registration and full CAFAA membership eligibility.",
      },
    ],
    ctas: [
      { label: "Full membership details", href: "/membership/types/full" },
      { label: "Schedule of fees", href: "/membership/schedule-of-fees", variant: "secondary" },
    ],
  },

  "/membership/types/full": {
    title: "Full Membership",
    description:
      "CAFAA's primary professional credential for active commercial and asset finance advisers and advisory firms in New Zealand.",
    intro:
      "Full membership is CAFAA's primary professional credential — available to active commercial and asset finance advisers and advisory firms that meet CAFAA's eligibility, probity, and compliance standards. It is the mark of professional excellence in New Zealand commercial finance.",
    sections: [
      {
        heading: "Best suited for",
        bullets: [
          "Active commercial and asset finance advisers",
          "Experienced brokers and advisory professionals",
          "Advisory firms and brokerages seeking full industry recognition",
          "Practitioners seeking the complete suite of CAFAA member benefits",
        ],
      },
      {
        heading: "Full Member Benefits",
        bullets: [
          "The CAFAA Trust Mark for client-facing materials and lender accreditation applications",
          "Full access to the Member Resource Library — compliance templates, practice guides, FMA regulatory summaries",
          "Priority access to CAFAA events, networking, and the Annual Excellence Awards",
          "CPD Platform access with seamless hour-tracking and compliance reporting",
          "Member pricing on CAFAA education programmes including the CCFP designation",
          "Regular regulatory briefings and market intelligence communications",
        ],
      },
      {
        heading: "Eligibility & Compliance",
        body:
          "Full membership is subject to eligibility criteria including active engagement in commercial and asset finance advisory, probity requirements, professional indemnity insurance, and ongoing CPD compliance. Full details are available at /membership/compliance-requirements. Contact us to discuss your eligibility before applying.",
      },
    ],
    ctas: [
      { label: "Membership enquiry", href: "/contact" },
      { label: "Apply or renew", href: "/membership/renewal", variant: "secondary" },
    ],
  },

  "/membership/types/associate": {
    title: "Associate Membership",
    description:
      "For professionals in adjacent financial roles who want to engage with New Zealand's commercial finance community and access CAFAA resources.",
    intro:
      "Associate membership supports broader industry participation, recognising professionals in adjacent financial roles who are connected to the commercial finance sector. It offers access to CAFAA's community, resources, and events while reflecting a different level of direct commercial finance advisory activity.",
    sections: [
      {
        heading: "Best suited for",
        bullets: [
          "Professionals in related advisory or financial services roles",
          "People building toward greater participation in commercial finance",
          "Those seeking access to CAFAA's learning, networking, and community",
          "Professionals in support roles connected to the commercial finance sector",
        ],
      },
      {
        heading: "What Associate Membership Offers",
        bullets: [
          "Access to selected CAFAA member communications and resources",
          "Eligibility for CAFAA events and networking opportunities",
          "A pathway toward Full membership as experience develops",
          "Connection to the national commercial finance adviser community",
        ],
      },
      {
        heading: "Pathway to Full Membership",
        body:
          "Associate membership provides a bridge for professionals who are moving toward a more active commercial finance advisory role. As your experience and eligibility develop, CAFAA's membership team can guide you through the transition to Full membership.",
      },
    ],
    ctas: [
      { label: "Compare membership types", href: "/membership/types" },
      { label: "Contact membership", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership/types/affiliate": {
    title: "Affiliate Membership",
    description:
      "For organisations that support the commercial finance adviser channel — lenders, aggregators, technology providers, and professional services firms.",
    intro:
      "Affiliate membership is designed for organisations that support the commercial finance adviser channel — lenders, aggregators, technology providers, and professional services firms. It gives your organisation direct access to CAFAA's nationwide adviser network while positioning you as a trusted partner to the profession.",
    sections: [
      {
        heading: "Suitable for",
        bullets: [
          "Banks and non-bank lenders working with the adviser channel",
          "Aggregator groups engaged with commercial finance advisers",
          "Legal, compliance, and accounting firms supporting the sector",
          "Technology companies providing tools and platforms to advisers",
          "Insurance providers working in the commercial finance space",
        ],
      },
      {
        heading: "Value for Affiliate Members",
        bullets: [
          "Direct access to CAFAA's nationwide network of commercial finance advisers",
          "Brand visibility with a professional, accredited adviser community",
          "Opportunities to support CAFAA events, initiatives, and education programmes",
          "Engagement with industry issues and regulatory developments that affect the adviser channel",
          "Positioning as a trusted, recognised partner to the commercial finance profession",
        ],
      },
      {
        heading: "Partnership Approach",
        body:
          "CAFAA's affiliate membership is a genuine partnership — not just a logo placement. We work with affiliate members to create mutually beneficial engagement that serves both the organisation and the wider adviser community. Contact us to discuss how affiliate membership can work for your organisation.",
      },
    ],
    ctas: [
      { label: "Partner with CAFAA", href: "/contact" },
      { label: "View all membership types", href: "/membership/types", variant: "secondary" },
    ],
  },

  "/membership/types/provisional": {
    title: "Provisional Membership",
    description:
      "A structured starting point for professionals entering or transitioning into commercial finance advising in New Zealand.",
    intro:
      "Provisional membership provides a structured starting point for professionals entering or transitioning into commercial finance advising. It gives early-career professionals access to CAFAA's resources, education, and community while they build toward full membership eligibility.",
    sections: [
      {
        heading: "Designed for",
        bullets: [
          "Early-career professionals entering commercial finance advisory",
          "Career changers transitioning from other financial services roles",
          "Those building toward FAP registration and full CAFAA membership",
          "Professionals seeking a supportive community during their development phase",
        ],
      },
      {
        heading: "What Provisional Membership Provides",
        bullets: [
          "Access to CAFAA's education resources and CPD platform",
          "Participation in CAFAA events and the Young Professionals programme",
          "Mentoring connections with experienced CAFAA members",
          "A clear pathway toward Full membership as your experience and qualifications develop",
        ],
      },
      {
        heading: "Development Pathway",
        body:
          "Provisional membership is designed to evolve. As you build your experience, complete relevant education, and meet the eligibility requirements for Full membership, CAFAA's team will support your transition. The pathway from Provisional to Full membership is tied to competency milestones outlined in CAFAA's professional framework.",
      },
    ],
    ctas: [
      { label: "Explore education", href: "/education" },
      { label: "Contact membership", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership/renewal": {
    title: "Membership Renewal",
    description:
      "Renew your CAFAA membership annually to maintain your professional credentials, access, and benefits.",
    intro:
      "Membership renewal is typically annual and involves confirming your current details, meeting any category-specific compliance requirements, and paying the annual fee. We will contact you ahead of your renewal date with a reminder and instructions.",
    sections: [
      {
        heading: "What renewal covers",
        bullets: [
          "Confirming your current contact details and professional role",
          "Updating business and organisation information",
          "Meeting category-specific CPD and compliance requirements",
          "Maintaining continuity of access to member benefits and resources",
          "Paying the annual membership fee for your category",
        ],
      },
      {
        heading: "Compliance at Renewal",
        body:
          "Renewal is an important checkpoint for ensuring members continue to meet CAFAA's professional standards. You will be asked to confirm your current professional indemnity insurance, CPD activity for the year, and ongoing eligibility for your membership category.",
      },
      {
        heading: "Need help?",
        body:
          "If your role, business structure, or membership category has changed since your last renewal, contact the membership team for guidance before submitting. We can help you determine whether a category change is appropriate and ensure your renewal goes smoothly.",
      },
    ],
    ctas: [
      { label: "Contact membership", href: "/contact" },
      { label: "Review fees", href: "/membership/schedule-of-fees", variant: "secondary" },
    ],
  },

  "/membership/schedule-of-fees": {
    title: "Schedule of Fees",
    description:
      "CAFAA membership fee structure by category — set to reflect the value delivered while remaining accessible to sole practitioners and small firms.",
    intro:
      "CAFAA's fee schedule is structured by membership category and is set to reflect the value delivered while remaining accessible to sole practitioners and small firms. Full fee details are confirmed on application — contact us if you would like to discuss payment options or confirm the most appropriate category before applying.",
    sections: [
      {
        heading: "Membership Fee Categories",
        bullets: [
          "Full membership annual fee — for active commercial and asset finance advisers and advisory firms",
          "Associate membership annual fee — for professionals in adjacent financial services roles",
          "Affiliate membership annual fee — for lenders, aggregators, and service provider organisations",
          "Provisional membership annual fee — for early-career and transitioning professionals",
        ],
      },
      {
        heading: "What Fees Support",
        body:
          "Your membership fees fund CAFAA's full programme of member services — including advocacy engagement with the FMA and Parliament, education development, the CPD platform, member resources, events, and the ongoing administration of the association. Every dollar supports the profession directly.",
      },
      {
        heading: "Accessibility Commitment",
        body:
          "CAFAA is committed to ensuring membership is accessible to sole practitioners and early-career advisers. If cost is a consideration, contact us — we can discuss payment options and confirm that you are applying in the most appropriate category. Our goal is to welcome the broadest possible community of commercial finance professionals.",
      },
    ],
    ctas: [
      { label: "Membership types", href: "/membership/types" },
      { label: "Membership enquiry", href: "/contact", variant: "secondary" },
    ],
  },

  "/membership/compliance-requirements": {
    title: "Compliance Requirements for CAFAA Members",
    description:
      "All CAFAA members are expected to operate lawfully, maintain professional standards, and meet ongoing CPD and ethical obligations.",
    intro:
      "CAFAA membership is not just a credential — it carries responsibilities. A strong compliance culture within the association protects the profession's reputation, builds trust with clients and lenders, and ensures CAFAA members are genuinely distinguished by their standards.",
    sections: [
      {
        heading: "Core Member Obligations",
        bullets: [
          "Operate lawfully and ethically under applicable New Zealand legislation, including the Financial Markets Conduct Act 2013 and the FSLAA 2019",
          "Maintain appropriate professional indemnity insurance",
          "Meet CAFAA's annual CPD requirements as outlined in the CAFAA CPD Policy",
          "Adhere to CAFAA's Code of Ethics as a condition of continued membership",
          "Participate in annual compliance declarations required by CAFAA",
          "Notify CAFAA of any material changes to your registration status, business structure, or professional circumstances",
        ],
      },
      {
        heading: "Category-Specific Requirements",
        body:
          "Specific compliance requirements vary by membership category. Full members are subject to the most comprehensive obligations, reflecting their active advisory role and public-facing use of the CAFAA credential. Associate, Affiliate, and Provisional members have requirements appropriate to their category and level of engagement. Full details for each category are available on request.",
      },
      {
        heading: "Practical Guidance",
        body:
          "CAFAA provides members with practical guidance to make compliance straightforward — including disclosure statement templates, CPD tracking tools, and regular regulatory briefings. If you have a compliance question or need to report a change in your circumstances, contact the CAFAA team.",
      },
    ],
    ctas: [
      { label: "View CPD policy", href: "/resources/cpd-policy" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/member-directory": {
    title: "Member Directory",
    description:
      "Browse CAFAA's community of accredited commercial and asset finance professionals across New Zealand.",
    intro:
      "The CAFAA member directory showcases our community of accredited commercial and asset finance professionals across Aotearoa. Use the directory to connect with advisers, firms, lenders, and allied service providers who carry the CAFAA mark of professional excellence.",
    sections: [
      {
        heading: "Directory Categories",
        bullets: [
          "Full Members — active commercial and asset finance advisers and advisory firms",
          "Associate Members — professionals in adjacent financial services roles",
          "Affiliate Members — lenders, aggregators, and service provider organisations",
        ],
      },
      {
        heading: "For Business Clients",
        body:
          "Looking for an accredited commercial finance adviser? CAFAA's directory helps you find qualified professionals in your region who have met our professional standards, compliance requirements, and ethical obligations.",
      },
      {
        heading: "Member Visibility",
        body:
          "Directory listings reflect member preferences and consent. Members can manage their directory profile and visibility settings through the members area. Contact us if you need to update your listing.",
      },
    ],
    ctas: [
      { label: "Full members", href: "/member-directory/full-members" },
      { label: "Join CAFAA", href: "/membership", variant: "secondary" },
    ],
  },

  "/member-directory/full-members": {
    title: "Full Members",
    description:
      "CAFAA full members — active commercial and asset finance advisers and advisory firms accredited to the highest professional standard in New Zealand.",
    intro:
      "CAFAA full members are active commercial and asset finance advisers and advisory firms who have met CAFAA's eligibility, probity, and compliance standards. They represent the highest tier of professional accreditation in New Zealand commercial finance.",
    sections: [
      {
        heading: "What the CAFAA Full Member Mark Means",
        bullets: [
          "Met CAFAA's professional eligibility and probity requirements",
          "Committed to ongoing CPD and professional development",
          "Operating within CAFAA's Code of Ethics",
          "Maintaining appropriate professional indemnity insurance",
          "Actively engaged in commercial and asset finance advisory",
        ],
      },
      {
        heading: "Finding a Full Member",
        body:
          "Full member listings are published here with member consent. Each listing includes the member's name or business name, location, area of expertise, and contact details. Use this directory to find an accredited commercial finance adviser in your area.",
      },
    ],
    ctas: [
      { label: "All member categories", href: "/member-directory" },
      { label: "My profile", href: "/my-profile", variant: "secondary" },
    ],
  },

  "/member-directory/associate-members": {
    title: "Associate Members",
    description:
      "CAFAA associate members — professionals in adjacent financial roles connected to New Zealand's commercial finance sector.",
    intro:
      "CAFAA associate members are professionals in adjacent financial roles who are connected to the commercial finance sector and engaged with the CAFAA community.",
    sections: [
      {
        heading: "About Associate Members",
        bullets: [
          "Name and organisation",
          "Region",
          "Professional focus and area of expertise",
          "Contact details (where consent provided)",
        ],
      },
      {
        heading: "Engaging with Associate Members",
        body:
          "Associate members bring valuable perspectives from across the broader financial services landscape. Their participation enriches CAFAA's community and strengthens connections across the sector.",
      },
    ],
    ctas: [
      { label: "All member categories", href: "/member-directory" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/member-directory/affiliate-members": {
    title: "Affiliate Members",
    description:
      "CAFAA affiliate members — lenders, aggregators, and service providers who support New Zealand's commercial finance adviser channel.",
    intro:
      "CAFAA affiliate members are the organisations that support and partner with New Zealand's commercial finance adviser community — from banks and non-bank lenders to technology providers and professional services firms.",
    sections: [
      {
        heading: "About Affiliate Members",
        bullets: [
          "Organisations committed to supporting the commercial finance adviser channel",
          "Partners who contribute to the profession's events, education, and development",
          "Businesses recognised by CAFAA as trusted partners to its member community",
        ],
      },
      {
        heading: "Working with Affiliate Members",
        body:
          "Affiliate member organisations are a vital part of the CAFAA ecosystem. Their support enables CAFAA to deliver events, education, and member services that benefit the entire commercial finance community.",
      },
    ],
    ctas: [
      { label: "Become an affiliate", href: "/membership/types/affiliate" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/members-area": {
    title: "Members Area",
    description:
      "The central hub for CAFAA members — access resources, CPD tools, and member services.",
    intro:
      "Welcome to the CAFAA Members Area — your central hub for member resources, CPD tracking, account management, and exclusive member services. Full functionality will be available once authentication is implemented.",
    sections: [
      {
        heading: "Planned capabilities",
        bullets: [
          "Secure member login and profile management",
          "CPD platform access and hour tracking",
          "Member resource library — compliance templates, practice guides, regulatory briefings",
          "Event registrations and member communications",
          "Renewal management and membership status",
        ],
      },
      {
        heading: "Coming soon",
        body:
          "The full members area is under development. In the meantime, contact the CAFAA team directly for access to member resources, CPD queries, or account support.",
      },
    ],
    ctas: [
      { label: "My profile", href: "/my-profile" },
      { label: "Contact support", href: "/contact", variant: "secondary" },
    ],
  },

  "/my-profile": {
    title: "My Profile",
    description:
      "Manage your CAFAA membership profile, details, and account settings.",
    intro:
      "Your CAFAA member profile is your central record with the association — covering your membership details, professional information, directory preferences, and communication settings.",
    sections: [
      {
        heading: "Profile features",
        bullets: [
          "Personal and organisation details",
          "Membership category and renewal status",
          "Directory visibility and listing settings",
          "Communication and event preferences",
          "CPD record and annual compliance status",
        ],
      },
      {
        heading: "Keeping your profile current",
        body:
          "An up-to-date profile ensures you receive the right communications, appear correctly in the member directory, and remain compliant with CAFAA's membership requirements. If your role or business details change, update your profile promptly.",
      },
    ],
    ctas: [
      { label: "Members area", href: "/members-area" },
      { label: "Contact support", href: "/contact", variant: "secondary" },
    ],
  },

  "/education": {
    title: "Education & Professional Development: Building New Zealand's Most Capable Commercial Finance Professionals",
    description:
      "CAFAA's purpose-designed education ecosystem for commercial finance professionals — covering the CCFP designation, Diploma in Financial Services, and an integrated CPD platform tailored to the NZ regulatory environment.",
    intro:
      "Commercial and asset finance is one of the most technically complex disciplines in the financial services sector. Structuring a leveraged equipment acquisition, navigating a commercial property finance deal, or advising a business on the best mix of working capital, trade finance, and asset finance requires deep knowledge — of credit, of tax, of lender appetite, and of the New Zealand regulatory environment. Yet historically, commercial finance in New Zealand has had no formal qualification pathway of its own. CAFAA is changing that — building a purpose-designed education ecosystem for the commercial finance profession in Aotearoa.",
    sections: [
      {
        heading: "Our Education Framework",
        bullets: [
          "Certified Commercial Finance Professional (CCFP): CAFAA's flagship professional designation — the highest credential available to commercial finance advisers in New Zealand.",
          "Diploma in Financial Services (Commercial Finance Specialisation): A formal qualification pathway providing a rigorous, structured introduction to commercial and asset finance advisory.",
          "CAFAA CPD Platform: An integrated continuing professional development platform that makes it easy for members to plan, record, and demonstrate their ongoing learning.",
        ],
      },
      {
        heading: "Education Topics Covered",
        bullets: [
          "Commercial credit analysis and business financial statement interpretation",
          "Asset finance structuring — chattel mortgage, finance lease, operating lease, hire purchase",
          "Commercial property finance fundamentals",
          "Trade finance and working capital solutions",
          "FMA conduct obligations and FSLAA compliance for commercial advisers",
          "AML/CFT requirements in a commercial finance context",
          "Lender credit policy and submission writing",
          "Client engagement, needs analysis, and advice documentation",
          "Interest rate risk and OCR impact on commercial lending",
        ],
      },
      {
        heading: "Why Education Is Central to CAFAA's Mission",
        body:
          "The regulatory and lending landscape in New Zealand is in constant motion. From the evolving Financial Services Legislation Amendment Act (FSLAA) to shifting lender appetite across the OCR cycle, staying current is not optional — it is a professional obligation. CAFAA's education pathways and CPD platform give members the knowledge to stay ahead of every curve.",
      },
    ],
    ctas: [
      { label: "Explore the CCFP Pathway", href: "/education/certified-commercial-finance-professional", variant: "accent" },
      { label: "Access the CPD Platform", href: "/education/cpd-platform", variant: "secondary" },
    ],
  },

  "/education/certified-commercial-finance-professional": {
    title: "Certified Commercial Finance Professional (CCFP)",
    description:
      "The CCFP is the pinnacle of professional achievement for commercial finance advisers in New Zealand — awarded by CAFAA to those who demonstrate advanced technical knowledge, regulatory understanding, and commitment to ethical practice.",
    intro:
      "The CCFP is the pinnacle of professional achievement for commercial finance advisers in New Zealand. Awarded by CAFAA, it signifies that the holder has demonstrated advanced capability across commercial and asset finance products, structures, and markets — and a commitment to ongoing professional development and ethical practice.",
    sections: [
      {
        heading: "What the CCFP Demonstrates",
        bullets: [
          "Advanced technical knowledge across commercial and asset finance products, structures, and markets",
          "A thorough understanding of the New Zealand regulatory environment as it applies to commercial finance advice",
          "A commitment to ongoing professional development and ethical practice",
          "The ability to advise complex, high-value commercial clients with authority and precision",
        ],
      },
      {
        heading: "CCFP Programme Structure",
        bullets: [
          "Entry requirements: Minimum 3 years' commercial finance advisory experience plus Diploma or equivalent qualification",
          "Programme components: Written assessment, case study submission, and CPD portfolio review",
          "Duration: Typically 6–12 months to complete",
          "Renewal: Annual CPD commitment required to maintain the designation",
        ],
      },
      {
        heading: "Why Pursue the CCFP?",
        body:
          "The CCFP is the commercial finance equivalent of a CA or CFP designation — a mark that commands respect from clients, lenders, and peers alike. It differentiates you in a competitive market, supports lender accreditation applications, and demonstrates to clients that they are working with a practitioner at the peak of the profession. Contact the CAFAA education team for current enrolment information and member pricing.",
      },
    ],
    ctas: [
      { label: "Contact education team", href: "/contact" },
      { label: "View CPD platform", href: "/education/cpd-platform", variant: "secondary" },
    ],
  },

  "/education/diploma-financial-services": {
    title: "Diploma in Financial Services (Commercial Finance Specialisation)",
    description:
      "A nationally recognised qualification pathway for professionals building a career in commercial and asset finance advisory in New Zealand.",
    intro:
      "The Diploma in Financial Services with a commercial finance specialisation provides a nationally recognised, structured qualification pathway for professionals entering or building a career in commercial and asset finance advisory. It is designed to complement — and distinguish from — residential mortgage qualifications, ensuring that commercial advisers have a qualification that reflects the actual complexity of their work.",
    sections: [
      {
        heading: "What This Pathway Provides",
        bullets: [
          "A structured, rigorous introduction to commercial and asset finance advisory",
          "Technical foundations in credit analysis, asset structuring, and regulatory compliance",
          "A qualification that reflects the distinct demands of commercial finance advising",
          "A pathway toward the CCFP designation for those pursuing the highest level of professional recognition",
        ],
      },
      {
        heading: "Who May Benefit",
        body:
          "The Diploma is particularly suited to advisers new to the commercial finance sector, professionals transitioning from residential mortgage broking, and those who want a formal qualification to underpin their advisory practice. It is also a recommended pathway for those working toward full CAFAA membership.",
      },
      {
        heading: "Programme Details",
        body:
          "Programme details including tertiary provider partnerships, NZQA qualification level, delivery mode (online, in-person, or blended), duration, cost, and funding options will be confirmed and published here as they are finalised. Contact the CAFAA education team for current information and to register your interest.",
      },
    ],
    ctas: [
      { label: "Education overview", href: "/education" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/education/cpd-platform": {
    title: "CAFAA CPD Platform",
    description:
      "An integrated continuing professional development platform for CAFAA members — making CPD effortless, compliant, and relevant to NZ commercial finance.",
    intro:
      "CAFAA's CPD Platform is the central hub for member professional development. It is designed to make CPD effortless — so that staying current does not compete with running a business, but instead integrates seamlessly with professional life.",
    sections: [
      {
        heading: "Platform Features",
        bullets: [
          "Searchable library of short-course modules on commercial finance topics",
          "Recorded webinars and masterclasses from industry experts",
          "Easy hour-logging and CPD activity tracking",
          "Annual CPD summary report for compliance and renewal purposes",
          "Personalised learning recommendations based on your membership category and career stage",
        ],
      },
      {
        heading: "CPD Topics Available",
        bullets: [
          "FMA conduct obligations and FSLAA compliance updates",
          "Commercial credit analysis and deal structuring",
          "AML/CFT requirements for commercial finance advisers",
          "Lender policy updates and credit submission best practice",
          "OCR and interest rate environment briefings",
          "Client engagement, documentation, and advice quality",
        ],
      },
      {
        heading: "CPD & Compliance",
        body:
          "The CPD Platform makes it straightforward to meet CAFAA's annual CPD requirements and demonstrate compliance at renewal time. All logged activities are tracked against your member record. For questions about CPD expectations, see the CAFAA CPD Policy at /resources/cpd-policy.",
      },
    ],
    ctas: [
      { label: "View CPD policy", href: "/resources/cpd-policy" },
      { label: "Members area", href: "/members-area", variant: "secondary" },
    ],
  },

  "/events": {
    title: "CAFAA Events: Where New Zealand's Commercial Finance Community Connects",
    description:
      "CAFAA's event programme brings together commercial finance advisers, lenders, and industry partners for networking, education, and professional recognition.",
    intro:
      "Commercial finance is a relationship-driven profession. The deals that get done, the accreditations that get approved, and the careers that advance are often shaped by conversations that happen at the right event, between the right people, at the right time. CAFAA's event programme is built to create those conversations.",
    sections: [
      {
        heading: "Our Event Calendar",
        bullets: [
          "National Annual Summit — CAFAA's flagship annual conference bringing together the country's leading commercial finance advisers, lender representatives, and industry experts.",
          "Excellence Awards Gala — the industry's premier evening event, recognising and celebrating the best of the New Zealand commercial finance profession.",
          "Regional Networking Events — regular events across Auckland, Wellington, Christchurch, and beyond, providing members with local connection points throughout the year.",
          "Economic Briefing Webinars — quarterly webinars featuring commentary from leading NZ finance economists on OCR movements, credit availability, and business confidence trends.",
          "Education & Technical Workshops — hands-on sessions on commercial finance topics delivered by expert practitioners.",
          "Women in Finance Events — dedicated events including networking forums, leadership panels, and mentoring sessions.",
          "Young Professionals Events — purpose-designed events for emerging professionals including industry introductions and career development sessions.",
        ],
      },
      {
        heading: "Why Events Matter",
        body:
          "Commercial finance is a relationship business. Who you know at a lending institution can be the difference between a declined application and a funded deal. Our events bridge the gap between advisers and capital providers — creating the conversations and connections that drive careers and deals alike.",
      },
      {
        heading: "Sponsorship & Partnership",
        body:
          "CAFAA events offer meaningful sponsorship and partnership opportunities for organisations that want to engage with New Zealand's commercial finance adviser community. Contact us to discuss how your organisation can be part of the CAFAA event programme.",
      },
    ],
    ctas: [
      { label: "View the Events Calendar", href: "/events/calendar", variant: "accent" },
      { label: "View Upcoming Events", href: "/events/upcoming", variant: "secondary" },
    ],
  },

  "/events/upcoming": {
    title: "Upcoming Events",
    description:
      "Register for CAFAA's upcoming events — networking, workshops, webinars, and the annual summit.",
    intro:
      "Stay connected with the CAFAA community through our upcoming programme of events across New Zealand. From regional networking to national conferences, there is always something valuable on the CAFAA calendar.",
    sections: [
      {
        heading: "Event types",
        bullets: [
          "National Annual Summit — our flagship conference for the commercial finance sector",
          "Regional networking breakfasts and lunches across New Zealand's main centres",
          "Economic briefing webinars — quarterly market and OCR commentary",
          "Education and technical workshops on commercial finance topics",
          "Women in Finance and Young Professionals events",
        ],
      },
      {
        heading: "How to register",
        body:
          "Event listings include dates, locations, formats, and registration details. CAFAA members receive priority access and member pricing. Contact us to register your interest in any upcoming event or to be notified when new events are confirmed.",
      },
    ],
    ctas: [
      { label: "View calendar", href: "/events/calendar" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/events/calendar": {
    title: "Events Calendar",
    description:
      "CAFAA's full event programme — plan your participation in New Zealand's commercial finance community calendar.",
    intro:
      "The CAFAA events calendar gives members a forward view of the full programme — so you can plan attendance, block out key dates, and make the most of every opportunity to connect, learn, and grow.",
    sections: [
      {
        heading: "Calendar overview",
        bullets: [
          "Q1: Regional networking events and annual economic outlook webinar",
          "Q2: Education workshops and Women in Finance events",
          "Q3: Annual National Summit and mid-year economic briefing",
          "Q4: Excellence Awards Gala and year-end networking events",
        ],
      },
      {
        heading: "Stay informed",
        body:
          "Event details and registration links are published here as they are confirmed. CAFAA members receive advance notification of all events through member communications. Ensure your contact details are current in your member profile to receive event updates.",
      },
    ],
    ctas: [
      { label: "Upcoming events", href: "/events/upcoming" },
      { label: "Excellence Awards", href: "/events/awards", variant: "secondary" },
    ],
  },

  "/events/awards": {
    title: "CAFAA Excellence Awards",
    description:
      "Aotearoa's premier recognition programme for commercial and asset finance professionals — celebrating achievement, best practice, and contribution to the sector.",
    intro:
      "The CAFAA Excellence Awards are Aotearoa's premier recognition programme for commercial and asset finance professionals. They exist to celebrate achievement, highlight best practice, and raise the profile of an industry that plays a critical role in the New Zealand economy.",
    sections: [
      {
        heading: "Award Categories",
        bullets: [
          "Adviser of the Year — recognising outstanding performance and client outcomes",
          "Emerging Adviser of the Year — celebrating the sector's rising stars",
          "Brokerage of the Year — recognising excellence at the firm level",
          "Lender of the Year (as voted by advisers) — honouring the best lender partnerships",
          "Innovation Award — for advisers and firms leading the way in technology and process",
          "Women in Finance Award — celebrating leadership and contribution by women in the sector",
          "Community Contribution Award — recognising members who give back to the profession and wider community",
        ],
      },
      {
        heading: "Why the Awards Matter",
        body:
          "Recognition programmes build pride in the profession, highlight best practice for the whole industry to learn from, and help position commercial finance advisory as a credible, aspirational career. Being nominated or awarded sends a powerful signal to clients, lenders, and peers that your practice operates at the highest level.",
      },
      {
        heading: "Nominations & Sponsorship",
        body:
          "Nominations open annually in advance of the Awards Gala. CAFAA members are encouraged to nominate themselves, their team members, and other professionals they believe deserve recognition. Organisations interested in sponsoring an award category should contact the CAFAA events team.",
      },
    ],
    ctas: [
      { label: "Contact CAFAA", href: "/contact" },
      { label: "View events", href: "/events", variant: "secondary" },
    ],
  },

  "/resources": {
    title: "Member Resources: Your Operational Toolkit for Commercial Finance Excellence",
    description:
      "CAFAA's member resource library — compliance templates, practice guides, regulatory briefings, and tools for running a high-performing commercial finance advisory practice in New Zealand.",
    intro:
      "Running a compliant, high-performing commercial finance advisory practice in New Zealand requires more than technical knowledge — it requires the right documentation, policies, and frameworks to operate confidently, efficiently, and legally. CAFAA's member resource library provides the tools to make that easier.",
    sections: [
      {
        heading: "What You Will Find",
        bullets: [
          "Compliance Templates: Ready-to-use disclosure statements, client engagement letters, privacy consent forms, and scope of service templates aligned with current FMA expectations and the FSLAA framework.",
          "Practice Guides: Step-by-step frameworks covering the full advisory process — from initial client engagement and needs analysis through to credit submission, lender negotiation, and settlement documentation.",
          "Regulatory Briefings: Timely summaries of regulatory changes, FMA guidance updates, and legislative developments that affect commercial finance advisers.",
          "CPD Policy: CAFAA's Continuing Professional Development Policy, setting out annual CPD expectations, eligible activities, and how CPD connects to membership renewal.",
          "Constitution: The CAFAA Constitution — the foundational governance document of the association.",
          "AGM Materials: Notices, agendas, supporting papers, and outcomes from CAFAA's Annual General Meeting.",
          "Resource Exchange: A member-contributed library of additional tools, templates, and resources.",
        ],
      },
      {
        heading: "The CAFAA Standard",
        body:
          "Every document in the resource library is vetted by CAFAA's technical committee. By using CAFAA-approved templates and frameworks, you reduce operational friction and ensure your firm remains aligned with New Zealand's highest professional and regulatory standards.",
      },
    ],
    ctas: [
      { label: "Access the Resource Exchange", href: "/resources/resource-exchange", variant: "accent" },
    ],
  },

  "/resources/constitution": {
    title: "CAFAA Constitution",
    description:
      "The foundational governance document of the Commercial and Asset Finance Advisers Association of Aotearoa.",
    intro:
      "The CAFAA Constitution is the foundational governance document of the association. It is available to all members as part of our commitment to transparent, accountable governance.",
    sections: [
      {
        heading: "What the Constitution Covers",
        bullets: [
          "Purpose and objects of the association",
          "Governance arrangements and board composition",
          "Membership framework and categories",
          "Meeting procedures, voting, and decision-making",
          "Financial management and accountability",
          "Dispute resolution and disciplinary processes",
        ],
      },
      {
        heading: "Governance Commitment",
        body:
          "The Constitution provides clarity on how CAFAA is structured, governed, and expected to operate as a member-focused professional association. CAFAA is committed to governing itself in a way that is transparent, accountable, and aligned with the interests of its members and the wider profession.",
      },
    ],
    ctas: [
      { label: "View AGM page", href: "/resources/agm" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/resources/cpd-policy": {
    title: "CAFAA CPD Policy",
    description:
      "CAFAA's Continuing Professional Development policy — setting out annual CPD expectations, eligible activities, and record-keeping requirements for members.",
    intro:
      "CAFAA's Continuing Professional Development Policy sets out the annual CPD expectations for members, the types of activities that qualify, how to record and report CPD, and how CPD connects to membership renewal. A clear CPD framework supports the profession's credibility and ensures CAFAA members remain genuinely current in their knowledge and practice.",
    sections: [
      {
        heading: "Annual CPD Expectations",
        bullets: [
          "Minimum annual CPD hours required — specific to your membership category",
          "Mix of structured learning (formal courses, webinars, workshops) and unstructured activities (reading, research, peer discussion)",
          "At least a proportion of CPD should directly address NZ regulatory and compliance topics",
          "CPD must be relevant to your area of commercial finance practice",
        ],
      },
      {
        heading: "Eligible CPD Activities",
        bullets: [
          "CAFAA education modules, webinars, and masterclasses",
          "External financial services training and qualifications",
          "Attendance at CAFAA events and industry conferences",
          "Relevant reading of regulatory guidance, industry publications, and case studies",
          "Peer discussion, mentoring, and knowledge-sharing activities",
          "Contribution to CAFAA working groups or submissions",
        ],
      },
      {
        heading: "Record Keeping & Compliance",
        body:
          "Members are expected to maintain accurate CPD records and be able to demonstrate compliance at renewal time. The CAFAA CPD Platform makes this straightforward — with automated tracking, activity logging, and annual CPD summary reports. Contact the CAFAA team if you have questions about CPD compliance.",
      },
    ],
    ctas: [
      { label: "CPD platform", href: "/education/cpd-platform" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/resources/agm": {
    title: "Annual General Meeting",
    description:
      "CAFAA's Annual General Meeting notices, agendas, and governance materials for members.",
    intro:
      "The CAFAA Annual General Meeting is a key moment in the association's governance calendar — providing members with transparency on the association's performance, direction, and leadership. All relevant AGM materials are published here for member reference.",
    sections: [
      {
        heading: "AGM Materials Published Here",
        bullets: [
          "Notice of AGM — advance notice to members including date, time, and format",
          "Agenda — the full AGM agenda including all matters for discussion and resolution",
          "Annual Report — CAFAA's annual performance report covering financials, programmes, and strategic progress",
          "Supporting papers — any additional papers relevant to AGM resolutions",
          "Outcomes and minutes — the outcomes of the AGM published post-meeting for member reference",
        ],
      },
      {
        heading: "Member Participation",
        body:
          "CAFAA members are encouraged to participate in the AGM — whether in person, online, or by proxy. The AGM is an opportunity to engage directly with the board, contribute to the association's direction, and exercise your rights as a member. Voting information and proxy forms are published with the AGM notice.",
      },
    ],
    ctas: [
      { label: "Constitution", href: "/resources/constitution" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
  },

  "/resources/resource-exchange": {
    title: "Resource Exchange",
    description:
      "A member-contributed library of practical tools, templates, and resources for the New Zealand commercial finance profession.",
    intro:
      "The CAFAA Resource Exchange is a member-contributed library of practical tools, templates, links, and references. Members can both access and contribute to this shared knowledge base — making it richer and more useful with every contribution.",
    sections: [
      {
        heading: "What You Will Find",
        bullets: [
          "Practice templates and checklists contributed by experienced members",
          "Links to useful industry references, regulatory guidance, and external tools",
          "Case study frameworks and deal structuring guides",
          "Recommended reading on commercial finance topics",
          "Member-contributed guides and how-to resources",
        ],
      },
      {
        heading: "Contributing to the Exchange",
        body:
          "CAFAA members are encouraged to contribute resources that they have found valuable in their own practice. Contributions are reviewed to ensure quality and relevance before being published. Your expertise helps the whole community — and recognition is given to member contributors.",
      },
      {
        heading: "Quality & Currency",
        body:
          "CAFAA moderates the Resource Exchange to keep it practical, current, and aligned with NZ regulatory requirements. If you notice an outdated resource or want to suggest an improvement, contact the CAFAA team.",
      },
    ],
    ctas: [
      { label: "Submit a resource", href: "/contact" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },

  "/news": {
    title: "News & Insights: Staying Ahead in New Zealand Commercial Finance",
    description:
      "CAFAA's News & Insights section keeps members and stakeholders informed on regulatory developments, market commentary, advocacy updates, and industry news.",
    intro:
      "The commercial finance landscape in New Zealand moves fast. Lender policy shifts, OCR decisions, regulatory updates, and market trends can all change the conditions your clients are operating in — sometimes within days. CAFAA's News & Insights section keeps members and stakeholders informed on what matters most.",
    sections: [
      {
        heading: "What We Cover",
        bullets: [
          "Association announcements — membership news, leadership updates, events, and CAFAA programmes",
          "Regulatory developments — FMA guidance, FSLAA updates, and their practical implications for commercial advisers",
          "Market commentary — OCR movements, business lending trends, credit availability, and lender appetite",
          "Advocacy updates — CAFAA submissions, regulatory engagement outcomes, and policy developments",
          "Education news — new courses, CPD opportunities, and professional development resources",
          "Member stories — profiles, achievements, and insights from across the CAFAA community",
        ],
      },
      {
        heading: "Stay Connected",
        body:
          "CAFAA members receive News & Insights updates directly via member communications. Ensure your email preferences are current in your member profile to receive the latest industry briefings, regulatory updates, and association news as they are published.",
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
      "Contact the CAFAA team for membership enquiries, education information, advocacy, events, or general questions — we aim to respond within two business days.",
    intro:
      "Whether you are ready to join, have a question about membership or education, want to discuss partnership or sponsorship, or need to reach our advocacy team — the CAFAA team is here to help. We aim to respond to all enquiries within two business days.",
    sections: [
      {
        heading: "How We Can Help",
        bullets: [
          "Membership Enquiries: Questions about membership categories, eligibility, fees, or the application process. We will help you find the right pathway into CAFAA.",
          "Education & CPD: Information about the CCFP designation, Diploma programme, CPD platform access, or upcoming education events.",
          "Advocacy & Policy: Contribute to a policy submission, report a regulatory concern, or share market intelligence that CAFAA should be aware of.",
          "Events & Sponsorship: Register for events, explore sponsorship and partnership opportunities, or discuss award nominations.",
          "Media Enquiries: Journalists and media organisations seeking industry commentary, data, or expert perspectives on the NZ commercial finance sector.",
          "General Enquiries: Any question not covered above — we are happy to help.",
        ],
      },
      {
        heading: "Contact Details",
        body:
          "Email: info@cafaa.co.nz | Office Hours: Monday to Friday, 9:00am – 5:00pm NZST | New Zealand",
      },
      {
        heading: "Enquiry Form",
        body:
          "Use the form below to send your enquiry. Select the enquiry type that best matches your request and we will direct your message to the right team.",
      },
    ],
    ctas: [
      { label: "Submit Enquiry", href: "/contact", variant: "accent" },
    ],
  },

  "/legal/privacy-policy": {
    title: "CAFAA Privacy Policy",
    description:
      "How CAFAA collects, uses, stores, and protects personal information in accordance with the New Zealand Privacy Act 2020.",
    intro:
      "The Commercial and Asset Finance Advisers Association of Aotearoa (CAFAA) is committed to protecting the privacy of its members, website visitors, and stakeholders. This Privacy Policy explains what personal information we collect, why we collect it, how we use and protect it, and your rights in relation to that information. This Policy is written in accordance with the New Zealand Privacy Act 2020.",
    sections: [
      {
        heading: "Information We Collect",
        bullets: [
          "Contact details — name, email address, phone number, postal address",
          "Professional information — organisation, role, membership category, FSPR registration number",
          "Financial information — payment details for membership fees",
          "Website usage data — via cookies and analytics tools",
          "Communications you send us through forms, email, or events",
        ],
      },
      {
        heading: "Why We Collect Your Information",
        bullets: [
          "To process and manage your membership",
          "To deliver education, CPD, and event services",
          "To communicate with you about CAFAA news, advocacy updates, and member services",
          "To comply with our legal obligations",
          "To improve our website and services",
          "Where you have consented, to include you in our member directory",
        ],
      },
      {
        heading: "How We Use and Store Your Information",
        body:
          "Your information is used only for the purposes described above. We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share information with service providers who assist us in delivering member services — these providers are required to handle your data in accordance with the Privacy Act 2020.",
      },
      {
        heading: "Your Rights",
        bullets: [
          "Request access to the personal information we hold about you",
          "Ask us to correct information that is inaccurate or incomplete",
          "Withdraw consent for uses you have previously authorised",
          "Make a complaint to the Privacy Commissioner if you believe we have breached the Act",
        ],
      },
      {
        heading: "Privacy Contact",
        body:
          "For privacy enquiries, please contact: Privacy Officer, CAFAA | Email: privacy@cafaa.co.nz",
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
      "Important information about the general nature of content published by CAFAA on this website.",
    intro:
      "The information published on this website by the Commercial and Asset Finance Advisers Association of Aotearoa (CAFAA) is provided for general professional development and informational purposes only. It does not constitute financial, legal, regulatory, or investment advice, and should not be relied upon as such.",
    sections: [
      {
        heading: "No Warranty",
        body:
          "While CAFAA takes care to ensure the accuracy and currency of information published on this site, we make no warranty — express or implied — regarding completeness, accuracy, or fitness for a particular purpose. The commercial finance and regulatory environment can change rapidly; readers should independently verify any information before acting on it.",
      },
      {
        heading: "Limitation of Liability",
        body:
          "CAFAA accepts no liability for any loss or damage arising from reliance on information published on this site. Users are encouraged to seek independent professional advice tailored to their specific circumstances.",
      },
      {
        heading: "Third-Party Links",
        body:
          "This website may contain links to external websites and resources. CAFAA is not responsible for the content, accuracy, or privacy practices of any third-party sites. Links are provided for convenience only and do not constitute endorsement.",
      },
    ],
    ctas: [
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      { label: "Terms and conditions", href: "/legal/terms-and-conditions", variant: "secondary" },
    ],
  },

  "/legal/terms-and-conditions": {
    title: "Terms and Conditions of Use",
    description:
      "The terms governing use of the CAFAA website, member portal, and digital services.",
    intro:
      "By accessing or using the CAFAA website (cafaa.co.nz), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.",
    sections: [
      {
        heading: "Intellectual Property",
        body:
          "All content on this website — including text, graphics, logos, images, and downloadable documents — is the intellectual property of CAFAA or its licensors. You may not reproduce, distribute, or use any content without CAFAA's prior written consent.",
      },
      {
        heading: "Member Portal and Login",
        body:
          "Access to the members area is limited to registered CAFAA members. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Report any suspected unauthorised access to the CAFAA team immediately.",
      },
      {
        heading: "Acceptable Use",
        bullets: [
          "Do not use this website for any unlawful purpose",
          "Do not submit false or misleading information through any form",
          "Do not attempt to gain unauthorised access to any part of the site",
          "Do not engage in any conduct that could damage CAFAA's reputation or operations",
        ],
      },
      {
        heading: "Links to Third-Party Sites",
        body:
          "This website may contain links to external websites. CAFAA is not responsible for the content, privacy practices, or accuracy of any third-party sites.",
      },
      {
        heading: "Changes to These Terms",
        body:
          "CAFAA may update these Terms from time to time. Continued use of the website after any changes constitutes your acceptance of the updated Terms. We will notify members of material changes through member communications.",
      },
      {
        heading: "Governing Law",
        body:
          "These Terms are governed by the laws of New Zealand. Any disputes arising from use of this website are subject to the exclusive jurisdiction of the New Zealand courts.",
      },
    ],
    ctas: [
      { label: "Privacy policy", href: "/legal/privacy-policy" },
      { label: "Contact CAFAA", href: "/contact", variant: "secondary" },
    ],
  },
};
