import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';
import { Label } from '../label/label';

/** Checkbox - A control that allows the user to toggle between checked and not checked. */
const meta = {
  component: Checkbox,
  title: 'Components/Checkbox',
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof Checkbox>;

/** Default story - Displays a default checkbox */
export const Primary: Story = {
  tags: ['!test'],
  args: {
    'aria-label': 'checkbox',
  },
};

/** Disabled checkbox - Displays a disabled checkbox */
export const Disabled: Story = {
  tags: ['!test'],
  args: {
    'aria-label': 'checkbox',
    disabled: true,
  },
};

/** Disabled Checked checkbox - Displays a disabled checked checkbox */
export const DisabledChecked: Story = {
  tags: ['!test'],
  args: {
    checked: true,
    disabled: true,
    'aria-label': 'checkbox',
  },
};

/** Indeterminate checkbox - Displays a checkbox in an indeterminate state */
export const Indeterminate: Story = {
  tags: ['!test'],
  args: {
    checked: 'indeterminate',
    'aria-label': 'checkbox',
  },
};

/** Invalid checkbox - Displays a checkbox in an invalid state */
export const Invalid: Story = {
  tags: ['!test'],
  args: {
    'aria-invalid': true,
    'aria-label': 'checkbox',
  },
};

/** Checkbox with Label - Displays a checkbox with a label */
export const WithLabel: Story = {
  tags: ['!test'],
  args: {
    'aria-label': 'checkbox',
  },
  render: (args) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox {...args} />
        <Label className="text-xsm" htmlFor="checkbox">
          Label for Checkbox
        </Label>
      </div>
    );
  },
};

/** Group of Checkboxes - Displays a group of checkboxes with labels */
export const GroupOfCheckboxes: Story = {
  tags: ['!test'],
  render: (args) => {
    return (
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center space-x-2">
          <Checkbox name="checkbox1" {...args} />
          <Label htmlFor="checkbox1" className="text-xsm leading-3">Label for Checkbox</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="checkbox2" {...args} />
          <Label htmlFor="checkbox2" className="text-xsm leading-3">Label for Checkbox</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="checkbox3" {...args} />
          <Label htmlFor="checkbox3" className="text-xsm leading-3">Label for Checkbox</Label>
        </div>
      </div>
    );
  },
};

// export const InForm: Story = {
//   tags: ['!test'],
//   render: (args) => {
//     const formSchema = z.object({
//       checkboxValue1: z.boolean().default(false).optional(),
//       checkboxValue2: z.boolean(),
//     });

//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const form = useForm<z.infer<typeof formSchema>>({
//       resolver: zodResolver(formSchema),
//       defaultValues: {
//         checkboxValue2: true,
//       },
//     });

//     function onSubmit(values: z.infer<typeof formSchema>) {
//       console.log(values);
//     }

//     return (
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <FormField
//             control={form.control}
//             name="checkboxValue1"
//             render={({ field }) => (
//               <FormItem>
//                 <div className="flex items-center space-x-2">
//                   <FormControl className="mt-0">
//                     <Checkbox
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                   <FormLabel className="mb-0 text-sm">
//                     Label for Checkbox 1
//                   </FormLabel>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="checkboxValue2"
//             render={({ field }) => (
//               <FormItem>
//                 <div className="flex items-center space-x-2">
//                   <FormControl className="mt-0">
//                     <Checkbox
//                       checked={field.value}
//                       onCheckedChange={field.onChange}
//                     />
//                   </FormControl>
//                   <FormLabel className="mb-0 text-sm">
//                     Label for Checkbox 2
//                   </FormLabel>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     );
//   },
// };
