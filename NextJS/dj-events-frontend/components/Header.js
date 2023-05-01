import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Search from "./Search";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a>DJ Events</a>
        </Link>
      </div>

      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/events/add" legacyBehavior>
              <a>Add Events</a>
            </Link>
          </li>
          <li>
            <Link href="/events" legacyBehavior>
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
