import { OverviewLayout } from '@react-nx-demo/overview-ui';

export function OverviewHome() {
  return (
    <div className='flex flex-1 min-h-0 overflow-y-auto flex-col bg-muted'>
      <div className='mx-auto min-h-full w-full max-w-350 min-[1800px]:max-w-384'>
        <OverviewLayout />
      </div>
    </div>
  );
}

export default OverviewHome;
