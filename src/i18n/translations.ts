 export type Language = "en" | "ru" | "uz";
 
 export const languages: { code: Language; name: string; flag: string }[] = [
   { code: "en", name: "English", flag: "GB" },
   { code: "ru", name: "Русский", flag: "RU" },
   { code: "uz", name: "Uzbek", flag: "UZ" },
 ];
 
 export const translations = {
   en: {
    hero: {
      tagline: "Give flowers a second chance",
      title1: "The App for Buying",
      title2: "& Selling Bouquets",
      description: "The mobile marketplace for flower bouquets. Find stunning arrangements at great prices.",
       stats: {
         savings: "Average savings",
         buyers: "Happy buyers",
         sellers: "Active sellers",
       },
       scroll: "Scroll",
     },
     features: {
       badge: "Why SecondBloom?",
       title1: "Better for Your Wallet,",
       title2: "better for the planet",
       description: "Whether you are selling surplus bouquets or hunting for the perfect arrangement, SecondBloom makes the flower market work for everyone.",
       seller: "Seller",
       buyer: "Buyer",
       items: [
         {
           title: "Earn from Unused Bouquets",
           description: "Turn your unwanted flowers into cash. List bouquets from events, weddings, or impulse buys.",
         },
         {
           title: "Find Amazing Deals",
           description: "Access beautiful bouquets at a fraction of traditional flower shop prices. Bid on unique arrangements.",
         },
         {
           title: "Sustainable Choice",
           description: "Reduce floral waste and support sustainability. Every purchase means fewer flowers in landfills.",
         },
         {
           title: "Quick Auctions",
           description: "Time-sensitive auctions create excitement. Fresh flowers need quick sales, and our platform delivers.",
         },
         {
           title: "Secure Transactions",
           description: "Protected payments and verified sellers ensure your purchases are safe. Buy with confidence.",
         },
         {
           title: "Community of Flower Lovers",
           description: "Join a community that shares your passion for beautiful blooms. Connect with local sellers and buyers.",
         },
       ],
     },
     footer: {
       description: "The marketplace for buying and selling flower bouquets. Give flowers a second life.",
       forSellers: "For Sellers",
       howToSell: "How to Sell",
       pricingTips: "Pricing Tips",
       sellerGuidelines: "Seller Guidelines",
       successStories: "Success Stories",
       forBuyers: "For Buyers",
       howToBid: "How to Bid",
       freshnessGuarantee: "Freshness Guarantee",
       delivery: "Delivery",
       faq: "FAQ",
       copyright: "2026 SecondBloom. All rights reserved.",
       privacy: "Privacy Policy",
       terms: "Terms of Service",
     },
   },
   ru: {
    hero: {
      tagline: "Подари цветам вторую жизнь",
      title1: "Приложение для покупки",
      title2: "и продажи букетов",
      description: "Мобильный маркетплейс цветочных букетов. Находите потрясающие композиции по выгодным ценам.",
       stats: {
         savings: "Средняя экономия",
         buyers: "Довольных покупателей",
         sellers: "Активных продавцов",
       },
       scroll: "Листать",
     },
     features: {
       badge: "Почему SecondBloom?",
       title1: "Выгодно для кошелька,",
       title2: "полезно для планеты",
       description: "Продаете лишние букеты или ищете идеальную композицию - SecondBloom делает цветочный рынок доступным для всех.",
       seller: "Продавец",
       buyer: "Покупатель",
       items: [
         {
           title: "Зарабатывайте на букетах",
           description: "Превратите ненужные цветы в деньги. Выставляйте букеты со свадеб, мероприятий или спонтанных покупок.",
         },
         {
           title: "Находите выгодные предложения",
           description: "Покупайте красивые букеты по цене значительно ниже цветочных магазинов. Делайте ставки.",
         },
         {
           title: "Экологичный выбор",
           description: "Сокращайте цветочные отходы и поддерживайте устойчивое развитие. Каждая покупка - это спасенные цветы.",
         },
         {
           title: "Быстрые аукционы",
           description: "Ограниченные по времени аукционы создают азарт. Свежие цветы требуют быстрых продаж.",
         },
         {
           title: "Безопасные сделки",
           description: "Защищенные платежи и верифицированные продавцы гарантируют безопасность покупок.",
         },
         {
           title: "Сообщество любителей цветов",
           description: "Присоединяйтесь к сообществу, которое разделяет вашу страсть к красивым букетам.",
         },
       ],
     },
     footer: {
       description: "Маркетплейс для продажи и покупки цветочных букетов. Дайте цветам вторую жизнь.",
       forSellers: "Для продавцов",
       howToSell: "Как продавать",
       pricingTips: "Советы по ценам",
       sellerGuidelines: "Правила продавца",
       successStories: "Истории успеха",
       forBuyers: "Для покупателей",
       howToBid: "Как делать ставки",
       freshnessGuarantee: "Гарантия свежести",
       delivery: "Доставка",
       faq: "FAQ",
       copyright: "2026 SecondBloom. Все права защищены.",
       privacy: "Политика конфиденциальности",
       terms: "Условия использования",
     },
   },
   uz: {
    hero: {
      tagline: "Gullarga ikkinchi imkoniyat bering",
      title1: "Buketlarni sotib olish",
      title2: "va sotish ilovasi",
      description: "Gul buketlari uchun mobil marketplace. Ajoyib kompozitsiyalarni qulay narxlarda toping.",
       stats: {
         savings: "Ortacha tejash",
         buyers: "Mamnun xaridorlar",
         sellers: "Faol sotuvchilar",
       },
       scroll: "Pastga",
     },
     features: {
       badge: "Nima uchun SecondBloom?",
       title1: "Hamyoningiz uchun foydali,",
       title2: "sayyora uchun foydali",
       description: "Ortiqcha buketlarni sotayapsizmi yoki ideal kompozitsiyani qidiryapsizmi - SecondBloom gul bozorini hamma uchun qulay qiladi.",
       seller: "Sotuvchi",
       buyer: "Xaridor",
       items: [
         {
           title: "Buketlardan pul ishlang",
           description: "Keraksiz gullarni pulga aylantiring. Toy va tadbirlardan qolgan buketlarni elon qiling.",
         },
         {
           title: "Foydali takliflarni toping",
           description: "Gul dokonlariga qaraganda arzon narxda gozal buketlarni sotib oling.",
         },
         {
           title: "Ekologik tanlov",
           description: "Gul chiqindilarini kamaytiring va barqaror rivojlanishni qollab-quvvatlang.",
         },
         {
           title: "Tez auktsionlar",
           description: "Vaqt cheklangan auktsionlar hayajon yaratadi. Yangi gullar tez sotilishi kerak.",
         },
         {
           title: "Xavfsiz bitimlar",
           description: "Himoyalangan tolovlar va tasdiqlangan sotuvchilar xaridlar xavfsizligini kafolatlaydi.",
         },
         {
           title: "Gul ishqibozlari jamiyati",
           description: "Gozal gullarga bolgan ishtiyoqingizni baham koradigan jamoaga qoshiling.",
         },
       ],
     },
     footer: {
       description: "Gul buketlarini sotish va sotib olish uchun marketplace. Gullarga ikkinchi hayot bering.",
       forSellers: "Sotuvchilar uchun",
       howToSell: "Qanday sotish",
       pricingTips: "Narx boyicha maslahatlar",
       sellerGuidelines: "Sotuvchi qoidalari",
       successStories: "Muvaffaqiyat hikoyalari",
       forBuyers: "Xaridorlar uchun",
       howToBid: "Qanday stavka qoyish",
       freshnessGuarantee: "Yangilik kafolati",
       delivery: "Yetkazib berish",
       faq: "FAQ",
       copyright: "2026 SecondBloom. Barcha huquqlar himoyalangan.",
       privacy: "Maxfiylik siyosati",
       terms: "Foydalanish shartlari",
     },
   },
 } as const;
 
 export type Translations = typeof translations.en;