import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Listbox value={theme} onChange={(value) => setTheme(value)}>
      {({ open }) => {
        const iconClassName = clsx(
          "w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors",
          open ? "text-primary" : "text-secondary",
        );
        return (
          <div className="relative">
            <Listbox.Button
              className={clsx(
                "relative flex h-8 w-8 cursor-default items-center justify-center rounded-lg",
              )}
            >
              {resolvedTheme === "dark" ? (
                <>
                  <Moon className={iconClassName} />
                  <span className="sr-only">Modo Oscuro</span>
                </>
              ) : (
                <>
                  <Sun className={iconClassName} />
                  <span className="sr-only">Modo Claro</span>
                </>
              )}
            </Listbox.Button>
            <AnimatePresence>
              {open && (
                <Listbox.Options
                  as={motion.ul}
                  static
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                  className="w-42 absolute right-0 z-10 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl bg-primary p-2 text-base capitalize sm:text-sm"
                >
                  <Listbox.Option
                    className={clsx(
                      "relative cursor-default select-none rounded-md py-2 pl-10 pr-4",
                      resolvedTheme === "dark" && "dark:bg-secondary bg-neutral-200"
                    )}
                    value="dark"
                  >
                    <span>Oscuro</span>
                    {resolvedTheme === "dark" && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                        <Check
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </Listbox.Option>
                  <Listbox.Option
                    className={clsx(
                      "relative cursor-default select-none rounded-md py-2 pl-10 pr-4",
                      resolvedTheme === "light" && "dark:bg-secondary bg-neutral-200"
                    )}
                    value="light"
                  >
                    <span>Claro</span>
                    {resolvedTheme === "light" && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                        <Check
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </Listbox.Option>
                </Listbox.Options>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    </Listbox >
  );
}
