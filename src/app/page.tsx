import Hero from "@/components/Hero"
import Courses from "@/components/Courses"

export const globalXPadding = " px-4 sm:px-10 lg:px-[165px]"

export default function Home() {
  return (
    <main className={"" + globalXPadding}>
      <Hero />
      <Courses />
    </main>
  )
}
