const positions = [
  {
    title: "عضو مجلس الشعب المصري",
    period: "1995 - 2005",
    desc: "انتُخب لعدة دورات في مجلس الشعب عن حزب الوفد، وحصل على جائزة أحسن أداء برلماني.",
  },
  {
    title: "رئيس حزب الغد",
    period: "2004 - 2011",
    desc: "أسّس وترأس حزب الغد كأول حزب ليبرالي معارض يتحدى الحزب الحاكم.",
  },
  {
    title: "رئيس حزب غد الثورة",
    period: "2011 - حتى الآن",
    desc: "يترأس حزب غد الثورة كامتداد لمسيرته الإصلاحية بعد ثورة 25 يناير.",
  },
  {
    title: "نائب رئيس المجلس العربي للديمقراطية",
    period: "منذ 2014",
    desc: "يشغل منصب نائب رئيس المجلس العربي للديمقراطية ويشارك في فعالياته.",
  },
  {
    title: "رئيس اتحاد القوى الوطنية المصرية",
    period: "منذ أكتوبر 2021",
    desc: "انتُخب رئيساً لاتحاد القوى الوطنية الذي يضم طيفاً واسعاً من المعارضة المصرية.",
  },
  {
    title: "مدير تحرير إقليمي",
    period: "عدة فترات",
    desc: "عمل مديراً للتحرير الإقليمي لعدة صحف عربية ودولية.",
  },
];

export default function Positions() {
  return (
    <section
      id="positions"
      className="py-24 bg-primary-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            المناصب والأدوار القيادية
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            مسيرة حافلة من العمل العام والقيادة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((pos) => (
            <div
              key={pos.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-accent text-lg font-bold mb-2">
                {pos.title}
              </h3>
              <p className="text-white/40 text-sm mb-3">{pos.period}</p>
              <p className="text-white/65 text-sm leading-relaxed">
                {pos.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
