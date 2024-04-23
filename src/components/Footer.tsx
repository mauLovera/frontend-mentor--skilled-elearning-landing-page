import { globalXPadding } from "@/app/layout"
import LogoIcon from "./icons/LogoIcon"
import { ButtonOrLink } from "./ButtonOrLink"

export default function Footer() {
  return (
    <footer
      className={
        "flex items-center justify-between bg-blue py-9 md:py-8" +
        globalXPadding
      }
    >
      <LogoIcon />
      <ButtonOrLink intent={"footer"}>Get Started</ButtonOrLink>
    </footer>
  )
}
