import { Card, CardContent } from '@react-nx-demo/shared-ui';

export function Colors() {
  return (
    <Card className='max-w-100'>
      <CardContent className='flex flex-col gap-1'>
        <div className='text-xl text-card-foreground'>Color Tokens</div>
        <div className='text-base text-muted-foreground'>
          The following color tokens are used.
        </div>
        <div className='grid grid-cols-6 gap-3'>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-background after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--background</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-foreground after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--foreground</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-primary after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--primary</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-secondary after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--secondary</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-muted after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--muted</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-accent after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--accent</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-border after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--border</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-chart-1 after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--chart-1</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-chart-2 after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--chart-2</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-chart-3 after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--chart-3</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-chart-4 after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--chart-4</div>
          </div>
          <div className='flex flex-col flex-wrap items-center gap-2'>
            <div className='relative max-w-14 aspect-square w-full rounded-lg bg-chart-5 after:absolute after:inset-0 after:rounded-lg after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten style-sera:rounded-none style-sera:after:rounded-none'></div>
            <div className="max-w-14 truncate font-mono text-[0.60rem] md:block style-lyra:max-w-10 style-mira:max-w-10">--chart-5</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Colors;
