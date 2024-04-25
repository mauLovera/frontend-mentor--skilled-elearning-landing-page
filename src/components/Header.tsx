import Link from "next/link"

import LogoIcon from "./icons/LogoIcon"
import { ButtonOrLink } from "./ButtonOrLink"
import { globalXPadding } from "@/app/constants"

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
