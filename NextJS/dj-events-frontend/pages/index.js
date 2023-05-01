import EventItem from "@/components/EventItem";
import Link from "next/link";
import Layout from "../components/Layout";
import { API_URL } from "@/config";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show.</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events" legacyBehavior>
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?populate=*&sort=date:ASC&pagination[limit]=3`
  );
  const events = await res.json();

  return {
    props: { events: events.data },
    revalidate: 1,
  };
}
