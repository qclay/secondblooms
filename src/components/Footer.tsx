 import { Instagram, Mail, Send } from "lucide-react";
 import { Link } from "react-router-dom";
 import logo from "@/assets/logo.svg";
 import { useLanguage } from "@/contexts/LanguageContext";
 
 const Footer = () => {
   const { t } = useLanguage();
 
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
               {t.footer.description}
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
             <h4 className="mb-4 font-semibold">{t.footer.forSellers}</h4>
             <ul className="space-y-3 text-muted-foreground">
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.howToSell}</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.pricingTips}</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.sellerGuidelines}</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.successStories}</a></li>
             </ul>
           </div>
 
           <div>
             <h4 className="mb-4 font-semibold">{t.footer.forBuyers}</h4>
             <ul className="space-y-3 text-muted-foreground">
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.howToBid}</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.freshnessGuarantee}</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.delivery}</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">{t.footer.faq}</a></li>
             </ul>
           </div>
         </div>
 
         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
           <p>{t.footer.copyright}</p>
           <div className="flex gap-6">
             <Link to="/privacy" className="transition-colors hover:text-primary">{t.footer.privacy}</Link>
             <Link to="/terms" className="transition-colors hover:text-primary">{t.footer.terms}</Link>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;