export const API_URL = {
    PRODUCT_ENQUIRY                     : `${process.env.REACT_APP_BASE_URL}/product-enquiry`,
    DEALERS                             : `${process.env.REACT_APP_BASE_URL}/dealers`,
    CAREER                              : `${process.env.REACT_APP_BASE_URL}/career`,
    CONTACT_US                          : `${process.env.REACT_APP_BASE_URL}/contact-us`,
    CATEGORY                            : `${process.env.REACT_APP_BASE_URL}/get/category`,
    PRODUCTS                            : `${process.env.REACT_APP_BASE_URL}/get/products`,
    PRODUCTS_BY_SLUG                    : `${process.env.REACT_APP_BASE_URL}/get/products/by/slug/product-1`,
    SUBCATEGORY_DETAILS                 : `${process.env.REACT_APP_BASE_URL}/get/subcategory/details`
}
console.log(process.env)