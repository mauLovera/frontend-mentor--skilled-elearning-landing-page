import Link from "next/link"
import { ButtonOrLink } from "./ButtonOrLink"
import LogoIcon from "./icons/LogoIcon"
import { globalXPadding } from "@/app/layout"

export default function Header() {
  return (
    <header
      className={
        "mb-[38px] flex items-center  justify-between pt-4 sm:mb-[99px] md:mb-[178px] md:pt-6" +
        globalXPadding
      }
    >
      <Link href={"/"}>
        <LogoIcon dark />
      </Link>
      <ButtonOrLink intent={"header"}>Get Started</ButtonOrLink>
    </header>
  )
}
