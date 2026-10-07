import React from 'react'

const Filter = ({ filterData, category, setCategory }) => {

   
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
      {filterData.map( (data) => {
      return  <button className={`bg-gray-300 text-white-350  hover:cursor-pointer py-2 px-4 rounded-md ${category === data.title ?'bg-yellow-300 text-black' :'bg-gray-300' }`} key={data.id}
        onClick={ () => setCategory(data.title) }
        >{data.title}
            
        </button>

      })}
    
        
       
    
    </div>
  )
}

export default Filter
