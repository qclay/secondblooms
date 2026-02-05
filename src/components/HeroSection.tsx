 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Flower2, TrendingDown, Heart } from "lucide-react";
 import heroImage from "@/assets/hero-flowers.jpg";
 
 const HeroSection = () => {
   return (
     <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
       {/* Background decorative elements */}
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-rose-soft opacity-60 blur-3xl" />
         <div className="absolute top-1/2 -left-20 h-60 w-60 rounded-full bg-secondary opacity-50 blur-3xl" />
       </div>
 
       <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
         <div className="grid items-center gap-12 lg:grid-cols-2">
           {/* Text content */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-center lg:text-left"
           >
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground"
             >
               <Flower2 className="h-4 w-4" />
               <span>Give flowers a second chance</span>
             </motion.div>
 
             <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
               Beautiful Bouquets,{" "}
               <span className="text-gradient">Second Life</span>
             </h1>
 
             <p className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground lg:mx-0">
               The sustainable marketplace for pre-loved flower bouquets. Sell your 
               unwanted arrangements, find stunning blooms at amazing prices, and 
               challenge traditional flower shop pricing.
             </p>
 
             <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
               <Button variant="hero" size="xl">
                 Start Selling
               </Button>
               <Button variant="hero-outline" size="xl">
                 Browse Bouquets
               </Button>
             </div>
 
             {/* Stats */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-12 flex justify-center gap-8 lg:justify-start"
             >
               <div className="text-center">
                 <p className="text-2xl font-bold text-foreground">50%</p>
                 <p className="text-sm text-muted-foreground">Average savings</p>
               </div>
               <div className="h-12 w-px bg-border" />
               <div className="text-center">
                 <p className="text-2xl font-bold text-foreground">2K+</p>
                 <p className="text-sm text-muted-foreground">Happy buyers</p>
               </div>
               <div className="h-12 w-px bg-border" />
               <div className="text-center">
                 <p className="text-2xl font-bold text-foreground">500+</p>
                 <p className="text-sm text-muted-foreground">Active sellers</p>
               </div>
             </motion.div>
           </motion.div>
 
           {/* Image */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="relative"
           >
             <div className="relative mx-auto max-w-md lg:max-w-none">
               {/* Decorative ring */}
               <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/30 blur-2xl" />
               
               <img
                 src={heroImage}
                 alt="Beautiful flower bouquet"
                 className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
               />
 
               {/* Floating cards */}
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -left-4 top-1/4 z-20 rounded-2xl bg-card p-4 shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                     <TrendingDown className="h-5 w-5 text-secondary-foreground" />
                   </div>
                   <div>
                     <p className="text-xs text-muted-foreground">Price</p>
                     <p className="font-semibold text-foreground">-40% off</p>
                   </div>
                 </div>
               </motion.div>
 
               <motion.div
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-4 bottom-1/4 z-20 rounded-2xl bg-card p-4 shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-soft">
                     <Heart className="h-5 w-5 text-primary" />
                   </div>
                   <div>
                     <p className="text-xs text-muted-foreground">Sold today</p>
                     <p className="font-semibold text-foreground">127 bouquets</p>
                   </div>
                 </div>
               </motion.div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default HeroSection;