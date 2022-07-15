import Header from '../../components/Header';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProductType } from '../../util/types';
const mod = require('../../util/products')

/*
export async function getStaticProps({ params }){
    const productData = getPostData(params.id);
    return {
        props: {
            productData,
        },
    };
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}
*/


export default function Product(){
    const [product, setProduct] = useState({} as ProductType)
    const router = useRouter();
    const id = router.query.id

    useEffect(() => {
        setProduct(mod.products[Number(id)])
    })

    return(
        <> 
            <h1>Product Name: {product.name}</h1>
            <img
                src={product.imgSrc} // Route of the image file // currently a fake file src
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt={product.name}
            />
            <p>Description of product: {product.desc}</p>
        </>
    );
}