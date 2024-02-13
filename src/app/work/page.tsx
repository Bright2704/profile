import { resolve } from 'path';
import React from 'react'

type Props = {}

export default async function work({}: Props) {
    await delay(1000)

  return (
    <div>work
        <ul>
            <li>work</li>
        </ul>
    </div>
  )
}


function delay(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}