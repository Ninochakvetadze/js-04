import { useEffect, useState } from "react";
import { Loader } from "../../globalComponents";
import { _get } from "../../services";
export function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log(products);
        async function fetchData() {
            const apiData = await _get("https://fakestoreapi.com/products");
            if (apiData.status === 200) {
                console.log(apiData.data);
                setProducts(apiData.data);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Products</h1>
            <div id="products">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index}>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            {/* <a>{product.description}</a> */}
                            <span>{product.price}</span>
                        </div>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}
