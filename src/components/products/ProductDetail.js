import styled from "styled-components";

const BlueDiv = styled.div`
  background-color: aqua
`
const SumImg = styled.img`
  height: 12em;
  width: 12em;
`

const ProductDetail = ({ product }) => {

  const { pno, pname, price, imgFile } = product

  return (
    <li>
      <BlueDiv>PNO   : {pno}</BlueDiv>
      <div>PNAME : {pname}</div>
      <div>PPRICE: {price}</div>
      <SumImg src={require(`../../images/${imgFile}`)} alt="#"></SumImg>
      {/* <SumImg src={imgFile} alt="#"></SumImg> */}
      <button>BUY</button>
    </li>
  );
}

export default ProductDetail;