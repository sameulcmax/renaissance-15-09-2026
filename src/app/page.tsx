import About from "@/components/About"
import { Contact } from "@/components/Contact"
import CopyrightBar from "@/components/CopyrightBar"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import { TellUsAboutNextRoom } from "@/components/TellUsAboutNextRoom"

const page = () => {
  return (
    <>
    <Header />
    <Hero />
    <ServicesSection />
    <About />
    <TellUsAboutNextRoom />
    <Contact />
    <CopyrightBar />
    </>
  )
}

export default page