import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Icon from "../components/reusables/Atoms/Icon";
import Filter from "../components/reusables/Filter/Filter";
import SearchForm from "../components/reusables/Forms/SearchForm";
import SearchResults from "../components/reusables/SearchResults/SearchResults";

const Home = () => {
  const [total, setTotal] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [type, setType] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const handleSearch = (string: string) => {
    setSearchString(string);
  };

  const setTotalResult = (total: number) => {
    setTotal(total);
  };

  const handleTypeChange = (type: string) => {
    setType(type);
    setShowFilter(false);
  };

  const handleShowFilter = () => {
    setShowFilter(showFilter ? false : true);
  };

  const hideFilter = (e: any) => {
    if (e.target.id == "filter-wrap") {
      setShowFilter(false);
    }
  };

  return (
    <>
      <MainLayout showLoader={true}>
        <main className="pb-4">
          <section className="">
            <div className="py-4 bg-white border-t pt-20">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center">
                  <SearchForm handleSearch={handleSearch} />
                </div>
                <div className="text-center mt-4 flex justify-center md:hidden">
                  <span
                    className="flex items-center border px-4 rounded-md cursor-pointer gap-x-2"
                    onClick={handleShowFilter}
                  >
                    <Icon icon="filter" size={14} />
                    <span>Filter Results</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-8">
              {searchString !== "" && (
                <h2 className="lg:text-2xl text-center md:text-left text-lg">
                  <span className="font-bold text-primary">{total}</span>{" "}
                  results for{" "}
                  <span className="font-bold text-primary">{searchString}</span>
                </h2>
              )}
              <div className="grid md:grid-cols-10 md:mt-4 gap-6">
                <div
                  className={`col-span-3 ${
                    showFilter && "fixed bg-black/60 w-full h-full top-0 left-0"
                  }`}
                  onClick={hideFilter}
                  id="filter-wrap"
                >
                  <div
                    className={`bg-gray-100 hidden md:block top-0 ${
                      showFilter &&
                      "!block absolute top-28 right-10 left-10 max-w-md mx-auto"
                    }`}
                  >
                    <Filter onTypeSelect={handleTypeChange} />
                  </div>
                </div>
                <div className="col-span-7">
                  <SearchResults
                    type={type}
                    searchString={searchString}
                    setTotalResult={setTotalResult}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
