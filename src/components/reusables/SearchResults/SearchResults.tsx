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
};

const SearchResults = ({
  searchString,
  setTotalResult,
}: ISearchResultsProps) => {
  const [gigs, setGigs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotalResult(total);
  }, [total]);

  useEffect(() => {
    setLoading(true);
    request
      .get(
        `https://www.freelancer.com/api/projects/0.1/projects/active/?compact=&query=${searchString}&limit=20`
      )
      .then((response) => {
        setLoading(false);
        setGigs(response.data.result.projects);
        setTotal(response.data.result.total_count);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }, [searchString]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {gigs.map((gig: IGig) => (
            <JobCard gig={gig} />
          ))}
        </div>
      )}
      {total > 20 && loading == false && (
        <div className="mt-4">
          <Button>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
