import {
  AboutUsItem,
  AvatarList,
  BrandList,
  FaqQuestion,
  Features,
  FooterData,
  PricingPlan,
  StatisticsCounter,
} from "@react-nx-demo/sales-models";
import {
  ArrowDownUp,
  BellRing,
  RotateCw,
  Tag,
  Target,
  WandSparkles,
  Zap
} from "lucide-react";

export const aboutusData: AboutUsItem[] = [
    {
      icon: WandSparkles,
      title: "Creativity",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      color: "bg-teal-400/10 text-teal-400" 
    },
    {
      icon: Target,
      title: "Strategy",
      color: "bg-orange-400/10 text-orange-400" 
    }
];

export const avatarList: AvatarList[] = [
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg",
  },
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
  },
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg",
  },
  {
    image: "https://images.shadcnspace.com/assets/profiles/user-5.jpg",
  },
];

export const brandList: BrandList[] = [
  {
    image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg",
    lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg",
    name: "Brand 1",
  },
  {
    image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
    lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-2.svg",
    name: "Brand 2",
  },
  {
    image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg",
    lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-3.svg",
    name: "Brand 3",
  },
  {
    image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
    lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg",
    name: "Brand 4",
  },
  {
    image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg",
    lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-5.svg",
    name: "Brand 5",
  },
];

export const faqData: FaqQuestion[] = [
  {
    question: "What services does Bart's Byte Builders offer?",
    answer:
      "We offer a wide range of services including web development, web architecture, and design services.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The time it takes to complete a project depends on the complexity of the project and the scope of the work.",
  },
  {
    question: "How is pricing structured at Bart's Byte Builders?",
    answer:
      "Pricing is based on the complexity of the project and the scope of the work.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Absolutely! We offer comprehensive post-launch support to ensure a seamless implementation and provide ongoing maintenance packages tailored to clients who need regular updates or technical assistance. Our commitment doesn't end at launch — we're here to help you every step of the way.",
  },
  {
    question: "How often will I receive updates on my project?",
    answer:
      "We provide updates on a regular basis to ensure that your project is running smoothly and that you are aware of any changes or updates to the project.",
  },
];

export const featureData: Features = [
  {
    icon: ArrowDownUp,
    content: "Instantly sync and update your documentation across teams without manual rework.",
  },
  {
    icon: BellRing,
    content: "Get real-time alerts when docs are updated, reviewed, or need your attention.",
  },
  {
    icon: RotateCw,
    content: "Automatically keep your documentation up to date with seamless content refreshes.",
  },
  {
    icon: Tag,
    content: "Organize your docs with smart tags for faster search and better discoverability.",
  },
];

export const footerData: FooterData[] = [
  {
    title: "Sitemap",
    links: [
      {
        title: "Contact us",
        href: "#",
      },
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Work",
        href: "#",
      },
      {
        title: "Services",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
    ],
  },
  {
    title: "Other Pages",
    links: [
      {
        title: "Error 404",
        href: "#",
      },
      {
        title: "Terms & Conditions",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const pricingData: PricingPlan[] = [
  {
    backgroundColor: "bg-blue-500/10",
    name: "Starter",
    description: "For companies who need design support. One request at a time",
    price: 2500,
    features: [
      "Design Updates",
      "Mid-level Designer",
      "SEO Optimization",
      "Monthly Analytics",
      "2x Calls Per Month",
      "License free Assets",
    ],
  },
  {
    backgroundColor: "bg-teal-400/20",
    name: "Pro",
    description: "2x the speed. Great for an MVP, Web App or complex problem",
    price: 3800,
    features: [
      "Everything on Starter",
      "Developer Updates",
      "Digital Marketing",
      "Weekly Analytics",
      "8x Calls Per Month",
      "Premium Assets",
    ],
  },
];

export const statisticsCounter: StatisticsCounter[] = [
  {
    title: "Total Projects Completed",
    count: 40
  },
  {
    title: "Years of Experience",
    count: 15
  },
  {
    title: "Design Awards",
    count: 12
  },
];
