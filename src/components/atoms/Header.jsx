import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import LinkButton from '../buttons/LinkButton';

export default function Header({ children }) {
  const router = useRouter();

  const hrefValue =
    router.pathname === '/' || router.pathname === '/login' ? '/' : '/user';
  return (
    <div className="flex items-center justify-center py-4 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-center gap">
        <div>
          <LinkButton href={hrefValue} passHref>
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
