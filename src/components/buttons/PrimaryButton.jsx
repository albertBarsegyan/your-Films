import classNames from 'classnames';
import { bool } from 'prop-types';
export default function PrimaryButton({ children, primary, ...props }) {
  const buttonStyles = classNames({
    'px-3 py-2 text-2xl rounded-sm': true,
    'bg-primary': primary,
    'text-secondary': primary,
    'bg-transparent': !primary,
    'text-primary': !primary,
    'border border-primary': !primary,
  });
  return (
    <>
      <button className={buttonStyles} {...props}>
        {children}
      </button>
    </>
  );
}
PrimaryButton.propTypes = {
  primary: bool,
};
PrimaryButton.defaultProps = {
  primary: true,
};
