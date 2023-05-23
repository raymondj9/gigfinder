import styled from "styled-components";
import { truncateText } from "../../../../utils/helperFunctions";

interface JobCardProps {
  title: string;
  budget: {
    minimum: number;
    maximum: number;
  };
  timeStamp?: string;
  description: string;
  status: string;
  url?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  budget,
  timeStamp,
  description,
  status,
  url,
}) => {
  return (
    <StyledDiv className="block bg-white py-4 sm:pt-6 sm:pb-8 px-8 sm:px-16 border-b">
      <h2>{title}</h2>
      <h3 className="mb-3 text-text-base mt-3 sm:mt-5">{budget.minimum}</h3>
      <div>
        <p className="text-text-base">
          {truncateText(description, 400)}&nbsp; &nbsp;
          <a href={url} role="button" className="text-primary font-bold">
            More...
          </a>
        </p>
      </div>
      <div
        className={`${
          status === "active" ? "bg-primary" : "bg-green"
        } w-max mt-6 flex flex-col items-center justify-center`}
      >
        <p className="capitalize text-white mb-0.5">{status}</p>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  @media screen and (max-width: 340px) {
    padding: 1rem 1.5rem;
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
