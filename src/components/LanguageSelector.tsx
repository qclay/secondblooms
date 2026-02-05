 import { useState, useRef, useEffect } from 'react';
 import { ChevronDown, Globe } from 'lucide-react';
 import { useLanguage } from '@/contexts/LanguageContext';
 import { languages, Language } from '@/i18n/translations';
 import { cn } from '@/lib/utils';
 
 interface LanguageSelectorProps {
   variant?: 'light' | 'dark';
 }
 
 const LanguageSelector = ({ variant = 'dark' }: LanguageSelectorProps) => {
   const { language, setLanguage } = useLanguage();
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef<HTMLDivElement>(null);
 
   const currentLang = languages.find(l => l.code === language);
 
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
         setIsOpen(false);
       }
     };
     document.addEventListener('mousedown', handleClickOutside);
     return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);
 
   const handleSelect = (code: Language) => {
     setLanguage(code);
     setIsOpen(false);
   };
 
   return (
     <div className="relative" ref={dropdownRef}>
       <button
         onClick={() => setIsOpen(!isOpen)}
         className={cn(
           "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors",
           variant === 'light'
             ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
             : "bg-muted text-foreground hover:bg-muted/80"
         )}
       >
         <Globe className="h-4 w-4" />
         <span>{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
         <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
       </button>
 
       {isOpen && (
         <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl bg-card shadow-lg ring-1 ring-border">
           <ul className="py-1">
             {languages.map((lang) => (
               <li key={lang.code}>
                 <button
                   onClick={() => handleSelect(lang.code)}
                   className={cn(
                     "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-muted",
                     language === lang.code && "bg-muted font-medium text-primary"
                   )}
                 >
                   <span className="text-lg">{lang.flag}</span>
                   <span>{lang.name}</span>
                 </button>
               </li>
             ))}
           </ul>
         </div>
       )}
     </div>
   );
 };
 
 export default LanguageSelector;