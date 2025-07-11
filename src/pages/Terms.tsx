import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Scale className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">الشروط والأحكام</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              الشروط والأحكام التي تحكم استخدام خدماتنا القانونية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-8">
              <p className="text-slate-600 leading-relaxed">
                آخر تحديث: 1 يناير 2024
              </p>
              <p className="text-slate-600 leading-relaxed">
                تحكم هذه الشروط والأحكام استخدامك لخدماتنا القانونية وموقعنا الإلكتروني. باستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-amber-50 rounded-xl p-8 border border-amber-200"
              >
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-amber-600 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">تنبيه مهم</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  المعلومات المقدمة في هذا الموقع لأغراض إعلامية عامة فقط ولا تشكل استشارة قانونية. لا يتم إنشاء علاقة محام-عميل من خلال استخدام هذا الموقع. للحصول على استشارة قانونية محددة، يرجى التواصل معنا مباشرة.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-amber-600 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">الخدمات المقدمة</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    نقدم الخدمات القانونية التالية:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>الاستشارات القانونية المتخصصة</li>
                    <li>الترافع أمام المحاكم</li>
                    <li>صياغة ومراجعة العقود</li>
                    <li>التحكيم والوساطة</li>
                    <li>الخدمات الاستشارية للشركات</li>
                    <li>التمثيل القانوني في القضايا المختلفة</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-amber-600 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">التزامات العميل</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    بصفتك عميلاً، تلتزم بما يلي:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>تقديم معلومات صحيحة وكاملة</li>
                    <li>تزويدنا بجميع الوثائق والمستندات المطلوبة</li>
                    <li>دفع الأتعاب المتفق عليها في المواعيد المحددة</li>
                    <li>التعاون معنا لتحقيق أفضل النتائج</li>
                    <li>إعلامنا بأي تطورات أو تغييرات في قضيتك</li>
                    <li>الالتزام بالقوانين واللوائح المعمول بها</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">الأتعاب والمدفوعات</h2>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    فيما يتعلق بالأتعاب والمدفوعات:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>يتم الاتفاق على الأتعاب مسبقاً وتوثيقها كتابياً</li>
                    <li>الاستشارة الأولية مجانية لمدة 30 دقيقة</li>
                    <li>يمكن ترتيب خطط دفع مرنة للقضايا طويلة المدى</li>
                    <li>الأتعاب مستحقة الدفع حسب الاتفاق المبرم</li>
                    <li>في حالة التأخير في الدفع، قد يتم إيقاف الخدمات</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">السرية والخصوصية</h2>
                <p className="text-slate-600 leading-relaxed">
                  نلتزم بأعلى معايير السرية المهنية. جميع المعلومات التي تشاركها معنا محمية بموجب قانون السرية المهنية للمحامين. لن نكشف عن أي معلومات تخصك لأي طرف ثالث دون موافقتك المكتوبة، إلا في الحالات التي يتطلبها القانون.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">حدود المسؤولية</h2>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    فيما يتعلق بمسؤوليتنا:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>نلتزم بتقديم أفضل خدمة قانونية ممكنة</li>
                    <li>لا يمكن ضمان نتائج محددة للقضايا القانونية</li>
                    <li>مسؤوليتنا محدودة بقيمة الأتعاب المدفوعة</li>
                    <li>لا نتحمل مسؤولية أي أضرار غير مباشرة</li>
                    <li>نحتفظ بحق رفض أي قضية لا تتوافق مع معاييرنا المهنية</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">إنهاء الخدمة</h2>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    يمكن إنهاء الخدمة في الحالات التالية:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>اكتمال الخدمة المطلوبة</li>
                    <li>طلب العميل إنهاء الخدمة</li>
                    <li>عدم الالتزام بالشروط والأحكام</li>
                    <li>التأخير في دفع الأتعاب</li>
                    <li>تضارب المصالح</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">القانون المطبق</h2>
                <p className="text-slate-600 leading-relaxed">
                  تخضع هذه الشروط والأحكام للقوانين المعمول بها في المملكة العربية السعودية. أي نزاع ينشأ عن هذه الشروط يخضع لاختصاص المحاكم السعودية.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">التواصل</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا:
                </p>
                <div className="space-y-2 text-slate-600">
                  <p>البريد الإلكتروني: info@lawyer.com</p>
                  <p>الهاتف: +966 50 123 4567</p>
                  <p>العنوان: شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;