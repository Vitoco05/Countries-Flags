import CountryCard from "./CountryCard"

const CountryList = ({countries}) => {
  return (
    <section className="pt-10 grid gap-6 justify-center grid-cols-[repeat(auto-fill,_260px)] max-w-[1200px] mx-auto"> 
      {
        countries.map((country) => <CountryCard key={country?.name.official} country={country}/>)
      }
    </section>
  )
}

export default CountryList
