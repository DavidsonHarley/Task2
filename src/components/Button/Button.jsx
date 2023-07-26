import React from 'react';
import cn from 'classnames';
import styles from './css/StyleButton.module.css';

export default function Button({
  appearance, className, children,
}) {
  return (
    <button
	type="submit"
	className={cn(styles.button, {
	  [styles.primary]: appearance === 'primary',
	  [styles.whiteeEdging]: appearance === 'whiteeEdging',
	})}
    >
      {children}
    </button>
  );
}
