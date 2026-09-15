import { Contact } from "@/components/Contact"
import CopyrightBar from "@/components/CopyrightBar"
import Header from "@/components/Header"

const page = () => {
  return (
    <>
    <Header />
    <div className="my-1"><Contact /></div>
    <CopyrightBar />
    </>
  )
}

export default page