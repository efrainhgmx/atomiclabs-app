import { 
  CardsSection, 
  Footer, 
  Hero, 
  TeamWork, 
  WhyUs 
} from "../molecules";

const Home = () => {
  return (
    <>
    <main>
      <Hero/>
      <CardsSection />
      <TeamWork />
      <WhyUs/>
    </main>
    <Footer />
    </>
  )
}

export default Home;