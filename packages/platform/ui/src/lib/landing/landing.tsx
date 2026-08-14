export function Landing() {
  return (
    <div className='flex flex-1 min-h-0 overflow-y-auto flex-col bg-background'>
      <div className='mx-auto h-full w-full max-w-350 min-[1800px]:max-w-384'>
        <div className="flex h-full w-full max-w-350 flex-col min-[1800px]:max-w-384">
          <section className="relative space-y-8 py-8 sm:space-y-16 sm:py-16 lg:py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 px-4 text-center sm:px-6 lg:px-8">
              <h1 className="z-10 max-w-5xl text-foreground text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-[1.29167]">
                React Demo using Nx
              </h1>
              <p className="text-muted-foreground z-10 max-w-212 text-lg">
                Scaffolded and architected with <span className="text-foreground font-medium">Nx</span>.
                Styled with <span className="text-foreground font-medium">Tailwind</span>.
                Using a shared component library which includes some components based on <span className="text-foreground font-medium">Shadcn</span>.
              </p>
              <p className="text-muted-foreground z-10 max-w-212 text-lg">
                Created by <span className="text-foreground font-medium">Bart Towery</span>.
                View on <span className="text-foreground font-medium"><a href="https://www.linkedin.com/in/bart-towery-52287b/" target="_blank" rel="noreferrer">LinkedIn</a></span>.
                See solution code on <span className="text-foreground font-medium"><a href="https://github.com/barttowery/react-nx-demo" target="_blank" rel="noreferrer">GitHub</a></span>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Landing;
