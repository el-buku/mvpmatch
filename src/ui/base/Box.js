import styled from "styled-components";
import { space, layout, color, border, position, borders } from "styled-system";

const Box = styled.div`
  visibility: ${(props) => props.visibility || "initial"};
  ${color} ${position}
    ${layout} ${space} ${borders};
`;
Box.propTypes = {
  ...color.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...space.propTypes,
  ...border.propTypes,
};
Box.defaultProps = {
  alignItems: "center",
};

export { Box };
