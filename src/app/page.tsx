import Hero from "@/components/Hero"
import Courses from "@/components/Courses"
import { globalXPadding } from "./constants"

export default function Home() {
  return (
    <main className={"" + globalXPadding}>
      <Hero />
      <Courses />
    </main>
  )
}
