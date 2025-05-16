import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  news1,
  news2,
  news3,
  news4,
  events1,
  events2,
  events3,
  pastevents1,
  pastevents2,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Events",
    url: "/events",
  },
  {
    id: "3",
    title: "News",
    url: "/news",
  },
  {
    id: "4",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "5",
    title: "Contact",
    url: "/contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo1, logo2, logo3, logo4, logo5];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Conversational Voice AI",
    text: "Implement advanced speech recognition and natural voice synthesis to enable seamless, human-like voice interactions for customer service and virtual assistants.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "AI-Powered Gamification Engine",
    text: "Develop a dynamic reward system using behavioural AI to boost user engagement through personalised challenges, achievement badges and adaptive leaderboards.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Context-Aware Chatbot",
    text: "Enhance chatbot intelligence with deep learning to deliver hyper-personalised responses, mood adaptation and industry-specific conversational flows.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Smart API Orchestration",
    text: "Deploy AI-driven API integration to automate real-time data aggregation from multiple sources (CRM, ERP, IoT) with self-healing error handling.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const fundamentals = [
  {
    id: "0",
    title: "Clarity",
    description: "We believe true innovation begins with understanding.",
    features: [
      "We communicate openly and design with purpose.",
      "Design choices always put real people first.",
      "We simplify complex ideas without losing depth.",
    ],
  },
  {
    id: "1",
    title: "Ingenuity",
    description: "Creativity drives everything we do.",
    features: [
      "We solve problems with bold, curious thinking.",
      "Every solution is adaptive and built for change.",
      "We test fast, learn fast and improve constantly.",
    ],
  },
  {
    id: "2",
    title: "Trust",
    description: "Relationships are the foundation of impact.",
    features: [
      "We deliver consistently and communicate honestly.",
      "We innovate responsibly, with ethics in mind.",
      "We build lasting solutions, not just quick wins.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Who We Are",
    text: "DeepGlow is a forward-thinking startup crafting bespoke solutions for businesses and individuals. We blend technology, design, and strategy to solve real-world challenges with a human touch.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Our Mission",
    text: "We exist to unlock potential! Turning ideas into impactful tools that accelerate growth, spark creativity, and simplify complexity for those we serve.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Our Vision",
    text: "We envision a world where intelligent systems and intuitive design enhance every aspect of life and work: accessible, scalable and beautifully effective.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "How We Work",
    text: "We thrive on collaboration, rapid prototyping and continuous learning. Our team of engineers, designers and dreamers bring fresh energy to every project, big or small.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Who We Help",
    text: "Whether you're launching your first product or transforming legacy systems, DeepGlow delivers adaptive, high-impact solutions that evolve with your needs.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "The DeepGlow Difference",
    text: "We don’t just build tech, we build trust. DeepGlow bridges the gap between innovation and empathy, ensuring every solution feels as good as it functions.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const hackathonImageList = [
  {
    image:
      "https://i.pinimg.com/736x/b6/a6/f0/b6a6f0a026658fb980c59e222d227b3c.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/1a/38/55/1a385583cf67a1db4740c66388f1120c.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/07/24/08/0724084c00c27f93d3b705282edf2179.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/1e/39/f7/1e39f7d230b0ea5b7a88c455c0da7b7a.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/bc/71/26/bc7126353be75818bdd56b08c17ffe30.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/76/06/93/7606938a9fa0951f5d79760c04875762.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/79/56/dc/7956dccbb5aadfaf13927b3152304b32.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/4f/e0/78/4fe07880dcff0a5c81cc65a42bf8648e.jpg",
  },
];

export const ethicsImageList = [
  {
    image:
      "https://i.pinimg.com/736x/85/e3/82/85e382fad6ef73d846531d839d13c1c1.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/3e/55/9e/3e559ed1b0d99894cd8ee29735d3a977.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/30/9e/ce/309ece5502468318ad588490fcb4cb80.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/55/91/43/559143baa5b999af02854f44273c399b.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/a0/fd/56/a0fd5659d258d753356346cb11807917.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/f0/5b/a6/f05ba64a9e6b5dde41e5da8114c31537.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/e7/bb/0d/e7bb0d42b88868be8eabbb07f5e9c8fb.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/f8/c5/b8/f8c5b8333d2ee8a3c994511984230838.jpg",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://telegram.org/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/",
  },
];

export const news = [
  {
    id: "1",
    title: "The Advantages of Implementing AI in Your Business",
    subtitle:
      "How artificial intelligence is reshaping efficiency and innovation.",
    date: "May 10, 2025",
    imageUrl: news1,
    content: `
Artificial intelligence is no longer a futuristic concept, it’s a practical tool being used by businesses across every industry.  From automating routine tasks to providing data-driven insights, AI helps reduce operational costs while increasing productivity.

Companies that integrate AI into their workflows often experience faster decision-making, enhanced customer experiences and improved resource allocation. Moreover, with machine learning models constantly evolving, AI can adapt to changing market trends, offering a competitive advantage to forward-thinking organisations.

Whether you're a small business or a large enterprise, embracing AI isn't just beneficial, it’s essential for sustainable growth.
    `,
  },
  {
    id: "2",
    title: "AI and the Law: Navigating Emerging Regulations",
    subtitle: "What businesses need to know about AI compliance.",
    date: "May 7, 2025",
    imageUrl: news2,
    content: `
As artificial intelligence continues to expand, governments and regulatory bodies are stepping in to ensure ethical and responsible use.

New legislation such as the EU AI Act is setting the precedent for how AI systems should be designed, implemented and governed. This includes requirements around transparency, data privacy and bias mitigation: all crucial for maintaining public trust.

Businesses must stay informed and proactively adapt their systems to remain compliant. Failing to do so could result in hefty fines or reputational damage. Working with legal experts and data ethics professionals can ensure that your AI initiatives are both innovative and lawful.
    `,
  },
  {
    id: "3",
    title: "AI as the Future of Cybersecurity",
    subtitle:
      "Why artificial intelligence is becoming essential in digital defence.",
    date: "May 3, 2025",
    imageUrl: news3,
    content: `
Cyber threats are evolving at a pace that traditional security methods can no longer keep up with. That’s where AI steps in.

By using real-time data analysis and anomaly detection, AI-powered systems can identify potential breaches before they escalate. These systems continuously learn from new threats, making them more adaptive and responsive than conventional tools.

Incorporating AI into your cybersecurity strategy means not only detecting threats faster, but also reducing response times and automating preventive measures. In today’s digital landscape, AI is not a luxury — it’s a necessity for robust, proactive security.
    `,
  },
  {
    id: "4",
    title: "What’s New in AI and Robotics for 2025",
    subtitle: "A look at the latest trends driving innovation.",
    date: "April 28, 2025",
    imageUrl: news4,
    content: `
The intersection of artificial intelligence and robotics continues to push the boundaries of what's possible.

From autonomous delivery robots to AI-driven personal assistants, the integration of smart systems into physical machines is evolutionising industries like manufacturing, healthcare and logistics. In 2025, we’re seeing a rise in collaborative robots (“cobots”) that work safely alongside humans, boosting productivity without replacing jobs.

The year also brings advancements in AI models for robotic vision, tactile sensing and real-time decision-making, making machines more aware and adaptable than ever before. The future of robotics is intelligent, responsive and deeply intertwined with AI progress.
    `,
  },
];

export const current_events = [
  {
    id: "1",
    title: "AI Businesses Analytics Revolution",
    subtitle:
      "Advanced AI-driven analytics tools are transforming decision-making across industries.",
    date: "June 14, 2025",
    imageUrl: events1,
    content: `
Artificial intelligence is now at the forefront of data analytics, enabling companies to process vast amounts of information in real time. With machine learning algorithms, businesses can predict trends, optimise operations, and personalise customer experiences like never before.  

Leading firms are leveraging AI-powered dashboards that highlight key metrics and automate reports, saving countless hours of manual analysis. As these tools become more accessible, even small enterprises are adopting them to stay competitive. The future of analytics is intelligent, immediate, and indispensable.
    `,
  },
  {
    id: "2",
    title: "Investment Boom in AI: Mobile-First Solutions",
    subtitle:
      "Venture capital floods into AI startups focusing on mobile integration.",
    date: "July 12, 2025",
    imageUrl: events2,
    content: `
The AI investment landscape is witnessing a surge, particularly in mobile-centric applications. From voice assistants to on-device machine learning, investors are betting big on technologies that merge AI with smartphones and tablets.  

Mobile AI offers unparalleled convenience, such as offline processing for privacy-conscious users and real-time language translation for travellers. Analysts predict that by 2026, over 60% of AI interactions will occur via mobile devices. For businesses, this shift underscores the need to prioritise mobile-friendly AI solutions to capture growing markets.
    `,
  },
  {
    id: "3",
    title: "The Rise of AI-Powered Web Search",
    subtitle:
      "New generative AI models are redefining how we find information online.",
    date: "August 9, 2025",
    imageUrl: events3,
    content: `
Traditional keyword-based web searches are becoming obsolete as AI-driven platforms deliver precise, context-rich answers. Tools like AI summarisers and semantic search engines understand intent, reducing the need to sift through pages of results.  

These systems also learn from user behaviour, offering tailored recommendations and even anticipating queries before they’re typed. Critics warn of potential biases in training data, but proponents argue the benefits—speed, accuracy and natural-language understanding—far outweigh the risks. The web is entering an era where finding information feels like conversing with an expert.
    `,
  },
];

export const past_events = [
  {
    id: "4",
    title: "12-Hour Sustainability Hackathon",
    subtitle:
      "Developers and designers collaborate on green solutions under tight deadlines.",
    date: "May 09, 2025",
    imageUrl: pastevents1,
    content: `
Last month’s 12-Hour Sustainability Hackathon brought together over 200 participants to brainstorm tech-driven answers to environmental crises. Teams focused on projects like AI-powered energy audits, blockchain for carbon tracking and apps to reduce food waste.  

The winning entry, "EcoRoute," used machine learning to optimise delivery logistics, cutting fuel consumption by up to 30%. Events like this highlight how technology, when directed toward sustainability, can deliver tangible impact—fast.
  `,
  },
  {
    id: "5",
    title: "AI Ethics & Responsibility Roundtable",
    subtitle:
      "Industry leaders debate the moral implications of AI advancements.",
    date: "February 15, 2025",
    imageUrl: pastevents2,
    content: `
At February’s AI Ethics Roundtable, academics, policymakers and tech executives clashed over how to govern rapidly evolving AI systems. Key topics included algorithmic bias, deepfake regulation, and the ethical use of autonomous weapons.  

A consensus emerged on the need for transparent AI development frameworks, though enforcement remains contentious. The event concluded with a pledge from major firms to audit their AI systems annually—a small but critical step toward responsible innovation.
  `,
  },
];
