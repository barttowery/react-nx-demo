import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Field,
  Button,
  FieldGroup,
  Label,
  ToggleGroup,
  ToggleGroupItem,
  Alert,
  AlertTitle,
  AlertDescription,
  CardFooter,
} from '@react-nx-demo/shared-ui';

export function AppointmentDemo() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const formattedTomorrowDate: string = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Card className='max-w-100'>
      <CardHeader>
        <CardTitle>Book Appointment</CardTitle>
        <CardDescription>Dr. Les Plack - Dentist</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <FieldGroup>
          <Field>
            <Label>Available on {formattedTomorrowDate}</Label>
            <ToggleGroup variant='outline' type='single'>
              <ToggleGroupItem value="9:00 AM" aria-label="9:00 AM">
                9:00 AM
              </ToggleGroupItem>
              <ToggleGroupItem value="10:30 AM" aria-label="10:30 AM">
                10:30 AM
              </ToggleGroupItem>
              <ToggleGroupItem value="1:00 PM" aria-label="1:00 PM">
                1:00 PM
              </ToggleGroupItem>
              <ToggleGroupItem value="2:30 PM" aria-label="2:30 PM">
                2:30 PM
              </ToggleGroupItem>
            </ToggleGroup>
          </Field>
        </FieldGroup>
        <Alert>
          <AlertTitle>New Patient?</AlertTitle>
          <AlertDescription>Please arrive 15 minutes early.</AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AppointmentDemo;
