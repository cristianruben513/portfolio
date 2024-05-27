import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check, LanguagesIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function LangSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "es">()

  const router = useRouter();

  const t = useTranslations("lang_switch");

  // Obtener el idioma actual con el primer valor de la URL
  useEffect(() => {
    const lang = window.location.pathname.split("/")[1];
    setLang(lang === "es" ? "es" : "en");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleLangChange = (value: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|es)/, `/${value}`);
    router.push(newPath);
  }

  return (
    <Listbox value={lang} onChange={(value) => handleLangChange(value)}>
      {({ open }) => {
        return (
          <div className="relative">
            <ListboxButton className="relative flex h-8 w-8 cursor-default items-center justify-center rounded-lg">
              <LanguagesIcon className="size-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
              <span className="sr-only">{t('title')}</span>
            </ListboxButton>
            <AnimatePresence>
              {open && (
                <ListboxOptions
                  as={motion.ul}
                  static
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                  className="w-42 absolute right-0 z-10 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl bg-neutral-200 dark:bg-black p-2 text-base capitalize sm:text-sm"
                >
                  <ListboxOption
                    className={clsx(
                      "relative cursor-default select-none rounded-md py-2 pl-10 pr-4",
                      lang === "en" && "dark:bg-secondary bg-white"
                    )}
                    value="en"
                  >
                    <span>{t('en')}</span>
                    {lang === "en" && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                        <Check className="size-5" aria-hidden="true" />
                      </span>
                    )}
                  </ListboxOption>
                  <ListboxOption
                    className={clsx(
                      "relative cursor-default select-none rounded-md py-2 pl-10 pr-4",
                      lang === "es" && "dark:bg-secondary bg-white"
                    )}
                    value="es"
                  >
                    <span>{t('es')}</span>
                    {lang === "es" && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                        <Check className="size-5" aria-hidden="true" />
                      </span>
                    )}
                  </ListboxOption>
                </ListboxOptions>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    </Listbox >
  );
}
