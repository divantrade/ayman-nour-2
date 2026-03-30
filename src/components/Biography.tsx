const bioCards = [
  {
    icon: "🎓",
    title: "المعلومات الشخصية",
    items: [
      "الاسم: أيمن عبد العزيز نور",
      "تاريخ الميلاد: 5 ديسمبر 1964",
      "مكان الميلاد: المنصورة، محافظة الدقهلية، مصر",
      "المهنة: محامي، سياسي، صحفي، إعلامي",
      "التوجه السياسي: ليبرالي",
      "الإقامة: إسطنبول، تركيا (منذ 2013)",
    ],
  },
  {
    icon: "📚",
    title: "التعليم",
    items: [
      "بكالوريوس الحقوق - جامعة المنصورة (1985)",
      "ماجستير في فلسفة التاريخ السياسي",
      "دكتوراه في القانون العام (1994)",
    ],
  },
  {
    icon: "⚖️",
    title: "النشاط الحقوقي",
    items: [
      "عضو مجلس أمناء المنظمة المصرية لحقوق الإنسان",
      "من أبرز المدافعين عن الديمقراطية والحريات في مصر",
      "اعتبرته منظمات حقوق إنسان دولية سجين رأي",
      "يدعو إلى عودة الحكم المدني الديمقراطي في مصر",
    ],
  },
  {
    icon: "🌍",
    title: "الحضور الدولي",
    items: [
      "مقابلات مع مجلس العلاقات الخارجية الأمريكي (CFR)",
      "مقابلات مع منظمة DAWN الحقوقية",
      "تغطيات على CNN وMiddle East Eye",
      "حضور متصاعد في دوائر القرار الدولية",
    ],
  },
];

export default function Biography() {
  return (
    <section id="bio" className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            السيرة الذاتية
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-text-light mt-4 text-lg">
            نبذة شاملة عن حياة ومسيرة الدكتور أيمن نور
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bioCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-2xl mb-5">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-text-light leading-relaxed pr-5 relative before:content-[''] before:absolute before:right-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
