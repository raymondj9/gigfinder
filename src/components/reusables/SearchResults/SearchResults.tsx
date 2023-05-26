import { useEffect, useState } from "react";
import request from "../../../utils/request";
import { IGig } from "../../../utils/types";
import Button from "../Button/Button";
import JobCard from "../Cards/JobCard/JobCard";

// type IGig = {
//   title: string;
//   preview_description: string;
//   seo_url: string;
//   status: string;
//   budget: {
//     minimum: number;
//     maximum: number;
//   };
//   bid_stats: {

//   }
// };

type ISearchResultsProps = {
  searchString: string;
  setTotalResult: (total: number) => void;
  type: string;
};

const SearchResults = ({
  searchString,
  setTotalResult,
  type,
}: ISearchResultsProps) => {
  const [gigs, setGigs] = useState<IGig[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  useEffect(() => {
    setTotalResult(total);
  }, [total]);

  useEffect(() => {
    if (type !== "" || searchString !== "") {
      setLoading(true);
      getData("reset");
    }
  }, [searchString, type]);

  useEffect(() => {
    if (page !== 0) {
      setLoadingBtn(true);
      getData("append");
    }
  }, [page]);

  const getData = (quary_type: string) => {
    if (loading || loadingBtn) {
      return;
    }
    request
      .get(
        `https://www.freelancer.com/api/projects/0.1/projects/active/?compact=&query=${searchString}&limit=20&project_types=[${type}]&offset=${page}`
      )
      .then((response) => {
        setLoading(false);
        setLoadingBtn(false);
        if (quary_type == "append") {
          setGigs([...gigs, ...response.data.result.projects]);
        } else {
          setGigs(response.data.result.projects);
        }
        setTotal(response.data.result.total_count);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {gigs.map((gig: IGig, i) => (
            <JobCard gig={gig} key={i} />
          ))}
        </div>
      )}
      {total > 20 && loading == false && gigs.length < total && (
        <div className="mt-4">
          <Button onClick={next} loading={loadingBtn}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
