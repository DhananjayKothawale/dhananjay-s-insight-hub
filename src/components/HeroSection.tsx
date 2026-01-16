import { ArrowDown, MapPin, Download } from "lucide-react";
import { personalInfo, professionalSummary } from "@/data/portfolioData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
            Hi, I'm{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up delay-200">
            {personalInfo.title}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-fade-up delay-300">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Summary */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-400">
            {professionalSummary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up delay-500">
            <div>
              <p className="text-3xl md:text-4xl font-bold gradient-text">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Dashboards Built</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold gradient-text">95%</p>
              <p className="text-sm text-muted-foreground mt-1">ML Accuracy</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold gradient-text">144K+</p>
              <p className="text-sm text-muted-foreground mt-1">Records Analyzed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
