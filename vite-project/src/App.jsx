

function App() {

  // GET
  const getFruits = async () => {
    const response = await fetch("https://fruit-fake-api.onrender.com/fruits")
    const json = await response.json()
    console.log(response)
    console.log(json)
  }

  return (
    <>
      <button onClick={getFruits}>Requisições</button>
    </>
  )
}

export default App
