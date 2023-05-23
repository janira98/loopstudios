import Image from 'next/image'
import Head from 'next/head'
import Hero from '../components/Hero'
import VrSection from '@/components/VrSection'
import CreationSection from '@/components/CreationSection'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <div>
      <Head>
        <title>loopstudios</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/x-icon" />
      </Head>
      <Hero heading1="Immersive" heading2="Expiriences" heading3="That Deliver" />
      <VrSection title="The Leader In Interactive VR" description="Founded in 2011, Loopstudios has been producing woad-doss virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand. " />
      <CreationSection />
      <Footer />
    </div>
  )
}
