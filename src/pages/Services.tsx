import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Users, Building, Scale, HelpCircle, Briefcase, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'القضايا الجنائية',
      description: 'الترافع في القضايا الجنائية والدفاع عن حقوق المتهمين أمام المحاكم الجنائية',
      features: [
        'القضايا الجنائية العامة',
        'جرائم الأموال',
        'الجرائم الإلكترونية',
        'قضايا المخدرات',
        'الدفاع في التحقيقات'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FileText,
      title: 'العقود والاتفاقيات',
      description: 'صياغة ومراجعة العقود والاتفاقيات التجارية والمدنية بدقة عالية',
      features: [
        'عقود البيع والشراء',
        'عقود الإيجار',
        'عقود العمل',
        'الاتفاقيات التجارية',
        'مراجعة العقود'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'الاستشارات القانونية',
      description: 'تقديم الاستشارات القانونية المتخصصة في جميع فروع القانون',
      features: [
        'الاستشارات الفورية',
        'الاستشارات المكتبية',
        'استشارات الشركات',
        'الاستشارات الأسرية',
        'استشارات عن بُعد'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Building,
      title: 'قانون الشركات',
      description: 'خدمات قانونية متخصصة للشركات والمؤسسات التجارية',
      features: [
        'تأسيس الشركات',
        'الحوكمة المؤسسية',
        'عمليات الاندماج',
        'النزاعات التجارية',
        'الامتثال القانوني'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Scale,
      title: 'التحكيم والوساطة',
      description: 'حل النزاعات التجارية والمدنية عبر التحكيم والوساطة',
      features: [
        'التحكيم التجاري',
        'الوساطة المدنية',
        'تنفيذ أحكام التحكيم',
        'الاستشارات التحكيمية',
        'تدريب المحكمين'
      ],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Heart,
      title: 'قانون الأسرة',
      description: 'خدمات قانونية متخصصة في قضايا الأحوال الشخصية والأسرة',
      features: [
        'قضايا الطلاق',
        'النفقة والحضانة',
        'المواريث',
        'عقود الزواج',
        'قضايا النسب'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Briefcase,
      title: 'القانون الإداري',
      description: 'التعامل مع القضايا الإدارية والنزاعات مع الجهات الحكومية',
      features: [
        'القضايا الإدارية',
        'المناقصات والعطاءات',
        'الطعون الإدارية',
        'قضايا التعويضات',
        'الرخص والتراخيص'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: HelpCircle,
      title: 'الخدمات الاستشارية',
      description: 'خدمات استشارية متخصصة للأفراد والشركات',
      features: [
        'الاستشارات الوقائية',
        'دراسة الحالات',
        'التخطيط القانوني',
        'إدارة المخاطر',
        'التدريب القانوني'
      ],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'الاستشارة الأولية',
      description: 'نبدأ بجلسة استشارة مجانية لفهم حالتك وتحديد الحلول المناسبة'
    },
    {
      step: '02',
      title: 'تحليل الحالة',
      description: 'نقوم بدراسة شاملة للحالة وتحليل الوثائق والأدلة المتاحة'
    },
    {
      step: '03',
      title: 'وضع الاستراتيجية',
      description: 'نضع خطة عمل واضحة مع تحديد الخطوات والمراحل الزمنية'
    },
    {
      step: '04',
      title: 'التنفيذ والمتابعة',
      description: 'نبدأ في تنفيذ الخطة مع متابعة مستمرة وتقارير دورية'
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">خدماتي القانونية</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              خدمات قانونية شاملة ومتخصصة لحماية حقوقك وتحقيق أهدافك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">مجالات التخصص</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              أقدم مجموعة شاملة من الخدمات القانونية المتخصصة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className="text-slate-700 group-hover:text-amber-600 transition-colors duration-300 mb-4">
                    <service.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">كيف نعمل</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              نتبع منهجية واضحة ومنظمة لضمان تقديم أفضل الخدمات القانونية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 transform translate-x-8 w-full h-0.5 bg-amber-200"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-8">لماذا تختارني؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-amber-100">قضية ناجحة</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-amber-100">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-amber-100">نسبة النجاح</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              هل تحتاج إلى مساعدة قانونية؟
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              تواصل معي الآن للحصول على استشارة قانونية مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                احجز استشارة الآن
              </a>
              <a
                href="tel:+966501234567"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                اتصل بي مباشرة
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;