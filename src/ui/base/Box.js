import styled from "styled-components";
import { space, layout, color, border } from "styled-system";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${color}
  ${layout}
  ${space}
  ${border}
`;
Box.propTypes = {
  ...color.propTypes,
  ...layout.propTypes,
  ...space.propTypes,
  ...border.propTypes,
};

export { Box };
