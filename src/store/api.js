export const fetchData = async (searchString) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=d581d53c`)
    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export const fetchDetails = async (id) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=d581d53c`)
    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
  }
}
