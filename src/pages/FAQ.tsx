import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'ما هي تكلفة الاستشارة القانونية؟',
      answer: 'تكلفة الاستشارة القانونية تختلف حسب طبيعة القضية وتعقيدها. الاستشارة الأولية مجانية لمدة 30 دقيقة، وبعدها يتم تحديد الأتعاب حسب الخدمة المطلوبة. نحن نؤمن بالشفافية في التسعير ولا توجد رسوم خفية.'
    },
    {
      question: 'كم من الوقت تستغرق القضية القانونية؟',
      answer: 'مدة القضية القانونية تعتمد على عدة عوامل منها نوع القضية، تعقيدها، والمحكمة المختصة. القضايا البسيطة قد تستغرق بضعة أشهر، بينما القضايا المعقدة قد تستغرق سنة أو أكثر. سأقدم لك تقديراً زمنياً واقعياً بعد دراسة حالتك.'
    },
    {
      question: 'هل يمكنني الحصول على استشارة قانونية عن بُعد؟',
      answer: 'نعم، أقدم خدمات الاستشارة القانونية عن بُعد من خلال المكالمات الهاتفية أو مؤتمرات الفيديو. هذا يوفر عليك الوقت والجهد خاصة للاستشارات الأولية أو المتابعة. يمكن ترتيب موعد مناسب لك.'
    },
    {
      question: 'ما هي الوثائق المطلوبة لبدء القضية؟',
      answer: 'الوثائق المطلوبة تختلف حسب نوع القضية. بشكل عام، ستحتاج إلى: هوية صحيحة، أي عقود أو اتفاقيات ذات صلة، المراسلات، الإثباتات المالية، وأي وثائق أخرى تتعلق بالقضية. سأقدم لك قائمة مفصلة بالوثائق المطلوبة حسب حالتك.'
    },
    {
      question: 'هل تتعامل مع القضايا خارج المملكة؟',
      answer: 'نعم، يمكنني التعامل مع القضايا التي تشمل أطرافاً خارج المملكة أو تخضع للقانون الدولي. لدي خبرة في التعامل مع الجهات القانونية الدولية والتحكيم الدولي. كما يمكنني التنسيق مع محامين في دول أخرى حسب الحاجة.'
    },
    {
      question: 'كيف يمكنني دفع الأتعاب القانونية؟',
      answer: 'نقبل عدة طرق للدفع تشمل: التحويل البنكي، الدفع النقدي، والدفع الإلكتروني. يمكن الاتفاق على نظام دفع مناسب لك سواء كان دفعة واحدة أو على دفعات. كما نقدم خطط دفع مرنة للقضايا طويلة المدى.'
    },
    {
      question: 'هل تقدم ضمانات على الخدمات القانونية؟',
      answer: 'أضمن تقديم أفضل خدمة قانونية ممكنة بناءً على خبرتي ومعرفتي. رغم أن نتائج القضايا لا يمكن ضمانها لأنها تعتمد على عوامل قانونية متعددة، إلا أنني أضمن الالتزام بأعلى معايير المهنية والأخلاقيات القانونية.'
    },
    {
      question: 'كيف يمكنني متابعة تطورات قضيتي؟',
      answer: 'ستحصل على تقارير دورية عن تطورات قضيتك. كما يمكنك التواصل معي في أي وقت عبر الهاتف أو البريد الإلكتروني. أؤمن بأهمية إبقاء العميل على علم بكل تطورات قضيته وأحرص على التواصل الدائم والشفاف.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            <HelpCircle className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">الأسئلة الشائعة</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              إجابات على أهم الأسئلة التي يطرحها العملاء حول الخدمات القانونية
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">الأسئلة الأكثر شيوعاً</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ستجد هنا إجابات على معظم الأسئلة التي قد تخطر ببالك
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-slate-900 flex-1">
                    {faq.question}
                  </span>
                  <div className="mr-4 flex-shrink-0">
                    {activeIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-amber-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-amber-600" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              لم تجد إجابة على سؤالك؟
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              لا تتردد في التواصل معي للحصول على إجابة مفصلة على أي استفسار
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                تواصل معي
              </a>
              <a
                href="tel:+966501234567"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                اتصل الآن
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;