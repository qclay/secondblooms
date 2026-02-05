 import { Instagram, Mail, Send } from "lucide-react";
 import { Link } from "react-router-dom";
 import logo from "@/assets/logo.svg";
 
 const Footer = () => {
   return (
     <footer className="border-t border-border bg-background py-12">
       <div className="container mx-auto px-4">
         <div className="grid gap-8 md:grid-cols-4">
           {/* Brand */}
           <div className="md:col-span-2">
             <div className="mb-4 flex items-center gap-2">
               <img src={logo} alt="SecondBloom" className="h-10 w-10" />
               <span className="font-serif text-2xl font-bold">SecondBloom</span>
             </div>
             <p className="mb-6 max-w-sm text-muted-foreground">
               Маркетплейс для продажи и покупки цветочных букетов.
               Дайте цветам вторую жизнь.
             </p>
             <div className="flex gap-4">
               <a
                 href="https://www.instagram.com/secondbloom_uz/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
               >
                 <Instagram className="h-5 w-5" />
               </a>
               <a
                 href="https://t.me/second_bloom"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
               >
                 <Send className="h-5 w-5" />
               </a>
               <a
                 href="mailto:info@secondbloom.uz"
                 className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
               >
                 <Mail className="h-5 w-5" />
               </a>
             </div>
           </div>
 
           {/* Links */}
           <div>
             <h4 className="mb-4 font-semibold">Для продавцов</h4>
             <ul className="space-y-3 text-muted-foreground">
               <li><a href="#" className="transition-colors hover:text-primary">Как продавать</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Советы по ценам</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Правила продавца</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Истории успеха</a></li>
             </ul>
           </div>
 
           <div>
             <h4 className="mb-4 font-semibold">Для покупателей</h4>
             <ul className="space-y-3 text-muted-foreground">
               <li><a href="#" className="transition-colors hover:text-primary">Как делать ставки</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Гарантия свежести</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Доставка</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">FAQ</a></li>
             </ul>
           </div>
         </div>
 
         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
           <p>© 2026 SecondBloom. Все права защищены.</p>
           <div className="flex gap-6">
             <Link to="/privacy" className="transition-colors hover:text-primary">Политика конфиденциальности</Link>
             <Link to="/terms" className="transition-colors hover:text-primary">Условия использования</Link>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;