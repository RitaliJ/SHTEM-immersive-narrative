import Header from '../../components/Header';
import Image from 'next/image'

export default function Product(){
    return(
        <> 
            <Header></Header>
            <h1>Product Name</h1>
            <Image
                src="/images/profile.jpg" // Route of the image file // currently a fake file src
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            <p>Description of product: lorem ipsum dolor</p>
        </>
    );
}

export async function getStaticPaths(){
      // Return a list of possible value for id
}

export async function getStaticProps({ params }){
// Fetch necessary data for the product using params.id
}