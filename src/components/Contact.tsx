"use client";

import { useState, FormEvent } from "react";

const socialLinks = [
  {
    name: "X (تويتر)",
    handle: "@AymanNour",
    url: "https://twitter.com/AymanNour",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "فيسبوك",
    handle: "dr.Aymannour",
    url: "https://facebook.com/dr.Aymannour",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "أخبار الغد",
    handle: "ghadnews.net",
    url: "https://ghadnews.net",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: "اتحاد القوى الوطنية",
    handle: "egyna.org",
    url: "https://egyna.org",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
  },
  {
    name: "المجلس العربي",
    handle: "arabcouncil.foundation",
    url: "https://arabcouncil.foundation",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            تواصل معنا
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-text-light mt-4 text-lg">
            تابع الدكتور أيمن نور عبر منصات التواصل
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              الحسابات والمواقع الرسمية
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:translate-x-[-4px] transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white">
                    {link.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-primary">{link.name}</h4>
                    <p className="text-text-light text-sm">{link.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-6">
              أرسل رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">
                  الاسم
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-surface-alt rounded-xl focus:border-primary focus:outline-none transition-colors"
                  placeholder="اسمك الكامل"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-surface-alt rounded-xl focus:border-primary focus:outline-none transition-colors"
                  placeholder="email@example.com"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-1.5">
                  الرسالة
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-surface-alt rounded-xl focus:border-primary focus:outline-none transition-colors resize-y"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-bold text-white transition-all ${
                  submitted
                    ? "bg-green-500"
                    : "bg-primary hover:bg-primary-light"
                }`}
              >
                {submitted ? "تم الإرسال بنجاح!" : "إرسال الرسالة"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
