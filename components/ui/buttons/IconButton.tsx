import styles from './Buttons.module.css';

type IconButtonProps = {
  className?: string[] | string;
  icon?: JSX.Element;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const IconButton = (props: IconButtonProps) => {
  let classes = [styles['icon__button--container']];
  if (props.className) {
    if (typeof props.className === 'string') {
      classes.push(props.className);
    } else {
      classes = classes.concat(props.className);
    }
  }
  return (
    <button
      className={classes.join(' ')}
      disabled={props.disabled}
      type={props.type || 'button'}
      style={props.style}
    >
      {props.icon}
      {props.text}
      {props.children}
    </button>
  );
};

export default IconButton;
