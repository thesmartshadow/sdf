import { Plane, Building, Search, MapPin, Calendar, Users, CreditCard, Shield, Headset, Menu, X, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSearchTab, setActiveSearchTab] = useState<'flights' | 'hotels'>('flights');

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white font-sans overflow-x-hidden relative select-none">
      {/* Decorative Elements */}
      <div className="absolute top-[20%] -left-24 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[10%] -right-24 w-[300px] h-[300px] bg-zinc-600/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rotate-45 flex items-center justify-center">
                  </div>
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">رحلاتي</span>
              </div>
              <div className="hidden md:flex items-center space-x-8 space-x-reverse mr-12 border-r border-white/10 pr-8 uppercase tracking-widest text-sm">
                <a href="#" className="font-medium text-white border-b border-brand-600 pb-1">الرئيسية</a>
                <a href="#" className="font-medium text-white/70 hover:text-white transition-colors py-2">طيران</a>
                <a href="#" className="font-medium text-white/70 hover:text-white transition-colors py-2">فنادق</a>
                <a href="#" className="font-medium text-white/70 hover:text-white transition-colors py-2">العروض</a>
                <a href="#" className="font-medium text-white/70 hover:text-white transition-colors py-2">وجهاتنا</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <button className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">تسجيل الدخول</button>
              <button className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
                حساب جديد
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/70 hover:text-white focus:outline-none p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050505] border-t border-white/10 shadow-xl absolute w-full z-50">
            <div className="px-4 pt-2 pb-6 space-y-1 uppercase tracking-widest text-sm">
              <a href="#" className="block px-3 py-3 rounded-md font-bold text-brand-500 bg-white/5">الرئيسية</a>
              <a href="#" className="block px-3 py-3 rounded-md font-medium text-white/70 hover:text-white hover:bg-white/5">طيران</a>
              <a href="#" className="block px-3 py-3 rounded-md font-medium text-white/70 hover:text-white hover:bg-white/5">فنادق</a>
              <a href="#" className="block px-3 py-3 rounded-md font-medium text-white/70 hover:text-white hover:bg-white/5">العروض</a>
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3 px-3">
                <button className="w-full text-center border border-white/20 text-white py-3 rounded-full text-xs font-bold transition-all hover:bg-white hover:text-black">تسجيل الدخول</button>
                <button className="w-full text-center bg-brand-600 text-white py-3 rounded-full text-xs font-bold">حساب جديد</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative flex-1 flex flex-col pt-16 pb-20 justify-center min-h-[500px]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center">
          <span className="text-brand-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">
            تجربة سفر لا تُنسى
          </span>
          <h1 className="text-6xl md:text-8xl font-light leading-[1.1] mb-6 text-white text-balance">
            اكتشف العالم <br/>
            <span className="italic text-zinc-400 font-serif">بأناقة مطلقة</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto mb-16 leading-relaxed">
            نقدم لك أفضل الأسعار التنافسية على حجوزات الطيران والفنادق الفاخرة حول العالم مع خدمة عملاء على مدار الساعة.
          </p>

          {/* Search Widget - Glassmorphism */}
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl w-full max-w-5xl overflow-hidden mb-8 relative z-20 shadow-2xl">
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveSearchTab('flights')}
                className={`flex-1 py-5 flex items-center justify-center gap-2 font-bold text-sm tracking-widest uppercase transition ${activeSearchTab === 'flights' ? 'text-white border-b-2 border-brand-600 bg-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
              >
                <Plane className="w-4 h-4" />
                حجز طيران
              </button>
              <button 
                onClick={() => setActiveSearchTab('hotels')}
                className={`flex-1 py-5 flex items-center justify-center gap-2 font-bold text-sm tracking-widest uppercase transition ${activeSearchTab === 'hotels' ? 'text-white border-b-2 border-brand-600 bg-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
              >
                <Building className="w-4 h-4" />
                حجز فنادق
              </button>
            </div>
            
            <div className="p-6 text-right">
              {activeSearchTab === 'flights' ? (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row bg-zinc-900/80 border border-white/5 rounded-xl divide-y md:divide-y-0 md:divide-x-reverse md:divide-x md:divide-white/5">
                    <div className="flex-1 flex px-6 py-4 relative group">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">من أين؟</span>
                        <input type="text" placeholder="مدينة المغادرة" className="w-full bg-transparent text-lg font-medium text-white placeholder-zinc-600 outline-none" />
                      </div>
                    </div>
                    <div className="flex-1 flex px-6 py-4 relative group">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">إلى أين؟</span>
                        <input type="text" placeholder="وجهة الوصول" className="w-full bg-transparent text-lg font-medium text-white placeholder-zinc-600 outline-none" />
                      </div>
                    </div>
                    <div className="flex-1 flex px-6 py-4 relative group">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">التاريخ</span>
                        <input type="date" className="w-full bg-transparent text-lg font-medium text-white placeholder-zinc-600 outline-none" style={{ colorScheme: 'dark' }} />
                      </div>
                    </div>
                    <div className="flex-1 flex px-6 py-4 relative group cursor-pointer">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">المسافرون</span>
                        <div className="w-full bg-transparent text-lg font-medium text-white flex justify-between items-center">
                          <span>1 مسافر، سياحية</span>
                          <ChevronDown className="h-4 w-4 text-zinc-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-brand-600 flex items-center justify-center">
                          <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                        </div>
                        <span className="text-white text-sm tracking-wide group-hover:text-brand-500 transition">ذهاب وعودة</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center">
                        </div>
                        <span className="text-zinc-400 text-sm tracking-wide group-hover:text-white transition">ذهاب فقط</span>
                      </label>
                    </div>
                    <button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-xl transition-all shadow-lg shadow-brand-600/20">
                       البحث عن رحلات
                    </button>
                  </div>
                </div>
              ) : (
                 <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row bg-zinc-900/80 border border-white/5 rounded-xl divide-y md:divide-y-0 md:divide-x-reverse md:divide-x md:divide-white/5">
                    <div className="flex-[2] flex px-6 py-4 relative group">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">الوجهة أو اسم الفندق</span>
                        <input type="text" placeholder="أين تريد الذهاب؟" className="w-full bg-transparent text-lg font-medium text-white placeholder-zinc-600 outline-none" />
                      </div>
                    </div>
                    <div className="flex-1 flex px-6 py-4 relative group">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">تاريخ الدخول</span>
                        <input type="date" className="w-full bg-transparent text-lg font-medium text-white placeholder-zinc-600 outline-none" style={{ colorScheme: 'dark' }} />
                      </div>
                    </div>
                    <div className="flex-1 flex px-6 py-4 relative group">
                      <div className="flex flex-col w-full">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1 font-bold">تاريخ الخروج</span>
                        <input type="date" className="w-full bg-transparent text-lg font-medium text-white placeholder-zinc-600 outline-none" style={{ colorScheme: 'dark' }} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-2">
                    <button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-xl transition-all shadow-lg shadow-brand-600/20">
                       البحث عن فنادق
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-24 relative z-10 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-brand-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">وجهات محببة</h2>
              <h3 className="text-5xl font-light text-white leading-tight">أشهر الوجهات بأسعار<br/><span className="italic text-zinc-400 font-serif">تنافسية وحصرية</span></h3>
            </div>
            <a href="#" className="hidden md:flex text-white font-bold text-sm uppercase tracking-widest hover:text-brand-500 transition items-center gap-1 border-b border-white/20 hover:border-brand-500 pb-1">
              عرض كل الوجهات
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'دبي، الإمارات', price: '١,٢٠٠', tag: 'الأكثر مبيعاً', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
              { title: 'الرياض، السعودية', price: '٩٥٠', tag: 'عروض حصرية', img: 'https://images.unsplash.com/photo-1586724237569-f3d0c1ebd8c1?auto=format&fit=crop&q=80&w=800' },
              { title: 'القاهرة، مصر', price: '٦٠٠', tag: 'تاريخ عريق', img: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800' },
              { title: 'مراكش، المغرب', price: '١,٣٠٠', tag: 'سحر الشرق', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800' },
              { title: 'الدوحة، قطر', price: '١,١٠٠', tag: 'رفاهية', img: 'https://images.unsplash.com/photo-1588696898951-4033c467a840?auto=format&fit=crop&q=80&w=800' },
              { title: 'عمّان، الأردن', price: '٧٠٠', tag: 'أصالة', img: 'https://images.unsplash.com/photo-1542157585-ef20bfcb37ce?auto=format&fit=crop&q=80&w=800' },
              { title: 'اسطنبول، تركيا', price: '٨٥٠', tag: 'عروض حصرية', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800' },
              { title: 'لندن، المملكة المتحدة', price: '٢,١٠٠', tag: 'مفضلة', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800' },
            ].map((dest, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-zinc-900/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-[#050505]/80 backdrop-blur text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/10">
                    {dest.tag}
                  </div>
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative -mt-10 z-20">
                  <h3 className="text-2xl font-light text-white mb-2">{dest.title}</h3>
                  <div className="flex gap-2 items-center text-zinc-500 text-xs tracking-wider uppercase mb-6 font-bold">
                    <span>طيران</span> <span className="w-1 h-1 bg-zinc-700 rounded-full"></span> <span>فندق</span>
                  </div>
                  <div className="mt-auto flex justify-between items-end border-t border-white/5 pt-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-bold">تبدأ من</span>
                      <div className="text-2xl font-light text-white leading-none">{dest.price} <span className="text-xs text-zinc-500 font-medium">ر.س</span></div>
                    </div>
                    <button className="bg-white/5 text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border border-white/10">
                      عرض
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <button className="w-full bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-white/5 transition">
              عرض كل الوجهات
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us & Stats */}
      <div className="py-24 relative z-10 border-t border-white/10 bg-zinc-900/20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-brand-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">لماذا تختار رحلاتي؟</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-xl italic font-serif">نجعل السفر أسهل وأكثر متعة</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 text-brand-500 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 tracking-wide">أفضل الأسعار المضمونة</h3>
              <p className="text-zinc-500 text-center text-sm leading-relaxed max-w-xs">
                نقارن آلاف الرحلات والفنادق لنوفر لك السعر الأفضل دائماً بدون رسوم خفية.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 text-brand-500 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 tracking-wide">حجز آمن وموثوق</h3>
              <p className="text-zinc-500 text-center text-sm leading-relaxed max-w-xs">
                نستخدم أحدث تقنيات التشفير لحماية بياناتك الشخصية والمالية في كل حجز.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/5 border border-white/10 text-brand-500 rounded-full flex items-center justify-center mb-6">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 tracking-wide">دعم فني على مدار الساعة</h3>
              <p className="text-zinc-500 text-center text-sm leading-relaxed max-w-xs">
                فريقنا متاح 24/7 عبر الهاتف والمراسلة الفورية لمساعدتك قبل وأثناء رحلتك.
              </p>
            </div>
          </div>

          {/* Stats from design HTML */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#050505]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-10">
            <div className="text-center md:text-right md:border-l md:border-white/10 md:pl-8">
              <span className="block text-4xl font-light text-white mb-2">+500</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">وجهة عالمية</span>
            </div>
            <div className="text-center md:text-right md:border-l md:border-white/10 md:pl-8">
              <span className="block text-4xl font-light text-white mb-2">-30%</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">خصومات الفنادق</span>
            </div>
            <div className="text-center md:text-right md:border-l md:border-white/10 md:pl-8">
              <span className="block text-4xl font-light text-white mb-2">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">دعم فني متميز</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-4xl font-light text-white mb-2">★ 4.9</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">تقييم المستخدمين</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Companies */}
      <div className="py-16 relative z-10 border-t border-white/10 bg-[#050505]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-10">نثق بنا وشركاء معنا أفضل شركات الطيران العالمية</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale transition-all duration-500 hover:opacity-100">
              <div className="text-2xl font-black text-white flex items-center gap-2"><Plane className="h-6 w-6"/> QATAR</div>
              <div className="text-2xl font-black text-white flex items-center gap-2"><Plane className="h-6 w-6"/> EMIRATES</div>
              <div className="text-2xl font-black text-white">FLYDUBAI</div>
              <div className="text-2xl font-black text-white">SAUDIA</div>
            </div>
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white pt-20 pb-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rotate-45"></div>
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">رحلاتي</span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                منصتك الأولى لحجز تذاكر الطيران، الفنادق، والعروض السياحية بأسعار لا تُنافس. نجعل السفر أسهل وأكثر متعة بأناقة مطلقة.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-white border-b border-white/10 pb-3 inline-block">روابط سريعة</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition flex items-center gap-3"><span className="w-1 h-1 bg-brand-600 rounded-full"></span> حجز طيران</a></li>
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition flex items-center gap-3"><span className="w-1 h-1 bg-brand-600 rounded-full"></span> حجز فنادق</a></li>
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition flex items-center gap-3"><span className="w-1 h-1 bg-brand-600 rounded-full"></span> عروض العطلات</a></li>
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition flex items-center gap-3"><span className="w-1 h-1 bg-brand-600 rounded-full"></span> عروض اللحظة الأخيرة</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-white border-b border-white/10 pb-3 inline-block">الدعم والمساعدة</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition">مركز المساعدة</a></li>
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition">تعديل وإلغاء الحجز</a></li>
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition">سياسة الخصوصية</a></li>
                <li><a href="#" className="text-zinc-500 text-sm hover:text-white transition">الشروط والأحكام</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-white border-b border-white/10 pb-3 inline-block">النشرة البريدية</h4>
              <p className="text-zinc-500 text-sm mb-4">اشترك ليصلك أحدث عروض الطيران والفنادق المميزة.</p>
              <div className="flex flex-col gap-3">
                <input type="email" placeholder="البريد الإلكتروني" className="bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-white/30 transition text-sm placeholder-zinc-600 font-medium" />
                <button className="bg-white text-[#050505] hover:bg-brand-600 hover:text-white text-xs uppercase tracking-widest font-bold py-3 rounded-xl transition-all">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} موقع رحلاتي. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-6 bg-white/5 border border-white/10 rounded flex items-center justify-center p-1"><span className="text-[10px] font-bold font-mono text-white/50">VISA</span></div>
              <div className="w-10 h-6 bg-white/5 border border-white/10 rounded flex items-center justify-center p-1"><span className="text-[10px] font-bold font-mono text-white/50">MC</span></div>
              <div className="w-10 h-6 bg-white/5 border border-white/10 rounded flex items-center justify-center p-1"><span className="text-[10px] font-bold font-mono text-white/50">AMEX</span></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
