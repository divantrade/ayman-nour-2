import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-bl from-primary-dark via-primary to-primary-light relative overflow-hidden pt-[70px]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-white blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16 py-16">
        {/* Content */}
        <div className="flex-1 text-center lg:text-right">
          <span className="inline-block bg-accent/20 text-accent border border-accent/30 px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
            سياسي ومحامي وكاتب مصري
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            الدكتور أيمن نور
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium mb-6">
            رئيس حزب غد الثورة
          </p>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            محامي وسياسي وصحفي مصري بارز، أول مرشح ينافس في انتخابات رئاسية
            مباشرة في تاريخ مصر عام 2005. مدافع عن الديمقراطية والحريات، ورئيس
            اتحاد القوى الوطنية المصرية.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
            <a
              href="#bio"
              className="px-8 py-3.5 bg-accent text-primary-dark font-bold rounded-full hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5"
            >
              السيرة الذاتية
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all"
            >
              تواصل معنا
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-8 border-t border-white/10 justify-center lg:justify-start flex-wrap">
            <div className="text-center">
              <span className="block text-3xl font-bold text-accent">+30</span>
              <span className="text-white/50 text-sm">عاماً في السياسة</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-accent">8</span>
              <span className="text-white/50 text-sm">كتب ومؤلفات</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-accent">+100</span>
              <span className="text-white/50 text-sm">مقال ومقابلة</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-accent">2005</span>
              <span className="text-white/50 text-sm">مرشح رئاسي</span>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-accent to-primary-light p-1.5 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/ayman-nour.png"
                alt="الدكتور أيمن نور"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
