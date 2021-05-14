import  React,{useState,useEffect} from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {                           
    const [hobby,setHobby]= useState([]);
    useEffect(() => 
    {
     async function fetchData() {
         const req=await axios.get("tinder/cards"); //axios is use to connect the http request
         setHobby(req.data);

     }
     fetchData();
    }, [ ])

        const swiped=(Direction,nameDeleted)=>{
            console.log("is leaving the screen"+{nameDeleted});
           // setLastDirection(Direction);
        };
        const outOfFrame=(hobby)=>{
            console.log({hobby}+"just left the screen");
        };
    return (
        <div className="Tinder_Cards">
            <div className="CardsContainer">
          {hobby.map((hobby)=>  <TinderCard className="swipe" key={hobby.name}  // tindercard--similar to h1 with some properties
          preventSwipe={["up","down"]}
           onSwipe={(dir)=>swiped(dir,hobby.name)}
            onCardLeftScreen={()=>outOfFrame(hobby.name)}>
               <div  style={{backgroundImage:`url(${hobby.link})`}}

                   className="card">
                    
             
                     <h3> {hobby.name}</h3>
               </div>
              
     </TinderCard>
          )}
           </div>
         </div>
    )
}

export default TinderCards


