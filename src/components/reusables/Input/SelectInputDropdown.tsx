import {
  useState,
  Fragment,
  ReactNode,
  Children,
  useEffect,
  useRef,
} from "react";
import { Transition } from "@headlessui/react";
import Tile from "../Tile/Tile";
import Icon from "../Atoms/Icon";
import styled from "styled-components";

const SelectInputDropdown = ({
  children,
  selectOption,
  label,
  id,
  value,
}: {
  children: ReactNode;
  selectOption: (e: any) => void;
  label?: any;
  id: string;
  value?: any;
}) => {
  const arrayChildren = Children.toArray(children);
  const [activeOption, setActiveOption] = useState(0);
  const [optionShow, setOptionShow] = useState(false);
  const tfield = useRef<HTMLDivElement>(null);
  const uid = Math.floor(Math.random() * 1000000 + 1);
  const fieldId = `tfield-${uid}-${id}`;

  const handleSelectTab = (e: any, index: number) => {
    setActiveOption(index);
    setOptionShow(false);
    selectOption(e.props.value);
  };

  const toggleOptions = () => {
    setOptionShow(optionShow ? false : true);
  };

  useEffect(() => {
    window.addEventListener("click", function (e) {
      let el = document.getElementById(fieldId);
      if (el && e !== null) {
        // @ts-ignore
        if (!el.contains(e.target)) {
          setOptionShow(false);
        }
      }
    });
  }, [children]);

  useEffect(() => {
    setActiveOption(0);
    if (value) {
      arrayChildren.map((child: any, i) => {
        if (child.props.value == value) {
          setActiveOption(i);
        }
      });
    }
  }, [value]);

  return (
    <>
      <StyledInputWrap
        className="gap-x-4 relative items-center noscrollbar select-input-wrap"
        id={fieldId}
      >
        {label && (
          <label className="label my-1 block" htmlFor={id}>
            <span>{label}</span>
          </label>
        )}
        <div
          id={id}
          ref={tfield}
          className={`border border-gray-400 cursor-pointer w-full relative min-w-[100px] ${
            optionShow && "highlight-bd"
          }`}
          onClick={() => toggleOptions()}
        >
          {arrayChildren[activeOption]}

          <Icon
            size={10}
            className="absolute right-0 top-0 flex items-center bgred-500 h-full px-2"
            icon="angle-down"
          />
        </div>
        <Tile
          className={`absolute highlight-bd mt-0.5 z-50 dark:bg-main-secondary bg-white w-full max-h-[350px] overflow-y-auto ${
            optionShow ? "block" : "hidden"
          } !px-0 [&>*]:!border-b !border-gray-200 [&>*]:last-oftype:border-none`}
        >
          {Children.map(arrayChildren, (child: any, index) => (
            <div className="hover:bg-primary hover:text-white m2">
              <div
                className={`cursor-pointer flex items-center p-2 `}
                onClick={() => handleSelectTab(child, index)}
              >
                <span className={`mr-2 h-2 w-2 flex items-center`}>
                  {arrayChildren[activeOption] === child && index > 0 && (
                    <Icon size={10} icon="check" />
                  )}
                </span>
                <span>{child}</span>
              </div>
            </div>
          ))}
        </Tile>
      </StyledInputWrap>
    </>
  );
};

const Option = ({
  children,
}: {
  children?: ReactNode;
  id?: number;
  value: any;
}) => {
//   const [show, setShow] = useState(true);

  return (
    <>
      <Transition
        as={Fragment}
        show={true}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div>{children}</div>
      </Transition>
    </>
  );
};

const StyledInputWrap = styled.div`
  & > div {
    padding: 8px 10px;
    border-radius: 5px;
    flex-shrink: 0;
  }
`;

SelectInputDropdown.Option = Option;
export default SelectInputDropdown;
