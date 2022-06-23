import styles from "./index.module.css";
import Link from "next/link";
import Router from "next/router";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";

export default function Navbar() {
  const path = Router.useRouter().pathname;
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/search/${search}`);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <Link href="/popular">
          <a className={path == "/popular" ? "active" : ""}>Popüler</a>
        </Link>
        <Link href="/top-rated">
          <a className={path == "/top-rated" ? "active" : ""}>Beğenilen</a>
        </Link>
      </div>
      <form className={styles.search} onSubmit={handleSubmit} method="post">
        <RiSearchLine />
        <input type="text" onChange={handleSearch} placeholder="Arama" />
      </form>
    </div>
  );
}
