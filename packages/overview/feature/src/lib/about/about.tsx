import { About as AboutComponent } from '@react-nx-demo/overview-ui';

export function About() {
  return (
    <div className='flex flex-1 min-h-0 overflow-y-auto flex-col'>
      <div className='mx-auto w-full max-w-350 min-[1800px]:max-w-384'>
        <AboutComponent />
      </div>
    </div>
  );
}

export default About;
