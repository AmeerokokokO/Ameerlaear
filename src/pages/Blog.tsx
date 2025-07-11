import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'تطورات قانون الشركات الجديد في المملكة',
      excerpt: 'نظرة شاملة على التحديثات الأخيرة في قانون الشركات وتأثيرها على الأعمال التجارية',
      date: '2024-01-15',
      readTime: '5 دقائق',
      category: 'قانون الشركات',
      image: 'https://images.pexels.com/photos/5668856/pexels-photo-5668856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['قانون الشركات', 'تحديثات قانونية', 'الأعمال التجارية']
    },
    {
      id: 2,
      title: 'حقوق المستهلك في القانون السعودي',
      excerpt: 'دليل شامل حول حقوق المستهلك وكيفية حماية نفسك من الممارسات التجارية غير العادلة',
      date: '2024-01-10',
      readTime: '7 دقائق',
      category: 'حقوق المستهلك',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['حقوق المستهلك', 'حماية المستهلك', 'القانون السعودي']
    },
    {
      id: 3,
      title: 'التحكيم التجاري: الحل الأمثل لحل النزاعات',
      excerpt: 'مزايا التحكيم التجاري وكيف يمكن أن يوفر حلولاً سريعة وفعالة للنزاعات التجارية',
      date: '2024-01-05',
      readTime: '6 دقائق',
      category: 'التحكيم',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['التحكيم', 'حل النزاعات', 'القانون التجاري']
    },
    {
      id: 4,
      title: 'أهمية العقود في الأعمال التجارية',
      excerpt: 'كيفية صياغة عقود تجارية قوية وشاملة تحمي مصالحك التجارية',
      date: '2024-01-01',
      readTime: '4 دقائق',
      category: 'العقود',
      image: 'https://images.pexels.com/photos/5668852/pexels-photo-5668852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['العقود', 'الأعمال التجارية', 'صياغة العقود']
    },
    {
      id: 5,
      title: 'قانون العمل السعودي والتحديثات الأخيرة',
      excerpt: 'شرح مفصل للتحديثات الجديدة في قانون العمل وتأثيرها على أصحاب العمل والموظفين',
      date: '2023-12-28',
      readTime: '8 دقائق',
      category: 'قانون العمل',
      image: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['قانون العمل', 'حقوق العمال', 'التحديثات القانونية']
    },
    {
      id: 6,
      title: 'الجرائم الإلكترونية في النظام السعودي',
      excerpt: 'نظرة على قانون مكافحة الجرائم الإلكترونية وأهم الجرائم والعقوبات',
      date: '2023-12-25',
      readTime: '6 دقائق',
      category: 'الجرائم الإلكترونية',
      image: 'https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['الجرائم الإلكترونية', 'الأمن السيبراني', 'القانون الجنائي']
    }
  ];

  const categories = ['جميع المقالات', 'قانون الشركات', 'حقوق المستهلك', 'التحكيم', 'العقود', 'قانون العمل', 'الجرائم الإلكترونية'];

  const [selectedCategory, setSelectedCategory] = React.useState('جميع المقالات');

  const filteredPosts = selectedCategory === 'جميع المقالات' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">المدونة القانونية</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              مقالات متخصصة وتحليلات قانونية لتبسيط القانون وتوضيح أحدث التطورات
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
                    <span>اقرأ المزيد</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              ابق على اطلاع بآخر التطورات القانونية
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              اشترك في النشرة الإخبارية لتحصل على أحدث المقالات والتحليلات القانونية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 bg-white border-0 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                اشترك الآن
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;