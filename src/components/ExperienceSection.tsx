import { defenceExperience, certifications, achievements } from "@/data/portfolioData";
import { Shield, Award, Trophy, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">CREDENTIALS</p>
          <h2 className="section-heading">Experience & Certifications</h2>
          <p className="section-subheading mx-auto">
            Professional experience and verified credentials in data analytics
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Defence Experience - Featured */}
          <div className="mb-12">
            <div className="card-glow p-8 rounded-xl bg-card border border-border overflow-hidden relative">
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Defence Sector
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{defenceExperience.role}</h3>
                      <p className="text-muted-foreground">{defenceExperience.organization}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {defenceExperience.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {defenceExperience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Year Badge */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="text-center p-6 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-4xl font-bold gradient-text">{defenceExperience.duration}</p>
                    <p className="text-sm text-muted-foreground mt-1">Internship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="card-glow p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    <h4 className="font-medium mb-1">{cert.title}</h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="card-glow p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-warning/20">
                  <Trophy className="w-5 h-5 text-warning" />
                </div>
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-4 rounded-lg bg-gradient-to-r from-warning/10 to-transparent border border-warning/20"
                  >
                    <div className="flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-warning mt-1" />
                      <div>
                        <h4 className="font-semibold text-warning">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">{achievement.year}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Placeholder for more achievements */}
                <div className="p-4 rounded-lg border border-dashed border-border text-center">
                  <p className="text-sm text-muted-foreground">More achievements coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
