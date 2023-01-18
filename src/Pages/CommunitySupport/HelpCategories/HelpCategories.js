import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HelpCategories = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("/HelpCategories.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="my-6">
      <fieldset className="w-full text-gray-100  lg:flex justify-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-gray-100"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            name="Search"
            placeholder=" Start search..."
            className="w-full py-2 pl-10 text-sm rounded-full sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-violet-400"
          />
        </div>
      </fieldset>
      <p className="text-center text-white my-6">Or choose an option </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((d) => (
          <Link to={`/categories/:${d._id}`}>
            {" "}
            (
            <div className=" w-80 bg-gradient-to-r from-accent to-secondary shadow-2xl border border-lime-500">
              <figure className="px-10 pt-10">
                <img
                  src={d.picture}
                  alt="Shoes"
                  className="rounded-xl w-24 mx-auto"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{d.title}</h2>
                <p>{d.about}</p>
              </div>
            </div>
            )
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HelpCategories;
