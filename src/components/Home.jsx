import axios from "axios"
import { useEffect, useState } from "react"
import CountryList from "./CountryList"

const Home = () => {

  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState("")
  const [region, setRegion] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChangeCountry = (e) => {
    const newCountryName = e.target.value
    setCountryName(newCountryName)
  }

  const handleChangeRegion = (e) => {
    setRegion(e.target.value)
  }

  const countryByName = countries.filter((country) => 
  country.name.common.toLowerCase().includes(countryName.toLowerCase()))

  const countryByRegion = countryByName.filter((country) => country.region.includes(region))
 
  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all"
    axios
    .get(URL)
    .then(({data}) => setCountries(data))
    .catch((error) => console.error(error))
  }, [])

  return (
    <main className="p-4 py-6">
      <form onSubmit={handleSubmit} className="grid gap-8 sm:flex sm:justify-between max-w-[1200px] mx-auto">
        <div className="lightTheme p-4 rounded-md flex items-center gap-2 darkTheme
        sm:w-[360px]">
          <i className="fa-solid fa-magnifying-glass text-dark-gray text-lg"></i>
          <input
          autoComplete="off"
          onChange={handleChangeCountry}
          id="countryName" 
          className="outline-none flex-1 bg-white/0" 
          placeholder="Search for a country..." 
          type="text" 
          value={countryName}
          />
          
        </div>

        <select onChange={handleChangeRegion} className="lightTheme outline-none p-4 rounded-md max-w-[120px] darkTheme">
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>

      <section>
        <CountryList countries={countryByRegion}/>
      </section>

    </main>
  )
}

export default Home
