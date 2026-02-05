 import { motion } from "framer-motion";
 import { DollarSign, ShoppingBag, Leaf, Timer, Shield, Users } from "lucide-react";
 
 const features = [
   {
     icon: DollarSign,
     title: "Зарабатывайте на букетах",
     description: "Превратите ненужные цветы в деньги. Выставляйте букеты со свадеб, мероприятий или спонтанных покупок на аукцион.",
     forSeller: true,
   },
   {
     icon: ShoppingBag,
     title: "Находите выгодные предложения",
     description: "Покупайте красивые букеты по цене значительно ниже цветочных магазинов. Делайте ставки на уникальные композиции.",
     forSeller: false,
   },
   {
     icon: Leaf,
     title: "Экологичный выбор",
     description: "Сокращайте цветочные отходы и поддерживайте устойчивое развитие. Каждая покупка — это спасённые цветы.",
     forSeller: true,
   },
   {
     icon: Timer,
     title: "Быстрые аукционы",
     description: "Ограниченные по времени аукционы создают азарт. Свежие цветы требуют быстрых продаж — наша платформа это обеспечивает.",
     forSeller: false,
   },
   {
     icon: Shield,
     title: "Безопасные сделки",
     description: "Защищённые платежи и верифицированные продавцы гарантируют безопасность покупок. Покупайте с уверенностью.",
     forSeller: false,
   },
   {
     icon: Users,
     title: "Сообщество любителей цветов",
     description: "Присоединяйтесь к сообществу, которое разделяет вашу страсть к красивым букетам. Находите продавцов и покупателей рядом.",
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
             Почему SecondBloom?
           </span>
           <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
             Выгодно для кошелька,{" "}
             <span className="text-primary">полезно для планеты</span>
           </h2>
           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
             Продаёте лишние букеты или ищете идеальную композицию — 
             SecondBloom делает цветочный рынок доступным для всех.
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
                   {feature.forSeller ? "Продавец" : "Покупатель"}
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