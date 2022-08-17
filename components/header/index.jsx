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
      <nav className="bg-am-scolor py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container px-4 lg:px-10 flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="cursor-pointer font-bold text-4xl text-am-mcolor hover:text-pink-600">Blog</a>
          </Link>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
            <ul className="flex flex-col  mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-am-scolor dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/category/${encodeURIComponent(category.slug)}`}>
                    <a className="block py-2 pr-4 pl-3 text-am-mcolor rounded hover:bg-gray-100 md:hover:bg-transparent lg:hover:text-pink-600 lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      {category.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export { Header };
