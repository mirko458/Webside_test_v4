const fs = require('fs');
let content = fs.readFileSync('src/components/sections/hero.tsx', 'utf8');

const replacement = `<div className="container relative z-10 mx-auto max-w-5xl text-center">   
        {/* Adjusted Badge */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
              {content.badge}
            </span>
          </div>
        </Reveal>
        
        {/* Optimized Title */}
        <Reveal delay={0.2}>
          <h1 className="mx-auto text-balance text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl drop-shadow-sm">
            {content.title}
          </h1>
        </Reveal>
        
        {/* Subtitle */}
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg sm:text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200">
            {content.subtitle}
          </p>
        </Reveal>

        {/* Motto */}
        <Reveal delay={0.4}>
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-xl sm:text-2xl font-light italic leading-relaxed text-slate-900 dark:text-sky-100">
              {content.motto}
            </p>
            <div className="mt-8 h-[2px] w-24 mx-auto bg-primary/30 rounded-full" />
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/30 rounded-full">
                {content.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg rounded-full">
                {content.secondaryCta}
              </Button>
            </a>
          </div>
        </Reveal>
      </div>`;

const startIdx = content.indexOf('<div className="container relative z-10 mx-auto max-w-4xl text-center">');
const endIdx = content.indexOf('</section>');

if (startIdx !== -1 && endIdx !== -1) {
    const newContent = content.substring(0, startIdx) + replacement + '\n    ' + content.substring(endIdx);
    fs.writeFileSync('src/components/sections/hero.tsx', newContent);
    console.log('Update success!');
} else {
    console.log('Could not find indices', startIdx, endIdx);
}
