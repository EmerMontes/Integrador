import Card from './Card';

export default function Cards(props) {
   //const [prop] = [props.characters]
   //console.log(props)

   return <div>
      {props.characters.map(card => {
         return(
         // <div id={card.id}>
         // <button onClick={card.onClose}>X</button>
         // <h2>{card.name}</h2>
         // <h2>{card.status} </h2>
         // <h2>{card.species}</h2>
         // <h2>{card.gender}</h2>
         // <h2>{card.origin?.name}</h2>
         // <img src={card.image} alt='' />
         // </div>
         <Card 
         key={card.id}
         id={card.id}
         name={card.name}
         status={card.status}
         species={card.species}
         gender={card.gender}
         origin={card.origin}
         image={card.image}
         onClose={props.onClose}
         />)
           })}

   </div>;
}
