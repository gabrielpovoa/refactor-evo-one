import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const Inner = ({ params }: Props) => {
  const { slug } = params;
  return <div>{slug}</div>;
};

export default Inner;
