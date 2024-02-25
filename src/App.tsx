import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';



function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const handleOpenModal = () => {
    setIsModalOpen((prev: unknown) => !prev)
  }

  console.log(data);

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData: { price: number; title: string; img: string; }) => 
        <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.img} 
        />
        )}
      </div>
      {isModalOpen && <CreateModal/>}
      <button onClick={handleOpenModal}>Adiconar</button>
    </div>
  )
}

export default App
