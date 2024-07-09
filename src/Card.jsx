/* eslint-disable react/prop-types */
import './Card.css'

const Card = (props) => {

    const { items } = props;
  return (

    <div className="card">{
        items.map((item)=>(
            <div className="card-div" key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.email}</p>
            </div>
        ))
    }</div>
  )
}

export default Card