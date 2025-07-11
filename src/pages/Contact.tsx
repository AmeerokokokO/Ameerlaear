import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      info: '+966 50 123 4567',
      link: 'tel:+966501234567'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'info@lawyer.com',
      link: 'mailto:info@lawyer.com'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'شارع الملك فهد، الرياض، المملكة العربية السعودية',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      info: 'الأحد - الخميس: 8:00 ص - 6:00 م',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, link: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, link: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, link: '#', color: 'hover:text-pink-600' }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">تواصل معي</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              لا تتردد في التواصل معي للحصول على استشارة قانونية مجانية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">أرسل رسالة</h2>
              <p className="text-slate-600 mb-8">
                املأ النموذج أدناه وسأتواصل معك في أقرب وقت ممكن
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      موضوع الاستشارة *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">اختر موضوع الاستشارة</option>
                      <option value="criminal">قضايا جنائية</option>
                      <option value="contracts">عقود واتفاقيات</option>
                      <option value="consultation">استشارة عامة</option>
                      <option value="corporate">قانون الشركات</option>
                      <option value="family">قانون الأسرة</option>
                      <option value="administrative">قانون إداري</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  إرسال الرسالة
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">معلومات التواصل</h2>
                <p className="text-slate-600 mb-8">
                  يمكنك التواصل معي عبر إحدى الطرق التالية أو زيارة مكتبي مباشرة
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-600 hover:text-amber-600 transition-colors duration-200"
                        >
                          {info.info}
                        </a>
                      ) : (
                        <p className="text-slate-600">{info.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">تابعني على</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">موقع المكتب</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              يمكنك زيارة مكتبي في الموقع التالي أو التواصل معي للحصول على موعد
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="h-96 bg-gradient-to-r from-amber-100 to-amber-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">خريطة المكتب</h3>
                <p className="text-slate-600">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105"
                >
                  عرض على الخريطة
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              حالة طارئة؟
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              في حالة الطوارئ القانونية، يمكنك الاتصال بي مباشرة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966501234567"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                اتصال طارئ
              </a>
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                واتساب
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;