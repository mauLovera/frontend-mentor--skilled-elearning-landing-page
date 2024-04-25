import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

// i think we can make like a ghost div to mimic the dimensions of the image and then determine when to add breakpoints

export default function Hero() {
  return (
    <section className="mb-[66px] flex flex-col items-start gap-[46px] sm:gap-0 sm:mb-[210px] sm:flex-row sm:justify-between md:mb-[250px]">
      <section className="max-w-[457px] sm:max-w-[398px] md:max-w-[457px]">
        <h1 className="mb-[26px] text-heading-xl text-blue  sm:mb-[25px] md:mb-[29px] md:text-heading-2xl">
          Maximize skill, minimize budget
        </h1>
        <p className="mb-6 text-body-base text-gray md:text-body-lg">
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
        className="self-center sm:m-0 sm:hidden shrink-0"
        priority
      />
      <Image
        src={"/assets/images/image-hero-tablet.png"}
        alt="A person drinking coffee while looking at their laptop"
        width={343*2}
        height={542*2}
        className="absolute top-0 right-0 -z-10 self-center hidden w-[343px] sm:max-md:block shrink-0"
        priority
      />
      <Image
        src={"/assets/images/image-hero-desktop.png"}
        alt="A person drinking coffee while looking at their laptop"
        width={1209*2}
        height={1090*2}
        className="absolute -top-[310px] -right-[553px] -z-10 self-center max-w-[1090px] min-w-[1090px] hidden md:block shrink-0"
        priority
      />
    </section>
  )
}
