import Header from '../components/Header'
import QuickLinks from '../components/QuickLinks'
import AboutMe from '../components/AboutMe'
import MyProducts from '../components/MyProducts'
import SocialMedia from '../components/SocialMedia'
import SubscribeForm from '../components/SubscribeForm'
import LatestUpdates from '../components/LatestUpdates'

export default function Home() {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <QuickLinks />
        <div className="grid md:grid-cols-3 gap-8">
          <AboutMe />
          <MyProducts />
          <SocialMedia />
        </div>
        <SubscribeForm />
        <LatestUpdates />
      </div>
    </div>
  )
}
