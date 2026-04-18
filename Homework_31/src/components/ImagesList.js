/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'
import axios from 'axios'

const ImagesList = () => {
   const [images, setImages] = useState([])
   const [isLoading, setLoading] = useState(true)
   const [page, setPage] = useState(1)

   useEffect(() => {
      setLoading(true)

      // eslint-disable-next-line no-template-curly-in-string

      // eslint-disable-next-line no-template-curly-in-string
      axios
         .get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
         .then((response) => response.data)
         .then((data) => {
            setImages((prewState) => [...prewState, ...data])
            setLoading(false)
         })
   }, [page])

   const handleShowMore = () => {
    setPage(prevPage => prevPage + 1)
   }

   if (isLoading) {
      return <p>Loading...</p>
   }

   return (
      <>
         <h1 className="header">Image Gallery</h1>
         <ul>
            {
               // eslint-disable-next-line camelcase
               images.map(({ id, download_url }) => (
                  <li key={id}>
                     {
                        // eslint-disable-next-line camelcase
                        <img src={download_url} alt="#" />
                     }
                  </li>
               ))
            }
         </ul>

         <div>
            {
               // eslint-disable-next-line react/button-has-type
               <button onClick={handleShowMore}>Show more</button>
            }
         </div>
      </>
   )
}

export default ImagesList
