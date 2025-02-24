import PropTypes from 'prop-types';
import styles from './Container.module.scss';

export default function Container({ customClass, children }) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  customClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
