import About from "@/components/About"
import CopyrightBar from "@/components/CopyrightBar"
import Header from "@/components/Header"

const page = () => {
  return (
    <>
    <Header />
    <div className="my-10 sm:my-20 md:my-20 lg:my-30"><About /></div>
    <CopyrightBar />
</>  
)

}

export default page