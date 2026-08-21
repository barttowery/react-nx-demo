import { PricingPlan } from "@react-nx-demo/sales-models";

export const pricingDataMock: PricingPlan[] = [
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
