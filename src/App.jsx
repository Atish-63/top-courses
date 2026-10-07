import './App.css'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import {apiUrl,filterData} from './data'
import { useEffect,useState } from 'react'
import Spinner from './Components/Spinner'
import { toast } from 'react-toastify'





function App() {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)


  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(apiUrl)
      const output = await res.json()
      setCourses(output.data)
      setLoading(false)
    }
    catch (error) {
      console.log('something went wrong')
    }
    setLoading(false)
  };

  useEffect(() => {

    fetchData()
  }, [])

  return (
    <div className="min-h-screen flex-col flex bg-blue-950">
      <div>
        <Navbar />
      </div>
     
     
       

      <div className="bg-bgDark2">
        <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {loading ? (<Spinner />) : (<Cards courses={courses} category={category}   />)}
        
      </div>
      </div>



    </div>


  )
}
  
export default App
