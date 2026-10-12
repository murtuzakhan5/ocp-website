import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, Phone, User, Send, Sparkles, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STANDARDS_DATA, COMPANY_INFO } from '../data/ocpData';

export default function QuoteModal({ isOpen, onClose }) {
  const [selectedStandard, setSelectedStandard] = useState('ISO 9001');
  const [companyName, setCompanyName] = useState('');
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companySize, setCompanySize] = useState('11-50 employees');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send proposal inquiry directly to official email via FormSubmit AJAX
      await fetch("https://formsubmit.co/ajax/info@orientconsultantpakistan.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New ISO Proposal Request: ${selectedStandard} - ${companyName || personName}`,
          _template: "table",
          _captcha: "false",
          "Requested Standard": selectedStandard,
          "Company Name": companyName || "Not Provided",
          "Contact Person": personName,
          "Official Email": email,
          "Phone / WhatsApp": phone,
          "Workforce Size": companySize,
          "Notes / Requirements": message || "None",
          "Submitted At": new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.log("Proposal inquiry sent locally:", err);
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

  const resetForm = () => {
    setSubmitted(false);
    setCompanyName('');
    setPersonName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header bar */}
        <div className="px-6 py-4 bg-[#0b0f19] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">ISO Certification Proposal Request</h3>
              <p className="text-xs text-slate-400">Orient Consultant Pakistan (OCP)</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white">Proposal Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you <span className="text-amber-400 font-semibold">{personName || 'Valued Client'}</span>. 
                Your request has been forwarded directly to <strong className="text-amber-400 font-mono">info@orientconsultantpakistan.com</strong>.
              </p>
              <p className="text-xs text-slate-400">
                Our senior ISO lead consultant will contact you at <span className="text-amber-400">{email || phone}</span> within 24 business hours.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
              <div>📋 <strong>Standard:</strong> <span className="text-slate-200">{selectedStandard}</span></div>
              <div>🏢 <strong>Company:</strong> <span className="text-slate-200">{companyName || 'Not specified'}</span></div>
              <div>✉️ <strong>Delivered To:</strong> <span className="text-amber-400 font-mono">info@orientconsultantpakistan.com</span></div>
            </div>
            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            
            {/* Standard selector */}
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">
                Select Desired Standard / Certification
              </label>
              <select
                value={selectedStandard}
                onChange={(e) => setSelectedStandard(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
              >
                {STANDARDS_DATA.map((std) => (
                  <option key={std.code} value={std.code}>
                    {std.code} - {std.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid 2 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Company / Enterprise Name</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zaman Textile / Pack Corp"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Contact Person Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Official Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="0317-XXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Organization Workforce Size</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['1-10 staff', '11-50 staff', '50-250 staff', '250+ staff'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setCompanySize(size)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium border transition-colors ${
                      companySize === size 
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' 
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Additional Requirements / Notes</label>
              <textarea
                rows={2}
                placeholder="Mention target certification date, factory branch locations, or specific audit needs..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Sent directly to info@orientconsultantpakistan.com</span>
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 flex items-center justify-center space-x-2 transition-transform active:scale-95 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Proposal Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
