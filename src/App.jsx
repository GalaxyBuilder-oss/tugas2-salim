import Fruit from "./components/Fruit"
import Header from "./components/Header"

function App() {

  const fruits = [
    {
      id: 1,
      name: "Buah Apel",
      price: 48000,
      quantity: 30,
      category: "Subtropis",
      description: "Buah Apel Segar Dan Matang",
      photo: "/apple.svg"
    },
    {
      id: 2,
      name: "Buah Pisang",
      price: 22480,
      quantity: 50,
      category: "Tropis",
      description: "Buah Banana Manis Dan Segar",
      photo: "/banana.svg"
    },
    {
      id: 3,
      name: "Buah Durian",
      price: 56500,
      quantity: 15,
      category: "Tropis",
      description: "Buah Durian Segar Dan Matang",
      photo: "/durian.svg"
    },
    {
      id: 4,
      name: "Buah Anggur",
      price: 38000,
      quantity: 25,
      category: "Subtropis",
      description: "Buah Anggur Manis Dan Segar",
      photo: "/grape.svg"
    },
    {
      id: 5,
      name: "Buah Lemon",
      price: 6000,
      quantity: 70,
      category: "Tropis dan Subtropis",
      description: "Buah Lemon Segar Dan Matang",
      photo: "/lemon.svg"
    },
    {
      id: 6,
      name: "Buah Mangga",
      price: 34900,
      quantity: 35,
      category: "Tropis",
      description: "Buah Mangga Manis Dan Segar",
      photo: "/mango.svg"
    },
    {
      id: 7,
      name: "Buah Pepaya",
      price: 44600,
      quantity: 30,
      category: "Tropis",
      description: "Buah Pepaya Segar Dan Matang",
      photo: "/papaya.svg"
    },
    {
      id: 8,
      name: "Buah Strawberry",
      price: 30000,
      quantity: 45,
      category: "Subtropis",
      description: "Buah Strawberry Manis Dan Segar",
      photo: "/strawberry.svg"
    },
    {
      id: 9,
      name: "Buah Semangka",
      price: 50000,
      quantity: 35,
      category: "Tropis",
      description: "Buah Semangka Manis Dan Segar",
      photo: "/watermelon.svg"
    },
  ]

  return (
    <>
      <Header />
      <Fruit listFruits={fruits} />
    </>
  )
}

export default App
