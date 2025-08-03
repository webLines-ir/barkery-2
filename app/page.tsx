'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Coffee, Croissant, Heart, MapPin, Clock, Phone, Wheat, Users, Calendar, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      category: 'نان‌های تازه',
      items: [
        { name: 'نان سوردو کلاسیک', price: '۲۸,۰۰۰', description: 'با خمیرمایه طبیعی و تخمیر ۲۴ ساعته' },
        { name: 'باگت فرانسوی', price: '۳۲,۰۰۰', description: 'پوسته طلایی و مغز نرم و هوادار' },
        { name: 'نان جو دوسر', price: '۲۵,۰۰۰', description: 'غنی از فیبر با طعم خاص جو' },
      ]
    },
    {
      category: 'شیرینی و نان',
      items: [
        { name: 'کروسان کره‌ای', price: '۳۵,۰۰۰', description: 'لایه‌لایه کره تازه، تخصص فرانسوی' },
        { name: 'دانیش پسته‌ای', price: '۴۲,۰۰۰', description: 'خمیر ورقه‌ای با کرم پسته اصل کرمان' },
        { name: 'اکلر وانیلی', price: '۲۸,۰۰۰', description: 'کرم وانیل خانگی در پوسته شو' },
      ]
    },
    {
      category: 'نوشیدنی‌های گرم',
      items: [
        { name: 'اسپرسو تک منشا', price: '۴۵,۰۰۰', description: 'دانه‌های منتخب از مزارع اتیوپی' },
        { name: 'کاپوچینو هنری', price: '۶۸,۰۰۰', description: 'شیر بخار شده با طرح‌های دست‌ساز' },
        { name: 'چای ماسالا', price: '۳۸,۰۰۰', description: 'ترکیب ادویه‌های معطر هندی' },
      ]
    }
  ];

  const communityEvents = [
    {
      title: 'کارگاه نان‌پزی سنتی',
      date: '۱۵ آذر ۱۴۰۳',
      description: 'آموزش تهیه نان‌های محلی با استاد نان‌پز'
    },
    {
      title: 'شب شعر و قهوه',
      date: '۲۲ آذر ۱۴۰۳', 
      description: 'شعرخوانی همراه با نوشیدنی‌های معطر'
    },
    {
      title: 'نمایشگاه عکس محله',
      date: '۳۰ آذر ۱۴۰۳',
      description: 'آثار عکاسان محلی از زندگی شهری'
    }
  ];
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 overflow-x-hidden" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrollY > 100 ? 'bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`text-2xl font-bold transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              کافه آرامش
            </div>
            <div className={`hidden md:flex space-x-reverse space-x-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a href="#home" className="hover:text-zinc-400 transition-colors duration-300">خانه</a>
              <a href="#about" className="hover:text-zinc-400 transition-colors duration-300">درباره ما</a>
              <a href="#craft" className="hover:text-zinc-400 transition-colors duration-300">هنر نان‌پزی</a>
              <a href="#menu" className="hover:text-zinc-400 transition-colors duration-300">منو</a>
              <a href="#community" className="hover:text-zinc-400 transition-colors duration-300">اجتماع</a>
              <a href="#contact" className="hover:text-zinc-400 transition-colors duration-300">تماس</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg"
            alt="نمای ویترین نانوایی مدرن با نان‌های تازه"
            fill
            className="object-cover"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/80 to-zinc-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 to-transparent" />
        </div>
        
        {/* Decorative wheat pattern */}
        <div className="absolute top-20 left-10 opacity-10 z-10">
          <Wheat className="w-32 h-32 text-amber-200 transform rotate-12" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-10 z-10">
          <Wheat className="w-24 h-24 text-amber-200 transform -rotate-45" />
        </div>
        
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/40 z-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 leading-tight transition-all duration-1000 text-shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            نانوایی
            <br />
            <span className="text-amber-200">آرامش</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-zinc-200 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 text-shadow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            جایی که نان تازه، هنر و انسانیت در آغوش یکدیگر آرام می‌گیرند
          </p>
          
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ChevronDown className="mx-auto animate-bounce w-8 h-8 text-amber-200" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-zinc-200">
                داستان
                <br />
                <span className="text-amber-200">نان ما</span>
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                در قلب شهر، جایی که عطر نان تازه با صدای زندگی آمیخته می‌شود، ما هر روز با عشق 
                و دقت نان‌هایی می‌پزیم که روح شهر را تغذیه می‌کند.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                نانوایی آرامش تنها مکانی برای خرید نان نیست؛ این‌جا فضایی است برای یافتن خود، 
                ملاقات با همسایگان و خلق لحظات گرم خانوادگی.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg"
                  alt="نان‌پز در حال کار"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <div className="flex items-center justify-center h-full">
                  <Heart className="w-16 h-16 text-amber-200 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section id="craft" className="py-32 px-6 bg-zinc-800/20 relative">
        {/* Background wheat pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20">
            <Wheat className="w-40 h-40 text-amber-200 transform rotate-12" />
          </div>
          <div className="absolute bottom-20 left-32">
            <Wheat className="w-32 h-32 text-amber-200 transform -rotate-45" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-zinc-200">
              هنر
              <br />
              <span className="text-amber-200">نان‌پزی</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              هر نان داستانی دارد. از انتخاب بهترین آرد تا لحظه‌ای که طلایی از فر بیرون می‌آید، 
              ما با احترام به سنت و نوآوری در تکنیک، نان‌هایی می‌آفرینیم که جان می‌بخشند.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-amber-200/10 rounded-full flex items-center justify-center group-hover:bg-amber-200/20 transition-colors duration-300">
                <Wheat className="w-10 h-10 text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-200">مواد اولیه</h3>
              <p className="text-zinc-400 leading-relaxed">
                آرد ارگانیک از بهترین گندم‌های ایران، خمیرمایه طبیعی با قدمت ۵ سال
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-amber-200/10 rounded-full flex items-center justify-center group-hover:bg-amber-200/20 transition-colors duration-300">
                <Clock className="w-10 h-10 text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-200">زمان</h3>
              <p className="text-zinc-400 leading-relaxed">
                تخمیر آهسته ۱۸ تا ۲۴ ساعته برای عمق طعم و بافت بی‌نظیر
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-amber-200/10 rounded-full flex items-center justify-center group-hover:bg-amber-200/20 transition-colors duration-300">
                <Heart className="w-10 h-10 text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-200">عشق</h3>
              <p className="text-zinc-400 leading-relaxed">
                دست‌های ماهر نان‌پزان ما که هر نان را با محبت شکل می‌دهند
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 bg-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-zinc-200">
            نان‌ها و شیرینی‌های
            <br />
            <span className="text-amber-200">تازه روز</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <h3 className="text-3xl font-bold text-amber-200 border-b border-amber-200/30 pb-4">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group hover:bg-zinc-700/30 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-zinc-600/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-lg font-bold text-amber-200">
                          {item.price} تومان
                        </span>
                      </div>
                      <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 text-zinc-200">
            اجتماع
            <br />
            <span className="text-amber-200">آرامش</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-amber-200">رویدادهای پیش رو</h3>
              <div className="space-y-6">
                {communityEvents.map((event, index) => (
                  <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50 hover:border-amber-200/30 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-zinc-200">{event.title}</h4>
                      <span className="text-amber-200 text-sm">{event.date}</span>
                    </div>
                    <p className="text-zinc-400">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8 text-amber-200">مشتریان عزیز</h3>
              <div className="space-y-6">
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
                  <p className="text-zinc-300 mb-4 italic">
                    "هر روز صبح، عطر نان تازه آرامش مرا به خانه دوم من می‌کشاند. این‌جا واقعاً احساس تعلق می‌کنم."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-200/20 rounded-full flex items-center justify-center ml-3">
                      <Users className="w-5 h-5 text-amber-200" />
                    </div>
                    <span className="text-zinc-400">مریم احمدی</span>
                  </div>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700/50">
                  <p className="text-zinc-300 mb-4 italic">
                    "کیفیت نان‌ها فوق‌العاده است. انگار مادربزرگم پخته! طعم اصیل و خانگی."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amber-200/20 rounded-full flex items-center justify-center ml-3">
                      <Users className="w-5 h-5 text-amber-200" />
                    </div>
                    <span className="text-zinc-400">علی رضایی</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media Integration */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-amber-200">ما را دنبال کنید</h3>
            <div className="flex justify-center space-x-reverse space-x-8">
              <a href="#" className="group flex items-center space-x-reverse space-x-3 bg-zinc-800/50 px-6 py-3 rounded-lg border border-zinc-700/50 hover:border-amber-200/30 transition-colors duration-300">
                <Instagram className="w-6 h-6 text-amber-200" />
                <span className="text-zinc-300 group-hover:text-white transition-colors">اینستاگرام</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-zinc-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-zinc-200">
            در انتظار
            <br />
            <span className="text-amber-200">حضور شما</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-4">
              <MapPin className="w-8 h-8 mx-auto text-amber-200" />
              <h3 className="text-xl font-semibold text-amber-200">آدرس</h3>
              <p className="text-zinc-400 leading-relaxed">
                تهران، خیابان ولیعصر
                <br />
                کوچه سکوت، پلاک ۱۲
              </p>
            </div>
            
            <div className="space-y-4">
              <Clock className="w-8 h-8 mx-auto text-amber-200" />
              <h3 className="text-xl font-semibold text-amber-200">ساعات کاری</h3>
              <p className="text-zinc-400 leading-relaxed">
                همه روزه
                <br />
                ۶:۰۰ تا ۲۲:۰۰
              </p>
            </div>
            
            <div className="space-y-4">
              <Phone className="w-8 h-8 mx-auto text-amber-200" />
              <h3 className="text-xl font-semibold text-amber-200">تماس</h3>
              <p className="text-zinc-400 leading-relaxed">
                ۰۲۱-۱۲۳۴۵۶۷۸
                <br />
                info@nanavayearamesh.ir
              </p>
            </div>
          </div>
          
          <p className="text-xl text-zinc-300 leading-relaxed">
            هر روز، نان تازه‌ای برای آغاز روزی بهتر
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-500">
            © ۱۴۰۳ نانوایی آرامش. تمامی حقوق محفوظ است.
          </p>
        </div>
      </footer>
    </div>
  );
}