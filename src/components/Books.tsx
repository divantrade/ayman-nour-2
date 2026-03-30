const books = [
  {
    title: "الليبرالية هي الحل",
    year: "1992",
    desc: "كتاب فكري يقدم الليبرالية كبديل سياسي، في مقابل الشعار الإسلامي الشهير \"الإسلام هو الحل\".",
    color: "from-blue-900 to-blue-700",
  },
  {
    title: "أزمة الخليج: اغتيال الكويت",
    year: "1990",
    desc: "تحليل سياسي معمّق لأزمة الخليج الثانية وتداعياتها على المنطقة العربية.",
    color: "from-red-900 to-red-700",
  },
  {
    title: "من قتل سليمان خاطر",
    year: "1990",
    desc: "كتاب يتناول قضية الجندي المصري سليمان خاطر والملابسات المحيطة بها.",
    color: "from-gray-800 to-gray-600",
  },
  {
    title: "العسكري الأسود - زكي بدر",
    year: "1993",
    desc: "كتاب عن وزير الداخلية المصري الأسبق زكي بدر وفترة حكمه.",
    color: "from-zinc-800 to-zinc-600",
  },
  {
    title: "الحرية السياسية في الإسلام",
    year: "1994",
    desc: "دراسة أكاديمية في الفكر السياسي الإسلامي وعلاقته بمفهوم الحرية السياسية.",
    color: "from-emerald-900 to-emerald-700",
  },
  {
    title: "مصر الحديثة في 2020",
    year: "2002",
    desc: "رؤية سياسية واقتصادية لمستقبل مصر، أصبح لاحقاً الأساس لسياسات حزب الغد.",
    color: "from-primary-dark to-primary",
  },
  {
    title: "يوميات صحفي مشاغب",
    year: "2004",
    desc: "مجموعة مختارة من مقالاته الصحفية التي كتبها على مدار أكثر من 16 عاماً في جريدة الوفد.",
    color: "from-amber-800 to-amber-600",
  },
  {
    title: "أوراق من مذكّراتي: شهادة على مصر في نصف قرن",
    year: "2025",
    desc: "أحدث كتبه، سلسلة من المقالات والذكريات تلقي الضوء على محطات فارقة في مسيرته السياسية والإنسانية.",
    color: "from-accent to-yellow-600",
  },
];

export default function Books() {
  return (
    <section id="books" className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            الكتب والمؤلفات
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-text-light mt-4 text-lg">
            إنتاج فكري وأدبي متنوع يمتد لأكثر من ثلاثة عقود
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${book.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
                <svg className="w-16 h-16 text-white/25" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                </svg>
                <span className="absolute top-4 left-4 bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                  {book.year}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-primary mb-2 leading-relaxed group-hover:text-primary-light transition-colors">
                  {book.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {book.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
