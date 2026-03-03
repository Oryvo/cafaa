'use client';

import { useState } from 'react';

export default function MembershipApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', role: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-800 font-semibold mb-2">✓ Application Submitted Successfully</p>
          <p className="text-green-600">
            Thank you for your interest in CAFAA membership. We'll review your application and be in touch within 5 business days.
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
              <label className="block text-gray-700 font-semibold mb-2">Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Job Title/Role *</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Finance Adviser"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message / Additional Information</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows={5}
              placeholder="Tell us about your experience and why you'd like to join CAFAA..."
            />
          </div>

          <div className="flex gap-4">
            <button type="submit" className="btn-primary">
              Submit Application
            </button>
            <button
              type="reset"
              onClick={() => setFormData({ name: '', email: '', company: '', role: '', message: '' })}
              className="btn-secondary"
            >
              Clear
            </button>
          </div>

          <p className="text-sm text-gray-600">
            By submitting this form, you agree to our terms and conditions and privacy policy.
          </p>
        </>
      )}
    </form>
  );
}
