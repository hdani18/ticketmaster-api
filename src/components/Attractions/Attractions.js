import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Attractions() {
    const {id} = useParams();
    const [attractions,setAttractions] = useState([]);
    
    useEffect(()=>{
        console.log('SHOW useEffect fired of authentication');
        async function getData(){
            try{

                const {data: {_embedded: {attractions: attrc}, page: page, _links: links}} = await axios.get(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=dARIuqECqN2u90TqGAoVGrJzEQah0xL5&page=${id}`, {"Content-Type": "application/json"});
                // console.log(attrc)
                setAttractions(attrc);
            } catch(e){
                console.log(e);
            }
            
        }
        getData();

    },[id])
    
    return (
        <div>
            <div>Attractions</div>
            <h4>Page {id}</h4>
            
                <ol>
                {
                    attractions.map((attraction,i)=>(
                       
                            <li key={attraction.id}>
                            {attraction.name?attraction.name:"no names"}
                            </li>           
                ))
                }
                </ol>
            
        </div>
        
    )
}
