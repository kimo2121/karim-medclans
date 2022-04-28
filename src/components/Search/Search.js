import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { ReactComponent as Magnifier } from "../../assets/Icons/magnifier.svg";
import { ReactComponent as Arrow } from "../../assets/Icons/arrow.svg";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Search = () => {
  let domNode = useClickOutside(() => {
    setDropdown(false);
  });

  const [dropdown, setDropdown] = useState(false);
  const [invoices, setInvoices] = React.useState(false);
  const [uninsured, setUninsured] = React.useState(false);
  const [total, setTotal] = React.useState(false);
  const [select, setSelected] = React.useState("");

  const handleInvoices = (event) => {
    setInvoices(event.target.checked);
  };
  const handleUninsured = (event) => {
    setUninsured(event.target.checked);
  };
  const handleTotal = (event) => {
    setTotal(event.target.checked);
  };
  const selectHandler = (text) => {
    setSelected(text);
  };

  return (
    <div className="search-component">
      <div className="search">
        <input type="text" placeholder="Search medical bills" />
        <p>
          <Magnifier />
        </p>
      </div>
      <div className="sort">
        <div className="sort-bar">
          <span>Sort by: Total cost - low to high</span>
          <div onClick={() => setDropdown(true)} className="sort-icon">
            <Arrow />
          </div>
        </div>
        <div className="sort-check">
          <label class="container">
            <input
              type="checkbox"
              onChange={handleInvoices}
              checked={invoices}
            />
            <span class="checkmark">Bills with invoices</span>
          </label>
          <label class="container">
            <input
              type="checkbox"
              onChange={handleUninsured}
              checked={uninsured}
            />
            <span class="checkmark">Uninsured</span>
          </label>
          <label class="container">
            <input type="checkbox" onChange={handleTotal} checked={total} />
            <span class="checkmark">Total charges available</span>
          </label>
        </div>
        {dropdown && (
          <div onClick={() => setDropdown(true)} className="dropdown">
            <div ref={domNode} className="dropdown-content">
              <p
                className={
                  select === "Hello" ? "drop-member highlight" : "drop-member"
                }
                onClick={() => selectHandler("Hello")}
              >
                Best featured
              </p>
              <p
                className={
                  select === "Hi" ? "drop-member highlight" : "drop-member"
                }
                onClick={() => selectHandler("Hi")}
              >
                Total cost - low to high
              </p>
              <p
                className={
                  select === "Hey" ? "drop-member highlight" : "drop-member"
                }
                onClick={() => selectHandler("Hey")}
              >
                Total cost - high to low
              </p>
              <p
                className={
                  select === "Hek" ? "drop-member highlight" : "drop-member"
                }
                onClick={() => selectHandler("Hek")}
              >
                Medical condition
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
