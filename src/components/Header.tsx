import { ButtonOrLink } from "./ButtonOrLink"
import LogoIcon from "./icons/LogoIcon"

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-4 md:pt-6">
      <LogoIcon dark />
      <ButtonOrLink intent={"header"}>Get Started</ButtonOrLink>
    </header>
  )
}
