const CountryCard = ({country}) => {

  const capitals = country.capital?.join()

  return (
    <article className="bg-white rounded-md overflow-hidden darkTheme lightTheme">
      <header className="h-[160px] lightTheme">      
          <img className="h-full w-full object-cover" src={country?.flags.svg} alt={country?.flags.alt} />
      </header>
      <section className="p-2 py-4">
        <h1 className="font-bold mb-2 text-lg line-clamp-1">{country?.name.common}</h1>
        <ul>
          <li className="line-clamp-1"><span className="font-semibold">Capital:</span> {capitals ?? "None"}</li>
          <li><span className="font-semibold">Region:</span> {country?.region}</li>
          <li><span className="font-semibold">Population:</span> {country?.population}</li>
        </ul>
      </section>
    </article>
  )
}

export default CountryCard
