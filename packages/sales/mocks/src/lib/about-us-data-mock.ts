import { AboutUsItem } from "@react-nx-demo/sales-models";
import { Target, WandSparkles, Zap } from "lucide-react";

export const aboutusDataMock: AboutUsItem[] = [
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
