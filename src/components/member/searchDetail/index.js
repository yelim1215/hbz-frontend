import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp, MdSearch } from "react-icons/md";
import Location from "./location";
import CompanyType from "./companyType";
import EmploymentType from "./employmentType";
import Deadline from "./deadline";
import PaymentType from "./paymentType";
import CareerType from "./careerType";
import EducationType from "./educationType";

const SearchDetail = () => {
  const [isArrowBtnClicked, setIsArrowBtnClicked] = useState(false);

  const toggleIsArrowBtnClicked = () => {
    setIsArrowBtnClicked((prev) => !prev);
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById("detail-search-dropdown");
    dropdown.classList.toggle("hidden");
    toggleIsArrowBtnClicked();
  };

  return (
    <form className="mb-20 w-5/6 max-w-4xl mx-auto bg-neutral-100 p-10 rounded-2xl border-2 border-solid border-neutral-200">
      <div className="relative mb-4 overflow-hidden">
        <select
          name="keyword-type"
          className="absolute top-1/2 -translate-y-1/2 left-3 p-3 bg-transparent outline-none text-lg"
        >
          <option value="기업명">기업명</option>
          <option value="업종">업종</option>
        </select>
        <input
          id="keyword"
          className="w-full pl-28 px-4 py-4 rounded-3xl border-2 focus:outline-orange-500 text-lg"
          placeholder="검색어를 입력해주세요."
        />
        <button className="w-1/12 py-1 bg-transparent text-neutral-500 absolute top-3 right-2 flex justify-center">
          <MdSearch fontSize={28} />
        </button>
      </div>
      <div className="flex justify-between">
        <p className="my-2 text-xl font-bold">상세 조건</p>
        <button type="button">
          {isArrowBtnClicked ? (
            <MdArrowDropUp fontSize={35} onClick={toggleDropdown} />
          ) : (
            <MdArrowDropDown fontSize={35} onClick={toggleDropdown} />
          )}
        </button>
      </div>
      <div id="detail-search-dropdown" className="px-5 hidden">
        <CompanyType />
        <EmploymentType />
        <PaymentType />
        <CareerType />
        <EducationType />
        <div className="mt-8 w-full">
          <p className="block text-lg font-semibold mb-2">지역</p>
          <Location />
        </div>
        <Deadline />
        <button
          type="button"
          className="px-8 py-4 mt-10 bg-white border-blue-400 text-blue-500 rounded-3xl border-2 mr-5"
        >
          조건 초기화
        </button>
        <button className="px-8 py-4 mt-10 bg-blue-400 text-white rounded-3xl border-2">
          검색
        </button>
      </div>
    </form>
  );
};

export default SearchDetail;
