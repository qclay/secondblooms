 import { Link } from "react-router-dom";
 import { ArrowLeft } from "lucide-react";
 import logo from "@/assets/logo.svg";
 
 const PrivacyPolicy = () => {
   return (
     <div className="min-h-screen bg-background">
       {/* Header */}
       <header className="border-b border-border bg-background/95 backdrop-blur">
         <div className="container mx-auto flex items-center justify-between px-4 py-4">
           <Link to="/" className="flex items-center gap-2">
             <img src={logo} alt="SecondBloom" className="h-8 w-8" />
             <span className="font-serif text-xl font-bold">SecondBloom</span>
           </Link>
           <Link
             to="/"
             className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
           >
             <ArrowLeft className="h-4 w-4" />
             Назад
           </Link>
         </div>
       </header>
 
       {/* Content */}
       <main className="container mx-auto px-4 py-12">
         <div className="mx-auto max-w-3xl">
           <h1 className="mb-2 font-serif text-3xl font-bold md:text-4xl">
             Политика конфиденциальности
           </h1>
           <p className="mb-8 text-muted-foreground">
             Дата последнего обновления: 5 февраля 2026 г.
           </p>
 
           <div className="prose prose-gray max-w-none space-y-6 text-foreground">
             <section>
               <h2 className="mb-3 text-xl font-semibold">1. Введение</h2>
               <p className="text-muted-foreground">
                 Добро пожаловать в SecondBloom («мы», «нас» или «наш»). Мы уважаем вашу
                 конфиденциальность и обязуемся защищать ваши персональные данные. Данная
                 Политика конфиденциальности объясняет, как мы собираем, используем,
                 раскрываем и защищаем вашу информацию при использовании нашего мобильного
                 приложения и связанных с ним услуг.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">2. Собираемая информация</h2>
               <p className="mb-3 text-muted-foreground">
                 Мы можем собирать следующие типы информации:
               </p>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>
                   <strong>Персональные данные:</strong> имя, адрес электронной почты, номер
                   телефона, адрес доставки при регистрации и использовании сервиса.
                 </li>
                 <li>
                   <strong>Данные учётной записи:</strong> логин, пароль (в зашифрованном
                   виде), история аукционов и транзакций.
                 </li>
                 <li>
                   <strong>Платёжные данные:</strong> информация о платежах обрабатывается
                   защищёнными платёжными провайдерами. Мы не храним данные банковских карт.
                 </li>
                 <li>
                   <strong>Данные устройства:</strong> тип устройства, операционная система,
                   уникальные идентификаторы устройства, IP-адрес.
                 </li>
                 <li>
                   <strong>Данные о местоположении:</strong> с вашего согласия мы можем
                   собирать данные о геолокации для улучшения сервиса доставки.
                 </li>
                 <li>
                   <strong>Контент пользователя:</strong> фотографии букетов, описания
                   товаров, отзывы и сообщения.
                 </li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">3. Использование информации</h2>
               <p className="mb-3 text-muted-foreground">
                 Мы используем собранную информацию для:
               </p>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Предоставления, поддержки и улучшения нашего сервиса</li>
                 <li>Обработки транзакций и проведения аукционов</li>
                 <li>Связи с вами по вопросам сервиса, обновлений и маркетинга</li>
                 <li>Обеспечения безопасности и предотвращения мошенничества</li>
                 <li>Соблюдения правовых требований</li>
                 <li>Персонализации пользовательского опыта</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">4. Передача данных третьим лицам</h2>
               <p className="mb-3 text-muted-foreground">
                 Мы можем передавать вашу информацию:
               </p>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>
                   <strong>Поставщикам услуг:</strong> платёжные системы, службы доставки,
                   хостинг-провайдеры, аналитические сервисы.
                 </li>
                 <li>
                   <strong>Другим пользователям:</strong> продавцам и покупателям в рамках
                   транзакций (имя, контактные данные для доставки).
                 </li>
                 <li>
                   <strong>Государственным органам:</strong> по требованию закона или для
                   защиты наших прав.
                 </li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">5. Хранение и защита данных</h2>
               <p className="text-muted-foreground">
                 Мы применяем технические и организационные меры безопасности для защиты
                 ваших данных. Данные хранятся на защищённых серверах с ограниченным доступом.
                 Мы храним ваши данные только в течение периода, необходимого для
                 предоставления услуг или исполнения правовых обязательств.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">6. Ваши права</h2>
               <p className="mb-3 text-muted-foreground">Вы имеете право:</p>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Получить доступ к своим персональным данным</li>
                 <li>Исправить неточные данные</li>
                 <li>Удалить свои данные (с учётом законодательных требований)</li>
                 <li>Отозвать согласие на обработку данных</li>
                 <li>Ограничить обработку данных</li>
                 <li>Перенести данные в другой сервис</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">7. Файлы cookie и аналитика</h2>
               <p className="text-muted-foreground">
                 Мы используем файлы cookie и аналогичные технологии для улучшения
                 пользовательского опыта, аналитики и рекламы. Вы можете управлять
                 настройками cookie в настройках вашего устройства.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">8. Дети</h2>
               <p className="text-muted-foreground">
                 Наш сервис не предназначен для лиц младше 18 лет. Мы сознательно не
                 собираем персональные данные детей. Если вы узнали, что ребёнок
                 предоставил нам свои данные, пожалуйста, свяжитесь с нами.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">9. Изменения политики</h2>
               <p className="text-muted-foreground">
                 Мы можем обновлять эту Политику конфиденциальности. Актуальная версия
                 всегда доступна в приложении и на нашем сайте. Мы уведомим вас о
                 существенных изменениях через приложение или по электронной почте.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">10. Контакты</h2>
               <p className="text-muted-foreground">
                 Если у вас есть вопросы о данной Политике конфиденциальности, свяжитесь с
                 нами:
               </p>
               <ul className="mt-3 space-y-1 text-muted-foreground">
                 <li>
                   Email:{" "}
                   <a
                     href="mailto:info@secondbloom.uz"
                     className="text-primary hover:underline"
                   >
                     info@secondbloom.uz
                   </a>
                 </li>
                 <li>
                   Telegram:{" "}
                   <a
                     href="https://t.me/second_bloom"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-primary hover:underline"
                   >
                     @second_bloom
                   </a>
                 </li>
               </ul>
             </section>
           </div>
         </div>
       </main>
     </div>
   );
 };
 
 export default PrivacyPolicy;