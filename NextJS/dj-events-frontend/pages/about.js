import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About DJ events">
      <h1>About</h1>
      <p>This is an about page.</p>
      <p>Version 1.0.0</p>
      Go to about page : <Link href="/">Home</Link>
    </Layout>
  );
}
