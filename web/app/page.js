import Image from 'next/image'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import SubHeading from 'components/SubHeading'
import EarlyAccess from 'components/EarlyAccess'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-purple-300">
     <Logo/>
     <Heading/>
     <SubHeading/>
     <EarlyAccess/>
    </main>
  )
}
