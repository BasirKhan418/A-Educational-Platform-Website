import { title } from 'process';
import React from 'react'

const Title = ({
    title,
    children,
    className,
}: {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}) => {
  return (
    <h2 className={`inline text-3xl font-bold pb-1 after:w-3/4 border-b-4 border-primary text-primary md:text-4xl after:h-1 ${className}`}>
      {title}
      {/* <hr className='w-1/4 h-1 bg-primary' /> */}
    </h2>
  );
};


export const SubTitle = ({ title, className }: { title: string, className?: string }) => {
    return <h3 className={`text-xl md:text-3xl ${className}`}>{title}</h3>;
}

export default Title
