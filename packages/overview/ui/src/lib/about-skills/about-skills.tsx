export function AboutSkills() {
  return (
    <>
      <h2 className="text-foreground-text text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] xl:text-4xl xl:tracking-tighter">Skills</h2>
      <p className="text-muted-foreground mt-4 text-base text-pretty sm:text-lg">Tools and skills I know well. Significant, recent experience with these items.</p>
      <div className="mt-8 flex flex-col gap-6">
        <div>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Frameworks/Languages</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">React</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Angular</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">TypeScript</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">JavaScript</span>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Frontend Tools</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Nx</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Tailwind</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">StorybookJs</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Shadcn</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Radix</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">React Flow</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">AG Grid</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Vitest</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Jest</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Cypress</span>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Architecture Approaches</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Atomic Design</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Component Driven Design</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Design Systems</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">AI Code Generation</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Unit Testing</span>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Other Skills</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Agile Development</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Mentoring Junior Developers</span>
            <span className="bg-muted text-foreground rounded-md px-2.5 py-1 text-sm font-medium">Presenting on Development Best Practices</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSkills;
