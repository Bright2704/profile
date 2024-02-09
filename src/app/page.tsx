"use client";
import React from 'react';


type Props = {};

export default async function Home({}: Props) {
  const url = "https://api.github.com/repos/vercel/next.js";
  const data = await fetch(url);
  const res = await data.json();


    return (
      <div style={{ background: 'lightblue' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
    <img src="https://4.bp.blogspot.com/-U_cA_ieS9EA/V9luo62UmLI/AAAAAAAAMNQ/NLtCABaivg0mjUa1wC0XKVFebLwhcqyPgCLcB/s1600/kimi-no-na-wa-13.jpg" alt="kimi-no-na-wa-13" width="200" height="100" />
    <h1>HelloWorld</h1>
    <h2>Bright</h2>
  </div>
</div>
    );
}






