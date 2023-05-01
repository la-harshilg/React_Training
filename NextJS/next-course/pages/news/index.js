import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-is-best">Next is Best</Link>
        </li>
        <li>
          <Link href="/news/next-is-awesome">Next is Awesome</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
