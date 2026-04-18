import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButtonBase = styled.button`
  padding: ${(props) => (props.size === "small" ? "9px 16px" : "12px 20px")};
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  border-radius: 4px;
  align-items: center;
  border: 1px solid transparent;

  :disabled {
    color: #7c8db0;
    border-color: #7c8db0;
  }
`;

const StyledPrimaryButton = styled(StyledButtonBase)`
  color: #fafafa;
  background-color: #605dec;

  :hover {
    background-color: #1513a0;
  }
  :disabled {
    background-color: rgba(203, 212, 230, 0.3);
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  color: #605dec;
  border-color: #7c8db0;
  background: none;

  :hover {
    background-color: #e9e8fc;
    border-color: #605dec;
  }
  :disabled {
    background: none;
  }
`;

const Button = ({ onClick, color, disabled, children, size }) => {
  const buttonProps = {
    disabled,
    onClick,
    children,
    size,
  };

  if (color === "secondary") {
    return <StyledSecondaryButton {...buttonProps} />;
  }
  return <StyledPrimaryButton {...buttonProps} />;
};

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Button.defaultProps = {
  color: "primary",
  disabled: false,
};

export default Button;
