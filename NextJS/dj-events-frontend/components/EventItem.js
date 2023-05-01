import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function EventItem({ evt }) {
  // console.log(evt.attributes.image.data.attributes.formats.thumbnail.url);
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          alt="Loading"
          src={
            evt.attributes.image.data
              ? evt.attributes.image.data.attributes.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.attributes.date).toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          at {evt.attributes.time}
        </span>
        <h3>{evt.attributes.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.attributes.slug}`} legacyBehavior>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
