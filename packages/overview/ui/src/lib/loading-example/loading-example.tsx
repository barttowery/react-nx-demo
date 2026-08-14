import { Card, CardContent, Skeleton } from '@react-nx-demo/shared-ui';

export function LoadingExample() {
  return (
    <Card className='max-w-100'>
      <CardContent className='flex flex-col gap-4'>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-62.5" />
            <Skeleton className="h-4 w-50" />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-3 w-full' />
          <Skeleton className='h-3 w-full' />
          <Skeleton className='h-3 w-4/5' />
        </div>
        <div className='flex gap-2'>
          <Skeleton className='h-8 w-20' />
          <Skeleton className='h-8 w-20' />
        </div>
      </CardContent>
    </Card>
  );
}

export default LoadingExample;
