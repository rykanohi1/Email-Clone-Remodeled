import React from 'react';
import styles from './left-right-layout.scss';

/**
 * Manages the layout of content
 * @param className
 * @param children
 */
export default ({className, children}) =>
    <div className={`left-right-layout ${className}`} >
      {children()}
    </div>
