import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import {
  Link,
  useNavigate,
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
import { useLocation } from "react-router";
import { useMemo } from "react";

const ProductFilters = ({ menu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = useParams();
  const [isActive, setActive] = useState("false");
  // const [searchParams, setSearchParams] = useSearchParams();
  const ToggleClass = () => {
    setActive(!isActive);
  };

  const searchParams = new URLSearchParams(location.search);

  const getProducts = (filter_id = '') => {
    return axios
      .post(API_URL.PRODUCT_FILTER, {
        category: products,
        filter_id: filter_id,
      })
      .then((res) => {
        dispatch(filterProducts(res.data.products));
      })
      .catch((err) => console.error(err));
  };

  useMemo(() => {
    getProducts();
    // eslint-disable-next-line
  }, [products]);

  const getFilterProduct = (e) => {

    const SUrl = "/home-furniture/cots-home-furniture/";

    var array = [];
    var checkboxes = document.querySelectorAll(".filter_input:checked");

    for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value);
    }

    if (array.length > 0) {
      let checkedAvailabilityString = array.join("-");
      searchParams.set("filter", checkedAvailabilityString);
    } else {
      searchParams.delete("filter");
    }

    var filter_data = searchParams.toString();
    filter_data = filter_data.split("=")
    filter_data = filter_data[1].toString();

    navigate(SUrl + '?' + searchParams.toString());
    getProducts(filter_data);

  };

  const clearFilter = () => {
    const SUrl = "/home-furniture/cots-home-furniture/";
    searchParams.delete("filter");
    navigate(SUrl);
    getProducts();
  }



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
                          <div class="filter_brand form-check">
                            <input type="checkbox" id={item.attribute_values} class="form-check-input filter_input" value={item.id} onChange={() => getFilterProduct(item.id)} />
                            <label title="" for={item.attribute_values} class="form-check-label">{item.attribute_values}</label>
                          </div>

                        );
                      })}
                      {i !== menu?.filter_menus.length - 1 && (
                        <div className="divider"></div>
                      )}
                    </div>
                  );
                })}
                <button type="button" className="clear-btn" onClick={clearFilter}>Clear All</button>
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
