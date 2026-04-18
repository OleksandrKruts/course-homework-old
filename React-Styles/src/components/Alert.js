import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as СrossIcon } from "../assetas/icons/СrossIcon.svg";

const StyledAlert = styled.div`
  display: flex;
  padding: 20px 74px 20px 32px;
  margin: 0 0 50px;
  align-items: center;
  width: 1440px;
  height: 64px;
  background-color: ${(props) => {
    switch (props.color) {
      case "primary": {
        return "#605DEC;";
      }
      case "error": {
        return "#EB5757;";
      }
      case "warning": {
        return "#FFD12F;";
      }
    }
  }};
`;

const StyledText = styled.p`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => (props.color === "warning" ? "#1513A0;" : "#F6F6FE;")};
  margin: 0 15px 0 0;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;


const IconAlert = ({ onClose, color, children }) => {
  return (
    <StyledAlert color={color}>
      <StyledText color={color}>{children}</StyledText>
      <StyledButton onClick={onClose}>
        
          <СrossIcon />
        
      </StyledButton>
    </StyledAlert>
  );
};

IconAlert.propTypes = {
  onClose: PropTypes.func,
  color: PropTypes.oneOf(["primary", "error", "warning"]),
  children: PropTypes.node.isRequired,
};

IconAlert.defaultProps = {
  color: "primary",
};

export default IconAlert;
