const quickLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#bio", label: "السيرة الذاتية" },
  { href: "#timeline", label: "المسيرة السياسية" },
  { href: "#books", label: "الكتب والمؤلفات" },
  { href: "#articles", label: "المقالات" },
];

const moreLinks = [
  { href: "#media", label: "قناة الشرق" },
  { href: "#party", label: "حزب غد الثورة" },
  { href: "#positions", label: "المناصب" },
  { href: "#contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              د. أيمن <span className="text-accent">نور</span>
            </h3>
            <p className="text-sm leading-relaxed">
              محامي وسياسي وصحفي مصري بارز، رئيس حزب غد الثورة والرئيس
              المنتخب لاتحاد القوى الوطنية المصرية. يناضل من أجل
              الديمقراطية والحرية في مصر.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-accent hover:pr-2 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-bold mb-4">المزيد</h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-accent hover:pr-2 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط خارجية</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ghadnews.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-all"
                >
                  أخبار الغد
                </a>
              </li>
              <li>
                <a
                  href="https://egyna.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-all"
                >
                  اتحاد القوى الوطنية
                </a>
              </li>
              <li>
                <a
                  href="https://arabcouncil.foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-all"
                >
                  المجلس العربي
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://twitter.com/AymanNour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/dr.Aymannour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-sm">
          <p>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} | الموقع
            الرسمي للدكتور أيمن نور
          </p>
        </div>
      </div>
    </footer>
  );
}
