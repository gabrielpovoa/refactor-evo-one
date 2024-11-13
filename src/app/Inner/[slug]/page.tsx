'use client';

import React from 'react';

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};


const Inner = async ({ params }: Props) => {
  const { slug } = await params;
  return <div>{slug}</div>;
};

export default Inner;
