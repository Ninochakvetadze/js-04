import { useEffect, useState } from "react";
import { _get } from "services";
export function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const apiData = await axios.get(
                "https://fakestoreapi.com/products"
            );
            if (apiData.status === 200) {
                console.log(api.data);
                setProducts(apiData.data);
            }
        }
    }, []);
    return (
        <div>
            <h1>Products</h1>
            <div id="products">
                {products.map((product, index) => (
                    <div key={index}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        {/* <a>{product.description}</a> */}
                        <a>{product.price}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}