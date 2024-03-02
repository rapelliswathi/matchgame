import './index.css'
const ImageCard = props => {
  const {imageDetails, clickImage} = props
  const {id, imageUrl, category} = imageDetails

  const onClickImageCard = () => {
    clickImage(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="image-btn" onClick={onClickImageCard}>
        <img className="image-icon" src={imageUrl} alt={category} />
      </button>
    </li>
  )
}
export default ImageCard
