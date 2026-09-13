/**
 * Admin Panel & Dynamic Random Slideshow Controller
 * For: ৪নং ওয়ার্ড, ১ নং বদলগাছী ইউনিয়ন পরিষদ নির্বাচন
 * Candidate: মোঃ রাজেক রেজভী
 */

(function () {
  'use strict';

  // Bengali digits helper
  function toBnDigits(n) {
    return String(n).replace(/[0-9]/g, (d) => '০১২৩৪৫৬৭৮৯'[d]);
  }

  // Default initial portal configuration
  const DEFAULT_PORTAL_CONFIG = {
    general: {
      tickerBadge: 'নির্বাচনি আপডেট',
      tickerText: '১ নং বদলগাছী ইউনিয়ন পরিষদ নির্বাচনে ৪নং ওয়ার্ডের মেম্বার পদপ্রার্থী মোঃ রাজেক রেজভী এর নির্বাচনি ও নাগরিক সেবা পোর্টালে স্বাগতম।',
      topHotline: '০১৭১২-৩৪৫৬৭৮',
      topLocation: '৪নং ওয়ার্ড, বদলগাছী, নওগাঁ'
    },
    candidate: {
      name: 'মোঃ রাজেক রেজভী',
      title: 'সাবেক ছাত্রনেতা ও তরুণ সমাজকর্মী',
      subtitle: '১ নং বদলগাছী ইউনিয়ন পরিষদ, বদলগাছী, নওগাঁ',
      orgDuty: 'সেক্রেটারি, যুব ও ক্রীড়া বিভাগ, বাংলাদেশ জামায়াতে ইসলামী, বদলগাছী উপজেলা শাখা।',
      slogan: 'আপনার মূল্যবান ভোট দিয়ে সৎ ও যোগ্য নেতৃত্বকে নির্বাচিত করুন',
      quote: '"সততা, দক্ষতা এবং জনসেবাই আমাদের অঙ্গীকার।"',
      phone: '01712345678',
      photo: '/candidate_rajek_rezvi.jpg'
    },
    slides: [
      {
        id: 'slide-1',
        badge: 'অবকাঠামো উন্নয়ন',
        badgeColor: 'bg-emerald-600 text-white',
        title: 'টেকসই রাস্তাঘাট ও আধুনিক ড্রেনেজ ব্যবস্থা',
        subtitle: 'ভান্ডারপুর, কোলা ও ৪নং ওয়ার্ডের কাঁচা রাস্তা পাকাকরণ ও কালভার্ট সংস্কার',
        description: 'বর্ষা মৌসুমে জলাবদ্ধতা নিরসনে পরিকল্পিত ড্রেনেজ এবং প্রতিটি জনবহুল মোড়ে রাতের নিরাপত্তার জন্য আধুনিক সোলার সড়কবাতি নিশ্চিত করা হবে।',
        image: '/slide_road_dev.jpg',
        link: '#manifesto',
        btnText: 'উন্নয়ন পরিকল্পনা দেখুন'
      },
      {
        id: 'slide-2',
        badge: 'মানবিক অঙ্গীকার',
        badgeColor: 'bg-amber-600 text-white',
        title: 'দালালমুক্ত ভাতা ও সামাজিক মানবিক সহায়তা',
        subtitle: 'বয়স্ক, বিধবা, প্রতিবন্ধী ও ভিজিডি ভাতা উন্মুক্ত জনসমক্ষে শতভাগ স্বচ্ছতায় বিতরণ',
        description: 'কোনো প্রকার ঘুষ, সুপারিশ বা মধ্যস্বত্বভোগী নয়—প্রকৃত দুস্থ অসহায় পরিবারগুলোর হাতে তাদের ন্যায্য সরকারি অধিকার সরাসরি পৌঁছে দেওয়া হবে।',
        image: '/slide_community_care.jpg',
        link: '#services',
        btnText: 'ভাতা ও সেবা নির্দেশিকা'
      },
      {
        id: 'slide-3',
        badge: 'তারুণ্য ও ক্রীড়া',
        badgeColor: 'bg-blue-600 text-white',
        title: 'মাদক ও জুয়ামুক্ত তারুণ্য এবং যুব কর্মসংস্থান',
        subtitle: 'খেলার মাঠ সংস্কার, নিয়মিত ক্রীড়া সামগ্রী বিতরণ ও আধুনিক ফ্রিল্যান্সিং সহায়তা',
        description: 'যুবসমাজকে মাদক ও অপসংস্কৃতি থেকে রক্ষা করতে পাঠাগার স্থাপন, নৈতিক শিক্ষা চর্চা ও তরুণদের প্রযুক্তিগত দক্ষতায় স্বাবলম্বী করা হবে।',
        image: '/slide_community_care.jpg',
        link: '#manifesto',
        btnText: 'যুব পরিকল্পনা দেখুন'
      },
      {
        id: 'slide-4',
        badge: 'ডিজিটাল জবাবদিহিতা',
        badgeColor: 'bg-purple-600 text-white',
        title: '২৪/৭ উন্মুক্ত হটলাইন ও নিয়মিত গণশুনানি',
        subtitle: 'মেম্বার থাকবে জনগণের কাছে জবাবদিহি, প্রতি ৩ মাস অন্তর ব্যয়ের হিসাব প্রদান',
        description: 'ওয়ার্ডের প্রতিটি নাগরিকের সমস্যার তাৎক্ষণিক সমাধানে স্থায়ী ডিজিটাল তথ্যসেবা বুথ ও সার্বক্ষণিক কল সেন্টার চালু থাকবে।',
        image: '/slide_road_dev.jpg',
        link: '#complaints',
        btnText: 'সমস্যা সরাসরি জানান'
      }
    ],
    hotlines: [
      {
        id: 'hotline-1',
        category: 'সরাসরি প্রার্থী',
        badgeClass: 'bg-gov-green text-white',
        title: 'মোঃ রাজেক রেজভী',
        subtitle: '৪নং ওয়ার্ড মেম্বার পদপ্রার্থী • সাবেক ছাত্রনেতা',
        icon: 'fa-user-shield',
        iconBg: 'bg-emerald-100 text-gov-green',
        phone: '01712345678',
        phoneDisplay: '০১৭১২-৩৪৫৬৭৮ (সরাসরি কল)',
        borderClass: 'border-2 border-emerald-500/40 from-emerald-50 to-white'
      },
      {
        id: 'hotline-2',
        category: 'আইনশৃঙ্খলা',
        badgeClass: 'bg-blue-100 text-blue-800',
        title: 'বদলগাছী থানা পুলিশ',
        subtitle: 'ডিউটি অফিসার ও জরুরি আইন শৃঙ্খলা সাড়া',
        icon: 'fa-shield-halved',
        iconBg: 'bg-blue-50 text-blue-600',
        phone: '01320123456',
        phoneDisplay: '০১৩২০-১২৩৪৫৬ (থানা)',
        borderClass: 'border border-slate-200 bg-white'
      },
      {
        id: 'hotline-3',
        category: 'স্বাস্থ্যসেবা',
        badgeClass: 'bg-rose-100 text-gov-red',
        title: 'কমিউনিটি ক্লিনিক ও হাসপাতাল',
        subtitle: 'জরুরি চিকিৎসা ও অ্যাম্বুলেন্স সেবা',
        icon: 'fa-heart-pulse',
        iconBg: 'bg-rose-50 text-gov-red',
        phone: '01723556677',
        phoneDisplay: '০১৭২৩-৫৫৬৬৭৭ (স্বাস্থ্য)',
        borderClass: 'border border-slate-200 bg-white'
      },
      {
        id: 'hotline-4',
        category: 'অগ্নি ও দুর্যোগ',
        badgeClass: 'bg-amber-100 text-amber-800',
        title: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স',
        subtitle: 'বদলগাছী ফায়ার স্টেশন',
        icon: 'fa-fire-extinguisher',
        iconBg: 'bg-amber-50 text-amber-600',
        phone: '01711998877',
        phoneDisplay: '০১৭১১-৯৯৮৮৭৭ (ফায়ার)',
        borderClass: 'border border-slate-200 bg-white'
      },
      {
        id: 'hotline-5',
        category: 'প্রশাসনিক',
        badgeClass: 'bg-emerald-100 text-emerald-800',
        title: 'বদলগাছী ইউনিয়ন পরিষদ কার্যালয়',
        subtitle: 'ইউপি সচিব ও হিসাব সহকারী',
        icon: 'fa-building-columns',
        iconBg: 'bg-emerald-50 text-emerald-700',
        phone: '01711223344',
        phoneDisplay: '০১৭১১-২২৩৩৪৪ (ইউপি অফিস)',
        borderClass: 'border border-slate-200 bg-white'
      },
      {
        id: 'hotline-6',
        category: 'জাতীয় সেবা',
        badgeClass: 'bg-purple-100 text-purple-800',
        title: 'জাতীয় জরুরি হেল্পলাইন ৯৯৯ / ৩৩৩',
        subtitle: 'পুলিশ, অ্যাম্বুলেন্স, ফায়ার ও জাতীয় তথ্য সেবা',
        icon: 'fa-tower-broadcast',
        iconBg: 'bg-purple-50 text-purple-600',
        phone: '999',
        phoneDisplay: '৯৯৯ / ৩৩৩ (টোল-ফ্রি)',
        borderClass: 'border border-slate-200 bg-white'
      }
    ],
    services: [
      {
        id: 'serv-1',
        key: 'birth-reg',
        title: 'জন্ম ও মৃত্যু নিবন্ধন',
        icon: 'fa-id-card',
        iconColor: 'bg-emerald-100 text-gov-green',
        description: 'শিশুর জন্মের ৪৫ দিনের মধ্যে বিনামূল্যে এবং পরবর্তী বয়সে অনলাইনে জন্ম নিবন্ধন সম্পন্ন করার সহজ ধাপ।',
        points: [
          'ইপিআই টিকা কার্ড বা চিকিৎসকের প্রত্যয়ন',
          'পিতা-মাতার জাতীয় পরিচয়পত্র (NID)',
          'ইউপি হোল্ডিং ট্যাক্স পরিশোধের রশিদ'
        ],
        btnClass: 'bg-emerald-50 hover:bg-emerald-100 text-gov-darkgreen border-emerald-200'
      },
      {
        id: 'serv-2',
        key: 'allowance',
        title: 'ভিজিডি, ভিজিএফ ও সামাজিক ভাতা',
        icon: 'fa-hand-holding-dollar',
        iconColor: 'bg-amber-100 text-amber-700',
        description: 'বয়স্ক ভাতা, বিধবা ভাতা, প্রতিবন্ধী ভাতা ও মাতৃত্বকালীন ভাতার সম্পূর্ণ স্বচ্ছ ও দালালমুক্ত তালিকাভুক্তি।',
        points: [
          'উন্মুক্ত জনসমক্ষে যোগ্যদের বাছাই',
          'কোনো ধরনের কমিশন বা উৎকোচ সম্পূর্ণ নিষিদ্ধ',
          'মোবাইল ব্যাংকিংয়ে সরাসরি ভাতা প্রদান'
        ],
        btnClass: 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200'
      },
      {
        id: 'serv-3',
        key: 'gram-adalat',
        title: 'গ্রাম আদালত ও বিরোধ নিষ্পত্তি',
        icon: 'fa-scale-balanced',
        iconColor: 'bg-blue-100 text-blue-700',
        description: 'জমিজমা, পারিবারিক কলহ ও স্থানীয় বিরোধ কম সময়ে নামমাত্র খরচে স্থানীয়ভাবে আপস-মীমাংসার আইনি পথ।',
        points: [
          'দেওয়ানি বিরোধে আবেদন ফি মাত্র ২০ টাকা',
          'ফৌজদারি ছোটখাটো অভিযোগে ফি মাত্র ১০ টাকা',
          'কোনো উকিল ছাড়াই শালিসি বোর্ড গঠন'
        ],
        btnClass: 'bg-blue-50 hover:bg-blue-100 text-blue-900 border-blue-200'
      },
      {
        id: 'serv-4',
        key: 'warishan',
        title: 'ওয়ারিশান ও নাগরিকত্ব সনদ',
        icon: 'fa-certificate',
        iconColor: 'bg-purple-100 text-purple-700',
        description: 'পারিবারিক ওয়ারিশান সনদ, চারিত্রিক সনদ ও স্থানীয় বাসিন্দা সনদপত্র কোনো হয়রানি ছাড়া দ্রুত পাওয়ার উপায়।',
        points: [
          'স্থানীয় গণ্যমান্য ব্যক্তিবর্গ কর্তৃক সত্যায়িত বংশতালিকা',
          'সকল ওয়ারিশের জাতীয় পরিচয়পত্র / জন্মনিবন্ধন',
          'হালনাগাদ জমির খাজনা ও ট্যাক্স ক্লিয়ারেন্স'
        ],
        btnClass: 'bg-purple-50 hover:bg-purple-100 text-purple-900 border-purple-200'
      },
      {
        id: 'serv-5',
        key: 'krishi',
        title: 'কৃষি প্রণোদনা ও সার-বীজ সহায়তা',
        icon: 'fa-wheat-awn',
        iconColor: 'bg-lime-100 text-lime-800',
        description: '৪নং ওয়ার্ডের কৃষক ভাইদের জন্য সরকারি কৃষি কার্ড, উন্নত বীজ, সার এবং কৃষি ভর্তুকি প্রাপ্তির সহজ পথ।',
        points: [
          'উপসহকারী কৃষি কর্মকর্তার মাধ্যমে প্রণোদনা তথ্য',
          'দুর্যোগকালীন ফসল ক্ষতিপূরণ সহায়তা তালিকা',
          'আধুনিক কৃষি প্রযুক্তির পরামর্শ সেবা'
        ],
        btnClass: 'bg-lime-50 hover:bg-lime-100 text-lime-900 border-lime-200'
      },
      {
        id: 'serv-6',
        key: 'trade-license',
        title: 'ট্রেড লাইসেন্স ও হোল্ডিং ট্যাক্স',
        icon: 'fa-shop',
        iconColor: 'bg-teal-100 text-teal-800',
        description: 'স্থানীয় ক্ষুদ্র ও মাঝারি ব্যবসার ইউপি ট্রেড লাইসেন্স ইস্যু ও গৃহকর নিরূপণের যৌক্তিক ও স্বচ্ছ নিয়ম।',
        points: [
          'ওয়ার্ডের ব্যবসায়ী ভাইদের ঝামেলামুক্ত লাইসেন্স প্রাপ্তি',
          'সরকারি ফি ব্যতিরেকে অতিরিক্ত কোনো অর্থ নয়',
          'দ্রুত নবায়ন ও ব্যাংক লোন সহায়তার প্রত্যয়ন'
        ],
        btnClass: 'bg-teal-50 hover:bg-teal-100 text-teal-900 border-teal-200'
      }
    ],
    manifesto: [
      {
        id: 'man-1',
        num: '১',
        subPillar: '১ম অঙ্গীকার • আধুনিক অবকাঠামো',
        title: 'টেকসই রাস্তাঘাট, ড্রেনেজ ও সড়কবাতি',
        color: 'from-emerald-50/50 via-white to-slate-50 border-emerald-100 hover:border-emerald-300',
        numBg: 'bg-gov-green shadow-gov-green/20',
        subColor: 'text-gov-green',
        tagBg: 'bg-emerald-100 text-gov-darkgreen',
        description: '৪নং ওয়ার্ডের (ভান্ডারপুর, কোলা ও অন্যান্য পাড়ার) সকল কাঁচা মাটির রাস্তা পর্যায়ক্রমে পাকাকরণ এবং কালভার্ট মেরামত করা হবে। বর্ষার মৌসুমে জলাবদ্ধতা নিরসনে পরিকল্পিত ড্রেনেজ এবং প্রতিটি জনবহুল মোড়ে রাতের নিরাপত্তার জন্য সোলার সড়কবাতি নিশ্চিত করা হবে।',
        tags: ['কাঁচা রাস্তা পাকাকরণ', 'সোলার সড়কবাতি', 'জলাবদ্ধতা দূরীকরণ']
      },
      {
        id: 'man-2',
        num: '২',
        subPillar: '২য় অঙ্গীকার • ১০০% স্বচ্ছতা',
        title: 'দালালমুক্ত ভাতা ও সরকারি সহায়তা বণ্টন',
        color: 'from-amber-50/50 via-white to-slate-50 border-amber-100 hover:border-amber-300',
        numBg: 'bg-amber-600 shadow-amber-600/20',
        subColor: 'text-amber-700',
        tagBg: 'bg-amber-100 text-amber-900',
        description: 'বয়স্ক ভাতা, বিধবা ভাতা, প্রতিবন্ধী ভাতা ও ভিজিডি কার্ডের তালিকা উন্মুক্ত স্থানে স্থানীয় নাগরিকদের উপস্থিতিতে যাচাই-বাছাই করা হবে। কোনো প্রকার ঘুষ, স্বজনপ্রীতি বা মধ্যস্বত্বভোগীদের হস্তক্ষেপ বরদাস্ত করা হবে না। প্রকৃত দুস্থদের অধিকার সরাসরি তাদের হাতে পৌঁছাবে।',
        tags: ['উন্মুক্ত বাছাই', 'ঘুষ ও দালালমুক্ত', 'সরাসরি দুস্থদের অধিকার']
      },
      {
        id: 'man-3',
        num: '৩',
        subPillar: '৩য় অঙ্গীকার • তারুণ্যের শক্তি',
        title: 'মাদক ও জুয়ামুক্ত সমাজ ও যুব কর্মসংস্থান',
        color: 'from-blue-50/50 via-white to-slate-50 border-blue-100 hover:border-blue-300',
        numBg: 'bg-blue-600 shadow-blue-600/20',
        subColor: 'text-blue-700',
        tagBg: 'bg-blue-100 text-blue-900',
        description: 'ওয়ার্ডে মাদক ব্যবসা ও জুয়ার বিরুদ্ধে প্রশাসনকে সাথে নিয়ে জিরো টলারেন্স নীতি গ্রহণ করা হবে। যুবসমাজকে বিপথগামী হওয়া থেকে রক্ষা করতে খেলার মাঠ সংস্কার, নিয়মিত খেলাধুলার সামগ্রী বিতরণ, ওয়ার্ড পাঠাগার এবং যুবকদের ফ্রিল্যান্সিং ও কারিগরি প্রশিক্ষণে উৎসাহ দেওয়া হবে।',
        tags: ['মাদকবিরোধী জিরো টলারেন্স', 'খেলার মাঠ ও ক্রীড়া', 'যুব দক্ষতা উন্নয়ন']
      },
      {
        id: 'man-4',
        num: '৪',
        subPillar: '৪র্থ অঙ্গীকার • জবাবদিহিতা',
        title: '২৪/৭ সেবা কেন্দ্র ও নিয়মিত গণশুনানি',
        color: 'from-purple-50/50 via-white to-slate-50 border-purple-100 hover:border-purple-300',
        numBg: 'bg-purple-600 shadow-purple-600/20',
        subColor: 'text-purple-700',
        tagBg: 'bg-purple-100 text-purple-900',
        description: 'ওয়ার্ডের প্রতিটি নাগরিক যেন সহজে মেম্বারের সাথে যোগাযোগ করতে পারেন সেজন্য ২৪ ঘণ্টার উন্মুক্ত হেল্পলাইন ও স্থায়ী ডিজিটাল সেবা বুথ থাকবে। প্রতি তিন মাস অন্তর ওয়ার্ডবাসীর মুখোমুখি হয়ে উন্নয়ন ব্যয়ের হিসাব প্রদান এবং সরাসরি অভিযোগ গ্রহণের জন্য উন্মুক্ত গণশুনানি অনুষ্ঠিত হবে।',
        tags: ['ডিজিটাল সেবা বুথ', 'ত্রৈমাসিক গণশুনানি', 'জনগণের কাছে হিসাব প্রদান']
      }
    ]
  };

  // State
  let portalData = null;
  const STORAGE_KEY = 'ward4_portal_admin_config_v2';

  // Load config from localStorage or defaults
  function loadConfig() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        portalData = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not load portal admin config, using defaults', e);
    }
    if (!portalData || !portalData.slides || !portalData.hotlines) {
      portalData = JSON.parse(JSON.stringify(DEFAULT_PORTAL_CONFIG));
    }
  }

  // Save config to localStorage
  function saveConfig() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(portalData));
    } catch (e) {
      console.error('Error saving portal config:', e);
      alert('সতর্কতা: স্টোরেজ সীমা অতিক্রম করেছে। কিছু ছবি বা টেক্সট ছোট করুন।');
    }
    renderAll();
    showToast('পরিবর্তন সফলভাবে সংরক্ষিত ও প্রকাশিত হয়েছে!');
  }

  // Show Toast
  function showToast(msg) {
    let toast = document.getElementById('admin-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'admin-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-white border border-emerald-500/50 shadow-2xl px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i><span>${msg}</span>`;
    toast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3500);
  }

  // ============================================================================
  // RENDER SECTIONS DYNAMICALLY
  // ============================================================================

  // 1. General & Hero Candidate
  function renderGeneral() {
    const g = portalData.general;
    const c = portalData.candidate;

    // Top ticker
    const tb = document.getElementById('ticker-badge-text');
    const tm = document.getElementById('ticker-main-text');
    const th = document.getElementById('top-hotline-phone');
    const tl = document.getElementById('top-location-text');

    if (tb) tb.textContent = g.tickerBadge || 'নির্বাচনি আপডেট';
    if (tm) tm.textContent = g.tickerText || '';
    if (th) th.textContent = g.topHotline || '';
    if (tl) tl.textContent = g.topLocation || '';

    // Hero candidate
    const cn = document.getElementById('hero-candidate-name');
    const ct = document.getElementById('hero-candidate-title');
    const cs = document.getElementById('hero-candidate-sub');
    const co = document.getElementById('hero-candidate-org-duty');
    const csl = document.getElementById('hero-candidate-slogan-text');
    const cq = document.getElementById('hero-candidate-quote');
    const cp = document.getElementById('hero-candidate-phone-link');

    if (cn) cn.textContent = c.name;
    if (ct) ct.textContent = c.title;
    if (cs) cs.textContent = c.subtitle;
    if (co) co.textContent = c.orgDuty;
    if (csl) csl.textContent = c.slogan;
    if (cq) cq.textContent = c.quote;
    if (cp) {
      cp.href = `tel:${c.phone || '01712345678'}`;
      cp.innerHTML = `<i class="fa-solid fa-phone-volume"></i><span>সরাসরি প্রার্থীর সাথে কথা বলুন (২৪/৭)</span>`;
    }
  }

  // 2. Random Kismat-Perfect Slideshow Engine
  let currentSlide = 0;
  let autoplayInterval = null;
  let isAutoplayPlaying = true;
  let progressStep = 0;
  let progressInterval = null;
  const AUTOPLAY_DURATION = 5000; // 5 seconds per slide

  function renderSlideshow() {
    const container = document.getElementById('slides-container');
    const dotsContainer = document.getElementById('slider-dots-container');
    const totalCountEl = document.getElementById('slider-total-count');
    const currentIndexEl = document.getElementById('slider-current-index');

    if (!container || !portalData.slides || portalData.slides.length === 0) return;

    if (currentSlide >= portalData.slides.length) currentSlide = 0;

    if (totalCountEl) totalCountEl.textContent = toBnDigits(String(portalData.slides.length).padStart(2, '0'));
    if (currentIndexEl) currentIndexEl.textContent = toBnDigits(String(currentSlide + 1).padStart(2, '0'));

    // Render slide items
    container.innerHTML = portalData.slides.map((slide, idx) => {
      const isVisible = idx === currentSlide;
      return `
        <div class="slide-item absolute inset-0 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}" data-slide-index="${idx}">
          <!-- Background Image with Gradient Overlay -->
          <img 
            src="${slide.image}" 
            alt="${slide.title}" 
            class="w-full h-full object-cover object-center absolute inset-0 transform scale-105 transition-transform duration-10000 ease-out" 
            onerror="this.onerror=null; this.src='/slide_road_dev.jpg';"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-black/30"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>

          <!-- Slide Content -->
          <div class="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-end pb-18 sm:pb-20 pt-12">
            <div class="max-w-2xl text-left">
              <!-- Slide Badge -->
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${slide.badgeColor || 'bg-emerald-600 text-white'} mb-3 shadow-md">
                <i class="fa-solid fa-flag text-[11px]"></i>
                ${slide.badge || 'উন্নয়ন সেক্টর'}
              </span>

              <!-- Slide Title -->
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-sm">
                ${slide.title}
              </h3>

              <!-- Slide Subtitle -->
              <p class="text-emerald-300 text-sm sm:text-base font-semibold mt-2 drop-shadow-xs">
                ${slide.subtitle}
              </p>

              <!-- Slide Description -->
              <p class="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed drop-shadow-xs">
                ${slide.description}
              </p>

              <!-- Action Link -->
              <div class="mt-4 flex items-center gap-3">
                <a href="${slide.link || '#manifesto'}" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm transition-transform active:scale-95 shadow-lg">
                  <span>${slide.btnText || 'বিস্তারিত জানুন'}</span>
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
                <button type="button" onclick="randomSlide()" class="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md text-xs font-semibold px-3 py-2 rounded-xl border border-white/20 transition-colors">
                  <i class="fa-solid fa-shuffle text-yellow-300 text-xs"></i>
                  <span>রেনডম অন্যটি</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Render Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = portalData.slides.map((_, idx) => `
        <button 
          type="button" 
          onclick="window.goToSlide(${idx})" 
          class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-emerald-400 w-6' : 'bg-white/40 hover:bg-white/70'}"
          title="স্লাইড ${idx + 1}"
          aria-label="স্লাইড ${idx + 1}"
        ></button>
      `).join('');
    }

    startProgressBar();
  }

  function startProgressBar() {
    clearInterval(progressInterval);
    const bar = document.getElementById('slider-progress-bar');
    if (!bar) return;
    bar.style.width = '0%';
    let elapsed = 0;
    const stepTime = 50;

    progressInterval = setInterval(() => {
      if (!isAutoplayPlaying) return;
      elapsed += stepTime;
      const pct = Math.min(100, (elapsed / AUTOPLAY_DURATION) * 100);
      bar.style.width = pct + '%';
      if (elapsed >= AUTOPLAY_DURATION) {
        clearInterval(progressInterval);
        nextSlide(true);
      }
    }, stepTime);
  }

  window.nextSlide = function(isAuto = false) {
    if (!portalData.slides || portalData.slides.length <= 1) return;
    currentSlide = (currentSlide + 1) % portalData.slides.length;
    renderSlideshow();
  };

  window.prevSlide = function() {
    if (!portalData.slides || portalData.slides.length <= 1) return;
    currentSlide = (currentSlide - 1 + portalData.slides.length) % portalData.slides.length;
    renderSlideshow();
  };

  window.goToSlide = function(idx) {
    if (idx >= 0 && idx < portalData.slides.length) {
      currentSlide = idx;
      renderSlideshow();
    }
  };

  // RANDOM SLIDE FUNCTION (রেনডম কিসমত পারফেক্ট স্লাইড শো)
  window.randomSlide = function() {
    const len = portalData.slides ? portalData.slides.length : 0;
    if (len <= 1) return;

    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * len);
    } while (nextIdx === currentSlide && len > 1);

    currentSlide = nextIdx;
    renderSlideshow();

    // Visual feedback on random button
    const btn = document.getElementById('slider-random-btn');
    if (btn) {
      btn.classList.add('ring-2', 'ring-yellow-300', 'scale-105');
      setTimeout(() => btn.classList.remove('ring-2', 'ring-yellow-300', 'scale-105'), 400);
    }
  };

  window.toggleSlideAutoplay = function() {
    isAutoplayPlaying = !isAutoplayPlaying;
    const icon = document.getElementById('slider-playpause-icon');
    if (icon) {
      if (isAutoplayPlaying) {
        icon.className = 'fa-solid fa-pause text-xs';
        startProgressBar();
      } else {
        icon.className = 'fa-solid fa-play text-xs text-emerald-600';
        clearInterval(progressInterval);
      }
    }
  };

  // 3. Emergency Hotlines Grid
  function renderHotlines() {
    const grid = document.getElementById('emergency-hotlines-grid');
    if (!grid || !portalData.hotlines) return;

    grid.innerHTML = portalData.hotlines.map(h => `
      <div class="rounded-2xl p-5 shadow-xs hover:shadow-civic transition-all ${h.borderClass || 'border border-slate-200 bg-white'}">
        <div class="flex items-start justify-between">
          <div>
            <span class="inline-block text-[11px] font-bold px-2 py-0.5 rounded ${h.badgeClass || 'bg-slate-100 text-slate-800'}">
              ${h.category}
            </span>
            <h3 class="text-lg font-bold text-slate-900 mt-1">${h.title}</h3>
            <p class="text-xs text-slate-500 font-medium">${h.subtitle}</p>
          </div>
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${h.iconBg || 'bg-emerald-100 text-gov-green'}">
            <i class="fa-solid ${h.icon || 'fa-phone'}"></i>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-100">
          <a href="tel:${h.phone}" class="w-full flex items-center justify-center gap-2 bg-gov-green hover:bg-gov-darkgreen text-white text-sm font-semibold py-2.5 rounded-xl transition-colors shadow-xs">
            <i class="fa-solid fa-phone"></i>
            <span>${h.phoneDisplay || h.phone}</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  // 4. Citizen Services Grid
  function renderServices() {
    const grid = document.getElementById('citizen-services-grid');
    if (!grid || !portalData.services) return;

    grid.innerHTML = portalData.services.map(s => `
      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-civic-hover transition-all flex flex-col justify-between">
        <div>
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${s.iconColor || 'bg-emerald-100 text-gov-green'}">
            <i class="fa-solid ${s.icon || 'fa-file-lines'}"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">${s.title}</h3>
          <p class="text-slate-600 text-sm mb-4 leading-relaxed">
            ${s.description}
          </p>
          <div class="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <p class="font-semibold text-slate-800"><i class="fa-solid fa-circle-check text-gov-green mr-1"></i> প্রধান সুবিধা ও নিয়ম:</p>
            ${(s.points || []).map(pt => `<p>• ${pt}</p>`).join('')}
          </div>
        </div>
        <div class="mt-6 pt-4 border-t border-slate-100">
          <button onclick="window.openServiceModal('${s.key || 'birth-reg'}')" class="w-full flex items-center justify-center gap-2 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors border ${s.btnClass || 'bg-emerald-50 hover:bg-emerald-100 text-gov-darkgreen border-emerald-200'}">
            <span>বিস্তারিত নিয়ম ও নির্দেশিকা</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  // 5. Manifesto Pillars Grid
  function renderManifesto() {
    const grid = document.getElementById('manifesto-pillars-grid');
    if (!grid || !portalData.manifesto) return;

    grid.innerHTML = portalData.manifesto.map(m => `
      <div class="bg-gradient-to-br rounded-3xl p-6 sm:p-8 shadow-sm border-2 transition-all ${m.color || 'from-emerald-50/50 via-white to-slate-50 border-emerald-100'}">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 rounded-2xl text-white flex items-center justify-center text-2xl font-bold shadow-md ${m.numBg || 'bg-gov-green shadow-gov-green/20'}">
            ${m.num}
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wide ${m.subColor || 'text-gov-green'}">${m.subPillar}</span>
            <h3 class="text-xl font-bold text-slate-900">${m.title}</h3>
          </div>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          ${m.description}
        </p>
        <div class="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          ${(m.tags || []).map(tag => `<span class="px-3 py-1 rounded-lg ${m.tagBg || 'bg-emerald-100 text-gov-darkgreen'}">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render everything
  function renderAll() {
    renderGeneral();
    renderSlideshow();
    renderHotlines();
    renderServices();
    renderManifesto();
  }

  // ============================================================================
  // ADMIN AUTHENTICATION & SECRET TRIPLE-CLICK HEART ENTRY ENGINE
  // ============================================================================
  const ADMIN_AUTH_USER = 'admin';
  const ADMIN_AUTH_PASS = 'raz1243';
  const AUTH_SESSION_KEY = 'ward4_admin_portal_session_auth_v1';

  let heartClickCount = 0;
  let heartClickTimer = null;
  let lastHeartTapTime = 0;

  function isAdminAuthenticated() {
    try {
      return sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
    } catch (e) {
      return false;
    }
  }

  function setAdminSession(status) {
    try {
      if (status) {
        sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
      } else {
        sessionStorage.removeItem(AUTH_SESSION_KEY);
      }
    } catch (e) {}
  }

  // Footer Heart Icon Secret 3-Click / Tap Handler (Optimized for Mobile & Desktop)
  window.handleFooterHeartClick = function(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const now = Date.now();
    // Debounce very fast duplicate events (e.g. touchstart + click firing simultaneously)
    if (now - lastHeartTapTime < 80) return;
    lastHeartTapTime = now;

    heartClickCount++;

    // Tactile vibration feedback if supported on mobile
    try {
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(40);
      }
    } catch (e) {}

    // Heartbeat pulse animation feedback
    const heartIcon = document.getElementById('footer-heart-icon') || document.getElementById('footer-heart-btn');
    if (heartIcon) {
      heartIcon.classList.remove('scale-150', 'text-rose-400');
      void heartIcon.offsetWidth; // trigger reflow
      heartIcon.classList.add('scale-150', 'text-rose-400');
      setTimeout(() => {
        heartIcon.classList.remove('scale-150', 'text-rose-400');
      }, 250);
    }

    // Reset click counter if not clicked again within 3.5s
    clearTimeout(heartClickTimer);
    heartClickTimer = setTimeout(() => {
      heartClickCount = 0;
    }, 3500);

    // If clicked/tapped 3 times
    if (heartClickCount >= 3) {
      heartClickCount = 0;
      clearTimeout(heartClickTimer);

      if (isAdminAuthenticated()) {
        showToast('এডমিন সেশন চালু রয়েছে। এডমিন প্যানেল খোলা হচ্ছে...');
        openAdminPanelDirect();
      } else {
        window.openAdminLoginModal();
      }
    }
  };

  // Inject Admin Login Modal Markup
  function injectAdminLoginModalMarkup() {
    if (document.getElementById('admin-login-modal')) return;

    const loginModalHtml = `
      <div id="admin-login-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md transition-opacity">
        <div class="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn relative">
          
          <!-- Top Header -->
          <div class="bg-gradient-to-r from-slate-900 via-emerald-950 to-gov-darkgreen text-white px-6 py-5 flex items-center justify-between border-b border-emerald-800/40">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-yellow-300 text-lg">
                <i class="fa-solid fa-user-shield"></i>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-bold text-white">এডমিন প্যানেল লগইন</h3>
                <p class="text-xs text-emerald-200">৪নং ওয়ার্ড পোর্টাল প্রশাসনিক প্রবেশাধিকার</p>
              </div>
            </div>
            <button type="button" onclick="window.closeAdminLoginModal()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" aria-label="বন্ধ করুন">
              <i class="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          <!-- Login Form Body -->
          <form id="admin-login-form" onsubmit="window.submitAdminLogin(event)" class="p-6 space-y-4">
            
            <!-- Error Alert -->
            <div id="admin-login-error" class="hidden bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold p-3 rounded-xl flex items-center gap-2">
              <i class="fa-solid fa-triangle-exclamation text-rose-500 shrink-0 text-sm"></i>
              <span id="admin-login-error-text">ভুল ইউজারনেম অথবা পাসওয়ার্ড! সঠিক তথ্য দিন।</span>
            </div>

            <!-- Username Field -->
            <div>
              <label for="admin-login-username" class="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-user text-emerald-600"></i>
                <span>ইউজার নেম (Username)</span>
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  id="admin-login-username" 
                  placeholder="admin" 
                  autocomplete="username" 
                  class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all font-sans"
                  required
                />
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label for="admin-login-password" class="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-lock text-emerald-600"></i>
                <span>পাসওয়ার্ড (Password)</span>
              </label>
              <div class="relative">
                <input 
                  type="password" 
                  id="admin-login-password" 
                  placeholder="••••••••" 
                  autocomplete="current-password" 
                  class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 pr-10 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all font-sans"
                  required
                />
                <button 
                  type="button" 
                  onclick="window.toggleAdminPasswordVisibility()" 
                  id="admin-password-toggle-btn"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                  title="পাসওয়ার্ড দেখুন/লুকান"
                >
                  <i class="fa-regular fa-eye text-sm" id="admin-password-eye-icon"></i>
                </button>
              </div>
            </div>

            <div class="pt-2 flex items-center gap-2.5">
              <button 
                type="submit" 
                id="admin-login-submit-btn"
                class="flex-1 bg-gov-green hover:bg-gov-darkgreen text-white font-bold text-sm py-2.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <i class="fa-solid fa-right-to-bracket"></i>
                <span>লগইন করুন</span>
              </button>
              <button 
                type="button" 
                onclick="window.closeAdminLoginModal()" 
                class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors"
              >
                বাতিল
              </button>
            </div>

            <div class="pt-2 border-t border-slate-100 text-center">
              <span class="text-[11px] text-slate-400">
                <i class="fa-solid fa-shield-halved text-emerald-600 mr-1"></i> শুধুমাত্র অনুমোদিত মেম্বার ও অ্যাডমিনদের জন্য
              </span>
            </div>

          </form>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', loginModalHtml);
  }

  // Toggle Password Visibility
  window.toggleAdminPasswordVisibility = function() {
    const input = document.getElementById('admin-login-password');
    const icon = document.getElementById('admin-password-eye-icon');
    if (!input || !icon) return;

    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'fa-regular fa-eye-slash text-sm text-emerald-600';
    } else {
      input.type = 'password';
      icon.className = 'fa-regular fa-eye text-sm text-slate-400';
    }
  };

  // Open & Close Admin Login Modal
  window.openAdminLoginModal = function() {
    injectAdminLoginModalMarkup();
    const modal = document.getElementById('admin-login-modal');
    const errBox = document.getElementById('admin-login-error');
    const userInp = document.getElementById('admin-login-username');
    const passInp = document.getElementById('admin-login-password');

    if (errBox) errBox.classList.add('hidden');
    if (userInp) {
      userInp.value = '';
      userInp.classList.remove('border-rose-500');
    }
    if (passInp) {
      passInp.value = '';
      passInp.classList.remove('border-rose-500');
    }

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (userInp) userInp.focus();
      }, 100);
    }
  };

  window.closeAdminLoginModal = function() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  // Submit Admin Login (Matches user: admin, pass: raz1243)
  window.submitAdminLogin = function(event) {
    if (event) event.preventDefault();

    const userInp = document.getElementById('admin-login-username');
    const passInp = document.getElementById('admin-login-password');
    const errBox = document.getElementById('admin-login-error');
    const errText = document.getElementById('admin-login-error-text');

    const enteredUser = (userInp ? userInp.value : '').trim();
    const enteredPass = passInp ? passInp.value : '';

    if (enteredUser === ADMIN_AUTH_USER && enteredPass === ADMIN_AUTH_PASS) {
      // Valid credentials
      setAdminSession(true);
      window.closeAdminLoginModal();
      showToast('স্বাগতম! এডমিন লগইন সফল হয়েছে।');
      openAdminPanelDirect();
    } else {
      // Invalid credentials
      if (errBox) {
        errBox.classList.remove('hidden');
        if (errText) errText.textContent = 'ভুল ইউজারনেম অথবা পাসওয়ার্ড! অনুগ্রহ করে সঠিক তথ্য দিন।';
      }
      if (passInp) {
        passInp.value = '';
        passInp.classList.add('border-rose-500');
        passInp.focus();
      }
      if (userInp) {
        userInp.classList.add('border-rose-500');
      }
    }
  };

  // Admin Logout
  window.adminLogout = function() {
    setAdminSession(false);
    window.closeAdminPanel();
    showToast('এডমিন লগআউট সফলভাবে সম্পন্ন হয়েছে।');
  };

  // ============================================================================
  // BUILT-IN ADMIN PANEL UI & CONTROLLER
  // ============================================================================
  let currentAdminTab = 'slides';

  function injectAdminModalMarkup() {
    if (document.getElementById('admin-panel-modal')) return;

    const modalHtml = `
      <div id="admin-panel-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md transition-opacity">
        <div class="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
          
          <!-- Admin Modal Top Bar -->
          <div class="bg-gradient-to-r from-slate-900 via-emerald-950 to-gov-darkgreen text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-emerald-800/40">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-yellow-300 text-lg">
                <i class="fa-solid fa-sliders"></i>
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                  <span>বিল্ট-ইন এডমিন প্যানেল</span>
                  <span class="text-[11px] bg-emerald-500 text-slate-950 font-bold px-2.5 py-0.5 rounded-full">সরাসরি নিয়ন্ত্রণ</span>
                </h3>
                <p class="text-xs text-emerald-200">পোর্টালের প্রতিটি সেকশন ও সেক্টর সহজে সংযোজন, বিয়োজন ও সম্পাদন করুন</p>
              </div>
            </div>
            
            <div class="flex items-center gap-2">
              <button type="button" onclick="window.adminLogout()" class="text-xs text-rose-200 hover:text-white bg-rose-950/70 hover:bg-rose-900 px-3 py-1.5 rounded-xl border border-rose-700/60 transition-colors flex items-center gap-1.5" title="এডমিন লগআউট">
                <i class="fa-solid fa-arrow-right-from-bracket text-rose-400"></i>
                <span>লগআউট</span>
              </button>
              <button type="button" onclick="window.resetPortalDefaults()" class="text-xs text-amber-300 hover:text-white bg-amber-950/40 hover:bg-amber-900/80 px-3 py-1.5 rounded-xl border border-amber-700/50 transition-colors" title="ডিফল্ট ডেটায় ফিরিয়ে আনুন">
                <i class="fa-solid fa-rotate-left mr-1"></i> রিসেট
              </button>
              <button type="button" onclick="window.closeAdminPanel()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                <i class="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
          </div>

          <!-- Admin Tabs Header -->
          <div class="bg-slate-100 border-b border-slate-200 px-4 sm:px-6 py-2 flex items-center gap-1.5 overflow-x-auto custom-scroll shrink-0">
            <button type="button" onclick="window.switchAdminTab('slides')" id="adm-tab-btn-slides" class="adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-gov-green text-white shadow-xs">
              <i class="fa-solid fa-images"></i>
              <span>স্লাইড শো (${toBnDigits(portalData.slides ? portalData.slides.length : 0)})</span>
            </button>
            <button type="button" onclick="window.switchAdminTab('general')" id="adm-tab-btn-general" class="adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200">
              <i class="fa-solid fa-user-tie"></i>
              <span>সাধারণ ও প্রার্থী প্রোফাইল</span>
            </button>
            <button type="button" onclick="window.switchAdminTab('hotlines')" id="adm-tab-btn-hotlines" class="adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200">
              <i class="fa-solid fa-phone-volume"></i>
              <span>জরুরি হটলাইন (${toBnDigits(portalData.hotlines ? portalData.hotlines.length : 0)})</span>
            </button>
            <button type="button" onclick="window.switchAdminTab('services')" id="adm-tab-btn-services" class="adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200">
              <i class="fa-solid fa-book-open-reader"></i>
              <span>নাগরিক সেবা হাব (${toBnDigits(portalData.services ? portalData.services.length : 0)})</span>
            </button>
            <button type="button" onclick="window.switchAdminTab('manifesto')" id="adm-tab-btn-manifesto" class="adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200">
              <i class="fa-solid fa-clipboard-check"></i>
              <span>উন্নয়ন ইশতেহার (${toBnDigits(portalData.manifesto ? portalData.manifesto.length : 0)})</span>
            </button>
            <button type="button" onclick="window.switchAdminTab('complaints')" id="adm-tab-btn-complaints" class="adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200">
              <i class="fa-solid fa-bullhorn"></i>
              <span>নাগরিক অভিযোগ ও ফিডব্যাক</span>
            </button>
            <button type="button" onclick="window.switchAdminTab('backup')" id="adm-tab-btn-backup" class="adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200">
              <i class="fa-solid fa-database"></i>
              <span>ব্যাকআপ / রিস্টোর</span>
            </button>
          </div>

          <!-- Admin Modal Content Viewport -->
          <div class="flex-1 overflow-y-auto p-4 sm:p-6 custom-scroll bg-slate-50/70" id="admin-tab-content">
            <!-- Dynamic Content injected based on active tab -->
          </div>

          <!-- Admin Modal Footer -->
          <div class="bg-white px-6 py-3.5 border-t border-slate-200 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-2 text-xs text-slate-500">
              <i class="fa-solid fa-circle-check text-emerald-600"></i>
              <span>প্রতিটি সেভ তাৎক্ষণিকভাবে পুরো ওয়েবসাইটে প্রভাব ফেলবে</span>
            </div>
            <button type="button" onclick="window.closeAdminPanel()" class="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-xs">
              বন্ধ করুন
            </button>
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  // Switch Admin Tab
  window.switchAdminTab = function(tabName) {
    currentAdminTab = tabName;
    document.querySelectorAll('.adm-tab-btn').forEach(btn => {
      btn.className = 'adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200';
    });
    const activeBtn = document.getElementById(`adm-tab-btn-${tabName}`);
    if (activeBtn) {
      activeBtn.className = 'adm-tab-btn whitespace-nowrap text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 bg-gov-green text-white shadow-xs';
    }

    const container = document.getElementById('admin-tab-content');
    if (!container) return;

    if (tabName === 'slides') renderAdminSlides(container);
    else if (tabName === 'general') renderAdminGeneral(container);
    else if (tabName === 'hotlines') renderAdminHotlines(container);
    else if (tabName === 'services') renderAdminServices(container);
    else if (tabName === 'manifesto') renderAdminManifesto(container);
    else if (tabName === 'complaints') renderAdminComplaints(container);
    else if (tabName === 'backup') renderAdminBackup(container);
  };

  // Direct Open (Internal)
  function openAdminPanelDirect(tab = 'slides') {
    injectAdminModalMarkup();
    const modal = document.getElementById('admin-panel-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      window.switchAdminTab(tab);
    }
  }

  // Open & Close Admin Panel (Protected: requires authentication)
  window.openAdminPanel = function(tab = 'slides') {
    if (!isAdminAuthenticated()) {
      window.openAdminLoginModal();
      return;
    }
    openAdminPanelDirect(tab);
  };

  window.openAdminTab = function(tab) {
    window.openAdminPanel(tab);
  };

  window.closeAdminPanel = function() {
    const modal = document.getElementById('admin-panel-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  // ----------------------------------------------------
  // ADMIN TAB 1: SLIDESHOW MANAGER
  // ----------------------------------------------------
  function renderAdminSlides(container) {
    const slides = portalData.slides || [];
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
          <div>
            <h4 class="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <i class="fa-solid fa-images text-emerald-600"></i>
              <span>হোমপেজ স্লাইডার ব্যবস্থাপনা</span>
            </h4>
            <p class="text-xs text-slate-500">হোমপেজের রেনডম স্লাইডারে নতুন স্লাইড যোগ করুন বা আগের স্লাইডগুলো এডিট/মুছুন।</p>
          </div>
          <button type="button" onclick="window.showAddSlideForm()" class="bg-gov-green hover:bg-gov-darkgreen text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 shrink-0 transition-transform active:scale-95">
            <i class="fa-solid fa-plus"></i>
            <span>নতুন স্লাইড যুক্ত করুন</span>
          </button>
        </div>

        <!-- Add / Edit Slide Inline Form Container -->
        <div id="slide-form-wrapper" class="hidden bg-white p-5 rounded-2xl border-2 border-emerald-500/50 shadow-md animate-fadeIn">
          <!-- Dynamically populated when user clicks add or edit -->
        </div>

        <!-- Slides List -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${slides.map((s, idx) => `
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div class="relative h-40 bg-slate-900 overflow-hidden">
                <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='/slide_road_dev.jpg';" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                <span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${s.badgeColor || 'bg-emerald-600 text-white'}">
                  ${s.badge}
                </span>
                <span class="absolute top-3 right-3 text-[11px] font-mono font-bold bg-black/60 text-white px-2 py-0.5 rounded-md backdrop-blur-xs">
                  #${idx + 1}
                </span>
                <h5 class="absolute bottom-3 left-3 right-3 text-sm font-bold text-white line-clamp-1 drop-shadow-sm">
                  ${s.title}
                </h5>
              </div>

              <div class="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p class="text-xs font-semibold text-emerald-700">${s.subtitle}</p>
                  <p class="text-xs text-slate-600 mt-1 line-clamp-2">${s.description}</p>
                </div>

                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span class="text-[11px] text-slate-400 font-mono">লিংক: ${s.link || '#'}</span>
                  <div class="flex items-center gap-2">
                    <button type="button" onclick="window.showEditSlideForm('${s.id}')" class="text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                      <i class="fa-solid fa-pen-to-square mr-1"></i> এডিট
                    </button>
                    <button type="button" onclick="window.deleteSlide('${s.id}')" class="text-xs font-bold text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors">
                      <i class="fa-solid fa-trash mr-1"></i> মুছুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.showAddSlideForm = function() {
    const wrapper = document.getElementById('slide-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <h5 class="font-bold text-slate-900 text-sm flex items-center gap-2">
          <i class="fa-solid fa-circle-plus text-emerald-600"></i>
          <span>নতুন স্লাইড সংযোজন ফরম</span>
        </h5>
        <button type="button" onclick="document.getElementById('slide-form-wrapper').classList.add('hidden')" class="text-slate-400 hover:text-slate-600 text-sm">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <form id="add-slide-form" onsubmit="window.saveNewSlide(event)" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">স্লাইড শিরোনাম *</label>
            <input type="text" id="slide-input-title" required placeholder="যেমন: আধুনিক ড্রেনেজ ও সড়ক ব্যবস্থা" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gov-green outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">উপ-শিরোনাম *</label>
            <input type="text" id="slide-input-subtitle" required placeholder="যেমন: টেকসই রাস্তাঘাট ও জলাবদ্ধতা দূরীকরণ" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gov-green outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">ব্যাজ ট্যাগ (ক্যাটাগরি)</label>
            <input type="text" id="slide-input-badge" placeholder="যেমন: উন্নয়ন সেক্টর / স্বাস্থ্য" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gov-green outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">অ্যাকশন বাটন টেক্সট ও লিংক</label>
            <div class="flex gap-2">
              <input type="text" id="slide-input-btnText" placeholder="বাটন নাম" value="বিস্তারিত দেখুন" class="w-1/2 text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
              <input type="text" id="slide-input-link" placeholder="#manifesto" value="#manifesto" class="w-1/2 text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
            </div>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">স্লাইড বিস্তারিত বিবরণ *</label>
          <textarea id="slide-input-desc" required rows="2" placeholder="ওয়ার্ডবাসীর জন্য এই খাতের সুনির্দিষ্ট প্রতিশ্রুতি লিখুন..." class="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gov-green outline-none"></textarea>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">ছবির লিংক অথবা ডিভাইস থেকে আপলোড করুন *</label>
          <div class="flex flex-col sm:flex-row gap-2">
            <input type="text" id="slide-input-img" placeholder="https://... অথবা /slide_road_dev.jpg" value="/slide_road_dev.jpg" class="flex-1 text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
            <label class="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-slate-300 cursor-pointer shrink-0">
              <i class="fa-solid fa-upload text-emerald-600"></i>
              <span>ছবি নির্বাচন</span>
              <input type="file" accept="image/*" class="hidden" onchange="window.handleSlideImageUpload(event, 'slide-input-img')" />
            </label>
          </div>
        </div>

        <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('slide-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">বাতিল</button>
          <button type="submit" class="bg-gov-green hover:bg-gov-darkgreen text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs">স্লাইড সংরক্ষণ করুন</button>
        </div>
      </form>
    `;
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.handleSlideImageUpload = function(event, targetInputId) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const input = document.getElementById(targetInputId);
      if (input) input.value = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  window.saveNewSlide = function(e) {
    e.preventDefault();
    const title = document.getElementById('slide-input-title').value.trim();
    const subtitle = document.getElementById('slide-input-subtitle').value.trim();
    const badge = document.getElementById('slide-input-badge').value.trim() || 'উন্নয়ন সেক্টর';
    const description = document.getElementById('slide-input-desc').value.trim();
    const image = document.getElementById('slide-input-img').value.trim() || '/slide_road_dev.jpg';
    const link = document.getElementById('slide-input-link').value.trim() || '#manifesto';
    const btnText = document.getElementById('slide-input-btnText').value.trim() || 'বিস্তারিত দেখুন';

    const newSlide = {
      id: 'slide-' + Date.now(),
      title,
      subtitle,
      badge,
      badgeColor: 'bg-emerald-600 text-white',
      description,
      image,
      link,
      btnText
    };

    portalData.slides.push(newSlide);
    saveConfig();
    renderAdminSlides(document.getElementById('admin-tab-content'));
  };

  window.showEditSlideForm = function(slideId) {
    const s = portalData.slides.find(x => x.id === slideId);
    if (!s) return;

    const wrapper = document.getElementById('slide-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <h5 class="font-bold text-slate-900 text-sm flex items-center gap-2">
          <i class="fa-solid fa-pen-to-square text-blue-600"></i>
          <span>স্লাইড সম্পাদন (#${s.title})</span>
        </h5>
        <button type="button" onclick="document.getElementById('slide-form-wrapper').classList.add('hidden')" class="text-slate-400 hover:text-slate-600 text-sm">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <form onsubmit="window.saveEditedSlide(event, '${s.id}')" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">স্লাইড শিরোনাম *</label>
            <input type="text" id="edit-slide-title" required value="${s.title}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">উপ-শিরোনাম *</label>
            <input type="text" id="edit-slide-subtitle" required value="${s.subtitle}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">ব্যাজ ট্যাগ</label>
            <input type="text" id="edit-slide-badge" value="${s.badge}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">বাটন নাম ও লিংক</label>
            <div class="flex gap-2">
              <input type="text" id="edit-slide-btnText" value="${s.btnText || 'বিস্তারিত দেখুন'}" class="w-1/2 text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
              <input type="text" id="edit-slide-link" value="${s.link || '#manifesto'}" class="w-1/2 text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
            </div>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">বিস্তারিত বিবরণ *</label>
          <textarea id="edit-slide-desc" required rows="2" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500">${s.description}</textarea>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">ছবির URL বা আপলোড</label>
          <div class="flex flex-col sm:flex-row gap-2">
            <input type="text" id="edit-slide-img" value="${s.image}" class="flex-1 text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
            <label class="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-slate-300 cursor-pointer shrink-0">
              <i class="fa-solid fa-upload text-blue-600"></i>
              <span>ছবি পরিবর্তন</span>
              <input type="file" accept="image/*" class="hidden" onchange="window.handleSlideImageUpload(event, 'edit-slide-img')" />
            </label>
          </div>
        </div>

        <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('slide-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">বাতিল</button>
          <button type="submit" class="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs">পরিবর্তন সংরক্ষণ করুন</button>
        </div>
      </form>
    `;
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.saveEditedSlide = function(e, slideId) {
    e.preventDefault();
    const s = portalData.slides.find(x => x.id === slideId);
    if (!s) return;

    s.title = document.getElementById('edit-slide-title').value.trim();
    s.subtitle = document.getElementById('edit-slide-subtitle').value.trim();
    s.badge = document.getElementById('edit-slide-badge').value.trim() || 'উন্নয়ন সেক্টর';
    s.description = document.getElementById('edit-slide-desc').value.trim();
    s.image = document.getElementById('edit-slide-img').value.trim();
    s.link = document.getElementById('edit-slide-link').value.trim() || '#manifesto';
    s.btnText = document.getElementById('edit-slide-btnText').value.trim() || 'বিস্তারিত দেখুন';

    saveConfig();
    renderAdminSlides(document.getElementById('admin-tab-content'));
  };

  window.deleteSlide = function(slideId) {
    if (!confirm('আপনি কি নিশ্চিতভাবে এই স্লাইডটি মুছে ফেলতে চান?')) return;
    portalData.slides = portalData.slides.filter(x => x.id !== slideId);
    if (portalData.slides.length === 0) {
      portalData.slides = JSON.parse(JSON.stringify(DEFAULT_PORTAL_CONFIG.slides));
    }
    saveConfig();
    renderAdminSlides(document.getElementById('admin-tab-content'));
  };

  // ----------------------------------------------------
  // ADMIN TAB 2: GENERAL & CANDIDATE PROFILE
  // ----------------------------------------------------
  function renderAdminGeneral(container) {
    const g = portalData.general;
    const c = portalData.candidate;

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Candidate Profile Form -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <h4 class="font-extrabold text-slate-900 text-base mb-4 flex items-center gap-2 pb-3 border-b border-slate-100">
            <i class="fa-solid fa-id-badge text-gov-green"></i>
            <span>প্রার্থীর নাম ও মূল প্রোফাইল তথ্য</span>
          </h4>

          <form onsubmit="window.saveCandidateProfile(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">প্রার্থীর পূর্ণ নাম *</label>
                <input type="text" id="cand-name" required value="${c.name}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-gov-green" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">উপাধি / পরিচয় ট্যাগ *</label>
                <input type="text" id="cand-title" required value="${c.title}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-gov-green" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">ইউনিয়ন ও ওয়ার্ড ঠিকানা</label>
                <input type="text" id="cand-sub" value="${c.subtitle}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">জরুরি কল হটলাইন নম্বর (২৪/৭)</label>
                <input type="text" id="cand-phone" value="${c.phone || '01712345678'}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none font-mono" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">সাংগঠনিক দায়িত্ব (পোস্টারের লেখা)</label>
              <textarea id="cand-org" rows="2" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none">${c.orgDuty}</textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">স্লোগান ও আহ্বান</label>
                <input type="text" id="cand-slogan" value="${c.slogan}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">ব্যক্তিগত উক্তি / বাণী</label>
                <input type="text" id="cand-quote" value="${c.quote}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
              </div>
            </div>

            <div class="flex justify-end pt-3">
              <button type="submit" class="bg-gov-green hover:bg-gov-darkgreen text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-xs">
                প্রোফাইল তথ্য সংরক্ষণ করুন
              </button>
            </div>
          </form>
        </div>

        <!-- Top Ticker & Header Info Form -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <h4 class="font-extrabold text-slate-900 text-base mb-4 flex items-center gap-2 pb-3 border-b border-slate-100">
            <i class="fa-solid fa-bullhorn text-amber-500"></i>
            <span>শীর্ষ টিকার ও হেডারের তথ্য</span>
          </h4>

          <form onsubmit="window.saveGeneralSettings(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">টিকার ব্যাজ লেখা</label>
                <input type="text" id="gen-ticker-badge" value="${g.tickerBadge}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">হেডার হটলাইন প্রদর্শন</label>
                <input type="text" id="gen-hotline" value="${g.topHotline}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none font-mono" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">টিকার স্ক্রলিং মূল বার্তা</label>
              <textarea id="gen-ticker-text" rows="2" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none">${g.tickerText}</textarea>
            </div>

            <div class="flex justify-end pt-3">
              <button type="submit" class="bg-gov-green hover:bg-gov-darkgreen text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-xs">
                টিকার তথ্য সংরক্ষণ করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  window.saveCandidateProfile = function(e) {
    e.preventDefault();
    portalData.candidate.name = document.getElementById('cand-name').value.trim();
    portalData.candidate.title = document.getElementById('cand-title').value.trim();
    portalData.candidate.subtitle = document.getElementById('cand-sub').value.trim();
    portalData.candidate.phone = document.getElementById('cand-phone').value.trim();
    portalData.candidate.orgDuty = document.getElementById('cand-org').value.trim();
    portalData.candidate.slogan = document.getElementById('cand-slogan').value.trim();
    portalData.candidate.quote = document.getElementById('cand-quote').value.trim();

    saveConfig();
  };

  window.saveGeneralSettings = function(e) {
    e.preventDefault();
    portalData.general.tickerBadge = document.getElementById('gen-ticker-badge').value.trim();
    portalData.general.topHotline = document.getElementById('gen-hotline').value.trim();
    portalData.general.tickerText = document.getElementById('gen-ticker-text').value.trim();

    saveConfig();
  };

  // ----------------------------------------------------
  // ADMIN TAB 3: HOTLINES SECTOR
  // ----------------------------------------------------
  function renderAdminHotlines(container) {
    const list = portalData.hotlines || [];
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
          <div>
            <h4 class="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <i class="fa-solid fa-phone-volume text-rose-600"></i>
              <span>জরুরি হটলাইন নম্বর ব্যবস্থাপনা</span>
            </h4>
            <p class="text-xs text-slate-500">জরুরি যোগাযোগ কার্ড সংযোজন, মোবাইল নম্বর পরিবর্তন ও নতুন সেবা যোগ করুন।</p>
          </div>
          <button type="button" onclick="window.showAddHotlineForm()" class="bg-gov-green hover:bg-gov-darkgreen text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 shrink-0">
            <i class="fa-solid fa-plus"></i>
            <span>নতুন হটলাইন যুক্ত করুন</span>
          </button>
        </div>

        <div id="hotline-form-wrapper" class="hidden bg-white p-5 rounded-2xl border-2 border-emerald-500/50 shadow-md"></div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${list.map(h => `
            <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span class="inline-block text-[10px] font-bold px-2 py-0.5 rounded ${h.badgeClass || 'bg-slate-100'} mb-2">
                  ${h.category}
                </span>
                <h5 class="font-bold text-slate-900 text-sm">${h.title}</h5>
                <p class="text-xs text-slate-500 mt-0.5 line-clamp-1">${h.subtitle}</p>
                <div class="mt-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 font-mono">
                  <i class="fa-solid fa-phone"></i>
                  <span>${h.phoneDisplay || h.phone}</span>
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button type="button" onclick="window.showEditHotlineForm('${h.id}')" class="text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg">
                  এডিট
                </button>
                <button type="button" onclick="window.deleteHotline('${h.id}')" class="text-xs font-bold text-red-600 hover:text-red-800 bg-red-50 px-2.5 py-1 rounded-lg">
                  মুছুন
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.showAddHotlineForm = function() {
    const wrapper = document.getElementById('hotline-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <form onsubmit="window.saveNewHotline(event)" class="space-y-4">
        <h5 class="font-bold text-slate-900 text-sm">নতুন জরুরি যোগাযোগ নম্বর যোগ</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">বিভাগ / ক্যাটাগরি *</label>
            <input type="text" id="hotline-cat" required placeholder="যেমন: অ্যাম্বুলেন্স / বিদ্যুৎ অফিস" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">প্রতিষ্ঠানের নাম বা ব্যক্তি *</label>
            <input type="text" id="hotline-title" required placeholder="যেমন: পল্লি বিদ্যুৎ অভিযোগ কেন্দ্র" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">ছোট বিবরণ</label>
            <input type="text" id="hotline-sub" placeholder="যেমন: ২৪ ঘণ্টা জরুরি সংযোগ" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">ফোন নম্বর *</label>
            <input type="text" id="hotline-phone" required placeholder="যেমন: 01711223344" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none font-mono" />
          </div>
        </div>

        <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('hotline-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs text-slate-600">বাতিল</button>
          <button type="submit" class="bg-gov-green text-white font-bold text-xs px-5 py-2.5 rounded-xl">সংরক্ষণ করুন</button>
        </div>
      </form>
    `;
  };

  window.saveNewHotline = function(e) {
    e.preventDefault();
    const category = document.getElementById('hotline-cat').value.trim();
    const title = document.getElementById('hotline-title').value.trim();
    const subtitle = document.getElementById('hotline-sub').value.trim() || 'জরুরি যোগাযোগ';
    const phone = document.getElementById('hotline-phone').value.trim();

    portalData.hotlines.push({
      id: 'hotline-' + Date.now(),
      category,
      badgeClass: 'bg-emerald-100 text-emerald-800',
      title,
      subtitle,
      icon: 'fa-phone',
      iconBg: 'bg-emerald-100 text-gov-green',
      phone,
      phoneDisplay: phone,
      borderClass: 'border border-slate-200 bg-white'
    });

    saveConfig();
    renderAdminHotlines(document.getElementById('admin-tab-content'));
  };

  window.showEditHotlineForm = function(id) {
    const h = portalData.hotlines.find(x => x.id === id);
    if (!h) return;
    const wrapper = document.getElementById('hotline-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <form onsubmit="window.saveEditedHotline(event, '${h.id}')" class="space-y-4">
        <h5 class="font-bold text-slate-900 text-sm">হটলাইন সম্পাদনা (#${h.title})</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">ক্যাটাগরি</label>
            <input type="text" id="ed-hot-cat" value="${h.category}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">নাম / শিরোনাম</label>
            <input type="text" id="ed-hot-title" value="${h.title}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">বিবরণ</label>
            <input type="text" id="ed-hot-sub" value="${h.subtitle}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">ফোন নম্বর</label>
            <input type="text" id="ed-hot-phone" value="${h.phone}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none font-mono" />
          </div>
        </div>

        <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('hotline-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs text-slate-600">বাতিল</button>
          <button type="submit" class="bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl">হালনাগাদ করুন</button>
        </div>
      </form>
    `;
  };

  window.saveEditedHotline = function(e, id) {
    e.preventDefault();
    const h = portalData.hotlines.find(x => x.id === id);
    if (!h) return;
    h.category = document.getElementById('ed-hot-cat').value.trim();
    h.title = document.getElementById('ed-hot-title').value.trim();
    h.subtitle = document.getElementById('ed-hot-sub').value.trim();
    h.phone = document.getElementById('ed-hot-phone').value.trim();
    h.phoneDisplay = h.phone;

    saveConfig();
    renderAdminHotlines(document.getElementById('admin-tab-content'));
  };

  window.deleteHotline = function(id) {
    if (!confirm('আপনি কি এই হটলাইন নম্বরটি মুছে ফেলতে চান?')) return;
    portalData.hotlines = portalData.hotlines.filter(x => x.id !== id);
    saveConfig();
    renderAdminHotlines(document.getElementById('admin-tab-content'));
  };

  // ----------------------------------------------------
  // ADMIN TAB 4: SERVICES SECTOR
  // ----------------------------------------------------
  function renderAdminServices(container) {
    const list = portalData.services || [];
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
          <div>
            <h4 class="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <i class="fa-solid fa-book-open-reader text-emerald-600"></i>
              <span>নাগরিক সেবা হাব ব্যবস্থাপনা</span>
            </h4>
            <p class="text-xs text-slate-500">বিভিন্ন সরকারি সেবার বিবরণ, নিয়মাবলী ও নতুন সেবা সেক্টর সংযোজন করুন।</p>
          </div>
          <button type="button" onclick="window.showAddServiceForm()" class="bg-gov-green hover:bg-gov-darkgreen text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 shrink-0">
            <i class="fa-solid fa-plus"></i>
            <span>নতুন সেবা কার্ড যোগ</span>
          </button>
        </div>

        <div id="service-form-wrapper" class="hidden bg-white p-5 rounded-2xl border-2 border-emerald-500/50 shadow-md"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${list.map(s => `
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-2">
                  <h5 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <i class="fa-solid ${s.icon || 'fa-id-card'} text-gov-green"></i>
                    <span>${s.title}</span>
                  </h5>
                </div>
                <p class="text-xs text-slate-600 mt-2 line-clamp-2">${s.description}</p>
                <div class="mt-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1">
                  ${(s.points || []).map(pt => `<p class="truncate">• ${pt}</p>`).join('')}
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button type="button" onclick="window.showEditServiceForm('${s.id}')" class="text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg">
                  সম্পাদন
                </button>
                <button type="button" onclick="window.deleteService('${s.id}')" class="text-xs font-bold text-red-600 hover:text-red-800 bg-red-50 px-3 py-1.5 rounded-lg">
                  মুছুন
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.showAddServiceForm = function() {
    const wrapper = document.getElementById('service-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <form onsubmit="window.saveNewService(event)" class="space-y-4">
        <h5 class="font-bold text-slate-900 text-sm">নতুন সেবা কার্ড সংযোজন</h5>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">সেবার শিরোনাম *</label>
          <input type="text" id="serv-title" required placeholder="যেমন: নতুন ভোটার ও জাতীয় পরিচয়পত্র সংশোধন" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">সংক্ষিপ্ত বিবরণ *</label>
          <textarea id="serv-desc" required rows="2" placeholder="সেবাটি কীভাবে পাওয়া যাবে তার বিবরণ..." class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none"></textarea>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">প্রয়োজনীয় তথ্য ও নিয়ম (কমা দিয়ে ৩টি পয়েন্ট লিখুন)</label>
          <input type="text" id="serv-points" placeholder="অনলাইন আবেদন ফরম, চেয়ারম্যানের প্রত্যয়ন, জন্ম সনদ" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('service-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs text-slate-600">বাতিল</button>
          <button type="submit" class="bg-gov-green text-white font-bold text-xs px-5 py-2.5 rounded-xl">সংরক্ষণ করুন</button>
        </div>
      </form>
    `;
  };

  window.saveNewService = function(e) {
    e.preventDefault();
    const title = document.getElementById('serv-title').value.trim();
    const description = document.getElementById('serv-desc').value.trim();
    const rawPoints = document.getElementById('serv-points').value.trim();
    const points = rawPoints ? rawPoints.split(',').map(x => x.trim()).filter(Boolean) : ['উপযুক্ত কাগজপত্র', 'নাগরিক প্রত্যয়ন', 'সরাসরি সহায়তা'];

    portalData.services.push({
      id: 'serv-' + Date.now(),
      key: 'birth-reg',
      title,
      icon: 'fa-file-circle-check',
      iconColor: 'bg-emerald-100 text-gov-green',
      description,
      points,
      btnClass: 'bg-emerald-50 hover:bg-emerald-100 text-gov-darkgreen border-emerald-200'
    });

    saveConfig();
    renderAdminServices(document.getElementById('admin-tab-content'));
  };

  window.showEditServiceForm = function(id) {
    const s = portalData.services.find(x => x.id === id);
    if (!s) return;
    const wrapper = document.getElementById('service-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <form onsubmit="window.saveEditedService(event, '${s.id}')" class="space-y-4">
        <h5 class="font-bold text-slate-900 text-sm">সেবা কার্ড সম্পাদনা</h5>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">সেবার শিরোনাম</label>
          <input type="text" id="ed-serv-title" value="${s.title}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">বিবরণ</label>
          <textarea id="ed-serv-desc" rows="2" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none">${s.description}</textarea>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">পয়েন্ট সমূহ (কমা দিয়ে আলাদা করুন)</label>
          <input type="text" id="ed-serv-points" value="${(s.points || []).join(', ')}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('service-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs text-slate-600">বাতিল</button>
          <button type="submit" class="bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl">হালনাগাদ করুন</button>
        </div>
      </form>
    `;
  };

  window.saveEditedService = function(e, id) {
    e.preventDefault();
    const s = portalData.services.find(x => x.id === id);
    if (!s) return;
    s.title = document.getElementById('ed-serv-title').value.trim();
    s.description = document.getElementById('ed-serv-desc').value.trim();
    const raw = document.getElementById('ed-serv-points').value.trim();
    s.points = raw ? raw.split(',').map(x => x.trim()).filter(Boolean) : s.points;

    saveConfig();
    renderAdminServices(document.getElementById('admin-tab-content'));
  };

  window.deleteService = function(id) {
    if (!confirm('আপনি কি এই সেবা কার্ডটি মুছে ফেলতে চান?')) return;
    portalData.services = portalData.services.filter(x => x.id !== id);
    saveConfig();
    renderAdminServices(document.getElementById('admin-tab-content'));
  };

  // ----------------------------------------------------
  // ADMIN TAB 5: MANIFESTO PILLARS SECTOR
  // ----------------------------------------------------
  function renderAdminManifesto(container) {
    const list = portalData.manifesto || [];
    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
          <div>
            <h4 class="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <i class="fa-solid fa-clipboard-check text-blue-600"></i>
              <span>উন্নয়ন ইশতেহার ও সেক্টর পরিকল্পনা</span>
            </h4>
            <p class="text-xs text-slate-500">নির্বাচনি ইশতেহারের দফা সংযোজন, বিয়োজন ও উন্নয়ন প্রতিশ্রুতি সম্পাদন করুন।</p>
          </div>
          <button type="button" onclick="window.showAddManifestoForm()" class="bg-gov-green hover:bg-gov-darkgreen text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 shrink-0">
            <i class="fa-solid fa-plus"></i>
            <span>নতুন ইশতেহার দফা যোগ</span>
          </button>
        </div>

        <div id="manifesto-form-wrapper" class="hidden bg-white p-5 rounded-2xl border-2 border-emerald-500/50 shadow-md"></div>

        <div class="space-y-4">
          ${list.map(m => `
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl text-white flex items-center justify-center text-xl font-bold shrink-0 ${m.numBg || 'bg-gov-green'}">
                  ${m.num}
                </div>
                <div>
                  <span class="text-[11px] font-bold ${m.subColor || 'text-gov-green'} uppercase tracking-wider">${m.subPillar}</span>
                  <h5 class="font-bold text-slate-900 text-base">${m.title}</h5>
                  <p class="text-xs text-slate-600 mt-1 line-clamp-2">${m.description}</p>
                  <div class="mt-2 flex flex-wrap gap-1.5">
                    ${(m.tags || []).map(t => `<span class="text-[10px] px-2 py-0.5 rounded font-semibold bg-slate-100 text-slate-700">${t}</span>`).join('')}
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                <button type="button" onclick="window.showEditManifestoForm('${m.id}')" class="text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg">
                  এডিট
                </button>
                <button type="button" onclick="window.deleteManifesto('${m.id}')" class="text-xs font-bold text-red-600 hover:text-red-800 bg-red-50 px-3 py-1.5 rounded-lg">
                  মুছুন
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.showAddManifestoForm = function() {
    const wrapper = document.getElementById('manifesto-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <form onsubmit="window.saveNewManifesto(event)" class="space-y-4">
        <h5 class="font-bold text-slate-900 text-sm">নতুন ইশতেহার দফা সংযোজন</h5>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">দফা নম্বর (যেমন: ৫)</label>
            <input type="text" id="man-num" required placeholder="৫" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none font-bold" />
          </div>
          <div class="sm:col-span-2">
            <label class="block text-xs font-bold text-slate-700 mb-1">উপ-শিরোনাম / ক্যাটাগরি *</label>
            <input type="text" id="man-subPillar" required placeholder="যেমন: ৫ম অঙ্গীকার • পরিবেশ ও বৃক্ষরোপণ" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">মূল শিরোনাম *</label>
          <input type="text" id="man-title" required placeholder="যেমন: সবুজ ৪নং ওয়ার্ড ও প্লাস্টিকমুক্ত জনপদ" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">বিস্তারিত প্রতিশ্রুতি *</label>
          <textarea id="man-desc" required rows="2" placeholder="এই দফার আওতায় ওয়ার্ডবাসীর জন্য গৃহীত পদক্ষেপ..." class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none"></textarea>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">ট্যাগ সমূহ (কমা দিয়ে লিখুন)</label>
          <input type="text" id="man-tags" placeholder="গাছ রোপণ, পরিচ্ছন্ন ড্রেন, পরিবেশ সংরক্ষণ" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('manifesto-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs text-slate-600">বাতিল</button>
          <button type="submit" class="bg-gov-green text-white font-bold text-xs px-5 py-2.5 rounded-xl">ইশতেহার সংরক্ষণ</button>
        </div>
      </form>
    `;
  };

  window.saveNewManifesto = function(e) {
    e.preventDefault();
    const num = document.getElementById('man-num').value.trim();
    const subPillar = document.getElementById('man-subPillar').value.trim();
    const title = document.getElementById('man-title').value.trim();
    const description = document.getElementById('man-desc').value.trim();
    const rawTags = document.getElementById('man-tags').value.trim();
    const tags = rawTags ? rawTags.split(',').map(x => x.trim()).filter(Boolean) : ['অগ্রাধিকার'];

    portalData.manifesto.push({
      id: 'man-' + Date.now(),
      num,
      subPillar,
      title,
      color: 'from-emerald-50/50 via-white to-slate-50 border-emerald-100 hover:border-emerald-300',
      numBg: 'bg-gov-green shadow-gov-green/20',
      subColor: 'text-gov-green',
      tagBg: 'bg-emerald-100 text-gov-darkgreen',
      description,
      tags
    });

    saveConfig();
    renderAdminManifesto(document.getElementById('admin-tab-content'));
  };

  window.showEditManifestoForm = function(id) {
    const m = portalData.manifesto.find(x => x.id === id);
    if (!m) return;
    const wrapper = document.getElementById('manifesto-form-wrapper');
    if (!wrapper) return;
    wrapper.classList.remove('hidden');
    wrapper.innerHTML = `
      <form onsubmit="window.saveEditedManifesto(event, '${m.id}')" class="space-y-4">
        <h5 class="font-bold text-slate-900 text-sm">ইশতেহার দফা সম্পাদন (#${m.title})</h5>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">নম্বর</label>
            <input type="text" id="ed-man-num" value="${m.num}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none font-bold" />
          </div>
          <div class="sm:col-span-2">
            <label class="block text-xs font-bold text-slate-700 mb-1">উপ-শিরোনাম</label>
            <input type="text" id="ed-man-sub" value="${m.subPillar}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">মূল শিরোনাম</label>
          <input type="text" id="ed-man-title" value="${m.title}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">প্রতিশ্রুতি বিবরণ</label>
          <textarea id="ed-man-desc" rows="2" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none">${m.description}</textarea>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">ট্যাগ সমূহ</label>
          <input type="text" id="ed-man-tags" value="${(m.tags || []).join(', ')}" class="w-full text-xs p-2.5 rounded-xl border border-slate-300 outline-none" />
        </div>
        <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onclick="document.getElementById('manifesto-form-wrapper').classList.add('hidden')" class="px-4 py-2 text-xs text-slate-600">বাতিল</button>
          <button type="submit" class="bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl">হালনাগাদ করুন</button>
        </div>
      </form>
    `;
  };

  window.saveEditedManifesto = function(e, id) {
    e.preventDefault();
    const m = portalData.manifesto.find(x => x.id === id);
    if (!m) return;
    m.num = document.getElementById('ed-man-num').value.trim();
    m.subPillar = document.getElementById('ed-man-sub').value.trim();
    m.title = document.getElementById('ed-man-title').value.trim();
    m.description = document.getElementById('ed-man-desc').value.trim();
    const raw = document.getElementById('ed-man-tags').value.trim();
    m.tags = raw ? raw.split(',').map(x => x.trim()).filter(Boolean) : m.tags;

    saveConfig();
    renderAdminManifesto(document.getElementById('admin-tab-content'));
  };

  window.deleteManifesto = function(id) {
    if (!confirm('আপনি কি এই ইশতেহার দফাটি মুছে ফেলতে চান?')) return;
    portalData.manifesto = portalData.manifesto.filter(x => x.id !== id);
    saveConfig();
    renderAdminManifesto(document.getElementById('admin-tab-content'));
  };

  // ----------------------------------------------------
  // ADMIN TAB 6: COMPLAINTS & FEEDBACK
  // ----------------------------------------------------
  function renderAdminComplaints(container) {
    const rawComplaints = localStorage.getItem('ward4_complaints_data');
    let complaints = [];
    try {
      complaints = JSON.parse(rawComplaints || '[]');
    } catch (e) {}

    container.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
          <div>
            <h4 class="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <i class="fa-solid fa-bullhorn text-gov-red"></i>
              <span>নাগরিক সমস্যা ও মতামত তালিকা</span>
            </h4>
            <p class="text-xs text-slate-500">মোট জমা পড়া অভিযোগ: <strong>${toBnDigits(complaints.length)} টি</strong></p>
          </div>
          <button type="button" onclick="window.exportComplaintsJSON()" class="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors">
            <i class="fa-solid fa-download mr-1"></i> ডাউনলোড
          </button>
        </div>

        <div class="space-y-3">
          ${complaints.length === 0 ? `
            <div class="bg-white p-8 rounded-2xl text-center text-slate-400 text-xs">
              এখনো কোনো নাগরিক অভিযোগ জমা পড়েনি।
            </div>
          ` : complaints.map(c => `
            <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div class="space-y-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="text-xs font-bold text-slate-900">${c.name}</span>
                  <span class="text-[11px] text-slate-500 font-mono">${c.phone}</span>
                  <span class="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded">${c.area || '৪নং ওয়ার্ড'}</span>
                  <span class="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded border border-emerald-200">${c.category}</span>
                </div>
                <p class="text-xs text-slate-700 italic">"${c.message}"</p>
                <p class="text-[10px] text-slate-400 font-mono">আইডি: #${c.id}</p>
              </div>

              <div class="flex items-center gap-2 shrink-0 self-end md:self-center">
                <select onchange="window.changeComplaintStatusFromAdmin('${c.id}', this.value)" class="text-xs font-bold p-1.5 rounded-lg border border-slate-300 bg-slate-50 outline-none">
                  <option value="অপেক্ষমাণ" ${c.status === 'অপেক্ষমাণ' ? 'selected' : ''}>অপেক্ষমাণ</option>
                  <option value="প্রক্রিয়াধীন" ${c.status === 'প্রক্রিয়াধীন' ? 'selected' : ''}>প্রক্রিয়াধীন</option>
                  <option value="সমাধান হয়েছে" ${c.status === 'সমাধান হয়েছে' ? 'selected' : ''}>সমাধান হয়েছে</option>
                </select>
                <button type="button" onclick="window.deleteComplaintFromAdmin('${c.id}')" class="text-xs text-red-600 hover:text-red-800 p-1.5 rounded bg-red-50" title="মুছুন">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  window.changeComplaintStatusFromAdmin = function(id, newStatus) {
    if (window.updateComplaintStatus) {
      window.updateComplaintStatus(id, newStatus);
    }
    showToast(`স্ট্যাটাস পরিবর্তন করে '${newStatus}' করা হয়েছে!`);
    renderAdminComplaints(document.getElementById('admin-tab-content'));
  };

  window.deleteComplaintFromAdmin = function(id) {
    if (!confirm('আপনি কি এই অভিযোগটি মুছে ফেলতে চান?')) return;
    const raw = localStorage.getItem('ward4_complaints_data');
    let complaints = JSON.parse(raw || '[]');
    complaints = complaints.filter(x => x.id !== id);
    localStorage.setItem('ward4_complaints_data', JSON.stringify(complaints));
    if (window.renderComplaints) {
      window.renderComplaints(complaints);
    }
    showToast('অভিযোগটি মুছে ফেলা হয়েছে।');
    renderAdminComplaints(document.getElementById('admin-tab-content'));
  };

  window.exportComplaintsJSON = function() {
    const raw = localStorage.getItem('ward4_complaints_data') || '[]';
    const blob = new Blob([raw], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ward4_complaints_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ----------------------------------------------------
  // ADMIN TAB 7: BACKUP & RESTORE
  // ----------------------------------------------------
  function renderAdminBackup(container) {
    container.innerHTML = `
      <div class="space-y-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 class="font-extrabold text-slate-900 text-base mb-2 flex items-center gap-2">
            <i class="fa-solid fa-file-export text-emerald-600"></i>
            <span>এডমিন কনফিগারেশন ব্যাকআপ ও এক্সপোর্ট</span>
          </h4>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">
            আপনার করা সকল পরিবর্তন, স্লাইডার তথ্য, প্রার্থী প্রোফাইল, সেবা ও ইশতেহার একটি JSON ফাইল হিসাবে ডাউনলোড করে ব্যাকআপ রাখুন।
          </p>
          <button type="button" onclick="window.downloadConfigBackup()" class="bg-gov-green hover:bg-gov-darkgreen text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs flex items-center gap-2">
            <i class="fa-solid fa-download"></i>
            <span>সম্পূর্ণ ব্যাকআপ ফাইল ডাউনলোড করুন</span>
          </button>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200">
          <h4 class="font-extrabold text-slate-900 text-base mb-2 flex items-center gap-2">
            <i class="fa-solid fa-file-import text-blue-600"></i>
            <span>পূর্বে সংরক্ষিত ব্যাকআপ রিস্টোর করুন</span>
          </h4>
          <p class="text-xs text-slate-600 leading-relaxed mb-4">
            কম্পিউটার বা মোবাইল থেকে আগের ডাউনলোড করা ব্যাকআপ JSON ফাইল নির্বাচন করুন।
          </p>
          <label class="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer shadow-xs">
            <i class="fa-solid fa-upload"></i>
            <span>ব্যাকআপ ফাইল আপলোড ও রিস্টোর</span>
            <input type="file" accept=".json" class="hidden" onchange="window.restoreConfigBackup(event)" />
          </label>
        </div>

        <div class="bg-rose-50 border border-rose-200 p-6 rounded-2xl">
          <h4 class="font-extrabold text-rose-950 text-base mb-1 flex items-center gap-2">
            <i class="fa-solid fa-triangle-exclamation text-rose-600"></i>
            <span>ফ্যাক্টরি রিসেট (ডিফল্ট অবস্থায় প্রত্যাবর্তন)</span>
          </h4>
          <p class="text-xs text-rose-800 mb-4">
            আপনার সকল কাস্টমাইজেশন মুছে ওয়েবসাইটের মূল ডিফল্ট ডেটায় ফিরিয়ে নেওয়া হবে।
          </p>
          <button type="button" onclick="window.resetPortalDefaults()" class="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs">
            রিসেট করে ডিফল্ট করুন
          </button>
        </div>
      </div>
    `;
  }

  window.downloadConfigBackup = function() {
    const dataStr = JSON.stringify(portalData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ward4_portal_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('ব্যাকআপ সফলভাবে ডাউনলোড হয়েছে!');
  };

  window.restoreConfigBackup = function(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed && parsed.slides && parsed.hotlines) {
          portalData = parsed;
          saveConfig();
          showToast('ব্যাকআপ সফলভাবে রিস্টোর করা হয়েছে!');
          window.switchAdminTab('slides');
        } else {
          alert('ভুল ফাইল ফরম্যাট! সঠিক পোর্টাল ব্যাকআপ ফাইল প্রদান করুন।');
        }
      } catch (err) {
        alert('ফাইলটি পড়া যায়নি। অনুগ্রহ করে সঠিক JSON ফাইল নির্বাচন করুন।');
      }
    };
    reader.readAsText(file);
  };

  window.resetPortalDefaults = function() {
    if (!confirm('আপনি কি সত্যিই সম্পূর্ণ পোর্টালকে মূল ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?')) return;
    localStorage.removeItem(STORAGE_KEY);
    portalData = JSON.parse(JSON.stringify(DEFAULT_PORTAL_CONFIG));
    saveConfig();
    showToast('পোর্টাল সফলভাবে ডিফল্ট অবস্থায় ফিরিয়ে নেওয়া হয়েছে!');
    if (document.getElementById('admin-tab-content')) {
      window.switchAdminTab(currentAdminTab);
    }
  };

  // Keyboard navigation & modal closing
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('admin-login-modal') && !document.getElementById('admin-login-modal').classList.contains('hidden')) {
      if (e.key === 'Escape') window.closeAdminLoginModal();
      return;
    }
    if (document.getElementById('admin-panel-modal') && !document.getElementById('admin-panel-modal').classList.contains('hidden')) {
      if (e.key === 'Escape') window.closeAdminPanel();
      return;
    }
    if (e.key === 'ArrowRight') window.nextSlide();
    if (e.key === 'ArrowLeft') window.prevSlide();
  });

  // Export portalData for external usage if needed
  window.PORTAL_DATA = portalData;

  // Initialize on load
  function init() {
    loadConfig();
    window.PORTAL_DATA = portalData;
    renderAll();
    injectAdminModalMarkup();
    injectAdminLoginModalMarkup();

    // Attach footer heart click event listener
    const heartBtn = document.getElementById('footer-heart-btn');
    if (heartBtn) {
      heartBtn.removeEventListener('click', window.handleFooterHeartClick);
      heartBtn.addEventListener('click', window.handleFooterHeartClick);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
