import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import SearchForm from "../components/reusables/Forms/SearchForm";
import SearchResults from "../components/reusables/SearchResults/SearchResults";
import Tile from "../components/reusables/Tile/Tile";
// import InvoiceForm from "../components/reusables/Forms/InvoiceForm";

const Home = () => {
  const [total, setTotal] = useState(0);
  const [searchString, setSearchString] = useState("react");
  const handleSearch = (string: string) => {
    setSearchString(string);
  };

  const setTotalResult = (total: number) => {
    setTotal(total);
    // setTotalResult
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
              <h2 className="text-2xl"><span className="font-bold">{total}</span> for <span className="font-bold">{searchString}</span></h2>
              <div className="grid md:grid-cols-10 mt-4 gap-6">
                <div className="col-span-3 bg-gray-100 hidden md:block sticky top-0">
                  <Tile>
                    Filter your search
                  </Tile>
                </div>
                <div className="col-span-7">
                  <SearchResults searchString={searchString} setTotalResult={setTotalResult}/>
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
