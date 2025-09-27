// components/language/LanguageSwitcher.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "ne", name: "Nepali", native: "नेपाली" },
  { code: "new", name: "Newa", native: "नेवा भाषा" },
];

export default function LanguageSwitcher() {
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex">
          <Globe className="h-4 w-4 mr-2" />
          {/* Display 'EN' on mobile, native language name on larger screens */}
          <span className="inline md:hidden">
            {currentLanguage.toUpperCase()}
          </span>
          <span className="hidden md:inline">
            {languages.find((lang) => lang.code === currentLanguage)?.native}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={cn(
              "cursor-pointer",
              currentLanguage === language.code && "bg-accent"
            )}
          >
            <span className="font-medium">{language.native}</span>
            <span className="ml-2 text-muted-foreground hidden md:inline">
              ({language.name})
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}