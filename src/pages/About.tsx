import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Scale, CheckCircle, Calendar } from 'lucide-react';

const About = () => {
  const qualifications = [
    {
      title: 'بكالوريوس في القانون',
      institution: 'جامعة الملك سعود',
      year: '2008',
      description: 'تخرجت بتقدير ممتاز مع مرتبة الشرف الأولى',
    },
    {
      title: 'ماجستير في القانون المدني',
      institution: 'جامعة الملك عبدالعزيز',
      year: '2010',
      description: 'تخصص في القانون المدني والتجاري',
    },
    {
      title: 'دبلوم التحكيم التجاري',
      institution: 'المركز السعودي للتحكيم التجاري',
      year: '2015',
      description: 'محكم معتمد في النزاعات التجارية',
    },
  ];

  const timeline = [
    {
      year: '2008',
      title: 'بداية المسيرة المهنية',
      description: 'انضممت إلى مكتب المحاماة الشريكة كمساعد محامي',
    },
    {
      year: '2012',
      title: 'تأسيس المكتب الخاص',
      description: 'أسست مكتبي الخاص وبدأت في تقديم الخدمات القانونية المتخصصة',
    },
    {
      year: '2015',
      title: 'التخصص في التحكيم',
      description: 'حصلت على اعتماد المحكم التجاري وبدأت في ممارسة التحكيم',
    },
    {
      year: '2018',
      title: 'توسع النشاط',
      description: 'توسعت لتشمل الخدمات الاستشارية للشركات والمؤسسات',
    },
    {
      year: '2020',
      title: 'التحول الرقمي',
      description: 'أطلقت منصة رقمية لتقديم الاستشارات القانونية عن بُعد',
    },
    {
      year: '2024',
      title: 'القيادة في المجال',
      description: 'أصبحت من أبرز المحامين في المملكة مع +500 قضية ناجحة',
    },
  ];

  const expertise = [
    { area: 'القانون المدني', percentage: 95 },
    { area: 'القانون التجاري', percentage: 90 },
    { area: 'القانون الجنائي', percentage: 85 },
    { area: 'قانون الأسرة', percentage: 80 },
    { area: 'القانون الإداري', percentage: 88 },
  ];

  const values = [
    {
      icon: Scale,
      title: 'العدالة',
      description: 'أؤمن بأن العدالة حق للجميع وأسعى لتحقيقها في كل قضية',
    },
    {
      icon: Users,
      title: 'الثقة',
      description: 'أبني علاقات طويلة الأمد مع العملاء قائمة على الثقة المتبادلة',
    },
    {
      icon: BookOpen,
      title: 'المعرفة',
      description: 'أحرص على التطوير المستمر ومتابعة آخر التطورات القانونية',
    },
    {
      icon: Award,
      title: 'التميز',
      description: 'أقدم خدمات قانونية متميزة تتجاوز توقعات العملاء',
    },
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">نبذة عني</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              رحلة مهنية حافلة بالإنجازات في خدمة العدالة والدفاع عن الحقوق
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="المحامي أحمد محمد"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">قصتي المهنية</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                بدأت رحلتي في عالم القانون عام 2008 بعد تخرجي من جامعة الملك سعود بتقدير ممتاز. منذ ذلك الحين وأنا أكرس حياتي لخدمة العدالة والدفاع عن حقوق الأفراد والمؤسسات.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                خلال مسيرتي المهنية، تعاملت مع أكثر من 500 قضية متنوعة، من القضايا المدنية والتجارية إلى القضايا الجنائية والإدارية. هذا التنوع أكسبني خبرة واسعة وعميقة في مختلف فروع القانون.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                أؤمن بأن القانون ليس مجرد نصوص، بل هو أداة لتحقيق العدالة وحماية حقوق الناس. لذلك أحرص دائماً على تقديم أفضل الخدمات القانونية مع الحفاظ على أعلى معايير الأخلاق المهنية.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">المؤهلات والشهادات</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              مؤهلات علمية ومهنية متخصصة في مختلف فروع القانون
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualifications.map((qualification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-amber-600 mb-4">
                  <Award className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{qualification.title}</h3>
                <p className="text-amber-600 font-semibold mb-2">{qualification.institution}</p>
                <p className="text-slate-500 text-sm mb-4">{qualification.year}</p>
                <p className="text-slate-600">{qualification.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">المسيرة المهنية</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              رحلة مهنية حافلة بالإنجازات والتطور المستمر
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
            
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                      <span className="text-amber-600 font-bold text-lg">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                    <p className="text-slate-600">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">مجالات الخبرة</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                أمتلك خبرة متخصصة في مختلف فروع القانون مع التركيز على تحقيق أفضل النتائج للعملاء
              </p>
              
              <div className="space-y-6">
                {expertise.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-800 font-semibold">{skill.area}</span>
                      <span className="text-amber-600 font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-amber-500 to-amber-600 h-3 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="خبرة قانونية"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">القيم والمبادئ</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              القيم التي أؤمن بها والتي تحكم ممارستي المهنية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-b from-amber-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-amber-600 mb-4">
                  <value.icon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;