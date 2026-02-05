 export type Language = 'en' | 'ru' | 'uz';
 
 export const languages: { code: Language; name: string; flag: string }[] = [
   { code: 'en', name: 'English', flag: '🇬🇧' },
   { code: 'ru', name: 'Русский', flag: '🇷🇺' },
   { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
 ];
 
 export const translations = {
   en: {
     // Hero
     hero: {
       tagline: 'Give flowers a second chance',
       title1: 'Beautiful Bouquets,',
       title2: 'Second Life',
       description: 'The marketplace for buying and selling flower bouquets. Find stunning arrangements at great prices.',
       stats: {
         savings: 'Average savings',
         buyers: 'Happy buyers',
         sellers: 'Active sellers',
       },
       scroll: 'Scroll',
     },
     // Features
     features: {
       badge: 'Why SecondBloom?',
       title1: 'Better for Your Wallet,',
       title2: 'better for the planet',
       description: "Whether you're selling surplus bouquets or hunting for the perfect arrangement, SecondBloom makes the flower market work for everyone.",
       seller: 'Seller',
       buyer: 'Buyer',
       items: [
         {
           title: 'Earn from Unused Bouquets',
           description: 'Turn your unwanted flowers into cash. List bouquets from events, weddings, or impulse buys.',
         },
         {
           title: 'Find Amazing Deals',
           description: 'Access beautiful bouquets at a fraction of traditional flower shop prices. Bid on unique arrangements.',
         },
         {
           title: 'Sustainable Choice',
           description: 'Reduce floral waste and support sustainability. Every purchase means fewer flowers in landfills.',
         },
         {
           title: 'Quick Auctions',
           description: 'Time-sensitive auctions create excitement. Fresh flowers need quick sales, and our platform delivers.',
         },
         {
           title: 'Secure Transactions',
           description: 'Protected payments and verified sellers ensure your purchases are safe. Buy with confidence.',
         },
         {
           title: 'Community of Flower Lovers',
           description: 'Join a community that shares your passion for beautiful blooms. Connect with local sellers and buyers.',
         },
       ],
     },
     // Footer
     footer: {
       description: 'The marketplace for buying and selling flower bouquets. Give flowers a second life.',
       forSellers: 'For Sellers',
       howToSell: 'How to Sell',
       pricingTips: 'Pricing Tips',
       sellerGuidelines: 'Seller Guidelines',
       successStories: 'Success Stories',
       forBuyers: 'For Buyers',
       howToBid: 'How to Bid',
       freshnessGuarantee: 'Freshness Guarantee',
       delivery: 'Delivery',
       faq: 'FAQ',
       copyright: '© 2026 SecondBloom. All rights reserved.',
       privacy: 'Privacy Policy',
       terms: 'Terms of Service',
     },
   },
   ru: {
     // Hero
     hero: {
       tagline: 'Подари цветам вторую жизнь',
       title1: 'Красивые букеты,',
       title2: 'вторая жизнь',
       description: 'Маркетплейс для продажи и покупки цветочных букетов. Находите потрясающие композиции по выгодным ценам.',
       stats: {
         savings: 'Средняя экономия',
         buyers: 'Довольных покупателей',
         sellers: 'Активных продавцов',
       },
       scroll: 'Листать',
     },
     // Features
     features: {
       badge: 'Почему SecondBloom?',
       title1: 'Выгодно для кошелька,',
       title2: 'полезно для планеты',
       description: 'Продаёте лишние букеты или ищете идеальную композицию — SecondBloom делает цветочный рынок доступным для всех.',
       seller: 'Продавец',
       buyer: 'Покупатель',
       items: [
         {
           title: 'Зарабатывайте на букетах',
           description: 'Превратите ненужные цветы в деньги. Выставляйте букеты со свадеб, мероприятий или спонтанных покупок.',
         },
         {
           title: 'Находите выгодные предложения',
           description: 'Покупайте красивые букеты по цене значительно ниже цветочных магазинов. Делайте ставки.',
         },
         {
           title: 'Экологичный выбор',
           description: 'Сокращайте цветочные отходы и поддерживайте устойчивое развитие. Каждая покупка — это спасённые цветы.',
         },
         {
           title: 'Быстрые аукционы',
           description: 'Ограниченные по времени аукционы создают азарт. Свежие цветы требуют быстрых продаж.',
         },
         {
           title: 'Безопасные сделки',
           description: 'Защищённые платежи и верифицированные продавцы гарантируют безопасность покупок.',
         },
         {
           title: 'Сообщество любителей цветов',
           description: 'Присоединяйтесь к сообществу, которое разделяет вашу страсть к красивым букетам.',
         },
       ],
     },
     // Footer
     footer: {
       description: 'Маркетплейс для продажи и покупки цветочных букетов. Дайте цветам вторую жизнь.',
       forSellers: 'Для продавцов',
       howToSell: 'Как продавать',
       pricingTips: 'Советы по ценам',
       sellerGuidelines: 'Правила продавца',
       successStories: 'Истории успеха',
       forBuyers: 'Для покупателей',
       howToBid: 'Как делать ставки',
       freshnessGuarantee: 'Гарантия свежести',
       delivery: 'Доставка',
       faq: 'FAQ',
       copyright: '© 2026 SecondBloom. Все права защищены.',
       privacy: 'Политика конфиденциальности',
       terms: 'Условия использования',
     },
   },
   uz: {
     // Hero
     hero: {
       tagline: "Gullarga ikkinchi imkoniyat bering",
       title1: "Go'zal buketlar,",
       title2: 'ikkinchi hayot',
       description: "Gul buketlarini sotish va sotib olish uchun marketplace. Ajoyib kompozitsiyalarni qulay narxlarda toping.",
       stats: {
         savings: "O'rtacha tejash",
         buyers: 'Mamnun xaridorlar',
         sellers: 'Faol sotuvchilar',
       },
       scroll: "Pastga",
     },
     // Features
     features: {
       badge: 'Nima uchun SecondBloom?',
       title1: "Hamyoningiz uchun foydali,",
       title2: "sayyora uchun foydali",
       description: "Ortiqcha buketlarni sotayapsizmi yoki ideal kompozitsiyani qidiryapsizmi — SecondBloom gul bozorini hamma uchun qulay qiladi.",
       seller: 'Sotuvchi',
       buyer: 'Xaridor',
       items: [
         {
           title: 'Buketlardan pul ishlang',
           description: "Keraksiz gullarni pulga aylantiring. To'y va tadbirlardan qolgan buketlarni e'lon qiling.",
         },
         {
           title: 'Foydali takliflarni toping',
           description: "Gul do'konlariga qaraganda arzon narxda go'zal buketlarni sotib oling.",
         },
         {
           title: "Ekologik tanlov",
           description: "Gul chiqindilarini kamaytiring va barqaror rivojlanishni qo'llab-quvvatlang.",
         },
         {
           title: 'Tez auktsionlar',
           description: "Vaqt cheklangan auktsionlar hayajon yaratadi. Yangi gullar tez sotilishi kerak.",
         },
         {
           title: "Xavfsiz bitimlar",
           description: "Himoyalangan to'lovlar va tasdiqlangan sotuvchilar xaridlar xavfsizligini kafolatlaydi.",
         },
         {
           title: 'Gul ishqibozlari jamiyati',
           description: "Go'zal gullarga bo'lgan ishtiyoqingizni baham ko'radigan jamoaga qo'shiling.",
         },
       ],
     },
     // Footer
     footer: {
       description: "Gul buketlarini sotish va sotib olish uchun marketplace. Gullarga ikkinchi hayot bering.",
       forSellers: 'Sotuvchilar uchun',
       howToSell: 'Qanday sotish',
       pricingTips: "Narx bo'yicha maslahatlar",
       sellerGuidelines: 'Sotuvchi qoidalari',
       successStories: 'Muvaffaqiyat hikoyalari',
       forBuyers: 'Xaridorlar uchun',
       howToBid: "Qanday stavka qo'yish",
       freshnessGuarantee: 'Yangilik kafolati',
       delivery: 'Yetkazib berish',
       faq: 'FAQ',
       copyright: "© 2026 SecondBloom. Barcha huquqlar himoyalangan.",
       privacy: 'Maxfiylik siyosati',
       terms: 'Foydalanish shartlari',
     },
   },
 } as const;
 
 export type Translations = typeof translations.en;