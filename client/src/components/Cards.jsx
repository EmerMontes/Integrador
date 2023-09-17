import Card from './Card';
import '../styles/card.css'

export default function Cards(props) {
   return <div className='cards'>
      {props.characters.map(card => {
         return(
         <Card
         key={card.id}
         id={card.id}
         name={card.name}
         status={card.status}
         species={card.species}
         gender={card.gender}
         origin={card.origin}
         location={card.location}
         image={card.image}
         onClose={props.onClose}
         />)
       })}
   </div>;
}
