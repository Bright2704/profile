"use client"
import error from 'next/error';
import React from 'react'

type Props = {}

export default function Error({}: Props) {
  return (
    <div className='w-full text-center'>
        <div className="text-2xl text-red-500">
            Error due to: {error.displayName}{" "}
            </div>
            <p>Handled by error.tsx in AppRouter</p>
            </div>
  );
}