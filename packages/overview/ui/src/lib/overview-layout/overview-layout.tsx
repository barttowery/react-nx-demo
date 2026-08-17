import AppointmentDemo from "../appointment-demo/appointment-demo";
import BarChartDemo from "../bar-chart-demo/bar-chart-demo";
import ChatDemo from "../chat-demo/chat-demo";
import Colors from "../colors/colors";
import DonutDemo from "../donut-demo/donut-demo";
import LoadingExample from "../loading-example/loading-example";
import PieChartDemo from "../pie-chart-demo/pie-chart-demo";
import SavingsTargetDemo from "../savings-target-demo/savings-target-demo";
import ShippingAddress from "../shipping-address/shipping-address";

export function OverviewLayout() {
  return (
    <div className="flex flex-col grow p-8">
      <p className="text-muted-foreground text-lg mb-8">
        The following are example components to give a feel for the design of the site.
      </p>
      <div className="flex flex-col flex-wrap h-250 gap-8">
        <Colors />
        <ShippingAddress />
        <LoadingExample />
        <ChatDemo />
        <AppointmentDemo />
        <SavingsTargetDemo />
        <PieChartDemo />
        <DonutDemo />
        <BarChartDemo />
      </div>
    </div>
  );
}

export default OverviewLayout;
