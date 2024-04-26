import Image from "next/image"

import { ButtonOrLink } from "./ButtonOrLink"

interface Course {
  title: string
  description: string
  imagePath: string
}

const courses: Course[] = [
  {
    title: "Animation",
    description:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    imagePath: "/assets/icons/icon-animation.svg",
  },
  {
    title: "Design",
    description:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    imagePath: "/assets/icons/icon-design.svg",
  },
  {
    title: "Photography",
    description:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    imagePath: "/assets/icons/icon-photography.svg",
  },
  {
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    imagePath: "/assets/icons/icon-crypto.svg",
  },
  {
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    imagePath: "/assets/icons/icon-business.svg",
  },
]

export default function Courses() {
  return (
    <section className="mb-20 grid grid-cols-1 justify-items-stretch gap-x-[10px] gap-y-10 sm:grid-cols-2 md:gap-x-[30px] md:gap-y-20 lg:grid-cols-3">
      <header className="rounded-[10px] bg-gradient-to-b from-orange to-hot-pink px-7 py-8 sm:pl-8 sm:pr-5 sm:pt-14 md:px-8 md:pt-16">
        <h2 className="text-heading-md-tall text-white md:text-heading-lg">
          Check out our most popular courses!
        </h2>
      </header>
      {courses.map(({ title, description, imagePath }, index) => (
        <Course
          title={title}
          description={description}
          imagePath={imagePath}
          key={index}
        />
      ))}
    </section>
  )
}

function Course({ title, description, imagePath }: Course) {
  return (
    <div className="relative rounded-[10px] bg-white px-7 pb-8 pt-14 drop-shadow-[0_25px_50px_rgba(6,22,141,4.42%)] sm:pl-8 sm:pr-[22px] sm:pt-20 md:px-8 md:pb-10 md:pt-16 flex flex-col justify-between">
      <Image
        src={imagePath}
        alt=""
        width={56}
        height={56}
        className="absolute -top-[26px]"
        priority
      />
      <div>
        <h3 className="mb-[15px] text-heading-base text-blue">{title}</h3>
        <p className="mb-[25px] text-body-base text-gray md:text-body-lg">
          {description}
        </p>
      </div>
      <ButtonOrLink intent={"secondary"}>Get Started</ButtonOrLink>
    </div>
  )
}
