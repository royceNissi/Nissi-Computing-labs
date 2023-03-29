import cwx from '../assests/our products/cwx.png'
import resonance from '../assests/our products/resonance.png'
import sealtabs from '../assests/our products/sealtabsInfo.png'
import { Whatyouget } from '../components/Whatyouget';
const products = [
    {
        productName:'Sealtabs',
        productDesc:'',
        productImg:sealtabs
    },
    {
        productName:'CWX',
        productDesc:'',
        productImg:cwx
    },
    {
        productName:'Resonance',
        productDesc:'',
        productImg:resonance
    },
]
export const Work=()=>{
    return(
        <>
            <h2>Our Work</h2>
            <p>
                We are proud to offer products that are the result of extensive research, designed to cater to wide range of industries with complex problems. 
            </p>
            <p>
                Our- real-time user-based interactive and reactive products are specifically crafted to provide specific,tailored solutions.
            </p>
            <div className="products">
                {products.map((product)=>{
                    return(
                        <div className="product" key={product.productName}>
                            <h2 className='product__name'>{product.productName}</h2>
                            <p className='product__desc'>{product.productDesc}</p>
                            <img className='product__image'src={product.productImg} alt="sealtabs info page" 
                            width='200px'/>
                        </div>
                    )
                })}
            </div>
            <Whatyouget/>
        </>
    )
}