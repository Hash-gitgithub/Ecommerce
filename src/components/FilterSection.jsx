import React from 'react'
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import FormatPrice from "../Helpers/FormatPrice"
import {Button} from "../styles/Button"

function FilterSection() {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr]
    });
    
      return (newVal = ["all", ...new Set(newVal)])
    
  }

  const categoryOnlyData = getUniqueData(all_products, "category");

  return (
    <Wrapper>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type='button'
                name="category"
                value={curElem}
                onClick={updateFilterValue}>
              {curElem}
              </button>)
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          $<FormatPrice price={price}/>
        </p>
        <input type="range"
        name='price'
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={updateFilterValue} />
      </div>

      <div className="filter-clear">
        <Button className = 'btn' onClick ={clearFilters}>
          Clear Filters</Button>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
    .filter_price p{
    color:black;
}

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .filter-category {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      gap: 1.4rem;
    }
  }
    .filter_price {
    display: flex;
    gap: 23px;
    flex-direction: row;
}
    .filter_price p{
    margin-left: -24px;
    margin-right: -22px;
    padding: 14px;
}
    .filter-clear{
    display:flex;
    }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 0;

  h3 {
    font-weight: bold;
  }
}

`;


export default FilterSection