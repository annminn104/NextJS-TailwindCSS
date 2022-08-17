import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../../services/graphql.service";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-4 font-semibold border-b pb-4 text-am-mcolor">Categories</h3>
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${encodeURIComponent(category.slug)}`}>
            <a className={`cursor-pointer block ${index === categories.length - 1 ? "border-b-0" : "border-b"} pb-3 mb-3`}>{category.name}</a>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export { Categories };
