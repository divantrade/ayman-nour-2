const events = [
  {
    year: "1985",
    title: "التخرج من كلية الحقوق",
    desc: "حصل على بكالوريوس الحقوق من جامعة المنصورة وبدأ مسيرته المهنية في المحاماة والصحافة.",
  },
  {
    year: "1995",
    title: "دخول البرلمان المصري",
    desc: "انتُخب عضواً في مجلس الشعب عن حزب الوفد ولم يتجاوز عمره 31 عاماً، ليصبح من أصغر أعضاء البرلمان.",
  },
  {
    year: "2002",
    title: 'نشر كتاب "مصر الحديثة في 2020"',
    desc: "قدّم رؤية سياسية واقتصادية شاملة لمستقبل مصر أصبحت لاحقاً الأساس لسياسات حزب الغد.",
  },
  {
    year: "2004",
    title: "تأسيس حزب الغد",
    desc: "أسّس حزب الغد كحزب ليبرالي معارض يحمل رؤية إصلاحية تقوم على الديمقراطية والليبرالية.",
  },
  {
    year: "2005",
    title: "الترشح لانتخابات الرئاسة",
    desc: "أول مرشح ينافس الرئيس مبارك في انتخابات رئاسية مباشرة في تاريخ مصر، وحلّ في المركز الثاني.",
  },
  {
    year: "2005",
    title: "الاعتقال والسجن",
    desc: "اعتُقل وصدر بحقه حكم بالسجن 5 سنوات. أثار اعتقاله إدانات دولية واسعة واعتُبر سجين رأي.",
  },
  {
    year: "2009",
    title: "الإفراج من السجن",
    desc: "أُفرج عنه بعد قضاء معظم مدة العقوبة وعاد إلى النشاط السياسي والحقوقي.",
  },
  {
    year: "2011",
    title: "ثورة 25 يناير وتأسيس غد الثورة",
    desc: "شارك في أحداث ثورة 25 يناير وأسّس حزب غد الثورة كامتداد لمسيرته الإصلاحية.",
  },
  {
    year: "2013",
    title: "المنفى السياسي",
    desc: "غادر مصر بعد الانقلاب العسكري في 3 يوليو وانتقل إلى بيروت ثم استقر في إسطنبول.",
  },
  {
    year: "2014",
    title: "إطلاق قناة الشرق",
    desc: "أصبح مالك قناة الشرق الفضائية المعارضة التي تبث من إسطنبول تحت شعار \"الحقيقة والأمل\".",
  },
  {
    year: "2021",
    title: "رئاسة اتحاد القوى الوطنية",
    desc: "انتُخب رئيساً لاتحاد القوى الوطنية المصرية الذي يضم قوى معارضة متنوعة.",
  },
  {
    year: "2025",
    title: "أوراق من مذكّراتي",
    desc: "أصدر كتاب \"أوراق من مذكّراتي: شهادة على مصر في نصف قرن\" في حفل بحضور شخصيات بارزة.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            المسيرة السياسية
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-text-light mt-4 text-lg">
            أكثر من ثلاثة عقود من النضال والعمل السياسي
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary hidden md:block" />

          <div className="space-y-12">
            {events.map((event, i) => (
              <div key={i} className="relative flex items-start md:items-center">
                {/* Dot */}
                <div className="absolute right-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-surface-alt z-10 hidden md:block" />

                {/* Content */}
                <div
                  className={`w-full md:w-[calc(50%-30px)] ${
                    i % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-r-4 md:border-r-0 border-accent">
                    <span className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-text-light leading-relaxed text-sm">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
