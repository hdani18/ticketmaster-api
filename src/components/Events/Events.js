import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Events() {
    const {id} = useParams();
    const [events,setEvents] = useState([]);
    
    useEffect(()=>{
        console.log('SHOW useEffect fired');
        async function getData(){
            try{

                const {data: {_embedded: {events: evts}, page: page, _links: links}} = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=dARIuqECqN2u90TqGAoVGrJzEQah0xL5&size=20&page=${id}`, {"Content-Type": "application/json"});
                setEvents(evts);
            } catch(e){
                console.log(e);
            }
            
        }
        getData();

    },[id])
    // const pagination = (id) => {
    //     return(
    //       <div>
    //           <Link to={`https://app.ticketmaster.com/discovery/v2/events/${id-1}.json?apikey=dARIuqECqN2u90TqGAoVGrJzEQah0xL5`}>
    //             <Button variant='contained'>Previous</Button>
    //           </Link>
    //           <Link to={`https://app.ticketmaster.com/discovery/v2/events/${id+1}.json?apikey=dARIuqECqN2u90TqGAoVGrJzEQah0xL5`}>
    //             <Button variant='contained'>Next</Button>
    //           </Link>
    //         </div>
    //     )
    //   }
    return (
        <>
            <h1>Events</h1>
            <h4>Page {id}</h4>
            <ol>
                {
                    events.map((event, i) => (
                            <>
                            <Link key={event.id} to={`/events/${event.id}`}>
                                {event.name}
                            </Link>
                            <br/>
                            </>
                        )
                    )
                }
            </ol>
        </>
    )
}
