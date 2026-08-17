import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  FieldSet,
  Field,
  FieldLabel,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Checkbox,
  FieldContent,
  Button,
  ItemGroup,
  Item,
  ItemDescription,
  ItemFooter,
  Progress,
  ItemContent,
  ItemHeader,
} from '@react-nx-demo/shared-ui';
export function SavingsTargetDemo() {
  return (
    <Card className='max-w-100'>
      <CardHeader>
        <CardTitle>Savings Targets</CardTitle>
        <CardDescription>Active Milestones for 2026</CardDescription>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          <Item variant='muted'>
            <ItemHeader>
              <ItemDescription className='line-clamp-2 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary cn-font-heading text-xs font-medium tracking-wider text-muted-foreground uppercase'>Retirement</ItemDescription>
            </ItemHeader>
            <ItemContent>
              <span className="text-3xl font-semibold tabular-nums">$420,000</span>
              <Progress value={65} className='w-full' />
            </ItemContent>
            <ItemFooter className='flex basis-full items-center justify-between'>
              <span className="text-sm text-muted-foreground">65% achieved</span>
              <span className="text-sm font-medium tabular-nums">$273,000</span>
            </ItemFooter>
          </Item>
          <Item variant='muted'>
            <ItemHeader>
              <ItemDescription className='line-clamp-2 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary cn-font-heading text-xs font-medium tracking-wider text-muted-foreground uppercase'>Real Estate</ItemDescription>
            </ItemHeader>
            <ItemContent>
              <span className="text-3xl font-semibold tabular-nums">$85,000</span>
              <Progress value={32} className='w-full' />
            </ItemContent>
            <ItemFooter className='flex basis-full items-center justify-between'>
              <span className="text-sm text-muted-foreground">32% achieved</span>
              <span className="text-sm font-medium tabular-nums">$27,200</span>
            </ItemFooter>
          </Item>
        </ItemGroup>
      </CardContent>
    </Card>
  );
}

export default SavingsTargetDemo;
