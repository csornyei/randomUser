import React from 'react';
import styles from './Spinner.module.scss';

const Spinner : React.FC = props => {
return <div className={styles.loader}>Loading...</div>;
}

export default Spinner;