import ProductDetail from "./ProductDetail";
// import imgCoffee from "../../images/*.jpg"
// import imgCoffee1 from "../../images/c01.jpg"
// import imgCoffee2 from "../../images/c02.jpg"
// import imgCoffee3 from "../../images/c03.jpg"
// import imgCoffee4 from "../../images/c04.jpg"
// import imgCoffee5 from "../../images/c05.jpg"

const ProductList = () => {

  const products = [
    { pno: 1, pname: '상품1', price: 3000, imgFile: 'c01.jpg' },
    { pno: 2, pname: '상품2', price: 5000, imgFile: 'c02.jpg' },
    { pno: 3, pname: '상품3', price: 7000, imgFile: 'c03.jpg' },
    { pno: 4, pname: '상품5', price: 8000, imgFile: 'c04.jpg' },
    { pno: 5, pname: '상품6', price: 9000, imgFile: 'c05.jpg' }
  ]

  return (
    <ul className="productList">
      {products.map(p =>
        <ProductDetail
          key={p.pno}
          product={p}
        />
      )}
    </ul>
  );
}

export default ProductList;