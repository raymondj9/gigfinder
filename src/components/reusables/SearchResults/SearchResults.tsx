import { useEffect, useState } from "react";
import request from "../../../utils/request";
import JobCard from "../Cards/JobCard/JobCard";

type IGig = {
  title: string;
  preview_description: string;
  seo_url: string;
  status: string;
  budget: {
    minimum: number;
    maximum: number;
  };
};

const SearchResults = () => {
  const [gigs, setGigs] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    request
      .get(
        "https://www.freelancer.com/api/projects/0.1/projects/active/?compact=&query=reactjs&count=1"
      )
      .then((response) => {
        setGigs(response.data.result.projects);
        setTotal(response.data.result.total_count);
        console.log(response.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }, []);

  return (
    <div>
      <div>Total: {total}</div>
      <div>
        {gigs.map(
          (gig: IGig) => (
            <JobCard
              description={gig.preview_description}
              title={gig.title}
              status={gig.status}
              budget={gig.budget}
            />
          )
          // <div>
          //     <a href={"https://www.freelancer.com/projects/"+gig.seo_url} target={'_blank'}>{gig.title}</a>
          // </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
