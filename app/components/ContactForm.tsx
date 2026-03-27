'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-800 font-semibold mb-2">✓ Message Sent Successfully</p>
          <p className="text-green-600">
            Thank you for your message. We&apos;ll get back to you within 24 business hours.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+64 2 7400 0000"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select a subject</option>
                <option value="membership">Membership Inquiry</option>
                <option value="education">Education Programs</option>
                <option value="events">Events & Conferences</option>
                <option value="advocacy">Advocacy</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows={6}
              required
              placeholder="How can we help you?"
            />
          </div>

          <div className="flex gap-4">
            <button type="submit" className="btn-primary">
              Send Message
            </button>
            <button
              type="reset"
              onClick={() => setFormData({ name: '', email: '', phone: '', subject: '', message: '' })}
              className="btn-secondary"
            >
              Clear
            </button>
          </div>

          <p className="text-sm text-gray-600">
            We typically respond to inquiries within 24 business hours. Thank you for getting in touch!
          </p>
        </>
      )}
    </form>
  );
}
