 import { motion } from "framer-motion";
 import { DollarSign, ShoppingBag, Leaf, Timer, Shield, Users } from "lucide-react";
 
 const features = [
   {
     icon: DollarSign,
     title: "Earn from Unused Bouquets",
     description: "Turn your unwanted flowers into cash. List bouquets from events, weddings, or impulse buys and give them a second life.",
     forSeller: true,
   },
   {
     icon: ShoppingBag,
     title: "Find Amazing Deals",
     description: "Access beautiful bouquets at a fraction of traditional flower shop prices. Bid on unique arrangements you won't find elsewhere.",
     forSeller: false,
   },
   {
     icon: Leaf,
     title: "Sustainable Choice",
     description: "Reduce floral waste and support sustainability. Every second-bloom purchase means fewer flowers end up in landfills.",
     forSeller: true,
   },
   {
     icon: Timer,
     title: "Quick Auctions",
     description: "Time-sensitive auctions create excitement and urgency. Fresh flowers need quick sales, and our platform delivers.",
     forSeller: false,
   },
   {
     icon: Shield,
     title: "Secure Transactions",
     description: "Protected payments and verified sellers ensure your purchases are safe. Buy with confidence every time.",
     forSeller: false,
   },
   {
     icon: Users,
     title: "Community of Flower Lovers",
     description: "Join a community that shares your passion for beautiful blooms and smart shopping. Connect with local sellers and buyers.",
     forSeller: true,
   },
 ];
 
 const FeaturesSection = () => {
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
             Why SecondBloom?
           </span>
           <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
             Better for Your Wallet,{" "}
             <span className="text-primary">Better for the Planet</span>
           </h2>
           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
             Whether you're selling surplus bouquets or hunting for the perfect arrangement, 
             SecondBloom makes the flower market work for everyone.
           </p>
         </motion.div>
 
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
           {features.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
             >
               <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-soft transition-colors group-hover:bg-primary">
                 <feature.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
               </div>
 
               <div className="mb-3 flex items-center gap-2">
                 <h3 className="text-xl font-semibold">{feature.title}</h3>
                 <span
                   className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                     feature.forSeller
                       ? "bg-secondary text-secondary-foreground"
                       : "bg-rose-soft text-primary"
                   }`}
                 >
                   {feature.forSeller ? "Seller" : "Buyer"}
                 </span>
               </div>
 
               <p className="text-muted-foreground">{feature.description}</p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default FeaturesSection;