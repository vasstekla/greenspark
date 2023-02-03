import { IProduct } from '../../models/IProduct'
import ProductCard from './ProductCard'
import './ProductPage.css'

export default function ProductPage() {
    const products: IProduct[] = [
        {
            "id": 1,
            "type": "plastic bottles",
            "amount": 100,
            "action": "collects",
            "active": true,
            "linked": false,
            "selectedColor": "blue"
        },
        {
            "id": 2,
            "type": "trees",
            "amount": 10,
            "action": "plants",
            "active": false,
            "linked": true,
            "selectedColor": "green"
        },
        {
            "id": 3,
            "type": "carbon",
            "amount": 100,
            "action": "offsets",
            "active": false,
            "linked": false,
            "selectedColor": "beige"
        }
    ]

    return (
        <>
            <h3 className='title'>Per product widgets</h3>
            <div className='productContainer'>
                {products.map(product =>
                    <ProductCard {...product} key={product.id} />
                )}
            </div>
        </>
    )
}