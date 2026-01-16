import { skills } from "@/data/portfolioData";
import { Code2, BarChart3, Database, Brain, Wrench, LineChart } from "lucide-react";

const skillCategories = [
  { key: "programming", label: "Programming", icon: Code2 },
  { key: "analytics", label: "Analytics & Data", icon: BarChart3 },
  { key: "visualization", label: "Visualization", icon: LineChart },
  { key: "mlAi", label: "ML & AI", icon: Brain },
  { key: "backend", label: "Backend", icon: Database },
  { key: "tools", label: "Tools", icon: Wrench },
];

const SkillsSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">EXPERTISE</p>
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit for transforming data into actionable insights
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map(({ key, label, icon: Icon }, index) => (
            <div
              key={key}
              className="card-glow p-6 rounded-xl bg-card border border-border transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key as keyof typeof skills].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
