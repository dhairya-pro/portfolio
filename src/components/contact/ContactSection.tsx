import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please complete all form fields.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setStatusMsg('Thank you! Your message has been recorded. Direct email fallback ready below.');
      
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${RESUME_DATA.email}?subject=${subject}&body=${body}`;
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an idea <br />
              <span className="bg-gradient-to-r from-[#00F0FF] via-blue-400 to-purple-400 bg-clip-text text-transparent">
                worth building?
              </span>
            </h2>

            <p className="text-base text-gray-300 font-sans leading-relaxed">
              Let's turn it into a scalable digital product. Whether you need full-stack MERN application engineering, AI/ML model integration, or real-time system architecture, I'm ready to collaborate.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0C10] border border-[#1F2430] hover:border-[#00F0FF]/50 transition-all group"
                data-cursor-text="Email"
              >
                <div className="p-3 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Direct Email</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {RESUME_DATA.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0C10] border border-[#1F2430] hover:border-[#00F0FF]/50 transition-all group"
                data-cursor-text="Call"
              >
                <div className="p-3 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Phone</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {RESUME_DATA.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B0C10] border border-[#1F2430]">
                <div className="p-3 rounded-lg bg-[#00F0FF]/10 text-[#00F0FF]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 block">Location</span>
                  <span className="text-sm font-bold text-white">
                    {RESUME_DATA.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Drive Resume Action */}
            <div className="pt-2">
              <a
                href={RESUME_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#0B0C10] border border-[#00F0FF]/30 text-[#00F0FF] font-mono text-xs font-semibold hover:bg-[#00F0FF]/10 hover:border-[#00F0FF] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>View / Download Resume (Google Drive)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0C10] border border-[#1F2430] shadow-2xl space-y-6">
              
              <div className="border-b border-[#1F2430] pb-4">
                <h3 className="text-xl font-bold text-white font-mono">Send a Direct Inquiry</h3>
                <p className="text-xs text-gray-400 mt-1">Form automatically connects with mailto client fallback.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-gray-300 mb-1 font-semibold">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1F2430] text-white focus:outline-none focus:border-[#00F0FF] font-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-gray-300 mb-1 font-semibold">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1F2430] text-white focus:outline-none focus:border-[#00F0FF] font-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-gray-300 mb-1 font-semibold">
                    Project Details / Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your product requirements or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#1F2430] text-white focus:outline-none focus:border-[#00F0FF] font-sans text-sm custom-scrollbar"
                  />
                </div>

                {/* Status Message */}
                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMsg}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-[#00F0FF] text-[#050505] font-bold text-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  data-cursor-text="Send"
                >
                  {status === 'loading' ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
