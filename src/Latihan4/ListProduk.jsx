import frameworkData from "./products.json";
import { useState } from "react";

export default function List() {
  const [dataForm, setDataForm] = useState({
    searchTitle: "",
    selectedTag: "",
    searchBrand: "",
    /*Tambah state lain beserta default value*/
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const _searchTitle = dataForm.searchTitle.toLowerCase();
  const _searchBrand = dataForm.searchBrand.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.title.toLowerCase().includes(_searchTitle) ||
      framework.description.toLowerCase().includes(_searchTitle);
    const matchesSearch2 =
      framework.brand.toLowerCase().includes(_searchBrand) ||
      framework.description.toLowerCase().includes(_searchBrand);
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;
    return matchesSearch && matchesSearch2 && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div>
        {"★".repeat(fullStars)}
        {halfStar && "✮"}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };
  return (
    <>
      <div className=" p-4 mt-10 ml-50 mr-50 rounded-lg shadow bg-red-100">
        <h1 className="text-center text-xl">CHOOSE YOURS!</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          <input
            type="text"
            name="searchTitle"
            placeholder="Search Title..."
            className="w-full p-2 border border-gray-900 rounded mb-4"
            value={dataForm.searchTitle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="searchBrand"
            placeholder="Search Brand..."
            className="w-full p-2 border border-gray-900 rounded mb-4"
            value={dataForm.searchBrand}
            onChange={handleChange}
          />

          <select
            name="selectedTag"
            className="w-full p-2 border border-gray-900 rounded mb-4"
            value={dataForm.selectedTag}
            onChange={handleChange}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}{" "}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className=" p-4 m-4 rounded-lg shadow-xl bg-white"
            >
              <h2 className="text-lg font-bold text-blue-800 ">{item.title}</h2>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5722/5722708ld.jpg"
                alt=""
                className="w-full"
              />
              <p className="text-gray-600">{item.description} </p>
              <p className="text-gray-600">
                Price:<b>${item.price}</b>{" "}
              </p>
              <p className="text-red-600">
                Discount:<b>{item.discountPercentage} %</b>{" "}
              </p>
              <p>
                Rating : {item.rating} <StarRating rating={item.rating} />
              </p>
              Tag:{" "}
              {item.tags.map((tags, index) => (
                <span
                  key={index}
                  className="bg-yellow-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2v "
                >
                  {tags}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
