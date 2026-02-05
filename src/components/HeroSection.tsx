 import { motion } from "framer-motion";
 import { ChevronDown } from "lucide-react";
 import heroImage from "@/assets/hero-flowers.jpg";
 
 const HeroSection = () => {
   const scrollToContent = () => {
     window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
   };
 
   return (
     <section className="relative h-screen w-full overflow-hidden">
       {/* Full-screen background image */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt="Beautiful flower bouquet"
           className="h-full w-full object-cover"
         />
         {/* Dark gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28">
         <div className="container mx-auto px-6 md:px-12">
           {/* Text content */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="max-w-2xl"
           >
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="mb-4 text-sm uppercase tracking-widest text-white/70"
             >
               Give flowers a second chance
             </motion.p>
 
             <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
               Beautiful Bouquets,
               <br />
               Second Life
             </h1>
 
             <p className="max-w-lg text-base text-white/80 md:text-lg">
               The sustainable marketplace for pre-loved flower bouquets. Find stunning 
               blooms at amazing prices.
             </p>
           </motion.div>
 
           {/* Stats */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.6 }}
             className="mt-12 flex flex-wrap gap-8 md:gap-16"
           >
             <div>
               <p className="text-2xl font-bold text-white md:text-3xl">50%</p>
               <p className="text-sm text-white/60">Average savings</p>
             </div>
             <div>
               <p className="text-2xl font-bold text-white md:text-3xl">2K+</p>
               <p className="text-sm text-white/60">Happy buyers</p>
             </div>
             <div>
               <p className="text-2xl font-bold text-white md:text-3xl">500+</p>
               <p className="text-sm text-white/60">Active sellers</p>
             </div>
           </motion.div>
         </div>
 
         {/* Scroll indicator */}
         <motion.button
           onClick={scrollToContent}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, y: [0, 8, 0] }}
           transition={{
             opacity: { delay: 1, duration: 0.5 },
             y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
           }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
         >
           <span className="text-xs uppercase tracking-widest">Scroll</span>
           <ChevronDown className="h-5 w-5" />
         </motion.button>
       </div>
     </section>
   );
 };
 
 export default HeroSection;