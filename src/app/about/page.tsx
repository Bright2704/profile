import { resolve } from 'path';
import React from 'react'

type Props = {}

export default async function about({}: Props) {
    await delay(1000)

  return (
    <div>about
        <ul>
            <li>about</li>
        </ul>
    </div>
  )
}


function delay(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}