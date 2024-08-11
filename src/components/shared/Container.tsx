import React, { CSSProperties, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  styles?: CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, styles = {} }) => {
  return (
    <div className='mx-auto w-full px-2 lg:w-11/12 lg:px-0'>{children}</div>
  );
};

export default Container;
