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
  CardFooter,
  Button,
} from '@react-nx-demo/shared-ui';

export function ShippingAddress() {
  return (
    <Card className='max-w-100'>
      <CardHeader>
        <CardTitle>Shipping Address</CardTitle>
        <CardDescription>Where should we deliver?</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor='streetAddress'>Street Address</FieldLabel>
            <Input id="streetAddress" placeholder="123 Main Street" type="text" />
          </Field>
          <Field>
            <FieldLabel htmlFor='apt'>Apt / Suite</FieldLabel>
            <Input id="apt" placeholder="Apt 4B" type="text" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor='city'>City</FieldLabel>
              <Input id="city" placeholder="Raleigh" type="text" />
            </Field>
            <Field>
              <FieldLabel htmlFor='state'>State</FieldLabel>
              <Select>
                <SelectTrigger aria-label='Select a State'>
                  <SelectValue id='state' placeholder='Choose a state' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='AL'>Alabama</SelectItem>
                  <SelectItem value='AK'>Alaska</SelectItem>
                  <SelectItem value='AZ'>Arizona</SelectItem>
                  <SelectItem value='AR'>Arkansas</SelectItem>
                  <SelectItem value='CA'>California</SelectItem>
                  <SelectItem value='CO'>Colorado</SelectItem>
                  <SelectItem value='CT'>Connecticut</SelectItem>
                  <SelectItem value='DE'>Delaware</SelectItem>
                  <SelectItem value='FL'>Florida</SelectItem>
                  <SelectItem value='GA'>Georgia</SelectItem>
                  <SelectItem value='HI'>Hawaii</SelectItem>
                  <SelectItem value='ID'>Idaho</SelectItem>
                  <SelectItem value='IL'>Illinois</SelectItem>
                  <SelectItem value='IN'>Indiana</SelectItem>
                  <SelectItem value='IA'>Iowa</SelectItem>
                  <SelectItem value='KS'>Kansas</SelectItem>
                  <SelectItem value='KY'>Kentucky</SelectItem>
                  <SelectItem value='LA'>Louisiana</SelectItem>
                  <SelectItem value='ME'>Maine</SelectItem>
                  <SelectItem value='MD'>Maryland</SelectItem>
                  <SelectItem value='MA'>Massachusetts</SelectItem>
                  <SelectItem value='MI'>Michigan</SelectItem>
                  <SelectItem value='MN'>Minnesota</SelectItem>
                  <SelectItem value='MS'>Mississippi</SelectItem>
                  <SelectItem value='MO'>Missouri</SelectItem>
                  <SelectItem value='MT'>Montana</SelectItem>
                  <SelectItem value='NE'>Nebraska</SelectItem>
                  <SelectItem value='NV'>Nevada</SelectItem>
                  <SelectItem value='NH'>New Hampshire</SelectItem>
                  <SelectItem value='NJ'>New Jersey</SelectItem>
                  <SelectItem value='NM'>New Mexico</SelectItem>
                  <SelectItem value='NY'>New York</SelectItem>
                  <SelectItem value='NC'>North Carolina</SelectItem>
                  <SelectItem value='ND'>North Dakota</SelectItem>
                  <SelectItem value='OH'>Ohio</SelectItem>
                  <SelectItem value='OK'>Oklahoma</SelectItem>
                  <SelectItem value='OR'>Oregon</SelectItem>
                  <SelectItem value='PA'>Pennsylvania</SelectItem>
                  <SelectItem value='RI'>Rhode Island</SelectItem>
                  <SelectItem value='SC'>South Carolina</SelectItem>
                  <SelectItem value='SD'>South Dakota</SelectItem>
                  <SelectItem value='TN'>Tennessee</SelectItem>
                  <SelectItem value='TX'>Texas</SelectItem>
                  <SelectItem value='UT'>Utah</SelectItem>
                  <SelectItem value='VT'>Vermont</SelectItem>
                  <SelectItem value='VA'>Virginia</SelectItem>
                  <SelectItem value='WA'>Washington</SelectItem>
                  <SelectItem value='WV'>West Virginia</SelectItem>
                  <SelectItem value='WI'>Wisconsin</SelectItem>
                  <SelectItem value='WY'>Wyoming</SelectItem>
                  <SelectItem value='DC'>District of Columbia</SelectItem>
                  <SelectItem value='AS'>American Samoa</SelectItem>
                  <SelectItem value='GU'>Guam</SelectItem>
                  <SelectItem value='MP'>Northern Mariana Islands</SelectItem>
                  <SelectItem value='PR'>Puerto Rico</SelectItem>
                  <SelectItem value='VI'>Virgin Islands</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor='zip'>ZIP Code</FieldLabel>
              <Input id="zip" placeholder="12345" type="text" />
            </Field>
            <Field>
              <FieldLabel htmlFor='state'>State</FieldLabel>
              <Select defaultValue='USA'>
                <SelectTrigger aria-label='Select a Country'>
                  <SelectValue id='country' placeholder='Choose a country' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='USA'>United States</SelectItem>
                  <SelectItem value='Canada'>Canada</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field orientation="horizontal">
            <Checkbox
              defaultChecked
              id="save-as-default"
            />
            <FieldContent>
              <FieldLabel htmlFor="save-as-default">
                Save as Default Address
              </FieldLabel>
            </FieldContent>
          </Field>
        </FieldSet>
        <div className='flex mt-4 items-center justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button>Save Address</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ShippingAddress;
