
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="text-white text-sm mb-1 block">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-ue-dark/50 border border-white/10 rounded-md focus:border-ue-blue focus:outline-none focus:ring-1 focus:ring-ue-blue text-white transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-white text-sm mb-1 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-ue-dark/50 border border-white/10 rounded-md focus:border-ue-blue focus:outline-none focus:ring-1 focus:ring-ue-blue text-white transition-colors"
            placeholder="Your email"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="text-white text-sm mb-1 block">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-ue-dark/50 border border-white/10 rounded-md focus:border-ue-blue focus:outline-none focus:ring-1 focus:ring-ue-blue text-white transition-colors"
          placeholder="Subject of your message"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="text-white text-sm mb-1 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-ue-dark/50 border border-white/10 rounded-md focus:border-ue-blue focus:outline-none focus:ring-1 focus:ring-ue-blue text-white transition-colors resize-none"
          placeholder="Your message"
        />
      </div>
      
      <button
        type="submit"
        className="btn-primary flex items-center gap-2 w-full justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : (
          <>
            <span>Send Message</span>
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
