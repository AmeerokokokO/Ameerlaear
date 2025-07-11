import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Scale className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold">المحامي أحمد محمد</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              محامي متخصص في القانون المدني والتجاري مع خبرة تزيد عن 15 عامًا في تقديم الاستشارات القانونية والترافع أمام المحاكم.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-amber-600 transition-colors duration-200">الرئيسية</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-amber-600 transition-colors duration-200">نبذة عني</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-amber-600 transition-colors duration-200">الخدمات</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-amber-600 transition-colors duration-200">المدونة</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-amber-600 transition-colors duration-200">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-slate-300">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-amber-600" />
                <span className="text-slate-300">info@lawyer.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span className="text-slate-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 المحامي أحمد محمد. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-amber-600 text-sm transition-colors duration-200">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-amber-600 text-sm transition-colors duration-200">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;