// import { useRouter } from 'next/router';
// import { products } from '../../../../shared/data';

// export default function ProductDetails() {
//   const router = useRouter();
//   const { id } = router.query;

//   // Find product by ID
//   const product = products.find((item) => item.id === id);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className='container mx-auto my-10'>
//       <h1 className='text-3xl font-bold'>{product.title}</h1>
//       <p className='mt-4'>{product.description}</p>
//       <p className='mt-2 text-xl'>Price: {product.price}৳</p>
//       <p className='mt-1 text-lg'>Available Quantity: {product.quantity}</p>

//       <div className='mt-6'>
//         <button className='px-4 py-2 bg-blue-600 text-white rounded'>Add to Cart</button>
//         <button className='ml-4 px-4 py-2 bg-green-600 text-white rounded'>Buy Now</button>
//       </div>
//     </div>
//   );
// }
