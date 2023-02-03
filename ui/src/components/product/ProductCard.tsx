import { colorCode, colors } from '../../utils/ColorCode'
import { ReactComponent as Logo } from '../../data/logo.svg';
import './ProductCard.css'
import Tooltip from '../tooltip/Tooltip';

export default function ProductCard(product: any) {

    const textColor = product.selectedColor === 'beige' || product.selectedColor === 'white' ? '#3B755F' : '#F9F9F9'
    return (
        <div className='container'>
            <div className='header' style={{ backgroundColor: colorCode[product.selectedColor] }}>
                <Logo fill={textColor} />
                <div style={{ color: textColor }} className='headerText'>
                    <p style={{ fontSize: '12.406px' }}>This product {product.action}</p>
                    <p style={{ fontSize: '17.8647px' }}>{product.amount} {product.type}</p>
                </div>
            </div >
            <div className='details'>
                <p>Link to Public Profile<Tooltip
                    text='This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.'
                    actionText='View Public Profile'
                    actionLink='https://www.getgreenspark.com/' />
                </p>
                <input type="checkbox" name="myCheckbox" />
            </div>
            <div className='details'>
                <p>Badge colour</p>
                {colors.map(color => (
                    <input type="radio" name="myRadio" value={color} key={color} style={{ backgroundColor: color }} />

                ))}
            </div>
            <div className='details'>
                <p>Active badge</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}