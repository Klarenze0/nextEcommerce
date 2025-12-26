"use client";

import { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-[#10172a] text-white flex justify-center px-4">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={`p-4 hover:bg-[#1f2a47] hover:text-gray-300 focus-visible:bg-[#1f2a47] focus-visible:text-gray-300 ${
        pathname === props.href ? "bg-background text-black" : ""
      }`}
    />
  );
}
