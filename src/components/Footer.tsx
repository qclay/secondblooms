 import { Flower2, Instagram, Twitter, Mail } from "lucide-react";
 
 const Footer = () => {
   return (
     <footer className="border-t border-border bg-background py-12">
       <div className="container mx-auto px-4">
         <div className="grid gap-8 md:grid-cols-4">
           {/* Brand */}
           <div className="md:col-span-2">
             <div className="mb-4 flex items-center gap-2">
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                 <Flower2 className="h-5 w-5 text-primary-foreground" />
               </div>
               <span className="font-serif text-2xl font-bold">SecondBloom</span>
             </div>
             <p className="mb-6 max-w-sm text-muted-foreground">
               The sustainable marketplace for pre-loved flower bouquets. 
               Give flowers a second chance while saving money.
             </p>
             <div className="flex gap-4">
               <a
                 href="#"
                 className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
               >
                 <Instagram className="h-5 w-5" />
               </a>
               <a
                 href="#"
                 className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
               >
                 <Twitter className="h-5 w-5" />
               </a>
               <a
                 href="#"
                 className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
               >
                 <Mail className="h-5 w-5" />
               </a>
             </div>
           </div>
 
           {/* Links */}
           <div>
             <h4 className="mb-4 font-semibold">For Sellers</h4>
             <ul className="space-y-3 text-muted-foreground">
               <li><a href="#" className="transition-colors hover:text-primary">How to Sell</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Pricing Tips</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Seller Guidelines</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Success Stories</a></li>
             </ul>
           </div>
 
           <div>
             <h4 className="mb-4 font-semibold">For Buyers</h4>
             <ul className="space-y-3 text-muted-foreground">
               <li><a href="#" className="transition-colors hover:text-primary">How to Bid</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Freshness Guarantee</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">Delivery Info</a></li>
               <li><a href="#" className="transition-colors hover:text-primary">FAQs</a></li>
             </ul>
           </div>
         </div>
 
         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
           <p>© 2025 SecondBloom. All rights reserved.</p>
           <div className="flex gap-6">
             <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
             <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;