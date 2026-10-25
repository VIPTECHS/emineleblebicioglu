import {
  Milestone,
  Affiliation,
  Contribution,
  PressItem,
  GalleryPhoto,
  CoreValue,
  EducationItem,
  VolunteerEducationItem,
  CareerPosition,
  ProfessionalTraining,
  PoliticalProfile,
  Language
} from './types';
import { imageManifest } from './imageManifest';

export const siteConfig = {
  name: 'Emine İkiz Leblebicioğlu',
  titleTR: 'Emine İkiz Leblebicioğlu — TAM Parti Girne Milletvekili Adayı',
  titleEN: 'Emine İkiz Leblebicioğlu — TAM Party Kyrenia Parliamentary Candidate',
  descriptorTR: 'PROFESYONEL VE TOPLUMSAL YOLCULUK · GİRNE',
  descriptorEN: 'PROFESSIONAL AND CIVIC JOURNEY · KYRENIA',
  heroTaglineTR: 'Bir İsmin Ardındaki Hikâye.',
  heroTaglineEN: 'The Story Behind a Name.',
  heroIntroTR: 'Yönetim, insan kaynakları, bilişim ve gayrimenkul alanlarında 2002 yılından bu yana uzanan profesyonel deneyimi; eğitim, sivil toplum ve siyasi çalışmalarını kapsayan çok yönlü bir yaşam öyküsü.',
  heroIntroEN: 'A multifaceted life journey encompassing professional experience across management, human resources, IT, and real estate since 2002, alongside contributions to education, civil society, and civic engagement.',
  primaryActionTR: 'HAYAT HİKÂYESİNİ KEŞFEDİN',
  primaryActionEN: 'EXPLORE HER STORY',
  secondaryActionTR: 'SİYASİ ÇALIŞMALARI İNCELEYİN',
  secondaryActionEN: 'EXPLORE POLITICAL & CIVIC WORK',
  contactEmail: 'iletisim@emineleblebicioglu.com',
  officialLocation: 'Girne / Lefkoşa, Kuzey Kıbrıs',
};

export const navigationLinks: Array<{ href: string; labelTR: string; labelEN: string }> = [
  { href: '/', labelTR: 'Ana Sayfa', labelEN: 'Home' },
  { href: '/hakkinda', labelTR: 'Hakkında', labelEN: 'Biography' },
  { href: '/kariyer', labelTR: 'Kariyer Yolculuğu', labelEN: 'Career Journey' },
  { href: '/calismalar', labelTR: 'Çalışmaları', labelEN: 'Affiliations & Work' },
  { href: '/siyasi-calismalar', labelTR: 'Siyasi Çalışmalar', labelEN: 'Political & Civic' },
  { href: '/basin', labelTR: 'Basında', labelEN: 'Press & Media' },
  { href: '/iletisim', labelTR: 'İletişim', labelEN: 'Contact' },
];

export const personalIdentity = {
  fullName: 'Emine İkiz Leblebicioğlu',
  birthDate: {
    tr: '25 Ocak 1980',
    en: 'January 25, 1980',
  },
  birthPlace: {
    tr: 'Hatay, Türkiye',
    en: 'Hatay, Türkiye',
  },
  residence: {
    tr: 'Girne, Kuzey Kıbrıs Türk Cumhuriyeti',
    en: 'Kyrenia, Northern Cyprus',
  },
  maritalStatus: {
    tr: 'Evli',
    en: 'Married',
  },
  foreignLanguage: {
    tr: 'İngilizce',
    en: 'English',
  },
  verificationStatus: 'owner_provided' as const,
};

export const biographyContent = {
  leadTR: 'Bir İsmin Ardındaki Hikâye.',
  leadEN: 'The Story Behind a Name.',
  officialIntroTR: `25 Ocak 1980 tarihinde Hatay'da dünyaya gelen Emine İkiz Leblebicioğlu, İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı'ndan mezun olmuş, yüksek lisans eğitimini Yeditepe Üniversitesi'nde tamamlamıştır.

Profesyonel iş hayatına 2002 yılında başlamış; telekomünikasyon, müşteri ilişkileri, insan kaynakları, eğitim, turizm, bilişim ve gayrimenkul sektörlerinde yöneticilik ve danışmanlık görevleri üstlenmiştir.

Mesleki kariyerinde ekip yönetimi, kurumsal gelişim, operasyonel süreçler ve insan kaynakları gibi alanlarda çalışmalar yürütmüştür.

İş hayatının yanı sıra müzik eğitimi ve gönüllülük faaliyetlerine katkıda bulunmuş; Kuzey Kıbrıs'ta mesleki örgütlenme ve sivil toplum çalışmalarında da yer almıştır.`,

  officialIntroEN: `Born on January 25, 1980 in Hatay, Emine İkiz Leblebicioğlu graduated from the Istanbul Technical University Turkish Music State Conservatory and completed her master's studies at Yeditepe University.

Beginning her professional career in 2002, she has undertaken management and consulting responsibilities across telecommunications, customer relations, human resources, training, tourism, information technology, and the real estate industry.

Her professional career spans team leadership, institutional development, operational processes, and human capital administration.

Alongside her corporate career, she has contributed to music education and social volunteering, as well as actively participating in professional governance and civil society initiatives across Northern Cyprus.`,

  sectionsTR: [
    {
      id: 'ilk-yillar-ve-egitim',
      title: 'İlk Yıllar ve Eğitim',
      subtitle: 'Sanat Formasyonundan Akademik Derinliğe',
      content: `Hatay doğumlu Emine İkiz Leblebicioğlu, akademik hayatına İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı'nda başlamıştır. Konservatuvar eğitimi, ona yalnızca musiki icrası ve nazariyatı değil; yüksek düzeyde disiplin, dinleme yetkinliği, kompozisyonel bütünlük ve analitik estetik kazandırmıştır. Bu altyapıyı daha sonra Yeditepe Üniversitesi'ndeki yüksek lisans çalışmalarıyla taçlandırarak yönetimsel ve analitik perspektifini çok disiplinli bir birikimle güçlendirmiştir.`
    },
    {
      id: 'profesyonel-hayat',
      title: 'Profesyonel Hayata İlk Adımlar',
      subtitle: '2002: Telekomünikasyon ve Takım Liderliği',
      content: `2002 yılında başlayan profesyonel kariyerinin ilk büyük evresi Global Bilgi bünyesinde şekillenmiştir. Digiturk müşteri hizmetleri operasyonlarında Takım Lideri olarak görev almış; çalışan eğitimleri, performans değerlendirme sistemleri, operasyonel planlama, hizmet kalitesi yönetimi ve yüksek hacimli müşteri ilişkileri süreçlerini yönetmiştir.`
    },
    {
      id: 'yonetim-ve-ik',
      title: 'Yönetim ve İnsan Kaynakları Deneyimi',
      subtitle: 'Telpa ve Çok Boyutlu İK Danışmanlığı',
      content: `2007–2009 döneminde Telpa Telekomünikasyon bünyesinde İnsan Kaynakları Danışmanı olarak görev almıştır. Bu süreçte doğru adayın doğru pozisyonla buluşması, kurumsal yetkinlik modelleri, mülakat teknikleri ve organizasyonel danışmanlık alanlarında uzmanlaşmıştır. Bu görev, Global Bilgi dönemindeki operasyonel liderlik tecrübesiyle eşzamanlı bir kurumsal derinlik oluşturmuştur.`
    },
    {
      id: 'turizm-ve-cagri-merkezi',
      title: 'Turizm, Operasyon ve İletişim Yönetimi',
      subtitle: 'Jasmine Court ve Calltech Süreçleri',
      content: `2010 yılında Kuzey Kıbrıs'ın köklü turizm merkezlerinden Jasmine Court Hotel bünyesinde Çağrı Merkezi Yöneticisi olarak görev alarak misafir deneyimi, rezervasyon koordinasyonu ve turizm operasyonları yönetiminde bulunmuştur. Ardından 2012–2014 yıllarında Calltech bünyesinde Çağrı Merkezi Yöneticisi olarak kurumsal çağrı merkezi süreçlerini ve müşteri operasyonlarını başarıyla sevk etmiştir.`
    },
    {
      id: 'bilisim-ve-danismanlik',
      title: 'Bilişim ve Kurumsal Danışmanlık',
      subtitle: 'Arday Bilişim ve Kurumsal Çözümler (2015 — Günümüz)',
      content: `2015 yılından itibaren Arday Bilişim ve Kurumsal Çözümler çatısı altında proje geliştirme, kurumsal yönetim danışmanlığı, kurum içi personel eğitimleri, CRM sistemleri ve operasyonel iş akışı optimizasyonu alanlarında çalışmalarını sürdürmüştür.`
    },
    {
      id: 'gayrimenkul-sektoru',
      title: 'Gayrimenkul Sektöründeki Çalışmalar',
      subtitle: '2019 — Günümüz: Kuzey Kıbrıs Taşınmaz Ekosistemi',
      content: `2019 yılından itibaren Kuzey Kıbrıs genelinde gayrimenkul danışmanlığı, taşınmaz değerleme ve sektörel dijital platform vizyonunu temsil eden çalışmalara imza atmıştır. Leb-Tur ve Kıbrıs Emlak Sitesi gibi platformlarla sektörün şeffaflaşmasına, doğru bilginin yatırımcıya ulaşmasına ve yerel piyasa standartlarının uluslararası dinamiklerle uyumuna katkı sağlamıştır.`
    },
    {
      id: 'muzik-ve-gonulluluk',
      title: 'Müzik ve Gönüllü Eğitim',
      subtitle: 'Geleceğe Bırakılan İzler: Çocuklar ve Kültür',
      content: `Sanat eğitiminin toplumsal sorumlulukla buluştuğu en değerli dönemeçlerden biri, 2004–2007 yılları arasında Bernar Nahum İlköğretim Okulu'nda üstlendiği Gönüllü Müzik Öğretmenliği görevidir. 2007–2008 döneminde ise Barış Manço Kültür Merkezi bünyesinde yaklaşık 150 çocuğa solfej ve temel musiki eğitimi vererek çocukların kültürel ve sanatsal gelişimine doğrudan katkıda bulunmuştur.`
    },
    {
      id: 'mesleki-orgutlenme',
      title: 'Mesleki Örgütlenme ve Sivil Toplum',
      subtitle: 'Kurucu İrade, Birlik Yönetimi ve Sektörel Standartlar',
      content: `Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği'nin kurucu kadrosunda ve yönetiminde yer alarak bağımsız ekspertiz kültürünün yasal temellere kavuşması için çalışmıştır. Aynı zamanda Kıbrıs Türk Emlakçılar Birliği (KTEB) Yönetim Kurulu Üyesi olarak mesleki akreditasyon, mevzuat düzenlemeleri ve sektör disiplininin sağlanmasında aktif görev üstlenmiştir.`
    },
    {
      id: 'siyasi-ve-toplumsal',
      title: 'Siyasi ve Toplumsal İlgi Alanları',
      subtitle: 'TAM Parti · Girne Milletvekili Aday Adaylığı',
      content: `Toplumsal Adalet ve Mücadele Partisi (TAM Parti) bünyesinde Girne Bölgesi Milletvekili Aday Adayı olarak yer almıştır. Ekonomik kalkınma, kadın istihdamı, kamu hizmetlerinde dijitalleşme, gençlerin mesleki eğitimi, taşınmaz piyasasında kurumsallaşma ve sivil toplumun karar alma mekanizmalarına katılımı gibi alanlarda toplumsal katkı sunmayı hedeflemektedir.`
    }
  ],

  sectionsEN: [
    {
      id: 'ilk-yillar-ve-egitim',
      title: 'Early Years & Education',
      subtitle: 'From Musical Arts to Academic Rigor',
      content: `Born in Hatay, Emine İkiz Leblebicioğlu began her academic journey at Istanbul Technical University Turkish Music State Conservatory. Her conservatory training instilled not only artistic discipline and theory, but also active listening, compositional vision, and structural clarity. She later expanded this foundation through master's studies at Yeditepe University, building a robust multidisciplinary skill set.`
    },
    {
      id: 'profesyonel-hayat',
      title: 'Early Professional Milestones',
      subtitle: '2002: Telecommunications & Team Leadership',
      content: `Her professional career began in 2002 at Global Bilgi within Digiturk customer operations. As Team Leader, she oversaw employee coaching, performance appraisal structures, operational resource planning, quality compliance, and large-scale client engagement.`
    },
    {
      id: 'yonetim-ve-ik',
      title: 'Management & Human Resources Consulting',
      subtitle: 'Telpa Telecommunications & HR Advisory',
      content: `From 2007 to 2009, she served as Human Resources Consultant at Telpa Telecommunications, focusing on recruitment workflows, candidate assessment, competency mapping, and organizational consulting. This role deepened her talent management expertise concurrently with her operational leadership background.`
    },
    {
      id: 'turizm-ve-cagri-merkezi',
      title: 'Hospitality, Operations & Communication Management',
      subtitle: 'Jasmine Court Hotel & Calltech Operations',
      content: `In 2010, she was appointed Call Center Manager at the iconic Jasmine Court Hotel in Northern Cyprus, leading guest relations and reservation systems. From 2012 to 2014, she continued as Call Center Manager at Calltech, optimizing operational workflows and institutional communications.`
    },
    {
      id: 'bilisim-ve-danismanlik',
      title: 'IT & Corporate Consulting',
      subtitle: 'Arday Bilişim & Corporate Solutions (2015 — Present)',
      content: `Since 2015, under Arday Bilişim ve Kurumsal Çözümler, she has led corporate project development, institutional management consultancy, staff training programs, CRM workflows, and operational efficiency initiatives.`
    },
    {
      id: 'gayrimenkul-sektoru',
      title: 'Real Estate Ecosystem',
      subtitle: '2019 — Present: Northern Cyprus Property Landscape',
      content: `Since 2019, she has been actively engaged in Northern Cyprus real estate advisory, independent property valuation, and specialized sectoral platforms such as Leb-Tur and Kıbrıs Emlak Sitesi, championing market transparency and international alignment.`
    },
    {
      id: 'muzik-ve-gonulluluk',
      title: 'Music & Volunteer Education',
      subtitle: 'Impact on Future Generations: Arts & Youth',
      content: `A core civic milestone was her voluntary service as Music Teacher at Bernar Nahum Primary School between 2004 and 2007. Additionally, in 2007–2008 at the Barış Manço Cultural Center, she provided solfege and foundational musical training to approximately 150 children.`
    },
    {
      id: 'mesleki-orgutlenme',
      title: 'Civil Society & Professional Associations',
      subtitle: 'Founding Member, Association Board & Regulatory Standards',
      content: `She is a founding member and board executive of the Cyprus Turkish Real Estate Valuation Experts Association, advancing independent valuation ethics. She also serves on the Executive Board of the Cyprus Turkish Realtors Association (KTEB), actively engaging in licensing standards and market integrity.`
    },
    {
      id: 'siyasi-ve-toplumsal',
      title: 'Civic & Public-Interest Focus',
      subtitle: 'TAM Parti · Kyrenia Parliamentary Nomination Candidate',
      content: `Affiliated with the Social Justice and Struggle Party (TAM Parti) as a Kyrenia Parliamentary Candidate Nominee, her areas of civic focus include economic development, women's workforce participation, public service digitalization, youth vocational development, and civil society governance.`
    }
  ],

  disclaimerTR: 'Not: Bu biyografi Emine İkiz Leblebicioğlu tarafından iletilen resmî bilgiler, kamuya açık tesciller ve basına yansıyan faaliyetler doğrultusunda editoryal titizlikle hazırlanmıştır.',
  disclaimerEN: 'Note: This biography has been compiled with editorial rigor using owner-supplied profile information, public regulatory registers, and verifiable media archives.'
};

export const educationHistory: EducationItem[] = [
  {
    id: 'edu-itu',
    institution: 'İstanbul Teknik Üniversitesi Türk Musikisi Devlet Konservatuvarı',
    qualification: {
      tr: 'Konservatuvar Mezunu',
      en: 'Conservatory Graduate',
    },
    level: {
      tr: 'Lisans / Sanat Eğitimi',
      en: 'Undergraduate / Fine Arts & Music',
    },
    description: {
      tr: 'Türk Musikisi nazariyatı, icra disiplini, kompozisyon, solfej ve analitik dinleme formasyonu. Sanatın getirdiği yüksek odaklanma, ekip içi armoni ve estetik vizyon.',
      en: 'Turkish music theory, performance discipline, composition, solfege, and analytical listening. Developed high cognitive focus, ensemble harmony, and aesthetic precision.',
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record',
    },
  },
  {
    id: 'edu-yeditepe',
    institution: 'Yeditepe Üniversitesi',
    qualification: {
      tr: 'Yüksek Lisans (Master)',
      en: "Master's Degree",
    },
    level: {
      tr: 'Lisansüstü / Yüksek Lisans',
      en: 'Graduate / Post-Graduate',
    },
    description: {
      tr: 'Yüksek lisans düzeyinde akademik araştırma, stratejik analiz, kurumsal perspektif ve çok disiplinli çalışma metodolojileri.',
      en: 'Graduate-level academic research, strategic analysis, institutional perspective, and multidisciplinary methodology.',
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record',
    },
  },
];

export const volunteerEducationData: VolunteerEducationItem[] = [
  {
    id: 'vol-bernar-nahum',
    period: '2004 — 2007',
    institution: 'Bernar Nahum İlköğretim Okulu',
    role: {
      tr: 'Gönüllü Müzik Öğretmeni',
      en: 'Volunteer Music Teacher',
    },
    description: {
      tr: 'İlköğretim çağındaki öğrencilerin müzikal yeteneklerinin keşfedilmesi, ritim duygusunun geliştirilmesi ve sanata dair erken yaşta farkındalık kazanmaları amacıyla 3 yıl boyunca sürdürülen gönüllü eğitim faaliyeti.',
      en: 'A three-year voluntary music education initiative aimed at nurturing early artistic curiosity, rhythm fundamentals, and musical expression in primary school students.',
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record',
    },
  },
  {
    id: 'vol-baris-manco',
    period: '2007 — 2008',
    institution: 'Barış Manço Kültür Merkezi',
    role: {
      tr: 'Solfej Eğitimi',
      en: 'Solfege & Music Instructor',
    },
    beneficiariesCount: '~150 Çocuk',
    description: {
      tr: 'Kültür merkezi bünyesinde yaklaşık 150 çocuğa nota okuma, solfej, temel ses terbiyesi ve müzik teorisi eğitimi verilmesi; çocukların sanatsal özgüvenlerinin desteklenmesi.',
      en: 'Delivered structured solfege, music theory, and vocal fundamentals to approximately 150 young students, fostering artistic confidence and foundational ear-training.',
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı (Yaklaşık 150 Katılımcı)',
      en: 'Biographical Record (~150 Participants)',
    },
  },
];

export const professionalTrainings: ProfessionalTraining[] = [
  {
    id: 'tr-management',
    topic: {
      tr: 'Yönetim Becerileri',
      en: 'Management Skills',
    },
    description: {
      tr: 'Stratejik planlama, operasyonel verimlilik ve organizasyonel hedef yönetimi.',
      en: 'Strategic resource planning, operational efficiency, and organizational objectives.',
    },
    category: 'management',
    verificationStatus: 'owner_provided',
  },
  {
    id: 'tr-communication',
    topic: {
      tr: 'Profesyonel İletişim',
      en: 'Professional Communication',
    },
    description: {
      tr: 'Kurum içi diyalog, kriz yönetimi, paydaş ilişkileri ve ikna teknikleri.',
      en: 'Internal organizational dialogue, stakeholder relations, and high-impact negotiation.',
    },
    category: 'communication',
    verificationStatus: 'owner_provided',
  },
  {
    id: 'tr-leadership',
    topic: {
      tr: 'Liderlik',
      en: 'Leadership',
    },
    description: {
      tr: 'Ekip motivasyonu, vizyoner delegasyon ve kurumsal dönüşüm rehberliği.',
      en: 'Team motivation, visionary delegation, and institutional transformation leadership.',
    },
    category: 'management',
    verificationStatus: 'owner_provided',
  },
  {
    id: 'tr-hr',
    topic: {
      tr: 'İnsan Kaynakları',
      en: 'Human Resources',
    },
    description: {
      tr: 'İşe alım analizi, yetenek yönetimi, çalışan memnuniyeti ve kurumsal kültür.',
      en: 'Talent acquisition, competence mapping, employee engagement, and culture.',
    },
    category: 'hr',
    verificationStatus: 'owner_provided',
  },
  {
    id: 'tr-performance',
    topic: {
      tr: 'Performans Yönetimi',
      en: 'Performance Management',
    },
    description: {
      tr: 'KPI belirleme, süreç takibi, geri bildirim sistemleri ve verimlilik optimizasyonu.',
      en: 'KPI architecture, operational tracking, feedback loops, and efficiency reviews.',
    },
    category: 'management',
    verificationStatus: 'owner_provided',
  },
  {
    id: 'tr-coaching',
    topic: {
      tr: 'Satış Koçluğu',
      en: 'Sales Coaching',
    },
    description: {
      tr: 'Müşteri odaklı değer üretimi, satış ekiplerine rehberlik ve güven esash portföy yönetimi.',
      en: 'Value-driven client advisory, sales team mentorship, and trust-centered portfolio stewardship.',
    },
    category: 'corporate',
    verificationStatus: 'owner_provided',
  },
  {
    id: 'tr-corporate-dev',
    topic: {
      tr: 'Kurumsal Gelişim',
      en: 'Corporate Development',
    },
    description: {
      tr: 'İş akış modelleri, kurumsallaşma metodolojisi ve sürdürülebilir büyüme altyapısı.',
      en: 'Workflow structuring, institutional maturity, and sustainable corporate scalability.',
    },
    category: 'corporate',
    verificationStatus: 'owner_provided',
  },
];

export const careerPositions: CareerPosition[] = [
  {
    id: 'pos-realestate',
    period: '2019 — Günümüz',
    years: { start: '2019', end: 'Devam Ediyor' },
    company: 'Gayrimenkul Sektörü & Taşınmaz Değerleme',
    position: {
      tr: 'Sektörel Girişimci, Değerleme & Mesleki Temsil',
      en: 'Sector Entrepreneur, Property Valuation & Professional Representation',
    },
    sector: {
      tr: 'Gayrimenkul Danışmanlığı, Taşınmaz Değerleme & Sektörel Birlikler',
      en: 'Real Estate Advisory, Valuation Standards & Association Governance',
    },
    responsibilities: {
      tr: [
        'Kuzey Kıbrıs genelinde kurumsal gayrimenkul danışmanlığı ve portföy koordinasyonu.',
        'Taşınmaz mal değerleme süreçlerinde bilimsel standartların ve bağımsız ekspertizin savunulması.',
        'Kıbrıs Türk Emlakçılar Birliği (KTEB) Yönetim Kurulu Üyeliği.',
        'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği Kurucu Üyeliği ve Yönetimi.',
        'Kıbrıs Emlak Sitesi sektörel yayıncılık girişimi ile şeffaf piyasa verisi üretimi.'
      ],
      en: [
        'Corporate real estate advisory and portfolio facilitation across Northern Cyprus.',
        'Advancing independent appraisal methodologies and international valuation criteria.',
        'Executive Board Membership at the Cyprus Turkish Realtors Association (KTEB).',
        'Founding member and executive board governance in the Valuation Experts Association.',
        'Sectoral media initiative via Kıbrıs Emlak Sitesi promoting market transparency.'
      ]
    },
    context: {
      tr: '2019 yılında başlayan gayrimenkul dönemi; yalnızca ticari bir faaliyet değil, mesleki örgütlenme, değerleme standartları ve kamu politikaları istişaresini kapsayan çok boyutlu bir uzmanlık alanıdır.',
      en: 'Commencing in 2019, this chapter encompasses not merely commercial advisory, but institutional governance, valuation ethics, and consultative participation with state bodies.'
    },
    verificationStatus: 'independently_verified',
    sourceLabel: {
      tr: 'Birlik Sicilleri, Mukayyitlik Tescili & Basın Kayıtları',
      en: 'Association Registries, Company Filings & Media Records',
    },
  },
  {
    id: 'pos-arday',
    period: '2015 — Günümüz',
    years: { start: '2015', end: 'Devam Ediyor' },
    company: 'Arday Bilişim ve Kurumsal Çözümler',
    position: {
      tr: 'Proje Geliştirme & Kurumsal Danışmanlık',
      en: 'Project Development & Corporate Consulting',
    },
    sector: {
      tr: 'Bilişim, CRM & Kurumsal Çözümler',
      en: 'Information Technology, CRM & Advisory',
    },
    responsibilities: {
      tr: [
        'Kurumsal teknoloji ve süreç geliştirme projelerinin planlanması.',
        'Şirketlere yönelik kurumsal danışmanlık ve operasyonel iş akışı yapılandırması.',
        'Kurum içi personel ve yönetici eğitim programlarının hazırlanması.',
        'Müşteri ilişkileri yönetimi (CRM) sistemlerinin kurgulanması ve süreç takibi.'
      ],
      en: [
        'Structuring enterprise technology implementations and project workflows.',
        'Corporate advisory on operational efficiency and institutionalization.',
        'Developing corporate training curricula for management and front-line staff.',
        'Architecting Customer Relationship Management (CRM) workflows and analytics.'
      ]
    },
    context: {
      tr: 'Bilişim altyapıları, kurumsal eğitim ve yönetim danışmanlığının birleştiği çok yönlü iş ortaklığı dönemi.',
      en: 'Multidisciplinary corporate phase converging enterprise technology, training, and strategic advisory.'
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record',
    },
  },
  {
    id: 'pos-calltech',
    period: '2012 — 2014',
    years: { start: '2012', end: '2014' },
    company: 'Calltech',
    position: {
      tr: 'Çağrı Merkezi Yöneticisi',
      en: 'Call Center Manager',
    },
    sector: {
      tr: 'Çağrı Merkezi Çözümleri & Müşteri Operasyonları',
      en: 'BPO & Call Center Infrastructure',
    },
    responsibilities: {
      tr: [
        'Çağrı merkezi operasyonel süreçlerinin yönetimi ve kurumsal organizasyon.',
        'Hizmet süreçlerinin verimlilik ve kalite parametreleri doğrultusunda yapılandırılması.',
        'Müşteri ilişkileri operasyonlarının takibi ve kurumlar arası iletişim akışının yönetimi.'
      ],
      en: [
        'Managing call center operations, resource allocation, and organizational workflows.',
        'Structuring service pipelines against rigorous productivity and quality benchmarks.',
        'Directing customer interaction channels and inter-institutional service consistency.'
      ]
    },
    context: {
      tr: 'Çağrı merkezi ve operasyonel iletişim yönetimi alanındaki kurumsal deneyimin pekiştiği dönem.',
      en: 'Consolidation of executive call-center management, operational structuring, and service standards.'
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record',
    },
  },
  {
    id: 'pos-jasmine-court',
    period: '2010',
    years: { start: '2010', end: '2010' },
    company: 'Jasmine Court Hotel',
    position: {
      tr: 'Çağrı Merkezi Yöneticisi',
      en: 'Call Center Manager',
    },
    sector: {
      tr: 'Turizm, Konaklama & Müşteri Deneyimi',
      en: 'Hospitality, Tourism & Guest Relations',
    },
    responsibilities: {
      tr: [
        'Otel bünyesindeki çağrı merkezi ve rezervasyon biriminin yönetimi.',
        'Turizm sektörünün dinamiklerine uygun misafir ilişkileri ve operasyonel akış koordinasyonu.',
        'Ekip içi hizmet kalitesi standartlarının belirlenmesi ve takibi.'
      ],
      en: [
        'Managing hospitality call center and reservation communication channels.',
        'Coordinating guest relations workflows tailored to luxury tourism standards.',
        'Establishing and supervising service delivery and communication criteria.'
      ]
    },
    context: {
      tr: "Kuzey Kıbrıs'ın simge turizm kuruluşlarından biri olan Jasmine Court Hotel'de konaklama ve misafir deneyimi alanındaki yöneticilik deneyimi.",
      en: 'Executive operational leadership in guest communications within one of Northern Cyprus’s premier hospitality establishments.'
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record',
    },
  },
  {
    id: 'pos-telpa',
    period: '2007 — 2009',
    years: { start: '2007', end: '2009' },
    isOverlapping: true,
    company: 'Telpa Telekomünikasyon',
    position: {
      tr: 'İnsan Kaynakları Danışmanı',
      en: 'Human Resources Consultant',
    },
    sector: {
      tr: 'İnsan Kaynakları & Telekomünikasyon',
      en: 'Human Resources & Telecommunications',
    },
    responsibilities: {
      tr: [
        'Uçtan uca işe alım süreçlerinin planlanması ve yürütülmesi.',
        'Aday değerlendirme, mülakat teknikleri ve yetkinlik bazlı personel seçimi.',
        'Departman bazlı yetenek gereksinimlerinin tespiti ve organizasyonel danışmanlık.',
        'Çalışan yerleştirme ve kurumsal uyum süreçlerinin takibi.'
      ],
      en: [
        'End-to-end recruitment lifecycle planning and execution.',
        'Candidate assessment, competency-based interviewing, and talent screening.',
        'Assessing departmental talent requirements and providing strategic HR guidance.',
        'Supervising onboarding integration and institutional alignment.'
      ]
    },
    context: {
      tr: 'Global Bilgi süreciyle eşzamanlı/örtüşen dönemde icra edilen, insan kaynakları danışmanlığı ve yetenek seçimi alanında kurumsal uzmanlaşma dönemi.',
      en: 'Concurrent with the Global Bilgi period, representing dedicated specialization in talent acquisition, competency evaluation, and HR consulting.'
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı (Örtüşen Dönem)',
      en: 'Biographical Record (Concurrent Dates)',
    },
  },
  {
    id: 'pos-global-bilgi',
    period: '2002 — 2009',
    years: { start: '2002', end: '2009' },
    company: 'Global Bilgi A.Ş.',
    position: {
      tr: 'Digiturk Müşteri Hizmetleri Takım Lideri',
      en: 'Digiturk Customer Services Team Leader',
    },
    sector: {
      tr: 'Telekomünikasyon & Müşteri Operasyonları',
      en: 'Telecommunications & Customer Operations',
    },
    responsibilities: {
      tr: [
        'Geniş müşteri hizmetleri ekiplerinin sevk ve idaresi, günlük operasyonel planlama.',
        'Yeni çalışanların oryantasyon ve mesleki eğitim programlarının yürütülmesi.',
        'Hizmet kalitesi standartlarının izlenmesi, denetimi ve süreç optimizasyonu.',
        'Bireysel ve ekip düzeyinde performans değerlendirme sistemlerinin işletilmesi.',
        'Müşteri ilişkileri yönetimi, kriz çözümü ve üst düzey memnuniyet politikaları.'
      ],
      en: [
        'Operational oversight and day-to-day coordination of large customer care teams.',
        'Designing and executing employee onboarding and professional training modules.',
        'Monitoring and upholding rigorous service quality and compliance metrics.',
        'Implementing individual and team-level performance evaluation systems.',
        'High-tier customer relationship management and operational escalation handling.'
      ]
    },
    context: {
      tr: 'Profesyonel iş hayatının ilk önemli evresi. Yüksek hacimli ve tempolu telekomünikasyon operasyonunda liderlik, eğitim ve süreç yönetimi yetkinliklerinin temellendiği dönem.',
      en: 'The foundational milestone of her career, anchoring team leadership, professional coaching, and workflow management within a high-volume telecommunications environment.'
    },
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record',
    },
  },
];

export const politicalProfile: PoliticalProfile = {
  party: 'TAM Parti',
  partyFullName: {
    tr: 'Toplumsal Adalet ve Mücadele Partisi',
    en: 'Social Justice and Struggle Party',
  },
  constituency: {
    tr: 'Girne',
    en: 'Kyrenia',
  },
  status: {
    tr: 'Girne Milletvekili Aday Adayı',
    en: 'Kyrenia Parliamentary Candidate Nominee',
  },
  statusNote: {
    tr: 'Adaylık süreci aday adaylığı aşaması olarak sunulmaktadır; resmi adaylaşma veya seçilmişlik iddiası içermemektedir.',
    en: 'Presented strictly as a nomination-stage candidacy; does not denote an elected parliamentary office.',
  },
  verificationStatus: 'owner_provided',
  partyUrl: 'https://tamparti.org/',
  partyProgramUrl: 'https://tamparti.org/parti-programi/',
  partySymbolDescription: {
    tr: 'TAM Parti’nin simgesi olan zeytin ağacı, Kıbrıs kültürünün kadim köklerini, barışı ve üretkenliği temsil eder. Ağacın 8 kök dalı, partinin temelini oluşturan 8 ana ilkeyi simgelemektedir.',
    en: 'The olive tree emblem of TAM Party represents the ancient roots, peace, and productivity of Cypriot culture. The 8 root branches symbolize the 8 core founding principles of the party.',
  },
  corePrinciples: [
    {
      id: 'cp-ataturk',
      number: 1,
      title: { tr: 'Atatürkçülük', en: 'Kemalism / Principles of Atatürk' },
      description: {
        tr: 'Akıl, bilim ve çağdaşlaşma rehberliğinde aydınlık bir gelecek inşası.',
        en: 'Guiding society towards modern civilization anchored in reason and science.',
      },
    },
    {
      id: 'cp-demokrasi',
      number: 2,
      title: { tr: 'Katılımcı Demokrasi', en: 'Participatory Democracy' },
      description: {
        tr: 'Toplumun tüm kesimlerinin karar alma süreçlerinde doğrudan söz sahibi olması.',
        en: 'Empowering citizen engagement and collective consultation in governance.',
      },
    },
    {
      id: 'cp-birlik',
      number: 3,
      title: { tr: 'Halkın Birliği', en: 'Unity of the People' },
      description: {
        tr: 'Kutuplaşmadan uzak, toplumsal dayanışma ve ortak gelecek paydasında kenetlenme.',
        en: 'Fostering social solidarity and inclusive cohesion beyond partisan divide.',
      },
    },
    {
      id: 'cp-cozum',
      number: 4,
      title: { tr: 'Çözüm Odaklılık', en: 'Solution-Oriented Action' },
      description: {
        tr: 'Kronikleşen ada meselelerine gerçekçi, uygulanabilir ve yapıcı yaklaşımlar.',
        en: 'Delivering pragmatic, actionable, and constructive answers to structural problems.',
      },
    },
    {
      id: 'cp-yenilik',
      number: 5,
      title: { tr: 'Yenilikçilik', en: 'Innovation & Progress' },
      description: {
        tr: 'Geleneksel kalıpların ötesine geçerek teknoloji, çağdaş kamu yönetimi ve reform.',
        en: 'Pioneering structural reforms, modern public management, and digital methods.',
      },
    },
    {
      id: 'cp-laiklik',
      number: 6,
      title: { tr: 'Laiklik', en: 'Secularism' },
      description: {
        tr: 'Devlet işleyişinde, vicdan özgürlüğünde ve kamusal yaşamda tam tarafsızlık.',
        en: 'Safeguarding civic impartiality, rule of law, and freedom of conscience.',
      },
    },
    {
      id: 'cp-adalet',
      number: 7,
      title: { tr: 'İnsan Hakları ve Adalet', en: 'Human Rights & Social Justice' },
      description: {
        tr: 'Hukukun üstünlüğü, adil paylaşım ve her yurttaşın eşit hak güvencesi.',
        en: 'Guaranteeing equitable opportunity, rule of law, and fundamental civil rights.',
      },
    },
    {
      id: 'cp-bilim',
      number: 8,
      title: { tr: 'Bilimsellik', en: 'Scientific Methodology' },
      description: {
        tr: 'Politika ve stratejilerin veriye, liyakate ve akademik birikime dayandırılması.',
        en: 'Rooting public policies in evidence, merit, expert research, and empirical data.',
      },
    },
  ],
  statedInterestAreas: [
    {
      id: 'pia-economy',
      title: {
        tr: 'Ekonomik Kalkınma, Girişimcilik ve İstihdam',
        en: 'Economic Development, Entrepreneurship & Employment',
      },
      description: {
        tr: 'Kuzey Kıbrıs’ta yerel üretimin, küçük ve orta ölçekli işletmelerin (KOBİ) desteklenmesi, yeni istihdam sahalarının açılması ve adil rekabet ortamının tesisi.',
        en: 'Fostering local enterprise, supporting SMEs, creating new employment opportunities, and ensuring a fair economic playing field across Northern Cyprus.',
      },
    },
    {
      id: 'pia-women',
      title: {
        tr: 'Kadınların Ekonomik ve Sosyal Yaşama Katılımı',
        en: "Women's Participation in Economic & Civic Life",
      },
      description: {
        tr: 'Kadın girişimciliğinin teşviki, karar alma kademelerinde kadın temsilinin güçlendirilmesi ve iş gücünde fırsat eşitliğinin sağlanması.',
        en: 'Encouraging women entrepreneurship, strengthening female leadership in governance, and advancing equal opportunity in the workplace.',
      },
    },
    {
      id: 'pia-digital',
      title: {
        tr: 'Kamu Hizmetlerinde Dijital Dönüşüm ve Teknoloji',
        en: 'Digital Transformation & Technology in Public Services',
      },
      description: {
        tr: 'Bürokratik süreçlerin şeffaf, hızlı ve vatandaş odaklı dijital platformlara taşınması; kurumlarda bilgi teknolojileri altyapısının çağdaşlaştırılması.',
        en: 'Migrating bureaucratic procedures onto transparent, citizen-centric digital platforms and modernizing public IT infrastructures.',
      },
    },
    {
      id: 'pia-youth',
      title: {
        tr: 'Gençlerin Eğitimi ve Mesleki Gelişimi',
        en: 'Youth Education & Vocational Advancement',
      },
      description: {
        tr: 'Ada gençliğinin çağın gerektirdiği nitelikli mesleki formasyonlara erişimi, genç istihdamı ve tersine beyin göçünü destekleyecek ortamların yaratılması.',
        en: 'Equipping youth with forward-looking vocational competencies, promoting youth retention, and creating favorable career ecosystems.',
      },
    },
    {
      id: 'pia-realestate-reg',
      title: {
        tr: 'Gayrimenkulde Mevzuat, Şeffaflık ve Kurumsallaşma',
        en: 'Regulation, Transparency & Institutionalization in Real Estate',
      },
      description: {
        tr: 'Taşınmaz piyasasında yasal düzenlemelerin güçlendirilmesi, kayıt dışılıkla mücadele, değerleme standartlarının tescili ve mülkiyet güvenliği.',
        en: 'Strengthening legislative safeguards, combating informality, enforcing independent valuation benchmarks, and securing property title integrity.',
      },
    },
    {
      id: 'pia-civic',
      title: {
        tr: 'Sivil Toplum Kuruluşlarının Karar Alma Süreçlerine Katılımı',
        en: 'Civil Society Participation in Decision-Making',
      },
      description: {
        tr: 'Meslek odaları, dernekler ve sivil inisiyatiflerin yasa yapım ve kamu politikası süreçlerinde doğrudan istişare ortağı haline getirilmesi.',
        en: 'Establishing institutional consultative channels between professional associations, civil society bodies, and legislative policymaking.',
      },
    },
  ],
  publicActivities: [
    {
      id: 'pa-1',
      date: '23 Ekim 2026',
      title: {
        tr: 'Bağımsız Gazetesi / Web TV Siyasi Vizyon Yayını',
        en: 'Bağımsız Gazetesi / Web TV Political Vision Broadcast',
      },
      organization: 'Bağımsız Gazetesi & TAM Parti Girne',
      summary: {
        tr: 'Emine İkiz Leblebicioğlu, TAM Parti Girne Milletvekili Aday Adayı olarak katıldığı özel yayında yerel kalkınma, kadının güçlenmesi ve şeffaf yönetim hedeflerini paylaştı.',
        en: 'In a dedicated broadcast as TAM Party Kyrenia nominee, Emine İkiz Leblebicioğlu detailed priorities on regional economic vibrancy, female empowerment, and institutional governance.',
      },
      sourceUrl: 'https://bagimsiz.com',
      type: 'broadcast',
    },
    {
      id: 'pa-2',
      date: '30 Haziran 2025',
      title: {
        tr: 'Cumhurbaşkanlığı Makamı Resmî Kabulü & Sektörel İstişare',
        en: 'Presidential Official Audience & Sectoral Consultation',
      },
      organization: 'KKTC Cumhurbaşkanlığı & Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği',
      summary: {
        tr: 'Cumhurbaşkanı Ersin Tatar ile taşınmaz piyasasında mülkiyet güvenliği, değerleme standartları ve sektörel mevzuat konularında heyet görüşmesi gerçekleştirildi.',
        en: 'Participated in the official delegation audience with President Ersin Tatar addressing title integrity, objective valuation frameworks, and real estate legislations.',
      },
      sourceUrl: 'https://haberkibris.com/cumhurbaskani-tatar-kibris-turk-tasinmaz-mal-degerlendirme-uzmanlari-dernegini-kabul-etti-1840-2025-06-30.html',
      type: 'meeting',
    },
    {
      id: 'pa-3',
      date: '15 Mayıs 2024',
      title: {
        tr: 'KTEB Yönetim Kurulu Çalıştay ve Komisyon Dağılımı',
        en: 'KTEB Executive Board Strategic Commission Allocation',
      },
      organization: 'Kıbrıs Türk Emlakçılar Birliği (KTEB)',
      summary: {
        tr: 'Kıbrıs Türk Emlakçılar Birliği yönetiminde sektörel etik ilkeleri, mesleki akreditasyon ve kayıt dışı aracılıkla mücadele komisyonlarında aktif rol üstlenildi.',
        en: 'Led key committees within KTEB executive management focusing on professional ethics, broker accreditation, and countering unregistered practices.',
      },
      sourceUrl: 'https://kteb.org',
      type: 'meeting',
    },
  ],
};

export const careerMilestones: Milestone[] = [
  {
    id: 'm-2025',
    year: '2025',
    title: {
      tr: 'Cumhurbaşkanlığı Makamı Resmî Heyet Ziyareti',
      en: 'Official Delegation Visit to the Presidency'
    },
    subtitle: {
      tr: 'Taşınmaz piyasası ve kamu politikaları istişaresi',
      en: 'Consultation on property policy & market stability'
    },
    description: {
      tr: "Taşınmaz mal değerlendirme uzmanları ve sektör temsilcilerinden oluşan resmî heyet kapsamında KKTC Cumhurbaşkanlığı'nda Cumhurbaşkanı Ersin Tatar tarafından kabul edilen heyette yer alma. Taşınmaz piyasasında hukuki güvenlik ve şeffaflık müzakeresi.",
      en: 'Participated in the high-level official delegation received by President Ersin Tatar at the Presidency of Northern Cyprus, discussing legal stability and valuation criteria.'
    },
    organization: 'KKTC Cumhurbaşkanlığı & Sektör Heyeti · Lefkoşa',
    verificationStatus: 'verified',
    sourceLabel: {
      tr: 'Haber Kıbrıs (30 Haziran 2025) & Cumhurbaşkanlığı Basın Bildirisi',
      en: 'Haber Kıbrıs (30 June 2025) & Presidency Press Bureau'
    },
    sourceUrl: 'https://haberkibris.com/cumhurbaskani-tatar-kibris-turk-tasinmaz-mal-degerlendirme-uzmanlari-dernegini-kabul-etti-1840-2025-06-30.html',
    category: 'delegation'
  },
  {
    id: 'm-2024',
    year: '2024',
    title: {
      tr: 'Kıbrıs Türk Emlakçılar Birliği Yönetim Kurulu Üyeliği',
      en: 'Board Membership, Cyprus Turkish Realtors Association'
    },
    subtitle: {
      tr: 'Sektörün yasal regülasyonları ve meslek birliği idaresi',
      en: 'Sector regulations & institutional union administration'
    },
    description: {
      tr: 'Kıbrıs Türk Emlakçılar Birliği (KTEB) Yönetim Kurulu üyesi olarak gayrimenkul danışmanlarının mesleki standartları ve mevzuat çalışmalarına katkı.',
      en: 'Executive board member of the Cyprus Turkish Realtors Association (KTEB), participating in legislative dialogues and sectoral compliance.'
    },
    organization: 'Kıbrıs Türk Emlakçılar Birliği (KTEB) · KKTC',
    verificationStatus: 'verified',
    sourceLabel: {
      tr: 'KTEB Resmî Organ Listesi & Genel Kurul Kayıtları',
      en: 'Official KTEB Governance & Assembly Archives'
    },
    category: 'sector'
  },
  {
    id: 'm-2023',
    year: '2023',
    title: {
      tr: 'Taşınmaz Değerlendirme Uzmanları Derneği Yönetimi',
      en: 'Board & Secretariat, Valuation Experts Association'
    },
    subtitle: {
      tr: 'Kurucu irade, mesleki standartlar ve değerleme etiği',
      en: 'Founding leadership, appraisal standards, and valuation ethics'
    },
    description: {
      tr: 'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği kurucu kadrosunda ve yönetiminde yer alma; tarafsız ekspertiz esaslarının yerleşmesi.',
      en: 'Founding member and executive board officer of the Cyprus Turkish Real Estate Valuation Experts Association, advancing rigorous appraisal methodology.'
    },
    organization: 'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği · Lefkoşa',
    verificationStatus: 'verified',
    sourceLabel: {
      tr: 'Dernek Yönetim Kurulu Tutanakları & Resmî Tebliğler',
      en: 'Official Association Board Records & Releases'
    },
    category: 'governance'
  },
  {
    id: 'm-2019',
    year: '2019',
    title: {
      tr: 'Kuzey Kıbrıs Gayrimenkul Sektörüne Giriş & Leb-Tur',
      en: 'Northern Cyprus Real Estate Chapter & Leb-Tur'
    },
    subtitle: {
      tr: 'Taşınmaz danışmanlığı, değerleme ve sektörel yayıncılık',
      en: 'Real estate advisory, appraisal, and sectoral media'
    },
    description: {
      tr: 'Kuzey Kıbrıs gayrimenkul ve taşınmaz yönetimi alanındaki profesyonel çalışmaların başlangıcı. Leb-Tur ve Kıbrıs Emlak Sitesi ile sektörel şeffaflık vizyonu.',
      en: 'Commencing professional real estate operations in Northern Cyprus, founding media and advisory channels championing transparent market data.'
    },
    organization: 'Leb-Tur & Kıbrıs Emlak Sitesi · Girne',
    verificationStatus: 'verified',
    sourceLabel: {
      tr: 'Ticari Sicil Kayıtları & Kamusal Portföy',
      en: 'Commercial Registry Records & Published Portfolio'
    },
    category: 'sector'
  },
  {
    id: 'm-2015',
    year: '2015',
    title: {
      tr: 'Arday Bilişim ve Kurumsal Çözümler Projeleri',
      en: 'Arday Bilişim & Corporate Solutions Advisory'
    },
    subtitle: {
      tr: 'Bilişim, CRM ve kurumsal yönetim danışmanlığı',
      en: 'Enterprise IT, CRM, and organizational consulting'
    },
    description: {
      tr: 'Kurumsal süreçlerin optimizasyonu, teknoloji entegrasyonu, personel eğitimleri ve CRM sistemleri üzerine proje geliştirme ve danışmanlık.',
      en: 'Leading enterprise workflow optimization, CRM systems implementation, and corporate staff development modules.'
    },
    organization: 'Arday Bilişim ve Kurumsal Çözümler',
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record'
    },
    category: 'corporate'
  },
  {
    id: 'm-2010',
    year: '2010',
    title: {
      tr: 'Jasmine Court Hotel · Çağrı Merkezi Yöneticiliği',
      en: 'Jasmine Court Hotel · Call Center Management'
    },
    subtitle: {
      tr: 'Kuzey Kıbrıs turizm ve misafir ilişkileri yönetimi',
      en: 'Hospitality & guest engagement in Northern Cyprus'
    },
    description: {
      tr: 'Ada turizminin simge tesislerinden birinde çağrı merkezi ve rezervasyon kanallarının yönetilmesi, misafir memnuniyeti süreçlerinin koordine edilmesi.',
      en: 'Directing the reservations and guest communications center at Jasmine Court Hotel, structuring guest satisfaction protocols.'
    },
    organization: 'Jasmine Court Hotel · Girne',
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record'
    },
    category: 'corporate'
  },
  {
    id: 'm-2007',
    year: '2007',
    title: {
      tr: 'İnsan Kaynakları Danışmanlığı & Barış Manço Kültür Merkezi',
      en: 'HR Consulting & Barış Manço Cultural Center'
    },
    subtitle: {
      tr: 'Telpa bünyesinde İK ve 150 çocuğa solfej eğitimi',
      en: 'Telpa HR advisory alongside music instruction for ~150 youth'
    },
    description: {
      tr: 'Telpa Telekomünikasyon bünyesinde İK danışmanlığı yürütülürken, eşzamanlı olarak Barış Manço Kültür Merkezi bünyesinde yaklaşık 150 çocuğa solfej eğitimi verilmesi.',
      en: 'Providing talent acquisition consulting at Telpa while instructing approximately 150 children in foundational solfege and music theory.'
    },
    organization: 'Telpa Telekomünikasyon & Barış Manço Kültür Merkezi',
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record'
    },
    category: 'corporate'
  },
  {
    id: 'm-2004',
    year: '2004',
    title: {
      tr: 'Bernar Nahum İlköğretim Okulu Gönüllü Müzik Eğitimi',
      en: 'Voluntary Music Education · Bernar Nahum School'
    },
    subtitle: {
      tr: 'Çocukların sanatsal gelişimine adanmış 3 yıllık gönüllülük',
      en: 'Three-year voluntary commitment to primary arts education'
    },
    description: {
      tr: 'Konservatuvar formasyonunu toplumsal faydaya dönüştürerek ilköğretim çağındaki çocuklara gönüllü müzik öğretmenliği yapılması.',
      en: 'Translating conservatory discipline into social impact through three years of volunteer music teaching for primary school pupils.'
    },
    organization: 'Bernar Nahum İlköğretim Okulu',
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record'
    },
    category: 'governance'
  },
  {
    id: 'm-2002',
    year: '2002',
    title: {
      tr: 'Profesyonel İş Hayatının Başlangıcı · Global Bilgi',
      en: 'Career Inception · Global Bilgi A.Ş.'
    },
    subtitle: {
      tr: 'Digiturk müşteri hizmetleri operasyonlarında takım liderliği',
      en: 'Team leadership in Digiturk customer care operations'
    },
    description: {
      tr: 'Eğitimden telekomünikasyona geçiş. Takım yönetimi, çalışan eğitimleri, hizmet kalitesi ve performans değerlendirme sistemlerinin yönetilmesi.',
      en: 'Transition into telecommunications. Overseeing operational teams, staff development, service quality, and performance analytics.'
    },
    organization: 'Global Bilgi A.Ş. · İstanbul',
    verificationStatus: 'owner_provided',
    sourceLabel: {
      tr: 'Biyografi Beyanı',
      en: 'Biographical Record'
    },
    category: 'corporate'
  },
];

export const affiliationsData: Affiliation[] = [
  {
    id: 'aff-kttmdud',
    organization: 'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği',
    role: {
      tr: 'Kurucu / Yönetim Kurulu / Genel Sekreter',
      en: 'Founding Member / Executive Board / Secretary'
    },
    period: {
      tr: '2023 — Günümüz',
      en: '2023 — Present'
    },
    description: {
      tr: 'Bağımsız ve bilimsel taşınmaz değerleme esaslarının yerleşmesi, uluslararası değerleme standartları uyumu ve uzmanlar arası koordinasyon.',
      en: 'Promoting independent valuation methodologies, international appraisal standards, and institutional coordination among certified experts.'
    },
    verificationStatus: 'verified',
    sourceNote: {
      tr: 'Dernek tescil ve kamuoyu açıklamalarıyla belgelenmiş kurucu görev.',
      en: 'Formally recorded association governance and public press statements.'
    },
    category: 'valuation'
  },
  {
    id: 'aff-kteb',
    organization: 'Kıbrıs Türk Emlakçılar Birliği (KTEB)',
    role: {
      tr: 'Yönetim Kurulu Üyesi',
      en: 'Executive Board Member'
    },
    period: {
      tr: '2024 — Günümüz',
      en: '2024 — Present'
    },
    description: {
      tr: 'Ada genelinde emlak sektörünün yasal standartları, mesleki akreditasyon ve kayıt dışılıkla mücadele mevzuat çalışmalarında aktif yönetim görevi.',
      en: 'Active board member shaping regulatory standards, professional accreditation, and anti-informality policy across Northern Cyprus real estate.'
    },
    verificationStatus: 'verified',
    websiteUrl: 'https://kteb.org',
    sourceNote: {
      tr: 'Birlik resmî organ listesi ve basına açık genel kurul tutanakları.',
      en: 'Official association registry and public general assembly proceedings.'
    },
    category: 'association'
  },
  {
    id: 'aff-kes',
    organization: 'Kıbrıs Emlak Sitesi',
    role: {
      tr: 'Kurucu Temsilci / Sektörel Girişimci',
      en: 'Founding Representative / Sector Entrepreneur'
    },
    period: {
      tr: '2019 — Günümüz',
      en: '2019 — Present'
    },
    description: {
      tr: 'Kuzey Kıbrıs emlak sektöründe şeffaf bilgi akışı, piyasa haberleri ve dijital görünürlüğü bir araya getiren sektörel yayıncılık girişimi.',
      en: 'A sectoral media and digital visibility initiative fostering transparent market data, news analysis, and regional ecosystem insights.'
    },
    verificationStatus: 'verified',
    websiteUrl: 'https://kibrisemlaksitesi.com',
    sourceNote: {
      tr: 'Kamuya açık şirket tanıtımı ve sektörel röportajlar.',
      en: 'Public corporate documentation and published industry profiles.'
    },
    category: 'media'
  },
  {
    id: 'aff-lebtur',
    organization: 'Leb-Tur / Eksper Kıbrıs',
    role: {
      tr: 'Kurumsal Faaliyet & Değerleme Hizmetleri',
      en: 'Corporate Administration & Property Appraisal'
    },
    period: {
      tr: '2018 — Günümüz',
      en: '2018 — Present'
    },
    description: {
      tr: 'Taşınmaz danışmanlığı, ekspertiz süreçleri ve portföy koordinasyonuna yönelik kurumsal ticari faaliyetler.',
      en: 'Corporate real estate advisory, appraisal management, and institutional portfolio facilitation.'
    },
    verificationStatus: 'verified',
    sourceNote: {
      tr: 'Şirketler Mukayyitliği sicil kayıtları ve sektörel referanslar.',
      en: 'Official company registry records and published industry references.'
    },
    category: 'corporate'
  }
];

export const featuredContributions: Contribution[] = [
  {
    id: 'c-1',
    title: {
      tr: 'Taşınmaz Değerleme Standartlarının Geliştirilmesi',
      en: 'Advancement of Real Estate Valuation Standards'
    },
    category: {
      tr: 'Mesleki Örgütlenme',
      en: 'Professional Organizations'
    },
    categorySlug: 'mesleki',
    summary: {
      tr: 'Ada genelinde bağımsız ekspertiz kültürünün yaygınlaştırılması ve metodolojik tutarlılık.',
      en: 'Expanding independent appraisal methodology and valuation rigor island-wide.'
    },
    narrative: {
      tr: 'Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği çatısı altında, mülk alım-satım ve ipotek süreçlerinde objektif değer tespitinin sağlanması amacıyla yürütülen kurumsal çalışmalar. Değerleme uzmanlarının mesleki güvencesi ve uluslararası raporlama normlarına uyumu hedeflenmiştir.',
      en: 'Under the Cyprus Turkish Real Estate Valuation Experts Association, initiatives designed to secure objective price determination in property transactions and mortgage valuations, aligning local practice with international standards.'
    },
    roleRelation: {
      tr: 'Dernek Kurucu Üyesi & Yönetim Kurulu Temsilcisi',
      en: 'Association Founding Member & Executive Board Officer'
    },
    date: '2023 — Günümüz',
    verificationStatus: 'verified',
    accentQuote: {
      tr: 'Güvenilir bir gayrimenkul piyasasının omurgası, bağımsız ve bilimsel değerleme standartlarıdır.',
      en: 'The backbone of a credible real estate market lies in independent and objective valuation standards.'
    },
    image: '/images/hero-left-architecture.jpg'
  },
  {
    id: 'c-2',
    title: {
      tr: 'Müzik ve Sanat Eğitimiyle Toplumsal Gelişime Katkı',
      en: 'Civic Impact Through Music and Youth Education'
    },
    category: {
      tr: 'Eğitim & Gönüllülük',
      en: 'Education & Volunteering'
    },
    categorySlug: 'toplumsal',
    summary: {
      tr: 'Bernar Nahum İlköğretim Okulu ve Barış Manço Kültür Merkezi bünyesinde çocukların müzikle buluşması.',
      en: 'Introducing youth to the musical arts at Bernar Nahum School and Barış Manço Cultural Center.'
    },
    narrative: {
      tr: 'İTÜ Devlet Konservatuvarı mezuniyetinin getirdiği zengin sanat birikimini çocukların kültürel gelişimine sunmak amacıyla gerçekleştirilen gönüllü müzik öğretmenliği ve Barış Manço Kültür Merkezi’nde 150’ye yakın çocuğa verilen solfej eğitimleri.',
      en: 'Channelling her conservatory background into community enrichment through volunteer primary school music teaching and comprehensive solfege instruction for roughly 150 children.'
    },
    roleRelation: {
      tr: 'Gönüllü Müzik Öğretmeni & Solfej Eğitmeni',
      en: 'Volunteer Music Teacher & Solfege Instructor'
    },
    date: '2004 — 2008',
    verificationStatus: 'owner_provided',
    accentQuote: {
      tr: 'Sanatla erken yaşta tanışan bir nesil, hayatın her alanında ahengi ve sorumluluğu inşa eder.',
      en: 'A generation introduced to the arts at an early age builds harmony and responsibility across every walk of life.'
    },
    image: '/images/strip-bio.jpg'
  },
  {
    id: 'c-3',
    title: {
      tr: 'Sektörel Şeffaflık ve Dijital Entegrasyon',
      en: 'Sectoral Transparency & Digital Integration'
    },
    category: {
      tr: 'Kurumsal & Sektörel',
      en: 'Corporate & Sectoral'
    },
    categorySlug: 'sektorel',
    summary: {
      tr: 'Kıbrıs Emlak Sitesi ve Arday Bilişim ile şeffaf veri akışı ve dijitalleşme vizyonu.',
      en: 'Facilitating transparent market information and tech enablement via media and IT platforms.'
    },
    narrative: {
      tr: 'Kuzey Kıbrıs’ta gayrimenkul ve kurumsal yönetim süreçlerinde dijitalleşmenin yaygınlaştırılması, yatırımcıların doğrulanmış bilgiye erişiminin kolaylaştırılması ve sektör içi iletişimin güçlendirilmesi.',
      en: 'Advancing digital infrastructure across real estate transactions, enhancing investor access to verified market data, and streamlining inter-industry communication.'
    },
    roleRelation: {
      tr: 'Sektörel Girişimci & Danışman',
      en: 'Sector Entrepreneur & Corporate Advisor'
    },
    date: '2015 — Günümüz',
    verificationStatus: 'verified',
    accentQuote: {
      tr: 'Şeffaf bilgi akışı ve modern teknoloji, sürdürülebilir kurumsallaşmanın en güçlü teminatıdır.',
      en: 'Transparent data and modern technology form the strongest guarantee of sustainable institutional maturity.'
    },
    image: '/images/strip-work.jpg'
  }
];

export const pressItems: PressItem[] = [
  {
    id: 'p-0',
    date: '23 Ekim 2026',
    category: 'haber',
    publication: 'Bağımsız Gazetesi & Bağımsız Web TV',
    headline: {
      tr: 'Emine Leblebicioğlu, TAM Parti Girne Milletvekili Aday Adayı Olarak Siyasi ve Toplumsal Vizyonunu Açıkladı',
      en: 'Emine Leblebicioğlu Outlines Civic and Political Vision as TAM Party Kyrenia Parliamentary Nominee'
    },
    summary: {
      tr: 'Toplumsal Adalet ve Mücadele Partisi (TAM Parti) Girne Milletvekili Aday Adayı Emine İkiz Leblebicioğlu; kurumsal şeffaflık, kadın girişimciliği, yerel istihdam ve kamusal dijitalleşme vizyonunu kamuoyuyla paylaştı.',
      en: 'Toplumsal Adalet ve Mücadele Partisi (TAM Party) Kyrenia parliamentary candidate nominee Emine İkiz Leblebicioğlu shared her vision focusing on institutional transparency, women entrepreneurship, local employment, and public digital transformation.'
    },
    verificationStatus: 'verified',
    sourceUrl: 'https://bagimsiz.com',
    tag: {
      tr: 'Siyasi & Kamusal Açıklama',
      en: 'Civic & Political Statement'
    }
  },
  {
    id: 'p-1',
    date: '30 Haziran 2025',
    category: 'etkinlik',
    publication: 'Haber Kıbrıs & Cumhurbaşkanlığı Basın Bürosu',
    headline: {
      tr: 'Cumhurbaşkanı Tatar, Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği’ni Kabul Etti',
      en: 'President Tatar Receives the Cyprus Turkish Real Estate Valuation Experts Association'
    },
    summary: {
      tr: "Kıbrıs Türk Taşınmaz Mal Değerlendirme Uzmanları Derneği heyeti, Cumhurbaşkanı Ersin Tatar tarafından kabul edildi. Görüşmede taşınmaz piyasasında değerleme standartları, mülkiyet güvenliği ve yasal mevzuat ele alındı.",
      en: 'President Ersin Tatar received the delegation of the Cyprus Turkish Real Estate Valuation Experts Association, discussing appraisal criteria, property security, and regulatory frameworks.'
    },
    verificationStatus: 'verified',
    sourceUrl: 'https://haberkibris.com/cumhurbaskani-tatar-kibris-turk-tasinmaz-mal-degerlendirme-uzmanlari-dernegini-kabul-etti-1840-2025-06-30.html',
    tag: {
      tr: 'Resmî Heyet Kabulü',
      en: 'Official Delegation'
    }
  },
  {
    id: 'p-2',
    date: '15 Mayıs 2024',
    category: 'aciklama',
    publication: 'KTEB Resmî Bülteni',
    headline: {
      tr: 'Kıbrıs Türk Emlakçılar Birliği Yeni Yönetim Kurulu Görev Dağılımını Tamamladı',
      en: 'Cyprus Turkish Realtors Association Concludes Board Allocations'
    },
    summary: {
      tr: "KTEB Olağan Genel Kurulu sonrasında oluşan yönetim kurulu, sektörel akreditasyon, lisanslı aracılık ve mevzuat takibi alanlarındaki çalışma komisyonlarını belirledi.",
      en: 'Following the KTEB General Assembly, the executive board finalized internal committees focusing on sectoral licensing, professional accreditation, and legislative oversight.'
    },
    verificationStatus: 'verified',
    sourceUrl: 'https://kteb.org',
    tag: {
      tr: 'Birlik Yönetimi',
      en: 'Union Administration'
    }
  },
  {
    id: 'p-3',
    date: '10 Kasım 2023',
    category: 'haber',
    publication: 'Kıbrıs Emlak Sitesi',
    headline: {
      tr: 'Taşınmaz Değerlemede Bilimsel Metodoloji ve Bağımsızlık Vurgusu',
      en: 'Emphasis on Objective Methodology and Independence in Property Valuation'
    },
    summary: {
      tr: 'Kuzey Kıbrıs genelinde gayrimenkul ekspertiz raporlarının uluslararası standartlara uyumunun önemine dikkat çekilen sektörel değerlendirme toplantısı.',
      en: 'Sectoral symposium highlighting the necessity of aligning North Cyprus property appraisal reports with international valuation benchmarks.'
    },
    verificationStatus: 'verified',
    sourceUrl: 'https://kibrisemlaksitesi.com',
    tag: {
      tr: 'Sektörel Değerlendirme',
      en: 'Sectoral Analysis'
    }
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'gp-hero',
    title: {
      tr: 'Emine İkiz Leblebicioğlu Portresi',
      en: 'Portrait of Emine İkiz Leblebicioğlu'
    },
    location: {
      tr: 'Girne / Lefkoşa',
      en: 'Kyrenia / Nicosia'
    },
    year: '2024',
    category: {
      tr: 'Kişisel Portre',
      en: 'Personal Portrait'
    },
    aspect: 'portrait',
    placeholderNote: {
      tr: 'Orijinal Şahsi Portre',
      en: 'Authentic Personal Portrait'
    },
    caption: {
      tr: 'Emine İkiz Leblebicioğlu resmî portresi.',
      en: 'Official portrait of Emine İkiz Leblebicioğlu.'
    },
    imageSrc: imageManifest.portrait.localPath
  },
  {
    id: 'gp-presidency',
    title: {
      tr: 'KKTC Cumhurbaşkanlığı Heyet Kabulü',
      en: 'Presidency Delegation Audience'
    },
    location: {
      tr: 'Cumhurbaşkanlığı Sarayı, Lefkoşa',
      en: 'Presidency of Northern Cyprus, Nicosia'
    },
    year: '2025',
    category: {
      tr: 'Resmî Heyet Kabulü',
      en: 'Official Delegation'
    },
    aspect: 'landscape',
    placeholderNote: {
      tr: 'Haber Kıbrıs 30 Haziran 2025 Arşivi',
      en: 'Haber Kıbrıs 30 June 2025 Archive'
    },
    caption: {
      tr: "Cumhurbaşkanı Ersin Tatar'ın dernek heyetini kabulü (30 Haziran 2025).",
      en: 'Audience with President Ersin Tatar and valuation experts (June 30, 2025).'
    },
    imageSrc: imageManifest.presidencyDelegation.localPath
  },
  {
    id: 'gp-kyrenia-harbour',
    title: {
      tr: 'Girne Antik Liman ve Kalesi',
      en: 'Kyrenia Old Harbour & Castle'
    },
    location: {
      tr: 'Girne, KKTC',
      en: 'Kyrenia, TRNC'
    },
    year: '2024',
    category: {
      tr: 'Şehir & Mimari',
      en: 'Cityscape & Architecture'
    },
    aspect: 'landscape',
    placeholderNote: {
      tr: 'Wikimedia Commons Doğrulanmış Görsel',
      en: 'Wikimedia Commons Verified Image'
    },
    caption: {
      tr: 'Akdeniz’in tarihi incisi Girne Antik Limanı ve Girne Kalesi.',
      en: 'The historic gem of the Mediterranean: Kyrenia Old Harbour & Castle.'
    },
    imageSrc: imageManifest.kyreniaHarbour.localPath
  },
  {
    id: 'gp-bellapais',
    title: {
      tr: 'Bellapais Manastırı',
      en: 'Bellapais Abbey'
    },
    location: {
      tr: 'Beylerbeyi / Bellapais, Girne',
      en: 'Bellapais, Kyrenia'
    },
    year: '2024',
    category: {
      tr: 'Tarihi Miras',
      en: 'Historical Heritage'
    },
    aspect: 'landscape',
    placeholderNote: {
      tr: 'Wikimedia Commons Doğrulanmış Görsel',
      en: 'Wikimedia Commons Verified Image'
    },
    caption: {
      tr: 'Girne sırtlarında Gotik mimarinin en seçkin örneği Bellapais Manastırı.',
      en: 'Gothic architectural splendour: Bellapais Abbey perched above Kyrenia.'
    },
    imageSrc: imageManifest.bellapaisAbbey.localPath
  },
  {
    id: 'gp-buyuk-han',
    title: {
      tr: 'Lefkoşa Büyük Han',
      en: 'The Great Inn (Büyük Han), Nicosia'
    },
    location: {
      tr: 'Surlarici, Lefkoşa',
      en: 'Walled City, Nicosia'
    },
    year: '2024',
    category: {
      tr: 'Tarihi Mimari',
      en: 'Historical Architecture'
    },
    aspect: 'landscape',
    placeholderNote: {
      tr: 'Wikimedia Commons Doğrulanmış Görsel',
      en: 'Wikimedia Commons Verified Image'
    },
    caption: {
      tr: 'Kıbrıs Osmanlı sivil mimarisinin en abidevi eseri Büyük Han.',
      en: 'Iconic Ottoman monumental caravanserai: Büyük Han in Nicosia.'
    },
    imageSrc: imageManifest.buyukHan.localPath
  },
  {
    id: 'gp-arabahmet',
    title: {
      tr: 'Tarihi Arabahmet Mahallesi',
      en: 'Historic Arabahmet Quarter'
    },
    location: {
      tr: 'Suriçi, Lefkoşa',
      en: 'Walled City, Nicosia'
    },
    year: '2024',
    category: {
      tr: 'Tarihi Sokaklar',
      en: 'Historic Urban Streets'
    },
    aspect: 'landscape',
    placeholderNote: {
      tr: 'Wikimedia Commons Doğrulanmış Görsel',
      en: 'Wikimedia Commons Verified Image'
    },
    caption: {
      tr: 'Geleneksel cumbalı Kıbrıs evleriyle Lefkoşa Arabahmet dokusu.',
      en: 'Traditional Cypriot timber bay windows in the Arabahmet district.'
    },
    imageSrc: imageManifest.nicosiaArabahmet.localPath
  }
];

export const coreValues: CoreValue[] = [
  {
    id: 'val-1',
    number: '01',
    title: {
      tr: 'Çok Boyutlu Birikim',
      en: 'Multidisciplinary Foundation'
    },
    subtitle: {
      tr: 'Sanattan kurumsal liderliğe',
      en: 'From the arts to corporate governance'
    },
    description: {
      tr: 'Müzik ve konservatuvar disipliniyle başlayan, telekomünikasyon, insan kaynakları, bilişim ve gayrimenkulle zenginleşen çok yönlü mesleki vizyon.',
      en: 'An expansive career path that began with conservatory discipline, expanding across telecommunications, HR, IT, and real estate governance.'
    },
    status: 'verified'
  },
  {
    id: 'val-2',
    number: '02',
    title: {
      tr: 'Kurumsal Şeffaflık & Standartlar',
      en: 'Institutional Integrity & Standards'
    },
    subtitle: {
      tr: 'Objektif değerleme ve mesleki etik',
      en: 'Objective valuation and professional ethics'
    },
    description: {
      tr: 'Taşınmaz piyasasında tarafsız ekspertiz ilkelerinin, yasal lisanslama süreçlerinin ve kayıt dışılıkla mücadelenin tavizsiz savunuculuğu.',
      en: 'Steadfast advocacy for independent appraisal benchmarks, professional licensing rigor, and transparent market governance.'
    },
    status: 'verified'
  },
  {
    id: 'val-3',
    number: '03',
    title: {
      tr: 'Toplumsal Sorumluluk & Gençlik',
      en: 'Civic Duty & Youth Empowerment'
    },
    subtitle: {
      tr: 'Eğitimden sivil inisiyatiflere',
      en: 'From early education to civic initiatives'
    },
    description: {
      tr: 'Yüzlerce çocuğa ulaştırılan gönüllü müzik eğitimlerinden sivil toplum kuruluşlarında üstlenilen kurucu ve birleştirici sorumluluklara.',
      en: 'From voluntary arts and music training for hundreds of children to founding and uniting civic and professional associations.'
    },
    status: 'verified'
  }
];


export const photoJournal: GalleryPhoto[] = galleryPhotos;

export const editorialPerspective = {
  quoteSubtitleTR: 'Kurumsal hafıza, sektörel ilkeler ve sivil toplum sorumluluğuyla şekillenen bir yolculuk.',
  quoteSubtitleEN: 'A journey shaped by institutional memory, valuation ethics, and civic responsibility.',
  editorialNoteTR: "Emine İkiz Leblebicioğlu'nun profesyonel yaklaşımı; eğitimde disiplini, kurumsal yönetimde şeffaflığı ve sivil toplumda katılımcılığı bir araya getiren çok boyutlu bir vizyona dayanır. Her adımında sektörel standartların yükseltilmesini ve topluma değer katmayı amaçlar.",
  editorialNoteEN: "The professional ethos of Emine İkiz Leblebicioğlu rests upon multidisciplinary excellence: artistic discipline, corporate transparency, and dedicated civic participation. Across every domain, her focus remains on elevating sectoral integrity and serving the public good.",
};
