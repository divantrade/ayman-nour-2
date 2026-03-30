const programs = [
  { name: "مع معتز", presenter: "معتز مطر" },
  { name: "الشارع المصري", presenter: "عماد البحيري وأحمد عطوان" },
  { name: "أنا الشعب", presenter: "دعاء حسن" },
  { name: "ابن البلد", presenter: "هشام عبد الله" },
  { name: "هاي تك", presenter: "عمر الشال" },
  { name: "بالتأكيد", presenter: "هشام عبد الحميد" },
];

export default function Media() {
  return (
    <section id="media" className="py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            تلفزيون الشرق
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-text-light mt-4 text-lg">
            قناة فضائية مصرية معارضة تبث من إسطنبول
          </p>
        </div>

        {/* Channel Hero */}
        <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-10 md:p-14 text-center text-white mb-12">
          <h3 className="text-3xl font-bold mb-3">تلفزيون الشرق</h3>
          <p className="text-accent text-xl font-semibold mb-4">
            &quot;الحقيقة والأمل&quot;
          </p>
          <div className="max-w-2xl mx-auto text-white/70 leading-relaxed space-y-3">
            <p>
              انطلقت في البث يوم 25 أبريل 2014، وانتقلت ملكيتها إلى الدكتور
              أيمن نور في أغسطس 2015.
            </p>
            <p>تبث على الأقمار الصناعية نايلسات من إسطنبول، تركيا.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white/10 rounded-xl px-6 py-3">
              <span className="text-accent font-bold">2014</span>
              <span className="text-white/60 mr-2">بداية البث</span>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-3">
              <span className="text-accent font-bold">إسطنبول</span>
              <span className="text-white/60 mr-2">مقر البث</span>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-3">
              <span className="text-accent font-bold">نايلسات</span>
              <span className="text-white/60 mr-2">القمر الصناعي</span>
            </div>
          </div>
        </div>

        {/* Programs */}
        <h3 className="text-2xl font-bold text-primary text-center mb-8">
          أبرز البرامج
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border-t-4 border-transparent hover:border-accent"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {prog.name}
              </h4>
              <p className="text-text-light text-sm">تقديم: {prog.presenter}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
