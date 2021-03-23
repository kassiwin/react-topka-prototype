import React, {useEffect, useState} from 'react';
import {CategoriesItem, ProductsByCategory} from "./index";
import {API} from "../helpers";

const ListProducts = ({cart, categories, addToCart, removeFromCart}) => {
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [productWithCategory, setProductWithCategory] = useState([]);

    const productWithCategoryRefs = {};
    for (const collection of productWithCategory) {
        productWithCategoryRefs[collection.category.id] = React.createRef();
    }

    const getProductsCategory = (products) => {
        const sampleProduct = products[0];
        return categories.filter((category) => category.id === sampleProduct.category)[0];
    };

    const fetchProductByCategory = () => {
        const paths = categories.map(({id}) => API.get(`product/?category=${id}`));
        Promise.all([...paths]).then((productByCategory) => {
            const productWithCategory = productByCategory.map((products) => {
                const productsCategory = getProductsCategory(products);
                return {products: products, category: productsCategory};
            });
            setProductWithCategory(productWithCategory);
        });
    };

    useEffect(() => {
        fetchProductByCategory();
        // eslint-disable-next-line
    }, [categories]);

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
        productWithCategoryRefs[category.id].current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    };

    return (
        <div>
            <div className="bg-black-dark relative w-full px-4 mx-auto h-16 sticky top-0 bg-gray-200 overflow-x-auto py-2 flex flex-row cursor-move mb-6 z-10">
                {categories.map((category) => {
                    return (
                        <CategoriesItem
                            key={category.id}
                            category={category}
                            isCurrent={currentCategory.id === category.id}
                            handleCategoryClick={() => handleCategoryClick(category)}
                        />
                    );
                })}
            </div>
            <div className="h-full w-full overflow-y-auto pb-24">
                <div className="flex flex-col w-11/12 mx-auto relative">
                    {productWithCategory.map((collection, index) => {
                        return (
                            <div key={index} className="w-full" ref={productWithCategoryRefs[collection.category.id]}>
                                <ProductsByCategory
                                    cart={cart}
                                    category={collection.category}
                                    products={collection.products}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ListProducts;