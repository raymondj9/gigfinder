import styled from "styled-components";
import MainLayout from "../components/layouts/MainLayout";
import SearchForm from "../components/reusables/Forms/SearchForm";
import SearchResults from "../components/reusables/SearchResults/SearchResults";
// import InvoiceForm from "../components/reusables/Forms/InvoiceForm";

const Home = () => {
  return (
    <>
      <MainLayout showLoader={true}>
        <PageWrapper className="pb-4">
          <section className="">
            <div className="flex justify-center py-4 bg-white border-t">
              <SearchForm />
            </div>
            <div className="grid md:grid-cols-10 mt-4 p-5">
              <div className="col-span-3 bg-gray-100 hidden md:block">filter component: coming up</div>
              <div className="col-span-7 bg-blue-400">
                <SearchResults />
              </div>
            </div>
          </section>
        </PageWrapper>
      </MainLayout>
    </>
  );
};

export default Home;

const PageWrapper = styled.div``;
