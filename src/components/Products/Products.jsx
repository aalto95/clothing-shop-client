import s from './Products.module.css'

const Products = (props) => {
    console.log(props.groceries)
    return (
        <div className={s.productContainer}>
            {props.groceries.map((grocery) => {
                return (
                    <div className={s.productImage} style={{backgroundImage: `url(${grocery.img})`}}>
                        <p>{grocery.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Products