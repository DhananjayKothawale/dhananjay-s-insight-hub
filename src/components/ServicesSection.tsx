import { services } from "@/data/portfolioData";
import { BarChart3, LayoutDashboard, FileBarChart, TrendingUp, Eye, ArrowRight } from "lucide-react";

const iconMap = {
  BarChart3,
  LayoutDashboard,
  FileBarChart,
  TrendingUp,
  Eye,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">WHAT I OFFER</p>
          <h2 className="section-heading">Services</h2>
          <p className="section-subheading mx-auto">
            Professional data solutions that drive measurable business outcomes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || BarChart3;
            
            return (
              <div
                key={service.id}
                className="group card-glow p-8 rounded-xl bg-card border border-border transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
