// shadcn/ui Button component
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-[#0A0F1C]',
  {
    variants: {
      variant: {
        default:
          'bg-white text-[#0A0F1C] hover:bg-orange-100 focus-visible:ring-white shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]',
        outline:
          'border border-white text-white bg-transparent hover:bg-white/10 focus-visible:ring-white',
        ghost:
          'text-slate-300 hover:bg-white/10 hover:text-white focus-visible:ring-white/30',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        secondary:
          'bg-[#FF6B35] text-white hover:bg-[#e55a25] border border-[#FF6B35]/50 shadow-[0_0_20px_rgba(255,107,53,0.35)] hover:shadow-[0_0_30px_rgba(255,107,53,0.55)]',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
