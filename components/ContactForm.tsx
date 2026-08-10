'use client';

import { useState } from 'react';
import { sendEmailAction } from '../actions/sendEmail';
import { EmailData } from '../types';
import FormField from './FormField';

export default function ContactForm() {
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const result = await sendEmailAction(formData);

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error(result.error); 
        setStatus('error');
      }
    } catch (error) {
      console.error("Error while sending email:", error);
      setStatus('error');
    }
  };

  return (
    <div className="shadow-lg p-8 rounded-2xl">
      <h2 className="text-xl text-primary mb-6">Text me</h2>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-available-primary/10 border border-available-primary/20 text-accent text-sm">
          ✓ Message sent!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            label="Your name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <FormField
            label="Your mail"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <FormField
          label="Subject"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <FormField
          label="Message"
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 px-6 rounded-lg bg-button-background hover:bg-button-background-hovered text-quaternary font-mono text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          {status === 'loading' ? <span>Sending...</span> : <span>Send message</span>}
        </button>
      </form>
    </div>
  );
}