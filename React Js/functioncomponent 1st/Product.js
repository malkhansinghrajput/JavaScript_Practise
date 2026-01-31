import './productStyle.css'

const Product = (props) => {
    return (
        <div className="flexdemo">
            <div className="gallery">
                <a href={props.imgURL}>
                    <img src={props.imgURL} />
                </a>
                <div style={{textAlign:'center'}}>
                    <h3>{props.brand}</h3>
                    <h3>{props.variant}</h3>
                    <div className="demo">
                        <a href="" title="Men Solid Mandarin Collar Cotton Blend Black T-Shirt"
                            style={{fontSize: 18,color: 'gray'}}>{props.desc}
                        </a>
                    </div>
                    <h3>&#8377;{props.sp} <small><del>&#8377;{props.mrp}</del></small> <span style={{color: 'green'}}>{props.discount}% Off</span></h3>
                    <h3 style={{color: 'gray'}}>Size:{props.size}</h3>
                    <button>Add to Cart</button>&nbsp;&nbsp;<button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product
