import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'محمد الأحمد',
      position: 'مدير شركة تجارية',
      content: 'تعاملت مع المحامي أحمد في عدة قضايا تجارية، وكان دائماً محترف ومتفهم للوضع. نصائحه القانونية كانت دقيقة ومفيدة جداً. أنصح بالتعامل معه بثقة تامة.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'فاطمة الزهراني',
      position: 'صاحبة مؤسسة صغيرة',
      content: 'استشرت المحامي أحمد في قضية عقد إيجار معقدة، وقد قدم لي الحلول المناسبة بطريقة واضحة ومفهومة. خدمته المتميزة وخبرته الواسعة ساعدتني كثيراً.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'عبدالله السعيد',
      position: 'مهندس',
      content: 'كان لي نزاع مع شركة مقاولات، والمحامي أحمد تولى القضية بكل احترافية. لم يكن فقط محامياً بل مستشاراً أثق به. حصلت على حقوقي بفضل خبرته.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'نورا الشمري',
      position: 'طبيبة',
      content: 'احتجت إلى استشارة قانونية عاجلة، وقد استجاب المحامي أحمد بسرعة ومهنية عالية. شرح لي الوضع القانوني بوضوح وقدم نصائح عملية ومفيدة.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      name: 'خالد الدوسري',
      position: 'رجل أعمال',
      content: 'تعاملت مع المحامي أحمد في تأسيس شركتي الجديدة، وكان تعامله راقي ومهني. ساعدني في جميع الإجراءات القانونية وقدم لي نصائح قيمة لتجنب المشاكل المستقبلية.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      name: 'سارة العتيبي',
      position: 'محاسبة',
      content: 'كان لي قضية معقدة في قانون الأسرة، والمحامي أحمد تعامل مع الموضوع بحساسية ومهنية عالية. لم أشعر بالقلق أبداً لأنني كنت أعرف أنني في أيد أمينة.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">آراء العملاء</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              شهادات حقيقية من عملائي تعكس جودة الخدمات القانونية المقدمة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-100">عميل راضي</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-amber-100">نسبة الرضا</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-amber-100">دعم متاح</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-amber-100">سنة خبرة</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              شهادات حقيقية من عملاء تعاملوا معي وحصلوا على خدمات قانونية متميزة
            </p>
          </motion.div>

          <div className="relative">
            {/* Main Carousel */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-16"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3">
                      <div className="relative">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-amber-400 shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-amber-600 rounded-full p-2">
                          <Quote className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 text-center md:text-right">
                      <div className="flex justify-center md:justify-end mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-xl text-slate-700 mb-6 leading-relaxed italic">
                        "{testimonials[currentIndex].content}"
                      </p>
                      
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-amber-600 font-medium">
                          {testimonials[currentIndex].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-amber-600 w-8'
                      : 'bg-gray-300 hover:bg-amber-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">جميع الشهادات</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              مجموعة شاملة من آراء العملاء عن جودة الخدمات المقدمة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div className="mr-4">
                    <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-amber-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
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
              انضم إلى عملائي الراضين
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              احصل على خدمة قانونية متميزة وكن جزءاً من قصص النجاح
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                احجز استشارة الآن
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                استعرض الخدمات
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;