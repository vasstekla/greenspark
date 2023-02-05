import axios from 'axios'
import { useEffect, useState } from 'react'
import { IProduct } from '../../models/IProduct'
import ProductCard from './ProductCard'
import './ProductPage.css'

export default function ProductPage() {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        axios.get(`https://getgreenspark.mocklab.io/product-widgets`)
            .then(res => {
                const products: IProduct[] = res.data;
                setProducts(products);
            })
    }, [])

    return (
        <>
            <h3 className='title'>Per product widgets</h3>
            <div className='productContainer'>
                {products.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
        </>
    )
}