import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code2, 
  Cloud, 
  Database, 
  Settings, 
  Zap, 
  Shield,
  Layers,
  GitBranch,
  Monitor,
  Smartphone
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const skillCategories = [
    {
      id: 'analytics',
      title: 'Data Analytics & Visualization',
      icon: Monitor,
      color: 'primary',
      skills: [
        { name: 'Tableau & Power BI', level: 95, experience: '3 years' },
        { name: 'Python (Pandas, NumPy)', level: 92, experience: '3 years' },
        { name: 'SQL & BigQuery', level: 95, experience: '3 years' },
        { name: 'Excel & Google Sheets', level: 88, experience: '3 years' },
        { name: 'Looker & QlikSense', level: 85, experience: '2 years' },
        { name: 'Google Data Studio', level: 87, experience: '2 years' }
      ]
    },
    {
      id: 'programming',
      title: 'Programming & Databases',
      icon: Database,
      color: 'secondary',
      skills: [
        { name: 'Python & R', level: 95, experience: '3 years' },
        { name: 'SQL (MySQL, PostgreSQL)', level: 98, experience: '3 years' },
        { name: 'BigQuery & Snowflake', level: 90, experience: '2 years' },
        { name: 'Azure Synapse', level: 85, experience: '2 years' },
        { name: 'MS SQL Server', level: 88, experience: '3 years' },
        { name: 'Database Design', level: 87, experience: '3 years' }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning & Statistics',
      icon: Zap,
      color: 'accent',
      skills: [
        { name: 'Scikit-Learn & Pandas', level: 88, experience: '2 years' },
        { name: 'Predictive Modeling', level: 85, experience: '2 years' },
        { name: 'A/B Testing', level: 92, experience: '3 years' },
        { name: 'Statistical Analysis', level: 87, experience: '3 years' },
        { name: 'Time Series Forecasting', level: 80, experience: '2 years' },
        { name: 'NLP & Text Mining', level: 75, experience: '1 year' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & ETL Platforms',
      icon: Cloud,
      color: 'success',
      skills: [
        { name: 'AWS (Redshift, S3, Glue)', level: 88, experience: '2 years' },
        { name: 'Azure Data Factory', level: 90, experience: '3 years' },
        { name: 'Apache Airflow', level: 85, experience: '2 years' },
        { name: 'dbt & Alteryx', level: 80, experience: '2 years' },
        { name: 'GCP (BigQuery, Dataflow)', level: 85, experience: '2 years' },
        { name: 'Informatica & Talend', level: 75, experience: '1 year' }
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Skills' },
    { id: 'analytics', label: 'Analytics & Viz' },
    { id: 'programming', label: 'Programming' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'cloud', label: 'Cloud & ETL' }
  ];

  const getFilteredCategories = () => {
    if (activeFilter === 'all') return skillCategories;
    return skillCategories.filter(category => category.id === activeFilter);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'text-primary border-primary/20 bg-primary/5',
      secondary: 'text-secondary border-secondary/20 bg-secondary/5',
      accent: 'text-accent border-accent/20 bg-accent/5',
      success: 'text-green-500 border-green-500/20 bg-green-500/5'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the entire technology stack
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <motion.div 
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                    : 'hover:bg-primary/10 border-primary/20'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          layout
        >
          {getFilteredCategories().map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className={`glass-strong p-8 h-full border-2 ${getColorClasses(category.color)} hover:glass transition-all duration-300`}>
                <motion.div
                  className="text-center mb-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl mb-4 ${getColorClasses(category.color)}`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <category.icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {category.title}
                  </h3>
                </motion.div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">{skill.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{skill.experience}</span>
                          <span className="text-sm font-bold text-primary">{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${
                              category.color === 'primary' ? 'from-primary to-primary-glow' :
                              category.color === 'secondary' ? 'from-secondary to-secondary-glow' :
                              category.color === 'accent' ? 'from-accent to-accent-glow' :
                              'from-green-500 to-green-400'
                            }`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <motion.div
                          className={`absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg`}
                          initial={{ left: 0 }}
                          animate={isInView ? { left: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5,
                            ease: "easeOut"
                          }}
                          style={{ transform: 'translateX(-50%)' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <motion.div
                  className="mt-8 pt-6 border-t border-current/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.8 }}
                >
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Skills: {category.skills.length}</span>
                    <span>
                      Avg Level: {Math.round(
                        category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
                      )}%
                    </span>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Code2, label: 'Programming Languages', count: '10+' },
              { icon: Cloud, label: 'Cloud Platforms', count: '5+' },
              { icon: GitBranch, label: 'Development Tools', count: '15+' },
              { icon: Shield, label: 'Security Certifications', count: '5' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex p-4 bg-gradient-primary rounded-2xl mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </motion.div>
                <div className="text-2xl font-display font-bold text-gradient-primary mb-2">
                  {stat.count}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;