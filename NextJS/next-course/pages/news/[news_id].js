import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();

  console.log(router.query.news_id);

  return <h1>Details Page</h1>;
}

export default DetailsPage;
