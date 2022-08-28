
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs( category );

  console.log(isLoading)
  
  return (
    <>
        <h4> { category } </h4>
        {
          isLoading && ( <h4>Cargando...</h4> )
        }

        <div className="card-grid">
          { 
            images.map( ( img ) => (
              <GifItem 
                key={ img.id } 
                { ...img }
              />
            )) 
          }
        </div>
    </>
  )
}
