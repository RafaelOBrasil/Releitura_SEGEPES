"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = {
  href: string;
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
};

export default function MenuItem({ href, icon: Icon, label,onClick }: MenuItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (

      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center justify-start w-full pr-4 pl-4 pb-2 pt-2 ${
          active
            ? "bg-blue-600 text-white"
            : "text-black-600 hover:bg-blue-400 hover:text-white"
        }`}
      >
        <Icon className="w-6 h-6 mr-2" />
        <span>{label}</span>
      </Link>

  );
}
