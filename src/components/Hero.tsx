import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

export default function Hero() {
  return (
    <section className="mb-[66px] flex flex-col items-start gap-[46px] sm:mb-[210px] sm:flex-row sm:justify-between sm:gap-0 md:mb-[250px]">
      <section className="">
        <h1 className="mb-[26px] text-heading-xl text-blue  sm:mb-[25px] sm:text-[48px] md:mb-[29px] md:text-heading-2xl">
          Maximize skill, <br /> minimize budget
        </h1>
        <p className="mb-6 max-w-[425px] text-body-base text-gray md:text-body-lg">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <ButtonOrLink>Get Started</ButtonOrLink>
      </section>
      <Image
        src={"/assets/images/image-hero-mobile.png"}
        alt="A person drinking coffee while looking at their laptop"
        width={327 * 2}
        height={301 * 2}
        className="max-w-[327px] shrink-0 self-center sm:m-0 sm:hidden"
        priority
      />
      <Image
        src={"/assets/images/image-hero-tablet.png"}
        alt="A person drinking coffee while looking at their laptop"
        width={343 * 2}
        height={542 * 2}
        className="absolute right-0 top-0 -z-10 hidden w-[343px] shrink-0 self-center sm:max-md:block"
        priority
      />
      <Image
        src={"/assets/images/image-hero-desktop.png"}
        alt="A person drinking coffee while looking at their laptop"
        width={1209 * 2}
        height={1090 * 2}
        className="absolute -right-[553px] -top-[360px] -z-10 hidden min-w-[1090px] max-w-[1200px] shrink-0 self-center md:block"
        priority
      />
    </section>
  )
}
