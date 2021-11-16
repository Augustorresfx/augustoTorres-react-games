const Item = ({title, price, genre, thumbnail}) => {

        return (<>
                <div className="card mb-3" id="card" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={thumbnail} className="img-fluid rounded-start" id="img-card" alt={title} />
                        </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">Precio: {price}</p>
                        <span className="badge-bg-secondary">Género: {genre}</span>
                    </div>
                </div> 
                </div>
                </div> 
</>
        );
    }

export default Item;