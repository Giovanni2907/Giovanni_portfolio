'use client';

import { useLanguage } from '@/components/LanguageProvider';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const currentLabel = locale === 'fr' ? 'FR' : 'EN';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-9 px-3 text-sm font-medium gap-2">
          <Image src={locale === 'fr' ? '/flags/fr.svg' : '/flags/gb.svg'} alt={currentLabel} width={18} height={18} />
          {currentLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]">
        <DropdownMenuItem onClick={() => setLocale('fr')}>
          <Image src="/flags/fr.svg" alt="FR" width={16} height={16} className="mr-2" />
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale('en')}>
          <Image src="/flags/gb.svg" alt="EN" width={16} height={16} className="mr-2" />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


