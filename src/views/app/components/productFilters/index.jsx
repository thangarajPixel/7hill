import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { RiFilter2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const ProductFilters = ({ menu }) => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <h5 className="heading5">
        <Link className="product-filter-btn" onClick={ToggleClass}>
          <RiFilter2Fill /> Filters
        </Link>
      </h5>
      <Form className={isActive ? "product-filters" : "active product-filters"}>
        <Link className="close-btn" onClick={ToggleClass}>
          <IoMdClose />
        </Link>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`}>
            {menu?.map((item, i) => {
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
                      />
                    );
                  })}
                  {i !== menu.length-1 && <div className="divider"></div>}
                </div>
              );
            })}
            <button className="clear-btn">Clear All</button>
          </div>
        ))}
        {/* {["checkbox"].map((type) => (
          <div key={`default-${type}`}>
            <h6 className="heading6 text-orange">Bed Size</h6>
            <Form.Check type={type} label={`Single`} id={`single`} />
            <Form.Check type={type} label={`Queen`} id={`queen`} />
            <Form.Check type={type} label={`King`} id={`king`} />
            <Form.Check type={type} label={`Super King`} id={`superking`} />
            <div className="divider"></div>
            <h6 className="heading6 text-orange">Storage Type</h6>
            <Form.Check type={type} label={`No Storage`} id={`nostorage`} />
            <Form.Check type={type} label={`Side Storage`} id={`sidestorage`} />
            <Form.Check
              type={type}
              label={`Hydraulic Storage`}
              id={`hydraulicstorage`}
            />
            <div className="divider"></div>
            <h6 className="heading6 text-orange">Finishes</h6>
            <Form.Check type={type} label={`Natural`} id={`natural`} />
            <Form.Check type={type} label={`Dark Walnut`} id={`darkwalnut`} />
            <Form.Check type={type} label={`Light Walnut`} id={`lightwalnut`} />
            <Form.Check type={type} label={`Rosewood`} id={`rosewood`} />
            <button className="clear-btn">Clear All</button>
          </div>
        ))} */}
      </Form>
      <div className={isActive ? "backdrop" : "active backdrop"}></div>
    </>
  );
};

export default ProductFilters;
