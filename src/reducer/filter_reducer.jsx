const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);

            let maxPrice = Math.max(...priceArr);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }
            }
        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false,
            }
        case "GET_SORT_VALUE":
            
            return {
                ...state,
                sorting_value: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }

                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z") {
                    return a.title.localeCompare(b.title);
                }

                if (sorting_value === "z-a") {
                    return b.title.localeCompare(a.title);
                }
            };

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            };

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, price } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    
                    return curElem.title.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category == category;
                })
            }
            
            if (price == 0) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.price == price
                })
            }
            else {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.price <= price
                })
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            }
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0,
                }
            }

        default:
            return state;
    }
}

export default filterReducer 