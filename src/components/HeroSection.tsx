import { ArrowDown, MapPin, Download, Sparkles } from "lucide-react";
import { personalInfo, professionalSummary } from "@/data/portfolioData";
import profilePhoto from "@/assets/profile-photo.png";

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
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6 animate-fade-up">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up delay-100">
                Hi, I'm{" "}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              {/* Title */}
              <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up delay-200">
                {personalInfo.title}
              </p>

              {/* Location */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6 animate-fade-up delay-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{personalInfo.location}</span>
              </div>

              {/* Summary */}
              <p className="text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up delay-400">
                {professionalSummary}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up delay-500">
                <a href="#projects" className="btn-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  View My Work
                </a>
                <a 
                  href="/Dhananjay_Kothawale_Resume.pdf" 
                  download="Dhananjay_Kothawale_Resume.pdf"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Content - Profile Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-up delay-200">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse" />
                <div className="absolute -inset-8 rounded-full border border-primary/10" />
                <div className="absolute -inset-12 rounded-full border border-primary/5" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl opacity-50" />
                
                {/* Profile image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold gradient-text">UG'26</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up delay-500">
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold gradient-text">10+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Dashboards Built</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold gradient-text">95%</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">ML Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold gradient-text">144K+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Records Analyzed</p>
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
