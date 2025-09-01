import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vineethsai-appana-/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:venkatanagavineeth@gmail.com', label: 'Email' }
  ];

  return (
    <>
      <footer className="relative py-12 border-t border-primary/10 bg-muted/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div
              className="text-2xl font-display font-bold text-gradient-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Venkata Naga Vineeth Sai Appana
            </motion.div>

            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:glass-strong transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            <motion.p
              className="text-muted-foreground flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              © {new Date().getFullYear()} Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <Heart className="h-4 w-4 text-red-500" />
              </motion.span>
              by Vineeth
            </motion.p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.div
        className={`fixed bottom-8 right-8 z-50 ${showScrollTop ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={scrollToTop}
          className="bg-gradient-primary hover:shadow-glow text-primary-foreground p-3 rounded-full group"
          size="icon"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </motion.div>
    </>
  );
};

export default Footer;