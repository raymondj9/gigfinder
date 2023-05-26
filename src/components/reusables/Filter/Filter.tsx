import SelectInputDropdown from "../Input/SelectInputDropdown";
import Tile from "../Tile/Tile";

type FilterProps = {
  onTypeSelect: (type: string) => void;
};

const Filter = ({onTypeSelect} : FilterProps) => {
  const selectedOption = (e: any) => {
    onTypeSelect(e)
  };

  return (
    <div>
      <Tile>
        <header className="text-xl">Filter your search</header>
        <div className="mt-4">
          <SelectInputDropdown
            label={"Job Type"}
            selectOption={(e) => selectedOption(e)}
            id={"type"}
          >
            <SelectInputDropdown.Option value={""}>
              All
            </SelectInputDropdown.Option>
            <SelectInputDropdown.Option value={"hourly"}>
              Hourly
            </SelectInputDropdown.Option>
            <SelectInputDropdown.Option value={"fixed"}>
              Fixed
            </SelectInputDropdown.Option>
          </SelectInputDropdown>
        </div>
      </Tile>
    </div>
  );
};

export default Filter;
