import { colorCode, colors } from '../../utils/ColorCode'
import { ReactComponent as Logo } from '../../data/logo.svg';
import './ProductCard.css'
import Tooltip from '../tooltip/Tooltip';
import Checkbox from '../inputs/checkbox/Checkbox';
import { IProduct } from '../../models/IProduct';
import RadioButton from '../inputs/radioButton/RadioButton';
import ToggleSwitch from '../inputs/toggleSwitch/ToggleSwitch';
import { useState } from 'react';
import axios from 'axios';

interface IProductCardProps {
    product: IProduct;
}

export default function ProductCard(props: IProductCardProps) {

    const [product, setProduct] = useState(props.product)

    const textColor = product.selectedColor === 'beige' || product.selectedColor === 'white' ? '#3B755F' : '#F9F9F9'

    let updateColor = (newSelectedColor: string) => {
        axios.put(`http://localhost:3001/product/${product._id}`, { ...product, selectedColor: newSelectedColor })
            .then(res => {
                const product: IProduct = res.data.product;
                setProduct(product)
            })
    }

    let updateLinked = (linked: boolean) => {
        axios.put(`http://localhost:3001/product/${product._id}`, { ...product, linked: linked })
            .then(res => {
                const product: IProduct = res.data.product;
                setProduct(product)
            })
    }

    let updateActive = (active: boolean) => {
        axios.put(`http://localhost:3001/product/${product._id}`, { ...product, active: active })
            .then(res => {
                const product: IProduct = res.data.product;
                setProduct(product)
            })
    }

    return (
        <div className='container'>
            <div className='header' style={{ backgroundColor: colorCode[product.selectedColor] }}>
                <Logo fill={textColor} />
                <div style={{ color: textColor }} className='headerText'>
                    <p style={{ fontSize: '12.406px' }}>This product {product.action}</p>
                    <p style={{ fontSize: '17.8647px' }}>{product.amount} {product.type}</p>
                </div>
            </div >
            <div className='details' style={{ zIndex: 0 }}>
                <div>Link to Public Profile<Tooltip
                    text='This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.'
                    actionText='View Public Profile'
                    actionLink='https://www.getgreenspark.com/' />
                </div>
                <Checkbox onChange={updateLinked} value={product.linked} />
            </div>
            <div className='details'>
                <p>Badge colour</p>
                <div>
                    {colors.map(color => (
                        <RadioButton key={color} backgroundColor={color} selectedColor={product.selectedColor} name={product._id + 'colour'} onChange={updateColor} />
                    ))}
                </div>
            </div>
            <div className='details'>
                <p>Active badge</p>
                <ToggleSwitch onChange={updateActive} value={product.active} />
            </div>
        </div>
    )
}