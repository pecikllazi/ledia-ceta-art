'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission
    // In production, this would connect to your email service (Resend, etc.)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-cool-gray rounded-md focus:outline-none focus:ring-2 focus:ring-sea-deep"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-cool-gray rounded-md focus:outline-none focus:ring-2 focus:ring-sea-deep"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-cool-gray rounded-md focus:outline-none focus:ring-2 focus:ring-sea-deep"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-cool-gray rounded-md focus:outline-none focus:ring-2 focus:ring-sea-deep resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-md">
          Something went wrong. Please try again.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
