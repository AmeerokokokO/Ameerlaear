import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'القضايا الجنائية',
      description: 'الترافع في القضايا الجنائية والدفاع عن حقوق المتهمين',
      icon: Shield,
    },
    {
      title: 'العقود والاتفاقيات',
      description: 'صياغة ومراجعة العقود والاتفاقيات التجارية والمدنية',
      icon: Award,
    },
    {
      title: 'الاستشارات القانونية',
      description: 'تقديم الاستشارات القانونية المتخصصة في جميع المجالات',
      icon: Users,
    },
  ];

  const stats = [
    { number: '500+', label: 'قضية ناجحة' },
    { number: '15+', label: 'سنة خبرة' },
    { number: '1000+', label: 'عميل راضي' },
    { number: '50+', label: 'شركة وثقت بنا' },
  ];

  const achievements = [
    'حاصل على ماجستير في القانون المدني',
    'عضو نقابة المحامين المعتمد',
    'خبرة 15 عام في المحاماة',
    'نسبة نجاح 95% في القضايا',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              المحامي 
              <span className="text-amber-400"> أحمد محمد</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              خبرة تزيد عن 15 عامًا في تقديم الاستشارات القانونية والترافع أمام المحاكم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                احجز استشارة مجانية
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                استعرض الخدمات
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
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
              <h2 className="text-4xl font-bold text-slate-900 mb-6">نبذة عني</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                أنا المحامي أحمد محمد، متخصص في القانون المدني والتجاري مع خبرة تزيد عن 15 عامًا في تقديم الاستشارات القانونية والترافع أمام المحاكم. أؤمن بأن العدالة حق للجميع وأسعى لتحقيقها من خلال تقديم خدمات قانونية متميزة.
              </p>
              
              <div className="space-y-3 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105"
              >
                <span>اقرأ المزيد</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">خدماتي القانونية</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              أقدم مجموعة شاملة من الخدمات القانونية لتلبية احتياجاتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-amber-600 mb-4">
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              <span>عرض جميع الخدمات</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
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
              هل تحتاج إلى استشارة قانونية؟
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              احصل على استشارة قانونية مجانية واحمي حقوقك مع خبير في القانون
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                احجز استشارة الآن
              </Link>
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

export default Home;