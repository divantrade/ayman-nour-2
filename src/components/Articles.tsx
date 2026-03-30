const writingPlatforms = [
  {
    name: "جريدة الوفد",
    desc: 'عمود ثابت بعنوان "يوميات صحفي مشاغب" لأكثر من 16 عاماً',
    icon: "📰",
  },
  {
    name: "العربي الجديد",
    desc: "مقالات رأي ومتابعات سياسية منتظمة",
    icon: "✍️",
  },
  {
    name: "الجزيرة مباشر",
    desc: "مقالات ومشاركات إعلامية",
    icon: "📺",
  },
  {
    name: "أخبار الغد",
    desc: "مقالات منتظمة على الموقع الإخباري لحزب غد الثورة",
    icon: "🌐",
  },
];

const memoirsSeries = [
  "لماذا أكتب الآن مذكراتي؟ سأقول كل شيء عن كل شيء",
  "أسطورة هيكل",
  "حوار الذات",
  "رسالة مفتوحة للزملاء في قناة الشرق",
  "6 سنوات من الغياب - حكاية صداقة عمرها 500 عام",
];

export default function Articles() {
  return (
    <section id="articles" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            المقالات والكتابة الصحفية
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-text-light mt-4 text-lg">
            كتب مئات المقالات في منابر مصرية وعربية ودولية مختلفة
          </p>
        </div>

        {/* Writing Platforms */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {writingPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <span className="text-4xl mb-4 block">{platform.icon}</span>
              <h3 className="font-bold text-primary mb-2">{platform.name}</h3>
              <p className="text-text-light text-sm">{platform.desc}</p>
            </div>
          ))}
        </div>

        {/* Memoirs Series */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-2">
              سلسلة &quot;أوراق من مذكراتي&quot;
            </h3>
            <p className="text-white/60 mb-8">
              سلسلة مقالات تتناول محطات مختلفة من حياته ومسيرته
            </p>
            <div className="space-y-4">
              {memoirsSeries.map((title, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-primary-dark flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-white/90 leading-relaxed">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
