import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
// import EventMap from "@/components/EventMap";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function EventPage({ evt }) {
  // console.log(evt);

  const router = useRouter();

  const deleteEvent = async (e) => {
    // console.log("Deleted...");
    if (confirm("Are you sure??")) {
      const res = await fetch(`${API_URL}/api/events/${evt.id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/events");
      }
    }
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`} legacyBehavior>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {new Date(evt.attributes.date).toLocaleDateString("en-US", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          at {evt.attributes.time}
        </span>
        <h1>{evt.attributes.name}</h1>
        <ToastContainer />
        {evt.attributes.image.data && (
          <div className={styles.image}>
            <Image
              src={evt.attributes.image.data.attributes.formats.small.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.attributes.performers}</p>
        <h3>Description:</h3>
        <p>{evt.attributes.description}</p>
        <h3>Venue: {evt.attributes.venue}</h3>
        <p>{evt.attributes.address}</p>

        {/* <EventMap evt={evt} /> */}

        <Link href="/events" legacyBehavior>
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/events?populate=*&filters[slug][$eq]=${slug}`
  );
  const events = await res.json();

  return {
    props: {
      evt: events.data[0],
    },
  };
}
