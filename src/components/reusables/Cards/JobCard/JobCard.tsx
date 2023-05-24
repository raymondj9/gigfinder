import styled from "styled-components";
import {
  millisecondsToStr,
  truncateText,
} from "../../../../utils/helperFunctions";
import { IGig } from "../../../../utils/types";
import Tile from "../../Tile/Tile";

const JobCard = (props: any) => {
  const {
    title,
    bid_stats,
    budget,
    currency,
    preview_description,
    status,
    time_submitted,
    seo_url,
    type,
  }: IGig = props.gig;
  return (
    <StyledDiv className="block pb-4 sm:pb-8">
      <Tile>
        <h2>
          <a
            href={`https://www.freelancer.com/projects/${seo_url}`}
            className={`text-primary capitalize`}
            target={"_blank"}
          >
            {title}
          </a>
        </h2>
        <p className="text-text-base">
          {truncateText(preview_description, 600)}
        </p>
        <small className="flex gap-4 mt-1">({type})</small>
        <h3 className="mb-3 text-text-base mt-3 sm:mt-5">
          {currency.sign}
          {budget?.minimum}{" "}
          {budget.maximum && "- " + currency.sign + budget?.maximum}
        </h3>
        <div className="md:flex flex-row-reverse justify-between">
          <small className="flex gap-2 mt-1 my-2">
            <span>
              <strong>{millisecondsToStr(time_submitted / 1000)} ago</strong>
            </span>
            <span>
              {bid_stats?.bid_count} bid{bid_stats?.bid_count > 1 && "s"}
            </span>
          </small>
          <a
            href={`https://www.freelancer.com/projects/${seo_url}`}
            className={`bg-primary px-4 rounded-md inline-block`}
            target={"_blank"}
          >
            <p className="capitalize text-white mb-0.5">Bid Now</p>
          </a>
        </div>
      </Tile>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  @media screen and (max-width: 340px) {
    /* padding: 1rem 1.5rem; */
  }

  & h2 {
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    color: #000000;

    @media screen and (max-width: 639px) {
      font-size: 18px;
      line-height: 26px;
    }
  }

  & .uglr-work-tag {
    background: #f6f6f6;
    border-radius: 30px;
    transition: all 0.7s;
  }

  & .uglr-status {
    border-radius: 30px;
    height: 45px;
    width: 130px;

    & p {
      font-size: 16px;
      font-weight: 700;
    }
  }

  & h3 {
    font-weight: 600;
    font-size: 17px;
    line-height: 29px;

    @media screen and (max-width: 639px) {
      font-size: 14px;
      line-height: 26px;
    }
  }

  & p {
    font-weight: normal;
    font-size: 15px;
    line-height: 29px;

    @media screen and (max-width: 639px) {
      font-size: 13px;
      line-height: 25px;
    }
  }
`;

export default JobCard;
