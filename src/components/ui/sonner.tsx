"use client";

import { useTheme } from "@/lib/themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = (props: ToasterProps) => {
  const { theme = "system" } = useTheme();

  // sonner supports: "light" | "dark" | "system"
  const resolvedTheme: ToasterProps["theme"] =
    theme === "system" ? "system" : theme;

  return (
    <Sonner
      theme={resolvedTheme}
      className="toaster group"
      style={
        {
          // ensure CSS variables are valid
          ["--normal-bg" as any]: "var(--popover)",
          ["--normal-text" as any]: "var(--popover-foreground)",
          ["--normal-border" as any]: "var(--border)",
        }
      }
      {...props}
    />
  );
};

export { Toaster };
