import { useEffect, useState } from 'react';
import { IProduct } from '../../models/IProduct';
import { getAllProducts } from '../../service/productService';
import ProductCard from './ProductCard';
import './ProductPage.css';

export default function ProductPage() {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getAllProducts().then(res => {
            const products: IProduct[] = res.data.products;
            setProducts(products.reverse());
        });
    }, []);

    return (
        <div>
            <h3 className='title'>Per product widgets</h3>
            <div className='productContainer'>
                {products.map(product =>
                    <ProductCard key={product._id} product={product} />
                )}
            </div>
        </div>
    );
}