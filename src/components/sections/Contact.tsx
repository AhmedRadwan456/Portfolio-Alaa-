"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { portfolioData, SocialLink } from "@/data/portfolio";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function Contact() {
  const { email, location } = portfolioData.personalInfo;
  const { socialLinks } = portfolioData;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate API request to backend (perfect placeholder for .NET developers to connect later)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  // Map icons dynamically
  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "github":
        return <Github className="w-5 h-5" />;
      case "facebook":
        return <Facebook className="w-5 h-5" />;
      case "whatsapp":
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const getSocialColorClass = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return "hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5";
      case "github":
        return "hover:text-white hover:border-zinc-500/30 hover:bg-zinc-500/5";
      case "facebook":
        return "hover:text-[#1877f2] hover:border-[#1877f2]/30 hover:bg-[#1877f2]/5";
      case "whatsapp":
        return "hover:text-[#25d366] hover:border-[#25d366]/30 hover:bg-[#25d366]/5";
      default:
        return "hover:text-brand-purple hover:border-brand-purple/30 hover:bg-brand-purple/5";
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Get In <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-12 h-1 rounded bg-brand-purple" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-8 lg:mb-0">
              <h3 className="text-xl font-bold text-white mb-4">Let's build something together!</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-sm">
                Have an project idea, code challenge, or full-stack application you'd like to develop? Drop me a message!
              </p>

              {/* Direct Info list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-purple">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Email</h4>
                    <a href={`mailto:${email}`} className="text-sm font-medium text-white hover:text-brand-purple transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-cyan">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Location</h4>
                    <p className="text-sm font-medium text-white">{location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">Connect with me on Socials</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-xl border border-zinc-900 bg-zinc-950/40 text-zinc-400 transition-all duration-300 ${getSocialColorClass(
                      social.platform
                    )}`}
                    title={`${social.platform}: ${social.username}`}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl border-zinc-800/80"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-zinc-450 text-zinc-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Alaa Samir"
                      className="px-4 py-3 rounded-xl border border-zinc-900 bg-zinc-950/60 text-sm text-white focus:border-brand-purple focus:outline-none transition-colors placeholder:text-zinc-700"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-450 text-zinc-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="alaa.samir@example.com"
                      className="px-4 py-3 rounded-xl border border-zinc-900 bg-zinc-950/60 text-sm text-white focus:border-brand-purple focus:outline-none transition-colors placeholder:text-zinc-700"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-zinc-450 text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    className="px-4 py-3 rounded-xl border border-zinc-900 bg-zinc-950/60 text-sm text-white focus:border-brand-purple focus:outline-none transition-colors placeholder:text-zinc-700"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-450 text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Hey Alaa, I would love to build a web backend using .NET..."
                    className="px-4 py-3 rounded-xl border border-zinc-900 bg-zinc-950/60 text-sm text-white focus:border-brand-purple focus:outline-none transition-colors placeholder:text-zinc-700 resize-none"
                  />
                </div>

                {/* Submit button with states */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-purple to-indigo-600 hover:from-brand-purple hover:to-brand-cyan text-white shadow-lg shadow-brand-purple/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-300" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Feedback notifications */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-xs text-green-400 font-semibold bg-green-500/10 border border-green-500/20 p-3 rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Thank you! Your message has been sent. I'll get back to you shortly.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-xs text-red-400 font-semibold bg-red-500/10 border border-red-500/20 p-3 rounded-xl"
                  >
                    <AlertCircle className="w-4 h-4" />
                    Please fill out all required fields before submitting.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
