import styled from "styled-components";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useProductContext } from "./context/Productcontext";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddToCart from "./components/AddToCart";
import { Mosaic } from "react-loading-indicators";

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()
  const { id } = useParams();
  const {
    id: alias,
    title,
    company,
    price,
    description,
    category,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`)
  }, [])

  if (isSingleLoading) {
    return (
      <Loader>
    <div className="page_loading"><Mosaic color="black" size="large" text="loading" textColor="" /></div>
    </Loader>
    )
  }

  return (
    <Wrapper>
      
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_image">
            <div className="grid grid-four-column">
              <img src={image} alt="image" />
            </div>
          </div>
          <div className="product-data">
            <h2>{title}</h2>
            <p className="product-data-price">
              MRP:
              <del>
                $<FormatPrice price={price * 1.5}/>
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day: $<FormatPrice price={price}/>
            </p>
            <p>
              {description}
            </p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Fast Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>15 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <hr />
            <AddToCart product={singleProduct} />
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_image{
      margin-left: 65%;
    width: 161%;
    height: 48%;
    // display: flex;
    align-items:center;
  }
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
    p{
    color:black;
    }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      gap: 55px;
      // justify-content: space-between;
      align-items: center;
      // border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
      color:black;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 100%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
   
    

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;

    .product_image{
        margin-left: -2%;
        width: 45%;
        height: 113%;
  }
    h2{
      font-size: 2.4rem;
    }
  }
`;
const Loader = styled.section`
   .page_loading {
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default SingleProduct;
