
export default function Product(props) {
    return(
        <div>
            <div className="imageContainer">
                <img src={props.src} alt="" />
            </div>
            <div className="name">
                <h1>{props.name}</h1>
            </div>
            <div className="country">
                <p>{props.country}</p>
            </div>
        </div>
    )
}