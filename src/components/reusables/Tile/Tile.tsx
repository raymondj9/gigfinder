import styled from "styled-components";

type TileProps = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode | string;
};

const Tile = ({ style, children, className }: TileProps) => {
  return (
    <StyledTile
      style={style && style}
      className={`tile p-5 py-7 ${className && className}`}
    >
      {children}
    </StyledTile>
  );
};

export const StyledTile = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #ececec;
  /* box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12); */
  border-radius: 14px;
`;

export default Tile;
