import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

const buttonOrLinkStyles = cva(
  "flex items-center justify-center transition-colors duration-300 w-fit",
  {
    variants: {
      intent: {
        header:
          "text-button-sm-tall md:text-button-base px-6 pt-[9px] pb-[11px] md:px-8 md:py-[14px] bg-blue hover:bg-blue-hover text-white rounded-[28px]",
        primary:
          "py-[15px] px-[38px] text-button-sm md:text-button-base md:py-4 md:px-8 lg:pt-[19px] lg:pb-4 bg-gradient-to-b from-orange to-hot-pink rounded-[31px] text-white",
        secondary: "text-pink hover:text-pink-hover text-button-base",
        footer:
          "text-button-sm-tall md:text-button-base px-[24px] pt-[9px] pb-[11px] md:px-8 md:py-[14px] bg-gradient-to-b from-purple to-hot-pink rounded-[28px] text-white overflow-hidden relative after:absolute after:h-full after:w-full after:hover:bg-white/50 after:bg-white/0 after:transition-colors",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
)

export interface Props extends VariantProps<typeof buttonOrLinkStyles> {
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

export function ButtonOrLink({
  intent,
  children,
  href,
  onClick,
  ...props
}: Props) {
  return href ? (
    <Link href={href} className={buttonOrLinkStyles({ intent })} {...props}>
      {children}
    </Link>
  ) : (
    <button
      className={buttonOrLinkStyles({ intent })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
