export default function Party() {
  return (
    <section id="party" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            حزب غد الثورة
            <span className="block w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
          </h2>
          <p className="text-text-light mt-4 text-lg">
            رؤية إصلاحية تقوم على الديمقراطية والليبرالية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Party History */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-6">
              تاريخ الحزب
            </h3>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                أسّس الدكتور أيمن نور حزب الغد في عام 2004 كحزب ليبرالي
                معارض يمثل رؤية إصلاحية تقوم على الديمقراطية والليبرالية.
              </p>
              <p>
                استُلهمت سياسات الحزب من كتابه &quot;مصر الحديثة في 2020&quot;
                الصادر عام 2002، والذي قدّم رؤية متكاملة لمستقبل مصر
                السياسي والاقتصادي.
              </p>
              <p>
                بعد ثورة 25 يناير 2011، أسّس حزب &quot;غد الثورة&quot; كامتداد
                لمسيرته الإصلاحية ويتولى رئاسته حتى اليوم.
              </p>
            </div>
          </div>

          {/* Party Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              القيم والمبادئ
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚖️", label: "الديمقراطية" },
                { icon: "🕊️", label: "الحرية" },
                { icon: "📜", label: "سيادة القانون" },
                { icon: "🤝", label: "العدالة الاجتماعية" },
                { icon: "💡", label: "الإصلاح السياسي" },
                { icon: "🏛️", label: "الحكم المدني" },
              ].map((val) => (
                <div
                  key={val.label}
                  className="bg-white rounded-2xl p-6 shadow-sm text-center hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <span className="text-3xl block mb-3">{val.icon}</span>
                  <h4 className="font-bold text-primary group-hover:text-white transition-colors">
                    {val.label}
                  </h4>
                </div>
              ))}
            </div>

            {/* Union Banner */}
            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-3">
                اتحاد القوى الوطنية المصرية
              </h4>
              <p className="text-white/70 leading-relaxed mb-4">
                يترأس الدكتور أيمن نور اتحاد القوى الوطنية المصرية منذ
                أكتوبر 2021، والذي يضم قوى معارضة متنوعة تسعى لعودة الحكم
                المدني الديمقراطي.
              </p>
              <p className="text-white/70 leading-relaxed">
                دعا المعارضة المصرية إلى التوحد وإعلان &quot;وثيقة العشرين&quot;
                كبرنامج عمل للمرحلة القادمة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
