import styles from './LinkButton.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
