import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <section className="mb-[46px] max-w-[457px]">
        <h1 className="md:text-heading-2xl text-heading-xl mb-[26px] text-blue">
          Maximize skill, minimize budget
        </h1>
        <p className="md:text-body-lg text-body-base mb-6 text-gray">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <ButtonOrLink>Get Started</ButtonOrLink>
      </section>
      <Image
        src={"/assets/images/image-hero-mobile.svg"}
        alt="A person drinking coffee while looking at their laptop"
        width={327}
        height={301}
        className="mb-[66px]"
      />
    </section>
  )
}
