import { tv } from 'tailwind-variants'
import { cn } from '@/lib/utils'
import { ComponentPropsWithRef } from 'react'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

const buttonVariants = tv({
  base: 'cursor-pointer rounded-md bg-black p-2 text-white',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50'
    }
  }
})

export function Button({ children, className, disabled = false, ...props }: ButtonProps) {
  return (
    <button disabled={disabled} className={cn(buttonVariants({ disabled }), className)} {...props}>
      {children}
    </button>
  )
}
