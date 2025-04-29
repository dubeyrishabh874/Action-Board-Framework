"use client";
import styles from "../../page.module.css";
import VideoMediaPlayer from "../VideoMediaPlayer";

export default function ActionBoard() {
  return (
    <div className={styles.page} onContextMenu={(e) => e.preventDefault()}>
      <main className={styles.main}>
        <VideoMediaPlayer />
      </main>
    </div>
  );
}
