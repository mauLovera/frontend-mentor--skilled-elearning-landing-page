import Link from "next/link"
import { ButtonOrLink } from "./ButtonOrLink"
import LogoIcon from "./icons/LogoIcon"
import { globalXPadding } from "@/app/layout"

export default function Header() {
  return (
    <header
      className={
        "flex items-center justify-between pt-4 md:pt-6" + globalXPadding
      }
    >
      <Link href={"/"}>
        <LogoIcon dark />
      </Link>
      <ButtonOrLink intent={"header"}>Get Started</ButtonOrLink>
    </header>
  )
}
