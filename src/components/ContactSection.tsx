'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/content';
import { EditorialHeading } from './EditorialHeading';
import { Mail, MapPin, CheckCircle, AlertCircle, Send, Compass } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus('error');
      setErrorMessage(
        language === 'tr'
          ? 'Lütfen gizlilik ve iletişim onayını işaretleyin.'
          : 'Please accept the privacy and communication consent.'
      );
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', consent: false });
      } else {
        setStatus('error');
        setErrorMessage(data.error || (language === 'tr' ? 'Mesaj gönderilemedi.' : 'Failed to send message.'));
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        language === 'tr'
          ? 'Bir bağlantı hatası meydana geldi. Lütfen doğrudan e-posta ile ulaşın.'
          : 'A network error occurred. Please contact directly via email.'
      );
    }
  };

  return (
    <section id="iletisim" className="py-24 md:py-36 bg-[#FAF8F4] relative overflow-hidden">
      
      {/* Background Architectural Photographic Touch (Subtle, Muted Northern Cyprus Stone Motif) */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 bg-cover bg-center pointer-events-none hidden lg:block"
        style={{ backgroundImage: `url('/images/strip-bio.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/80 to-transparent" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <EditorialHeading
          label={language === 'tr' ? 'Bölüm 09 · İletişim' : 'Section 09 · Dialogue'}
          titleRegular={language === 'tr' ? 'Yeni Bir' : 'Initiating a'}
          titleItalic={language === 'tr' ? 'Diyalog Başlatalım.' : 'New Dialogue.'}
          description={
            language === 'tr'
              ? 'Mesleki temaslar, sektörel danışma, kurumsal heyet randevuları ve resmî görüşme talepleri için.'
              : 'Direct communication channel for professional consultations, executive inquiries, and official engagements.'
          }
        />

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries Info & Photographic Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Kyrenia Harbour Architectural Card */}
            <div className="relative aspect-[16/9] overflow-hidden border border-stoneGray bg-stoneGray-light shadow-sm">
              <img
                src="/images/hero-right-kyrenia.jpg"
                alt="Girne Antik Limanı ve Girne Kalesi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-sans">
                <span className="text-[10px] uppercase tracking-widest text-champagne-light block">
                  LOKASYON
                </span>
                <span className="font-serif text-base">Girne & Lefkoşa · Kuzey Kıbrıs</span>
              </div>
            </div>

            <div className="bg-white p-8 border border-stoneGray/80 shadow-sm">
              <h3 className="font-serif text-2xl text-charcoal font-light mb-4">
                {language === 'tr' ? 'Resmî İletişim Kanalları' : 'Official Channels'}
              </h3>
              <p className="text-sm text-textGray font-sans leading-relaxed mb-6 font-light">
                {language === 'tr'
                  ? 'Emine İkiz Leblebicioğlu’na mesleki toplantı, dernek faaliyetleri veya kurumsal istişare konularında doğrudan ulaşabilirsiniz.'
                  : 'Reach Emine İkiz Leblebicioğlu for institutional consultations, union agendas, or professional appointments.'}
              </p>

              <div className="space-y-5 text-sm font-sans">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-bronze mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-textGray font-medium">
                      {language === 'tr' ? 'Resmî E-posta' : 'Official Email'}
                    </span>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-charcoal hover:text-bronze font-medium transition-colors"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-bronze mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-textGray font-medium">
                      {language === 'tr' ? 'Merkez' : 'Primary Location'}
                    </span>
                    <span className="text-charcoal font-light">{siteConfig.officialLocation}</span>
                  </div>
                </div>
              </div>

              {/* Protocol Note */}
              <div className="mt-6 pt-5 border-t border-stoneGray/50 text-xs text-textGray font-sans leading-relaxed font-light">
                <p>
                  {language === 'tr'
                    ? 'Tüm iletişim talepleri gizlilik esasına tabi olarak değerlendirilmekte ve en kısa sürede geri dönüş sağlanmaktadır.'
                    : 'All inquiries are processed with strict professional confidentiality.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-stoneGray/80 shadow-sm">
            <h3 className="font-serif text-2xl text-charcoal font-light mb-2">
              {language === 'tr' ? 'Mesaj İletin' : 'Send a Formal Inscription'}
            </h3>
            <p className="text-xs text-textGray uppercase tracking-wider font-sans mb-8">
              {language === 'tr' ? 'Doğrudan İletişim Formu' : 'Direct Correspondence Dispatch'}
            </p>

            {status === 'success' ? (
              <div className="p-8 bg-[#FAF8F4] border border-bronze/40 text-center space-y-4">
                <CheckCircle className="w-10 h-10 text-bronze mx-auto" />
                <h4 className="font-serif text-2xl text-charcoal">
                  {language === 'tr' ? 'Mesajınız İletildi' : 'Message Dispatched'}
                </h4>
                <p className="text-sm font-sans text-textGray max-w-md mx-auto">
                  {language === 'tr'
                    ? 'İletişim talebiniz kaydedilmiştir. En kısa sürede geri dönüş yapılacaktır.'
                    : 'Your correspondence has been received and will be reviewed promptly.'}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 bg-charcoal text-white text-xs uppercase tracking-widest font-sans"
                >
                  {language === 'tr' ? 'Yeni Mesaj Gönder' : 'Dispatch Another'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                      {language === 'tr' ? 'Ad Soyad *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === 'tr' ? 'Örn. Ahmet Yılmaz' : 'e.g. Johnathan Vance'}
                      className="w-full px-4 py-3 bg-[#FAF8F4] border border-stoneGray focus:border-bronze focus:outline-none text-charcoal text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                      {language === 'tr' ? 'E-posta Adresi *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@alanadi.com"
                      className="w-full px-4 py-3 bg-[#FAF8F4] border border-stoneGray focus:border-bronze focus:outline-none text-charcoal text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                    {language === 'tr' ? 'Konu *' : 'Subject *'}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={
                      language === 'tr'
                        ? 'Mesleki Görüşme / Heyet Talebi / Sektörel Danışma'
                        : 'Institutional Consultation / Board Inquiry'
                    }
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-stoneGray focus:border-bronze focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                    {language === 'tr' ? 'Mesajınız *' : 'Message *'}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      language === 'tr'
                        ? 'Görüşme talebinizin veya mesajınızın detaylarını belirtiniz...'
                        : 'Please articulate the specifics of your inquiry...'
                    }
                    className="w-full px-4 py-3 bg-[#FAF8F4] border border-stoneGray focus:border-bronze focus:outline-none text-charcoal text-sm transition-colors"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 border-stoneGray text-bronze focus:ring-bronze"
                  />
                  <label htmlFor="consent" className="text-xs text-textGray leading-relaxed cursor-pointer select-none">
                    {language === 'tr'
                      ? 'Paylaştığım iletişim bilgilerimin bu talep kapsamında resmî yanıt verilmesi amacıyla işlenmesini ve gizlilik şartlarını onaylıyorum.'
                      : 'I consent to the processing of provided contact details solely for the purpose of addressing this formal inquiry.'}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#20201E] text-white text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 hover:bg-black disabled:opacity-50"
                >
                  <span>
                    {status === 'loading'
                      ? language === 'tr'
                        ? 'İletiliyor...'
                        : 'Transmitting...'
                      : language === 'tr'
                      ? 'Mesajı İlet'
                      : 'Dispatch Inscription'}
                  </span>
                  <Send className="w-3.5 h-3.5 text-bronze" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
