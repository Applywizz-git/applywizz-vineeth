import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science in CS & IT",
      school: "Sacred Heart University",
      location: "Connecticut, USA",
      period: "Aug 2022 - Dec 2023",
      gpa: "3.9/4.0",
      status: "completed",
      description: "Advanced coursework in computer science and information technology with focus on data science, analytics, and modern computing technologies.",
      coursework: [
        "Data Science & Analytics",
        "Machine Learning & AI", 
        "Database Systems & Big Data",
        "Statistical Analysis & Modeling",
        "Data Visualization & Business Intelligence",
        "Cloud Computing & Data Engineering"
      ],
      achievements: [
        "Graduate Research in Healthcare Analytics",
        "Capstone: Predictive Analytics for Patient Outcomes",
        "Dean's List for Academic Excellence"
      ]
    },
    {
      degree: "Bachelor of Technology in CSE (Big Data Analytics)",
      school: "Chandigarh University",
      location: "Punjab, India",
      period: "Jun 2018 - May 2022",
      gpa: "3.7/4.0",
      status: "completed",
      description: "Comprehensive undergraduate program specializing in computer science engineering with emphasis on big data analytics and data science applications.",
      coursework: [
        "Big Data Technologies & Hadoop",
        "Data Mining & Warehousing", 
        "Statistical Computing with R & Python",
        "Machine Learning Algorithms",
        "Database Management Systems",
        "Data Structures & Algorithms"
      ],
      achievements: [
        "Led Data Science Club activities",
        "Project: Healthcare Data Mining for Disease Prediction",
        "Participated in National Data Science Competition"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
            <span className="text-gradient-primary">Education</span> & Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and academic excellence in computer science and software engineering
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.school}-${edu.period}`}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass-strong border-primary/20 p-8 mb-8 hover:glass transition-all duration-500 group relative overflow-hidden">
                {/* Completion Status Badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-gradient-accent text-accent-foreground px-3 py-1 text-sm font-semibold rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 0 0 0 hsl(var(--accent) / 0.4)", "0 0 0 8px hsl(var(--accent) / 0)", "0 0 0 0 hsl(var(--accent) / 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Completed
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Main Info */}
                  <div className="lg:col-span-2">
                    {/* University Crest */}
                    <motion.div
                      className="flex items-center mb-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="relative mr-4"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <div className="absolute inset-0 bg-gradient-secondary rounded-xl blur-lg opacity-40" />
                        <div className="relative bg-gradient-secondary p-3 rounded-xl">
                          <GraduationCap className="h-8 w-8 text-secondary-foreground" />
                        </div>
                      </motion.div>
                      
                      <div>
                        <motion.h3
                          className="text-2xl font-heading font-bold text-gradient-primary mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {edu.degree}
                        </motion.h3>
                        
                        <motion.h4 
                          className="text-xl font-semibold text-foreground mb-3"
                          whileHover={{ color: "hsl(var(--secondary))" }}
                        >
                          {edu.school}
                        </motion.h4>
                      </div>
                    </motion.div>

                    {/* Details */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-secondary" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Star className="h-4 w-4 mr-2 text-accent" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              duration: 0.5, 
                              delay: index * 0.2 + achievementIndex * 0.1 + 0.5 
                            }}
                          >
                            <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Coursework */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-4">Relevant Coursework:</h5>
                    <div className="space-y-3">
                      {edu.coursework.map((course, courseIndex) => (
                        <motion.div
                          key={course}
                          className="group"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + courseIndex * 0.05 + 0.8 
                          }}
                        >
                          <motion.div
                            className="p-3 glass rounded-lg hover:glass-strong transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                              <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                                {course}
                              </span>
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="glass p-8">
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex p-4 bg-gradient-primary rounded-2xl mb-4">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gradient-primary mb-4">
                Continuous Learning Philosophy
              </h3>
            </motion.div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Technology evolves rapidly, and I believe in staying at the forefront through continuous 
              education, hands-on experimentation, and industry certifications. My academic foundation 
              in computer science combined with practical experience enables me to build robust, 
              scalable solutions that meet real-world business needs.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Research-Driven', desc: 'Academic rigor meets practical application' },
                { title: 'Industry-Relevant', desc: 'Curriculum aligned with market demands' },
                { title: 'Innovation-Focused', desc: 'Emphasis on emerging technologies' }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-lg font-semibold text-foreground mb-2">{principle.title}</div>
                  <div className="text-sm text-muted-foreground">{principle.desc}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;