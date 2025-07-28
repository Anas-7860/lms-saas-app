import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
  <main>
 <h1 className='text-2xl underline'>Popular Companions</h1>
    <section className="home-section">
      <CompanionCard 
      id="123"
      name="Neura the brainly Explorer"
      topic="Derivatives & Integrals"
      subject="Science"
      duration={30}
      color="#4F8DF5"
      />
      <CompanionCard
       id="123"
       name="Neura the brainly Explorer"
       topic="Derivatives & Integrals"
       subject="Science"
       duration={30}
       color="#FFA45B"/>
      <CompanionCard
       id="123"
       name="Neura the brainly Explorer"
       topic="Derivatives & Integrals"
       subject="Science"
       duration={30}
       color="#5FD068"/>
    </section>
    <section className='home-section'>
      <CompanionsList
      title="Recently completed session"
      companions={recentSessions}
      className="w-2/3 max-lg:w-full"
      />
      <CTA/>
    </section>

  </main>
)}
   


export default Page