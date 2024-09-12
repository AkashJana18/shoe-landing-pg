import {
  CustomerReviews,
  Nav,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

export default function App() {
  return (
    <main>
      <section className="padding">
        <Nav />
      </section>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct /> 
      </section>
      <section className="padding">
        <SuperQuality /> 
      </section>
      <section className="padding-y py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer /> 
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews /> 
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
}
