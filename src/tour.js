//import React from 'react';
import React, {useState} from 'react';
//import Tour from './tour';

//const List = ({people})=>{
//console.log({people})
//    return(
//        <div>
//             {people.map((person)=>{
//             const {id,name,age,image}=person;
//             return(
//          
//             <article key={id}>
//           
//             <div>
//             <h4>{name}</h4>
//             <h4>{age}</h4>
//             </div>
//            
//             </article>
////        
//        
//             )
//            })}
//        
//        </div>
//    );
//    
//}


//function List ({people}){
//    
//    return(
//        <div>
//             {people.map((person)=>{
//             const {id,name,age,image}=person;
//             return(
//          
//             <article key={id}>
//           
//             <div>
//             <h4>{name}</h4>
//             <h4>{age}</h4>
//             </div>
//            
//             </article>
////        
//        
//             )
//            })}
//        
//        </div>
//    );
//    
//}


//function List({people}){
//     
//    const [readmore,setReadmore]=useState(false)
//    
//    return(
//             
//        <div>
//     
//    {people.map((person)=>{
//     const {id,name,age,image,read}=person;
//        if(person.id !=6){
//        return(
//        <article>
//        <h1>{id}</h1>
//        <h1>{name}</h1>
//        <h1>{age}</h1>
//        <h1>{image}</h1>
//        <h1>{readmore ? read : `${read.substring(0,9)}...` }</h1>
//            <a onClick={(id)=>setReadmore(!readmore)} >{readmore ? 'read less' :'read more'}</a>
//        </article>
//    
//        )
//    }
//    })}
//    </div>
//    )
//
//}


//const Tour=({id, age, image, name, read, removeTour})=>{
//    const [readmore,setReadmore]=useState(false)
//    return(
//        <div>
//        <h1>{id}</h1>
//        <h1>{name}</h1>
//        <h1>{age}</h1>
//        <h1>{image}</h1>
//        <h1>{readmore ? read : `${read.substring(0,9)}...` }</h1>
//            <a onClick={(id)=>setReadmore(!readmore)}>{readmore ? 'read less' :'read more'}</a>
//            <button onClick={()=>removeTour(id)}> clear </button>
//        </div>
//    );
//   
//    
//}


//export default Tour;