import React from "react";
import Link from 'next/link'
import cn from "classnames";
import styles from "../PageList.module.sass";
import Page from '../../../components/Page/index'

const PageList = () => {
  return (
    <Page>
    <div className={styles.page}>
      <div className={cn("container", styles.container)}>
        <p>
          <Link href="/screens/Home/app">Home Page</Link>
        </p>
        <p>
          <Link href="/screens/UploadVariants/app">Upload Variants</Link>
        </p>
        <p>
          <Link href="/screens/UploadDetails/app">Upload Details</Link>
        </p>
        <p>
          <Link href="/screens/ConnectWallet/app">Connect wallet</Link>
        </p>
        <p>
          <Link href="/screens/Faw/app">FAQ</Link>
        </p>
        <p>
          <Link href="/screens/Activity/app">Activity</Link>
        </p>
        <p>
          <Link href="/screens/Search01/app">Search01</Link>
        </p>
        <p>
          <Link href="/screens/Search02/app">Search02</Link>
        </p>
        <p>
          <Link href="/screens/Profile/app">Profile</Link>
        </p>
        <p>
          <Link href="/screens/ProfileEdit/app">Profile Edit</Link>
        </p>
        <p>
          <Link href="/screens/Item/app">Item</Link>
        </p>
      </div>
    </div>
    </Page>
  );
};

export default PageList;
