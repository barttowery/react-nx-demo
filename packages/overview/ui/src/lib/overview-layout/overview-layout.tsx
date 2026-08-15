import ChatDemo from "../chat-demo/chat-demo";
import Colors from "../colors/colors";
import LoadingExample from "../loading-example/loading-example";
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
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
        <Colors />
      </div>
    </div>
  );
}

export default OverviewLayout;
