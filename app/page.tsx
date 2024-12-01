"use client";
import React, { useState } from 'react'
import App from "./app";

export default function Home () {
const [blog, setBlog] = useState('intro');

  return (
    <>
      <App/>
    </>
  )
}
