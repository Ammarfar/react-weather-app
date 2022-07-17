import { AsyncPaginate } from "react-select-async-paginate"
import { geoOptions, GEO_API_URL } from "../../api/api"

const Search = ({ searchPasser }) => {

    const onChangeHandler = (value) => {
        searchPasser(value)
    }

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}&minPopulation=1000000`, geoOptions)
            const cities = await response.json()
            return {
                options: cities.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.country}`,
                    }
                })
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AsyncPaginate
            placeholder="search..."
            onChange={onChangeHandler}
            debounceTimeout={600}
            loadOptions={loadOptions}
            autoFocus={true}
        />
    )
}

export default Search