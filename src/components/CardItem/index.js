import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
          <img className="card-img" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default Card
