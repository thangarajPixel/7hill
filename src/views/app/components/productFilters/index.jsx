import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  Link,
  useParams,
  // useNavigate,
  // useSearchParams,
} from "react-router-dom";
import { RiFilter2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { API_URL } from "../../../../redux/constant/ApiRoute";
import axios from "axios";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../../../redux/features/filterProducts";

const ProductFilters = ({ menu }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { products } = useParams();
  const [isActive, setActive] = useState("false");
  // const [searchParams, setSearchParams] = useSearchParams();
  const ToggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [products]);

  const getFilterProduct = (e) => {
    var array = [];
    var checkboxes = document.querySelectorAll(".filter_brand:checked");
    console.log(checkboxes);
    for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value);
    }

  };
  const getProducts = () => {
    return axios
      .post(API_URL.PRODUCT_FILTER, {
        category: products,
        // filter_id: filterId,
      })
      .then((res) => {
        dispatch(filterProducts(res.data.products));
        // console.log(res.data.products);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h5 className="heading5">
        <Link className="product-filter-btn" onClick={ToggleClass}>
          <RiFilter2Fill /> Filters
        </Link>
      </h5>
      {menu && menu.filter_menus?.length !== 0 ? (
        <>
          <Form
            className={isActive ? "product-filters" : "active product-filters"}
          >
            <Link className="close-btn" onClick={ToggleClass}>
              <IoMdClose />
            </Link>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`}>
                {menu.filter_menus?.map((item, i) => {
                  return (
                    <div key={i}>
                      <h6 className="heading6 text-orange">{item.title}</h6>
                      {item?.attributes_fields.map((item, i) => {
                        return (
                          <Form.Check
                            key={i}
                            type={type}
                            label={item.attribute_values}
                            id={item.attribute_values}
                            value={item.id}
                            className="filter_brand"
                            // checked={ (brandSelected.includes(item.slug) ? 'checked' : '')}
                            onChange={() => getFilterProduct(item.id)}
                          />
                        );
                      })}
                      {i !== menu?.filter_menus.length - 1 && (
                        <div className="divider"></div>
                      )}
                    </div>
                  );
                })}
                <button className="clear-btn">Clear All</button>
              </div>
            ))}
          </Form>
          <div className={isActive ? "backdrop" : "active backdrop"}></div>
        </>
      ) : (
        <>
          <small>No Filters Available</small>
        </>
      )}
    </>
  );
};

export default ProductFilters;
