import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certification = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Java Programming and Software Engineering Fundamentals",
      organization: "Coursera",
      date: "2023",
      credentialId: "JAV2023001",
      description: "Comprehensive certification covering Java fundamentals, object-oriented programming, and software engineering best practices.",
      skills: ["Java Programming", "OOP Concepts", "Software Engineering", "Development Best Practices"],
      verifyUrl: "https://coursera.org/verify",
      status: "active",
      level: "Foundation"
    },
    {
      title: "Spring Boot Microservices Specialization",
      organization: "Coursera",
      date: "2023",
      credentialId: "SBM2023002",
      description: "Advanced specialization in building microservices architecture using Spring Boot framework and related technologies.",
      skills: ["Spring Boot", "Microservices", "REST APIs", "Cloud Deployment"],
      verifyUrl: "https://coursera.org/verify",
      status: "active",
      level: "Professional"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      organization: "LinkedIn Learning",
      date: "2023",
      credentialId: "AWS2023003",
      description: "Foundational knowledge of AWS cloud services, architecture, and best practices for cloud computing solutions.",
      skills: ["AWS Services", "Cloud Architecture", "Security", "Cost Optimization"],
      verifyUrl: "https://linkedin.com/learning/verify",
      status: "active",
      level: "Associate"
    },
    {
      title: "DevOps Foundations: CI/CD and Automation",
      organization: "LinkedIn Learning",
      date: "2022",
      credentialId: "DVO2022004",
      description: "Comprehensive understanding of DevOps practices, continuous integration, continuous deployment, and automation strategies.",
      skills: ["CI/CD Pipelines", "Jenkins", "Docker", "Automation"],
      verifyUrl: "https://linkedin.com/learning/verify",
      status: "active",
      level: "Professional"
    },
    {
      title: "Front-End Development with React",
      organization: "Coursera",
      date: "2022",
      credentialId: "FER2022005",
      description: "Specialized certification in React.js development, covering component architecture, state management, and modern frontend practices.",
      skills: ["React.js", "Component Architecture", "State Management", "Modern Frontend"],
      verifyUrl: "https://coursera.org/verify",
      status: "active",
      level: "Professional"
    },
    {
      title: "Software Testing and Automation Specialization",
      organization: "Coursera",
      date: "2022",
      credentialId: "STA2022006",
      description: "Advanced certification covering comprehensive testing strategies, automation frameworks, and quality assurance best practices.",
      skills: ["Testing Strategies", "Test Automation", "JUnit", "Quality Assurance"],
      verifyUrl: "https://coursera.org/verify",
      status: "active",
      level: "Specialist",
      isNew: false
    }
  ];

  const getLevelColor = (level: string) => {
    const levelColors = {
      'Foundation': 'bg-green-500/10 text-green-500 border-green-500/20',
      'Associate': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'Professional': 'bg-primary/10 text-primary border-primary/20',
      'Specialist': 'bg-accent/10 text-accent border-accent/20',
      'Expert': 'bg-secondary/10 text-secondary border-secondary/20'
    };
    return levelColors[level as keyof typeof levelColors] || levelColors.Professional;
  };

  return (
    <section id="certification" className="py-20 relative overflow-hidden bg-muted/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.2, 0.05] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
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
            Professional <span className="text-gradient-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validated expertise in Java development, cloud technologies, and modern software engineering practices
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="glass-strong border-primary/20 p-6 h-full hover:glass transition-all duration-500 group relative overflow-hidden">
                {/* New Badge */}
                {cert.isNew && (
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-accent text-accent-foreground px-2 py-1 text-xs font-bold rounded-full"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: ["0 0 0 0 hsl(var(--accent) / 0.4)", "0 0 0 10px hsl(var(--accent) / 0)", "0 0 0 0 hsl(var(--accent) / 0)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    NEW
                  </motion.div>
                )}

                {/* Certificate Icon */}
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-30" />
                    <div className="relative bg-gradient-primary p-4 rounded-2xl">
                      <Award className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                </motion.div>

                {/* Certification Info */}
                <div className="text-center mb-6">
                  <motion.h3
                    className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-muted-foreground font-medium">{cert.organization}</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getLevelColor(cert.level)}`}>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {cert.level}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05 + 0.5 
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Credential Info */}
                {/* <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Credential ID:</span>
                    <span className="font-mono text-foreground">{cert.credentialId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="text-green-500 capitalize">{cert.status}</span>
                    </div>
                  </div>
                </div> */}

                {/* Verify Button */}
                {/* <Button
                  className="w-full bg-gradient-secondary hover:shadow-glow text-secondary-foreground group/btn"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  Verify Credential
                </Button> */}

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;