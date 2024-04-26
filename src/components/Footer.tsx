import LogoIcon from "./icons/LogoIcon"
import { ButtonOrLink } from "./ButtonOrLink"
import { globalXPadding } from "@/app/constants"

export default function Footer() {
  return (
    <footer className={" flex-1 bg-blue py-9 md:py-8"}>
      <div
        className={
          "mx-auto flex max-w-[1440px] items-center justify-between" +
          globalXPadding
        }
      >
        <LogoIcon />
        <ButtonOrLink intent={"footer"}>Get Started</ButtonOrLink>
      </div>
    </footer>
  )
}
