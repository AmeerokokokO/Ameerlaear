import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
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
            <Shield className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">سياسة الخصوصية</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              نحن نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام خدماتنا القانونية أو زيارة موقعنا الإلكتروني.
              </p>
            </div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-amber-600 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">المعلومات التي نجمعها</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800">المعلومات الشخصية</h3>
                  <p className="text-slate-600 leading-relaxed">
                    نجمع المعلومات التالية عندما تتواصل معنا أو تطلب خدماتنا:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>الاسم الكامل ومعلومات الاتصال (رقم الهاتف، البريد الإلكتروني، العنوان)</li>
                    <li>معلومات متعلقة بالقضية أو الاستشارة القانونية</li>
                    <li>الوثائق والمستندات ذات الصلة</li>
                    <li>معلومات الدفع عند الحاجة</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-amber-600 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">كيف نستخدم معلوماتك</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    نستخدم المعلومات التي نجمعها للأغراض التالية:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>تقديم الخدمات القانونية المطلوبة</li>
                    <li>التواصل معك بشأن قضيتك أو استشارتك</li>
                    <li>إعداد الوثائق القانونية اللازمة</li>
                    <li>التمثيل القانوني أمام المحاكم والجهات المختصة</li>
                    <li>إرسال تحديثات مهمة حول قضيتك</li>
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
                  <Lock className="h-8 w-8 text-amber-600 mr-3" />
                  <h2 className="text-3xl font-bold text-slate-900">حماية معلوماتك</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    نتخذ تدابير أمنية صارمة لحماية معلوماتك:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>تشفير جميع البيانات الحساسة</li>
                    <li>استخدام خوادم آمنة ومحمية</li>
                    <li>تطبيق السرية المهنية للمحامين</li>
                    <li>تقييد الوصول للمعلومات على الموظفين المخولين فقط</li>
                    <li>النسخ الاحتياطي المنتظم والآمن للبيانات</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-amber-50 rounded-xl p-8 border border-amber-200"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">السرية المهنية</h2>
                <p className="text-slate-600 leading-relaxed">
                  كمحامي مرخص، أنا ملتزم بأعلى معايير السرية المهنية. جميع المعلومات التي تشاركها معي محمية بموجب قانون السرية المهنية للمحامين، ولن يتم الكشف عنها لأي طرف ثالث بدون موافقتك المكتوبة، إلا في الحالات التي يتطلبها القانون.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">حقوقك</h2>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    لديك الحق في:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>الوصول إلى معلوماتك الشخصية</li>
                    <li>طلب تصحيح أو تحديث معلوماتك</li>
                    <li>طلب حذف معلوماتك (مع مراعاة الالتزامات القانونية)</li>
                    <li>سحب موافقتك على استخدام معلوماتك</li>
                    <li>الحصول على نسخة من معلوماتك</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">ملفات تعريف الارتباط</h2>
                <p className="text-slate-600 leading-relaxed">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا الإلكتروني. هذه الملفات تساعدنا في فهم كيفية استخدامك للموقع وتحسين أدائه. يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">الاتصال بنا</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، يرجى التواصل معنا:
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

export default Privacy;