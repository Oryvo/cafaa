import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - CAFAA',
  description: 'Get in touch with CAFAA. Contact us with membership inquiries, education questions, events information, or any other matter.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="hero section-padding py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-accent">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📍 Head Office</h3>
                <p className="text-gray-700">
                  CAFAA<br />
                  Commercial & Asset Finance Advisers<br />
                  Wellington, New Zealand
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📞 Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:+64274000000" className="text-primary hover:text-secondary">
                    +64 2 7400 0000
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">✉️ Email</h3>
                <p className="text-gray-700 mb-2">
                  <strong>General Inquiries:</strong><br />
                  <a href="mailto:info@cafaa.nz" className="text-primary hover:text-secondary">
                    info@cafaa.nz
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Membership:</strong><br />
                  <a href="mailto:membership@cafaa.nz" className="text-primary hover:text-secondary">
                    membership@cafaa.nz
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Education:</strong><br />
                  <a href="mailto:education@cafaa.nz" className="text-primary hover:text-secondary">
                    education@cafaa.nz
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">🕐 Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 5:00 PM (NZDT)<br />
                  <span className="text-sm text-gray-600">Closed public holidays</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition">
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary/80 transition">
                    𝕏
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary/80 text-white rounded-full flex items-center justify-center hover:bg-secondary transition">
                    in
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Membership</h3>
              <p className="text-gray-700 mb-4">
                For membership applications, renewals, and member services.
              </p>
              <a href="mailto:membership@cafaa.nz" className="text-primary hover:text-secondary font-semibold">
                membership@cafaa.nz
              </a>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education & Training</h3>
              <p className="text-gray-700 mb-4">
                For course registrations, training inquiries, and education programs.
              </p>
              <a href="mailto:education@cafaa.nz" className="text-primary hover:text-secondary font-semibold">
                education@cafaa.nz
              </a>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Events & Conferences</h3>
              <p className="text-gray-700 mb-4">
                For event registrations, sponsorship, and conference inquiries.
              </p>
              <a href="mailto:events@cafaa.nz" className="text-primary hover:text-secondary font-semibold">
                events@cafaa.nz
              </a>
            </div>

            <div className="card bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advocacy & Policy</h3>
              <p className="text-gray-700 mb-4">
                For advocacy matters, policy feedback, and industry concerns.
              </p>
              <a href="mailto:advocacy@cafaa.nz" className="text-primary hover:text-secondary font-semibold">
                advocacy@cafaa.nz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What are your office hours?</h3>
              <p className="text-gray-700">
                Our office is open Monday to Friday, 9:00 AM to 5:00 PM (NZDT). We're closed on public holidays.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How quickly will I get a response?</h3>
              <p className="text-gray-700">
                We aim to respond to all inquiries within 24 business hours. During busy periods, it may take up to 48 hours.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I call during office hours?</h3>
              <p className="text-gray-700">
                Yes! You can call us at +64 2 7400 0000 during office hours. However, we may be better able to help if you email us with specific details.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you have regional offices?</h3>
              <p className="text-gray-700">
                Our head office is in Wellington. We hold regional events and networking meetings in Auckland, Christchurch, and Tauranga. Contact us to find out about events near you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
