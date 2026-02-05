 import { motion } from "framer-motion";
 import { DollarSign, ShoppingBag, Leaf, Timer, Shield, Users } from "lucide-react";
 import { useLanguage } from "@/contexts/LanguageContext";
 
 const featureIcons = [DollarSign, ShoppingBag, Leaf, Timer, Shield, Users];
 const featureTypes = [true, false, true, false, false, true];
 
 const FeaturesSection = () => {
   const { t } = useLanguage();
 
   return (
     <section className="bg-card py-20 lg:py-32">
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
         >
           <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
             {t.features.badge}
           </span>
           <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
             {t.features.title1}{" "}
             <span className="text-primary">{t.features.title2}</span>
           </h2>
           <p className="mx-auto max-w-2xl text-lg font-medium text-muted-foreground">
             {t.features.description}
           </p>
         </motion.div>
 
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           {t.features.items.map((feature, index) => {
             const Icon = featureIcons[index];
             const forSeller = featureTypes[index];
             return (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="group rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
               >
                 <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-soft transition-colors group-hover:bg-primary">
                   <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                 </div>
 
                 <div className="mb-3 flex items-center gap-2">
                   <h3 className="text-xl font-bold">{feature.title}</h3>
                   <span
                     className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                       forSeller
                         ? "bg-secondary text-secondary-foreground"
                         : "bg-rose-soft text-primary"
                     }`}
                   >
                     {forSeller ? t.features.seller : t.features.buyer}
                   </span>
                 </div>
 
                 <p className="font-medium text-muted-foreground">{feature.description}</p>
               </motion.div>
             );
           })}
         </div>
       </div>
     </section>
   );
 };
 
 export default FeaturesSection;