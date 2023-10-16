import React, { ReactNode } from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary';
  size: 'tiny' | 'small' | 'normal';
  status: 'normal' | 'clicked' | 'disabled';
  icon?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, size, status, icon, children }) => {
  let buttonStyle = {};

  const buttonPrimary = {
    backgroundColor: '#0051FE',
    border: '0px'
  }

  const buttonSecondary = {
    border: '2px solid #E6E8EC',
    backgroundColor: '#ffffff',
  }
  switch (type) {
    case 'primary':
      buttonStyle = buttonPrimary;
      break;
    case 'secondary':
      buttonStyle = buttonSecondary;
      break;
    default:
      buttonStyle = buttonPrimary;
  }

  const buttonTiny = {
    minWidth: '74px',
    height: '32px',
    padding: '6px 12px 6px 12px'
  }

  const buttonSmall = {
    minWidth: '82px',
    height: '40px',
    padding: '10px 16px 10px 16px'
  }

  const buttonNormal = {
    minWidth: '105px',
    height: '48px',
    fontSize: '16px',
    padding: '14px 24px 14px 24px'
  }

  let buttonSize = {}
  switch (size) {
    case 'tiny':
      buttonSize = buttonTiny;
      break;
    case 'small':
      buttonSize = buttonSmall;
      break;
    case 'normal':
      buttonSize = buttonNormal;
      break;
    default:
      buttonSize = buttonNormal;
  }

  const buttonClicked = {
    background: type === 'primary' ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),linear-gradient(0deg, #0051FE, #0051FE)' : '#23262F',
    border: '0px'
  }

  const buttonDisabled = {
    background: type === 'primary' ? 'linear-gradient(0deg, #0051FE, #0051FE),linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))' : '#B1B5C3',
    opacity: '0.5',
    border: '0px'
  }

  let buttonStatus = {};
  switch (status) {
    case 'normal':
      buttonStatus = {
        color: type === 'secondary' ? '#23262F' : '#FCFCFD'
      };
      break;
    case 'clicked':
      buttonStatus = buttonClicked;
      break;
    case 'disabled':
      buttonStatus = buttonDisabled;
      break;
    default:
      buttonStatus = buttonNormal;
  }

  const buttonStyles = {
    borderRadius: '90px',
    color: '#FCFCFD',
    fontFamily: 'Poppins',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '700',
    ...buttonSize,
    ...buttonStyle,
    ...buttonStatus
  };

  return (
    <button style={buttonStyles}>
      {icon && <span className="button-icon">Icon</span>}
      {children}
    </button>
  );
};

export default Button;
