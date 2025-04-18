
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  index: number;
}

const Testimonial = ({ quote, author, role, company, image, index }: TestimonialProps) => {
  return (
    <motion.div
      className="glass-card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Quote className="text-primary/50 mb-4" size={36} />
      
      <p className="italic text-muted-foreground mb-6">
        "{quote}"
      </p>
      
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <span className="text-primary font-bold">{author.charAt(0)}</span>
          </div>
        )}
        
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
