import axios from 'axios';
import { map } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SearchEvents() {
  const [event, setEvent] = useState(undefined);
  const {id} = useParams();
  // const previosButton=() =>{
  //   if (id>1){
  //     set
  //   }
  // }
  useEffect(() => {
    async function getEvent(){
      try{
        const data = await axios.get( `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=dARIuqECqN2u90TqGAoVGrJzEQah0xL5`, {"Content-Type": "application/json"});
        console.log(data);
        setEvent(data);
      } catch (e){
        console.log(e);
      }
    }
    getEvent();
  }, [id]);
  

  return(
    <>
      <div>{event.name}</div>
      
    </>
    
  )
  }
//   return (
//     <div>
//       {
//       event.map((i)=>(
//         <li>
//           {i.name}
//         </li> 
//       ))  
//       }
//     </div>
//   )
// }
