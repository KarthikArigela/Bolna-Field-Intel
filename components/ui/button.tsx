import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Soft Neobrutalist Button
 * - Pill-shaped (rounded-full)
 * - 2px plum border
 * - Hard 4px/8px offset shadow (shadow-brutal)
 * - Hover: lifts up-left, shadow expands
 * - Active: pushes into the shadow (translate down-right, shadow collapses)
 */
const buttonVariants = cva(
  [
    // Layout + typography
    "group/button inline-flex shrink-0 items-center justify-center gap-2",
    "font-sans font-bold uppercase tracking-wider whitespace-nowrap select-none",
    "border-2 border-plum rounded-full",
    // Motion
    "transition-[transform,box-shadow,background-color] duration-150 ease-out",
    "shadow-brutal",
    // Hover: translate up-left, expand shadow
    "hover:-translate-x-0.5 hover:-translate-y-0.5",
    "hover:shadow-[6px_6px_0_0_var(--plum)]",
    "lg:hover:shadow-[10px_10px_0_0_var(--plum)]",
    // Active: push into the shadow
    "active:translate-x-1 active:translate-y-1",
    "active:shadow-[0_0_0_0_var(--plum)]",
    // Focus + disabled
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink/40",
    "disabled:pointer-events-none disabled:opacity-50",
    // Icons
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:   "bg-pink text-white",
        secondary: "bg-yellow text-plum",
        outline:   "bg-cream text-plum",
        ghost:     "bg-transparent text-plum border-transparent shadow-none hover:bg-peach hover:shadow-none hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0",
        destructive: "bg-destructive text-white",
        link:      "bg-transparent text-plum border-transparent shadow-none underline underline-offset-4 decoration-2 hover:translate-x-0 hover:translate-y-0 hover:shadow-none active:translate-x-0 active:translate-y-0",
      },
      size: {
        sm:      "h-9 px-4 text-xs",
        default: "h-11 px-5 text-sm",
        lg:      "h-14 px-7 text-sm",
        icon:    "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="button"
      data-variant={variant ?? "default"}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }