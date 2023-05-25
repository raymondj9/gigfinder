import { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../Atoms/Icon";
import Button from "../Button/Button";
import DefaultButton from "../Button/DefaultButton";

type ISearchFormProps = {
  handleSearch: (searchString: string) => void;
};

const SearchForm = ({ handleSearch }: ISearchFormProps) => {
  const [searchItem, setSearchItem] = useState("build website");
  const onSearch = (searchString: string) => {
    handleSearch(searchString);
  };

  useEffect(() => {
    onSearch(searchItem);
  }, [searchItem]);

  const handleSubmit = () => {
    
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mx-6">
      <StyledForm className="block relative md:ml-6">
        <input
          type="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          name="search"
          id="search"
          placeholder="E.g React developer"
        />
        <DefaultButton type="button" onClick={handleSubmit}>
          <Icon
            className="absolute top-[14px] left-5"
            icon="search"
            size={14}
          />
        </DefaultButton>
      </StyledForm>
      <div>
        <Button className="!min-h-[45px]" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

const StyledForm = styled.form`
  & input {
    outline: none;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
    width: 100%;
    height: 45px;
    padding: 0 2rem 0.2rem 2.8rem;
    font-size: 1.1rem;

    @media screen and (max-width: 1216px) {
      width: 300px;
    }

    @media screen and (max-width: 1130px) {
      width: 100%;
    }

    @media screen and (max-width: 1076px) {
      /* width: 390px; */
    }
  }
`;

export default SearchForm;
