 export type Language = "en" | "ru" | "uz";
 
 export const languages: { code: Language; name: string; flag: string }[] = [
   { code: "en", name: "English", flag: "GB" },
   { code: "ru", name: "Russkiy", flag: "RU" },
   { code: "uz", name: "Uzbek", flag: "UZ" },
 ];
 
 export const translations = {
   en: {
     hero: {
       tagline: "Give flowers a second chance",
       title1: "Beautiful Bouquets,",
       title2: "Second Life",
       description: "The marketplace for buying and selling flower bouquets. Find stunning arrangements at great prices.",
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
       tagline: "Podari tsvetam vtoruyu zhizn",
       title1: "Krasivye bukety,",
       title2: "vtoraya zhizn",
       description: "Marketpleys dlya prodazhi i pokupki tsvetochnykh buketov. Nakhodite potryasayushchiye kompozitsii po vygodnym tsenam.",
       stats: {
         savings: "Srednyaya ekonomiya",
         buyers: "Dovolnykh pokupateley",
         sellers: "Aktivnykh prodavtsov",
       },
       scroll: "Listat",
     },
     features: {
       badge: "Pochemu SecondBloom?",
       title1: "Vygodno dlya koshelka,",
       title2: "polezno dlya planety",
       description: "Prodayote lishnie bukety ili ishchete idealnuyu kompozitsiyu - SecondBloom delayet tsvetochnyy rynok dostupnym dlya vsekh.",
       seller: "Prodavets",
       buyer: "Pokupatel",
       items: [
         {
           title: "Zarabatyvayte na buketakh",
           description: "Prevratite nenuzhnye tsvety v dengi. Vystavlyayte bukety so svadeb, meropriyatiy ili spontannykh pokupok.",
         },
         {
           title: "Nakhodite vygodnye predlozheniya",
           description: "Pokupayte krasivye bukety po tsene znachitelno nizhe tsvetochnykh magazinov. Delayte stavki.",
         },
         {
           title: "Ekologichnyy vybor",
           description: "Sokrashchayte tsvetochnye otkhody i podderzhivayte ustoychivoye razvitiye. Kazhdaya pokupka - eto spasennye tsvety.",
         },
         {
           title: "Bystrye auktsiony",
           description: "Ogranichennye po vremeni auktsiony sozdayut azart. Svezhiye tsvety trebuyut bystrykh prodazh.",
         },
         {
           title: "Bezopasnye sdelki",
           description: "Zashchishchennye platezhi i verifitsirovannye prodavtsy garantiruyut bezopasnost pokupok.",
         },
         {
           title: "Soobshchestvo lyubiteley tsvetov",
           description: "Prisoyedinyaytes k soobshchestvu, kotoroye razdelyayet vashu strast k krasivym buketam.",
         },
       ],
     },
     footer: {
       description: "Marketpleys dlya prodazhi i pokupki tsvetochnykh buketov. Dayte tsvetam vtoruyu zhizn.",
       forSellers: "Dlya prodavtsov",
       howToSell: "Kak prodavat",
       pricingTips: "Sovety po tsenam",
       sellerGuidelines: "Pravila prodavtsa",
       successStories: "Istorii uspekha",
       forBuyers: "Dlya pokupateley",
       howToBid: "Kak delat stavki",
       freshnessGuarantee: "Garantiya svezhesti",
       delivery: "Dostavka",
       faq: "FAQ",
       copyright: "2026 SecondBloom. Vse prava zashchishcheny.",
       privacy: "Politika konfidentsialnosti",
       terms: "Usloviya ispolzovaniya",
     },
   },
   uz: {
     hero: {
       tagline: "Gullarga ikkinchi imkoniyat bering",
       title1: "Gozal buketlar,",
       title2: "ikkinchi hayot",
       description: "Gul buketlarini sotish va sotib olish uchun marketplace. Ajoyib kompozitsiyalarni qulay narxlarda toping.",
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