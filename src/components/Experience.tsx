import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "UnitedHealth Group",
      role: "Data Analyst",
      location: "Remote, USA",
      period: "Sep 2023 - Present",
      type: "current",
      achievements: [
        "Leveraged SQL and Python to examine claims and pharmacy utilization patterns, supporting rollout of integrated health plans",
        "Delivered interactive Tableau dashboards on formulary updates, monitoring $45M+ savings from generic drug adoption",
        "Built predictive models in Python (Random Forest, Logistic Regression) to estimate clinic closure impact, reducing costs by 14%",
        "Streamlined executive reporting with BigQuery and Airflow pipelines, cutting manual reporting cycles by 40%",
        "Designed A/B testing experiments for CVS app features, driving 9% growth in engagement and 12% higher retention"
      ],
      technologies: ["Python", "SQL", "Tableau", "BigQuery", "Airflow", "Random Forest", "Logistic Regression", "A/B Testing"]
    },
    {
      company: "Sigma Infotech",
      role: "Business Analyst",
      location: "Bengaluru, India",
      period: "Aug 2020 - Jul 2022",
      type: "previous",
      achievements: [
        "Translated raw data from CRM, OMS, and Google Analytics into actionable insights, increasing sales by 15%",
        "Applied Python predictive modeling to identify churn risks, enabling targeted campaigns with 18% retention improvement",
        "Built interactive Tableau and Power BI dashboards for executives, improving decision-making across teams",
        "Evaluated user journeys through A/B testing and behavioral analytics, lifting average order value by 10%",
        "Streamlined data integration with Azure Data Factory ETL workflows, improving processing efficiency by 20%"
      ],
      technologies: ["Python", "SQL", "Tableau", "Power BI", "Azure Data Factory", "Google Analytics", "Alteryx"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3+ years of delivering scalable, high-impact solutions across enterprise environments
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative lg:max-w-2xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30 hidden lg:block" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              className={`relative mb-16 lg:mb-24 ${
                index % 2 === 0 ? 'lg:right-1/2 -translate-x-1/2 lg:text-left max' : 'lg:left-1/2 -translate-x-1/2 lg:text-left'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute top-8 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow hidden lg:block ${
                  index % 2 === 0 ? 'right-0 transform translate-x-1/2' : 'left-0 transform -translate-x-1/2'
                }`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                whileHover={{ scale: 1.5 }}
              />

              <Card className={`glass-strong border-primary/20 p-8 hover:glass transition-all duration-300 ${
                index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3 
                        className="text-2xl font-heading font-bold text-gradient-primary"
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.role}
                      </motion.h3>
                      {exp.type === 'current' && (
                        <motion.span 
                          className="px-3 py-1 bg-gradient-accent text-accent-foreground text-xs font-semibold rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current
                        </motion.span>
                      )}
                    </div>
                    
                    <motion.h4 
                      className="text-xl font-semibold text-foreground mb-3"
                      whileHover={{ color: "hsl(var(--primary))" }}
                    >
                      {exp.company}
                    </motion.h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-secondary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.3 + achievementIndex * 0.1 + 0.5 
                          }}
                        >
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.3 + techIndex * 0.05 + 0.8 
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring this expertise to your team?
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-gradient-secondary hover:shadow-glow text-secondary-foreground font-semibold px-16 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;