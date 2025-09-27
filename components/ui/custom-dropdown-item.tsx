// components/ui/custom-dropdown-item.tsx
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface DropdownItemProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function CustomDropdownItem({ href, children, className }: DropdownItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block w-full rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
        className
      )}
    >
      {children}
    </Link>
  )
}