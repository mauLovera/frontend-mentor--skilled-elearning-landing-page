import Hero from "@/components/Hero"
import { globalXPadding } from "./layout"
import Courses from "@/components/Courses"

export default function Home() {
  return (
    <main className={globalXPadding}>
      <Hero />
      <Courses />
    </main>
  )
}
