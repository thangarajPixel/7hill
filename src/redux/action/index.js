const PRODUCT_CATEGORY = "PRODUCT_CATEGORY";

const productCategoryAction = (data) => {
  return {
    type: PRODUCT_CATEGORY,
    payload: data,
  };
};

export default productCategoryAction;
