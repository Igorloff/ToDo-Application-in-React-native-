import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  customClass?: string;
}

function Container({ children, customClass }: ContainerProps) {
  return (
    <div className={`${styles.container} ${customClass ? styles[customClass] : ''}`}>
      {children}
    </div>
  );
}

export default Container;
