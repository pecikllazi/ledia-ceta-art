'use client';

import { useState } from 'react';
import Button from '../ui/Button';

interface ContactFormProps {
  prefillSubject?: string;
}

export default function ContactForm({ prefillSubject }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefillSubject || '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClasses = `
    w-full px-4 py-3.5 bg-paper border border-cloud
    text-ink placeholder-warm-gray
    focus:outline-none focus:border-stone focus:ring-1 focus:ring-stone/20
    transition-all duration-300
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-stone">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputClasses}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-stone">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className={inputClasses}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-stone">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="How can I help you?"
          className={inputClasses}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-stone">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          maxLength={5000}
          placeholder="Your message..."
          className={`${inputClasses} resize-none`}
          aria-required="true"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-cream border border-cloud text-stone" role="alert">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-cream border border-cloud text-stone" role="alert">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
