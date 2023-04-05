import resonance from '../assests/our products/resonance.jpg'
import sealtabs from '../assests/our products/sealtabs.jpg'
import sagarpa from '../assests/our products/sagarpa.jpg'
import itmx from '../assests/our products/itmx.jpg'
import gpvallas from '../assests/our products/gpovallas.jpg'
import gerona from '../assests/our products/gerona.png'
const products = [
    {
        productName:'Sealtabs',
        productDesc:'',
        productImg:sealtabs
    },
    {
        productName:'Resonance',
        productDesc:'',
        productImg:resonance
    },
    {
        productName:'Sagarpa',
        productDesc:'',
        productImg:sagarpa
    },
    {
        productName:'ITMX',
        productDesc:'',
        productImg:itmx
    },{
        productName:'GPO Vallas',
        productDesc:'',
        productImg:gpvallas
    },
    {
        productName:'Gerona',
        productDesc:'',
        productImg:gerona
    }
]

export const Projects = () =>{
   return(
    <div className="products">
        {products.map((product)=>{
            return(
                <div className="product" key={product.productName}>
                    {/* <h4 className='product__name'>{product.productName}</h4>
                    <p className='product__desc'>{product.productDesc}</p> */}
                    <img className='product__image'src={product.productImg} alt="sealtabs info page" />
                </div>
            )
        })}
    </div>
   )
}