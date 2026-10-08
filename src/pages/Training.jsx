import React, { useState } from 'react';
import { 
  GraduationCap, BookOpen, CheckCircle2, Award, Users, Presentation, FileText, UserCheck, CheckSquare, Sparkles 
} from 'lucide-react';
import HoneycombCanvas from '../components/HoneycombCanvas';
import { COURSES_DATA } from '../data/ocpData';

export default function Training({ onOpenQuote }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const methodologyItems = [
    { title: "Classroom Presentations", icon: Presentation, desc: "Visual, engaging slide decks explaining core standard clauses and compliance criteria." },
    { title: "Mock Audits", icon: CheckSquare, desc: "Simulated real-world auditing scenarios to build practical auditing confidence." },
    { title: "Practical Assignments", icon: FileText, desc: "Hands-on drafting of non-conformity reports (NCRs), audit checklists, and risk matrices." },
    { title: "Role Play Exercises", icon: UserCheck, desc: "Interactive role playing between auditor and auditee for field audit situations." },
    { title: "Examinations & Certificates", icon: Award, desc: "Formal evaluation and issuance of recognized course completion certificates." }
  ];

  return (
    <div className="space-y-16 pb-20 overflow-hidden">
      
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#070a12] border-b border-amber-500/10">
        <HoneycombCanvas interactive={false} density={50} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Corporate Training & Skill Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Technical & ISO Training Courses
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Orient Consultant Pakistan (OCP) has a team of corporate trainers and speakers. Our training courses are customized to the specific needs of an organization.
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Learning Approach</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Our Training Methodology
          </h2>
          <p className="text-sm text-slate-300">
            Training courses are delivered in the simplest methodology with full interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {methodologyItems.map((m, idx) => {
            const IconC = m.icon;
            return (
              <div 
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-4 text-center flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <IconC className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{m.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-white">
            Available Training Modules
          </h2>
          <span className="text-xs text-amber-400 font-semibold">10 Specialized Programs</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES_DATA.map((course) => (
            <div 
              key={course.id}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {course.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{course.duration}</span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-300">
                  Target Audience: <strong className="text-slate-200">{course.level}</strong>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium">✓ Certificate Issued</span>
                <button
                  onClick={onOpenQuote}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300"
                >
                  Enroll Team
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Corporate Training Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#131b2e] via-[#0b0f19] to-[#131b2e] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">Need Customized On-Site Corporate Workshops?</h3>
            <p className="text-xs text-slate-300 mt-1">
              We design custom training curricula for factory workers, management staff, or auditing teams in Pakistan and abroad.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="whitespace-nowrap px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300"
          >
            Request Custom Training Quote
          </button>
        </div>
      </section>

    </div>
  );
}
