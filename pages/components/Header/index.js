import React, { useState } from "react";
import Link from 'next/link'
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";
import Notification from "./Notification";
import User from "./User";

const nav = [
  {
    url: "/screens/Search01/app",
    title: "Discover",
  },
  {
    url: "/screens/Faq/app",
    title: "How it works",
  },
  {
    url: "/screens/Item/app",
    title: "Create item",
  },
  {
    url: "/screens/Profile/app",
    title: "Profile",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link  href="/screens/Home/app">
          <a className={styles.logo}>
            <Image
              className={styles.pic}
              src="/images/logo-dark.png"
              srcDark="/images/logo-light.png"
              alt="Fitness Pro"
            />
          </a>
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {nav.map((x, index) => (
              <Link
                href={x.url}
                key={index}
              >
                <div activeClassName={styles.active} className={styles.link}>
                  {x.title}
                </div>
              </Link>
            ))}
          </nav>
          <form
            className={styles.search}
            action=""
            onSubmit={() => handleSubmit()}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search"
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="20" />
            </button>
          </form>
          <Link
            
            href={"/screens/UploadVariants/app"}
          >
            <div className={cn("button-small", styles.button)}>
            Upload
            </div>
          </Link>
        </div>
        <Notification className={styles.notification} />
        <Link
          
          href={"/screens/UploadVariants/app"}
        >
          <div className={cn("button-small", styles.button)}>
          Upload
          </div>
        </Link>
        {/* <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/connect-wallet"
        >
          Connect Wallet
        </Link> */}
        <User className={styles.user} />
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
