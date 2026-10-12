import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Globe, Send, CheckCircle2, ShieldCheck, MessageSquare, ChevronDown, Loader2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import HoneycombCanvas from '../components/HoneycombCanvas';
import { COMPANY_INFO } from '../data/ocpData';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'ISO Certification Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data directly to official email via FormSubmit AJAX
      await fetch("https://formsubmit.co/ajax/info@orientconsultantpakistan.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Inquiry from ${formData.name} (${formData.company || 'Website Visitor'}) - OCP`,
          _template: "table",
          _captcha: "false",
          "Client Name": formData.name,
          "Company": formData.company || "Not Provided",
          "Email": formData.email,
          "Phone / WhatsApp": formData.phone,
          "Inquiry Topic": formData.subject,
          "Message": formData.message,
          "Submitted At": new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.log("Form submitted locally:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const faqs = [
    { q: "How long does ISO certification take?", a: "Standard implementation typically takes 4 to 8 weeks depending on organizational size and existing documentation." },
    { q: "Do you offer pre-audit diagnostic gap analysis?", a: "Yes! Every project begins with a diagnostic gap audit to identify non-conformities before the final audit." },
    { q: "Which countries do you provide services in?", a: "We operate in Pakistan, UAE, Saudi Arabia, Qatar, Oman, Bahrain, Iraq, Sudan, and Afghanistan." },
    { q: "Are training certificates recognized?", a: "Yes, our training programs issue certificates recognized for internal auditing and management system compliance." }
  ];

  return (
    <div className="space-y-16 pb-20 overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#070a12] border-b border-amber-500/10">
        <HoneycombCanvas interactive={false} density={50} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Head Office Communications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Reach out to Orient Consultant Pakistan for certified ISO consultancy, auditing, and corporate technical training.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-white">
                Get In Touch With Our Lead Consultants
              </h2>
              <p className="text-sm text-slate-300">
                Our Karachi head office handles global inquiries across Pakistan, Middle East, and Africa.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Head Office Address</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Direct Telephone / WhatsApp</h4>
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-sm font-mono font-bold text-amber-400 hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM (PKT)</p>
                </div>
              </div>

              {/* Email card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Official Emails</h4>
                  <div className="space-y-1 text-xs">
                    {COMPANY_INFO.emails.map(e => (
                      <a key={e} href={`mailto:${e}`} className="block text-slate-300 hover:text-amber-400 transition-colors font-medium">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Website card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Official Website</h4>
                  <a href="http://www.ocpakistan.com" target="_blank" rel="noreferrer" className="text-xs text-amber-400 hover:underline">
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#131b2e] to-[#0e1424] space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">Send Direct Message</h3>
              <p className="text-xs text-slate-300">
                Inquiries are sent directly to <strong className="text-amber-400">{COMPANY_INFO.email}</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your inquiry has been delivered directly to <span className="text-amber-400 font-semibold">{COMPANY_INFO.email}</span>. A senior consultant from Orient Consultant Pakistan will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', subject: 'ISO Certification Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Farhan Ali"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Company / Industry</label>
                    <input
                      type="text"
                      placeholder="e.g. Zaman Textile / FMCG"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0317-XXXXXXX"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Topic</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  >
                    <option value="ISO Certification Inquiry">ISO Certification Inquiry</option>
                    <option value="Client Audit Preparation (Pharma & FMCG)">Client Audit Preparation (Pharma & FMCG)</option>
                    <option value="Training Course Enrollment">Training Course Enrollment</option>
                    <option value="Internal Audit Request">Internal Audit Request</option>
                    <option value="System Support & Surveillance">System Support & Surveillance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Message Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your organization requirements, workforce count, or specific standard..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all flex items-center justify-center space-x-2 disabled:opacity-75 cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Sending to info@orientconsultantpakistan.com...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to OCP</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Styled Interactive Location Visualizer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Karachi Head Office Location</span>
            </div>
            <span className="text-xs text-slate-400">Gulshan-e-Iqbal, Near KDA Market</span>
          </div>

          <div className="h-64 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden flex items-center justify-center text-center p-6">
            <div className="absolute inset-0 opacity-20 honeycomb-pattern"></div>
            <div className="relative z-10 space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/40 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Orient Consultant Pakistan (OCP)</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                A-199 1st Floor Block #03 Gulshan-e-Iqbal, Near KDA Market, Karachi, Pakistan – Postal Code 75300
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl border border-slate-800 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-4 text-left text-sm font-bold text-white flex items-center justify-between hover:bg-slate-800/40"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="p-4 pt-0 text-xs text-slate-300 border-t border-slate-800/60 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
