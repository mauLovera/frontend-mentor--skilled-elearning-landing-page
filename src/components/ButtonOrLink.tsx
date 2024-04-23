import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

const buttonOrLinkStyles = cva(
  "flex items-center justify-center transition-colors duration-300 w-fit",
  {
    variants: {
      intent: {
        primary: "",
        secondary: "",
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
