 import { Link } from "react-router-dom";
 import { ArrowLeft } from "lucide-react";
 import logo from "@/assets/logo.svg";
 
 const TermsOfService = () => {
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
             Условия использования
           </h1>
           <p className="mb-8 text-muted-foreground">
             Дата последнего обновления: 5 февраля 2026 г.
           </p>
 
           <div className="prose prose-gray max-w-none space-y-6 text-foreground">
             <section>
               <h2 className="mb-3 text-xl font-semibold">1. Принятие условий</h2>
               <p className="text-muted-foreground">
                 Используя приложение SecondBloom («Приложение»), вы соглашаетесь с данными
                 Условиями использования. Если вы не согласны с какими-либо условиями,
                 пожалуйста, не используйте наше Приложение. Мы оставляем за собой право
                 изменять эти условия в любое время.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">2. Описание сервиса</h2>
               <p className="text-muted-foreground">
                 SecondBloom — это маркетплейс-платформа для проведения аукционов цветочных
                 букетов. Мы предоставляем площадку, где продавцы могут выставлять букеты
                 на продажу, а покупатели — делать ставки и приобретать их. SecondBloom
                 выступает исключительно как посредник и не является стороной сделки между
                 продавцом и покупателем.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">3. Регистрация и учётная запись</h2>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Для использования сервиса необходимо зарегистрироваться и создать учётную запись.</li>
                 <li>Вы должны быть не младше 18 лет для использования сервиса.</li>
                 <li>Вы обязуетесь предоставить достоверную и актуальную информацию.</li>
                 <li>Вы несёте ответственность за сохранность данных своей учётной записи.</li>
                 <li>Одному пользователю разрешена только одна учётная запись.</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">4. Правила для продавцов</h2>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Продавец гарантирует, что имеет право продавать выставленные товары.</li>
                 <li>Описания и фотографии должны точно соответствовать реальному состоянию букета.</li>
                 <li>Запрещено выставлять поддельные, опасные или запрещённые товары.</li>
                 <li>Продавец обязуется выполнить сделку в случае выигрыша аукциона покупателем.</li>
                 <li>Стартовая цена и условия аукциона должны быть чётко указаны.</li>
                 <li>SecondBloom взимает комиссию с успешных продаж согласно действующим тарифам.</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">5. Правила для покупателей</h2>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Делая ставку, вы обязуетесь приобрести товар в случае выигрыша аукциона.</li>
                 <li>Ставки являются обязательными и не могут быть отменены.</li>
                 <li>Оплата должна быть произведена в течение указанного срока после завершения аукциона.</li>
                 <li>Покупатель обязуется забрать или получить товар в согласованные сроки.</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">6. Правила проведения аукционов</h2>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Аукцион завершается в указанное время или при применении функции «Купить сейчас».</li>
                 <li>Победителем считается участник с наивысшей ставкой на момент завершения.</li>
                 <li>SecondBloom оставляет за собой право отменить аукцион при нарушении правил.</li>
                 <li>Манипуляции со ставками (самовыкуп, сговор) строго запрещены.</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">7. Платежи и возвраты</h2>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Все платежи обрабатываются через защищённые платёжные системы.</li>
                 <li>Возврат средств возможен только в случаях, предусмотренных нашей политикой возврата.</li>
                 <li>Споры между продавцом и покупателем разрешаются при участии службы поддержки.</li>
                 <li>SecondBloom не несёт ответственности за качество товаров, продаваемых пользователями.</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">8. Запрещённые действия</h2>
               <p className="mb-3 text-muted-foreground">При использовании сервиса запрещается:</p>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>Нарушать законодательство Республики Узбекистан</li>
                 <li>Публиковать ложную или вводящую в заблуждение информацию</li>
                 <li>Использовать сервис для мошенничества или обмана</li>
                 <li>Собирать данные других пользователей без их согласия</li>
                 <li>Распространять вредоносное ПО или нарушать работу сервиса</li>
                 <li>Использовать автоматизированные средства без разрешения</li>
                 <li>Оскорблять, угрожать или преследовать других пользователей</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">9. Интеллектуальная собственность</h2>
               <p className="text-muted-foreground">
                 Все права на контент, дизайн, логотипы и товарные знаки SecondBloom
                 принадлежат нам или нашим лицензиарам. Использование наших материалов без
                 письменного разрешения запрещено. Загружая контент в Приложение, вы
                 предоставляете нам неисключительную лицензию на его использование в рамках
                 сервиса.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">10. Ограничение ответственности</h2>
               <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                 <li>SecondBloom предоставляется «как есть» без каких-либо гарантий.</li>
                 <li>Мы не гарантируем бесперебойную работу сервиса.</li>
                 <li>Мы не несём ответственности за действия пользователей.</li>
                 <li>Наша ответственность ограничена суммой комиссий, уплаченных вами за последние 12 месяцев.</li>
               </ul>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">11. Приостановка и прекращение</h2>
               <p className="text-muted-foreground">
                 Мы оставляем за собой право приостановить или удалить вашу учётную запись
                 за нарушение данных Условий. Вы можете удалить свою учётную запись в
                 любое время через настройки приложения или обратившись в службу поддержки.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">12. Применимое право</h2>
               <p className="text-muted-foreground">
                 Данные Условия использования регулируются и толкуются в соответствии с
                 законодательством Республики Узбекистан. Все споры подлежат разрешению в
                 судах Республики Узбекистан.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">13. Изменения условий</h2>
               <p className="text-muted-foreground">
                 Мы можем изменять эти Условия использования. Продолжение использования
                 сервиса после внесения изменений означает ваше согласие с новыми
                 условиями. Мы уведомим вас о существенных изменениях через приложение или
                 по электронной почте.
               </p>
             </section>
 
             <section>
               <h2 className="mb-3 text-xl font-semibold">14. Контакты</h2>
               <p className="text-muted-foreground">
                 По вопросам, связанным с данными Условиями использования, свяжитесь с
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
 
 export default TermsOfService;