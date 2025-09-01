import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [counts, setCounts] = useState({ projects: 0, years: 0, efficiency: 0 });
  const targetCounts = { projects: 10, years: 3, efficiency: 40 };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60 FPS
      const totalFrames = duration / frameRate;

      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

        setCounts({
          projects: Math.round(targetCounts.projects * easeOut),
          years: Math.round(targetCounts.years * easeOut),
          efficiency: Math.round(targetCounts.efficiency * easeOut),
        });

        if (frame >= totalFrames) {
          clearInterval(timer);
          setCounts(targetCounts);
        }
      }, frameRate);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const skills = [
    { name: 'SQL & BigQuery', level: 95 },
    { name: 'Python & R', level: 92 },
    { name: 'Tableau & Power BI', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'A/B Testing', level: 88 },
    { name: 'ETL & Data Pipelines', level: 87 }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            <span className="text-gradient-primary">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Data Analyst with 3+ years of experience transforming complex datasets 
              into strategic business insights. My expertise spans SQL, Python, Tableau, and cloud 
              platforms, enabling organizations to make data-driven decisions that drive growth and efficiency.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I excel at building predictive models, creating interactive dashboards, and designing 
              automated ETL pipelines that reduce manual effort while accelerating reporting. My collaborative 
              approach with cross-functional teams ensures that analytics initiatives align with organizational goals.
            </p>

            {/* Stats Counters */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="text-3xl font-display font-bold text-gradient-primary mb-2"
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {counts.projects}+
                </motion.div>
                <div className="flex items-center justify-center mb-2">
                  <Code2 className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">Real Time Projects</span>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div 
                  className="text-3xl font-display font-bold text-gradient-secondary mb-2"
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {counts.years}+
                </motion.div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">Years</span>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div 
                  className="text-3xl font-display font-bold text-gradient-accent mb-2"
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {counts.efficiency}%
                </motion.div>
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-accent mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">Efficiency</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-center lg:text-left">
              Core Skills
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={isInView ? {
                      backgroundPosition: ['200% 0', '-200% 0']
                    } : {}}
                    transition={{
                      duration: 2,
                      delay: 1 + index * 0.1,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Highlight Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: '📊', title: 'Data-Driven', desc: 'Insights-based decisions' },
                { icon: '🔍', title: 'Analytics', desc: 'Deep dive analysis' },
                { icon: '⚡', title: 'Automation', desc: 'Streamlined processes' },
                { icon: '🎯', title: 'Precision', desc: '99.9% accuracy' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass p-4 rounded-xl text-center hover:glass-strong transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;