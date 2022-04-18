import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from "framer-motion"

function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    const getCuisine = async (name) =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9212a03ad5d44d4daa455527c18dced6&cuisine=${name}`)
        const data = await api.json()
        setCuisine(data.results)
    }   
    let params = useParams()
    useEffect( ()=>{
        getCuisine(params.type)
    },[params.type])
    return (
        <motion.div 
        className='cuisine-container'
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{ duration: .5}}
        >
            {cuisine.map((item)=>{
                return(
                <Card>
                    <Link to={"/recipe/" + item.id}>
                        <p>{item.title}</p>
                        <img src={item.image} alt={item.title} />
                        <Gradient/>
                    </Link>
                </Card>
                )
            })}
        </motion.div>
    );
}
const Card = styled.div`
    min-height: 15rem;
    overflow: hidden;
    position:relative;
    border-radius: 2rem;

 p {
     position: absolute;
     bottom : 10%;
     left: 50%;
     transform: translate(-50%,0%);
     z-index:10;
     color:white;
     text-align: center;
     display:flex;
     justify-content: center;
     width:100%;
     font-weight: bold;
     font-size: .8rem
 }   
 img {
     border-radius: 2rem;
     width: 100%;
     height:100%;
     object-fit:cover;
     position: absolute;
 }
`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
export default Cuisine;