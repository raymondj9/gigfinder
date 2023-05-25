import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Filter from "../components/reusables/Filter/Filter";
import SearchForm from "../components/reusables/Forms/SearchForm";
import SearchResults from "../components/reusables/SearchResults/SearchResults";

const Home = () => {
  const [total, setTotal] = useState(0);
  const [searchString, setSearchString] = useState("react");
  const [type, setType] = useState("all");
  const handleSearch = (string: string) => {
    setSearchString(string);
  };

  const setTotalResult = (total: number) => {
    setTotal(total);
  };

  const handleTypeChange = (type: string) => {
    setType(type);
  };

  return (
    <>
      <MainLayout showLoader={true}>
        <main className="pb-4">
          <section className="">
            <div className="flex justify-center py-4 bg-white border-t">
              <SearchForm handleSearch={handleSearch} />
            </div>
            <div className="max-w-6xl mx-auto px-4 mt-8">
              <h2 className="lg:text-2xl text-lg">
                <span className="font-bold text-primary">{total}</span> results
                for{" "}
                <span className="font-bold text-primary">{searchString}</span>
              </h2>
              <div className="grid md:grid-cols-10 mt-4 gap-6">
                <div className="col-span-3 bg-gray-100 hidden md:block sticky top-0">
                  <Filter onTypeSelect={handleTypeChange} />
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
