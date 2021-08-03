import PropTypes from 'prop-types';
import LinkButton from '../buttons/LinkButton';
import PrimaryButton from '../buttons/PrimaryButton';

export default function Header({ children }) {
  return (
    <div className="flex items-center justify-center py-4 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-center gap">
        <div>
          <LinkButton href="/user" passHref>
            Your-Films
          </LinkButton>
        </div>

        <div className="hidden md:block ml-2">
          <span className="text-2xl text-primary font-bold">Film-Yours</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 md:mt-0 md:absolute right-10">
        {children}
      </div>
    </div>
  );
}
Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
