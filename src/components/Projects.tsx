import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import Image1 from '@/assets/project1.png';
import Image2 from '@/assets/project2.png';
import Image3 from '@/assets/project3.png';
import Image4 from '@/assets/project4.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Healthcare Cost Optimization & Engagement Analytics (UHG)",
      description:
        "End-to-end analytics initiative at UnitedHealth Group combining SQL, Python, predictive modeling, and BigQuery pipelines to deliver cost savings, personalized patient journeys, and executive insights.",
      image: Image1,
      technologies: [
        "SQL",
        "Python",
        "Tableau",
        "BigQuery",
        "Airflow",
        "scikit-learn"
      ],
      highlights: [
        "$45M+ formulary savings with Tableau dashboards",
        "14% cost reduction via predictive closure modeling",
        "40% faster executive reporting with automated pipelines",
      ],
    },
    {
      title: "E-commerce Retention & Sales Optimization (Sigma Infotech)",
      description:
      "Analytics project at Sigma Infotech that applied SQL, Python, and Tableau to boost sales, improve retention, and optimize supply chain operations through predictive modeling, A/B testing, and real-time dashboards.",
      image: Image2,
      technologies: [
        "SQL",
        "Python",
        "Tableau",
        "Power BI",
        "Azure Data Factory",
        "Alteryx"
      ],
      highlights: [
        "15% sales growth and 12% higher retention",
        "18% churn reduction with predictive modeling",
        "10% increase in AOV from user journey analytics",
      ],
    },
    {
      title: "Healthcare Analytics & Personalization Platform",
      description:
        "Predictive adherence models with SQL/Python, automated Airflow + BigQuery pipelines, and executive-ready Tableau dashboards for real-time KPIs.",
      image: Image3,
      technologies: ["Python", "SQL", "Airflow", "BigQuery", "Tableau"],
      highlights: [
        "Early risk flags for non-adherence",
        "Real-time KPI availability",
        "Exec dashboards for outcomes & cost"
      ],
    },
    {
      title: "E-commerce Customer Retention & Revenue Optimization",
      description:
        "Churn prediction + A/B funnel testing to lift loyalty and AOV, with ADF pipelines for real-time inventory/order updates.",
      image: Image4,
      technologies: ["Python", "SQL", "Power BI", "Azure Data Factory"],
      highlights: [
        "18% improvement in loyalty",
        "Checkout flow A/B tests increased AOV",
        "Lower latency via automated pipelines"
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-muted/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing data analytics work that turns complex datasets into business outcomes
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 }
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title} className="!w-96">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-strong border-primary/20 overflow-hidden h-full hover:glass transition-all duration-500 group">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-heading font-bold mb-3 text-gradient-primary group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md border border-secondary/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev !text-primary !text-2xl after:!text-2xl !left-4 !top-1/2 transform !-translate-y-1/2 !w-12 !h-12 !bg-background/80 !rounded-full !border !border-primary/30 hover:!bg-primary/10 !transition-all !duration-300" />
          <div className="swiper-button-next !text-primary !text-2xl after:!text-2xl !right-4 !top-1/2 transform !-translate-y-1/2 !w-12 !h-12 !bg-background/80 !rounded-full !border !border-primary/30 hover:!bg-primary/10 !transition-all !duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
