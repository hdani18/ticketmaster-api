import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Venues() {
    const {id} = useParams();
    const [venues,setVenues] = useState([]);
    
    useEffect(()=>{
        console.log('SHOW useEffect fired of venues');
        async function getData(){
            try{

                const {data: {_embedded: {venues: venue}, page: page, _links: links}} = await axios.get(`https://app.ticketmaster.com/discovery/v2/venues.json?&apikey=dARIuqECqN2u90TqGAoVGrJzEQah0xL5&page=${id}`, {"Content-Type": "application/json"});
                console.log(venue)
                setVenues(venue);
            } catch(e){
                console.log(e);
            }
            
        }
        getData();

    },[id])
    
    return (
        <div>
            <div>Venues</div>
            <h4>Page {id}</h4>
            
                <ol>
                {
                    venues.map((venue,i)=>(
                        <>
                            <li key={venue.id}>
                            {venue.name}
                            </li>       
                        </>
                        
                ))
                }
                </ol>
            
        </div>
        
    )
}
