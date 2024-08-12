import Head from 'next/head'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutMe from '@/components/AboutMe'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your portfolio description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Services />
      </main>
      <Footer />
    </>
  )
}