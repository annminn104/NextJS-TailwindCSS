import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../../services/graphql.service";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container mx-auto px-4 mb-4 lg:px-10 lg:mb-4">
        <div className="border-b w-full inline-block border-cyan-600 py-8">
          <div className="md:float-left block">
            <Link href="/">
              <span className="cursor-pointer font-bold text-4xl text-cyan-600">Blog</span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${encodeURIComponent(category.slug)}`}>
                <span className="md:float-right mt-2 align-middle text-cyan-600 ml-4 font-semibold cursor-pointer">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Header };
