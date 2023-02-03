import './ProductItem.css'

export default function ProductItem(product: any) {
    const colorCode: { [key: string]: string } = {
        'blue': '#2E3A8C',
        'green': '#3B755F',
        'beige': '#F2EBDB',
        'white': '#2E3A8C',
        'black': '#2E3A8C'
    };

    const textColor = product.selectedColor === 'beige' || product.selectedColor === 'white' ? '#3B755F' : '#F9F9F9'
    return (
        <div className='productCard'>
            <div className='header' style={{ backgroundColor: colorCode[product.selectedColor] }}>
                <div style={{ color: textColor }}>
                    This product {product.action}
                    <br />
                    {product.amount} {product.type}
                </div>
            </div >
            <p>Link to Public Profile</p>
            <p>Badge colour</p>
            <p>Active badge</p>
        </div>
    )
}