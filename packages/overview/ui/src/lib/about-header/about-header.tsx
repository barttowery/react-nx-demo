import { Button } from "@react-nx-demo/shared-ui";
import { ArrowRight } from "lucide-react";
import AboutSkills from "../about-skills/about-skills";

export function AboutHeader() {
  return (
    <section className="flex flex-col py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 2xl:max-w-350">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-foreground-text text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] xl:text-5xl xl:tracking-tighter">
              Bart Towery, Frontend Architect.
            </h1>
            <p className="text-muted-foreground mt-5 text-base text-pretty sm:text-lg">Creating scalable UI systems, design systems and resilient web architectures.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button size='lg' asChild>
                <a href="https://github.com/barttowery/react-nx-demo" target="_blank" rel="noreferrer">
                  View GitHub <ArrowRight />
                </a>
              </Button>
              <Button size='lg' variant='outline' asChild>
                <a href="https://www.linkedin.com/in/bart-towery-52287b/" target="_blank" rel="noreferrer">
                  View LinkedIn <ArrowRight />
                </a>
              </Button>
              {/* <div class="border-border/60 rounded-2xl border p-6 md:p-8"><ol class="border-border/60 border-l"><li class="relative pb-8 pl-6 last:pb-0"><span aria-hidden="true" class="absolute top-1 -left-1 size-2 rounded-full bg-primary"></span><p class="text-muted-foreground text-xs tabular-nums">Since 2024</p><p class="mt-1 text-sm font-medium text-foreground">Independent practice</p><p class="text-muted-foreground mt-0.5 text-sm text-pretty">Working directly with founding teams from Lisbon</p></li><li class="relative pb-8 pl-6 last:pb-0"><span aria-hidden="true" class="absolute top-1 -left-1 size-2 rounded-full bg-border"></span><p class="text-muted-foreground text-xs tabular-nums">2021 to 2024</p><p class="mt-1 text-sm font-medium text-foreground/80">Design lead, Northbeam</p><p class="text-muted-foreground mt-0.5 text-sm text-pretty">Grew the product design team from two to nine</p></li><li class="relative pb-8 pl-6 last:pb-0"><span aria-hidden="true" class="absolute top-1 -left-1 size-2 rounded-full bg-border"></span><p class="text-muted-foreground text-xs tabular-nums">2018 to 2021</p><p class="mt-1 text-sm font-medium text-foreground/80">Senior designer, Helio</p><p class="text-muted-foreground mt-0.5 text-sm text-pretty">Owned the analytics and reporting surface</p></li><li class="relative pb-8 pl-6 last:pb-0"><span aria-hidden="true" class="absolute top-1 -left-1 size-2 rounded-full bg-border"></span><p class="text-muted-foreground text-xs tabular-nums">2015 to 2018</p><p class="mt-1 text-sm font-medium text-foreground/80">Designer, Studio Marta</p><p class="text-muted-foreground mt-0.5 text-sm text-pretty">Brand and interface work across early clients</p></li></ol> */}
            </div>
          </div>
          <div className="border-border/60 rounded-2xl border p-6 md:p-8">
            <AboutSkills />
          </div>          
        </div>
      </div>
    </section>
  );
}

export default AboutHeader;
