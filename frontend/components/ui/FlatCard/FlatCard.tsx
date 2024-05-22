"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { IFlat } from "@/types/interfaces";
import styles from "./FlatCard.module.css";
import { convertToRoman } from "@/utils";
import Like from "../Like/Like";

type FlatCardProps = { data: Omit<IFlat, "id"> };

const FlatCard: FC<FlatCardProps> = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const {
    project_title,
    rooms,
    studio,
    price,
    old_price,
    square,
    release_dates,
    floor,
    image,
  } = data;
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div>
          <span className={styles.flat}>
            {studio ? "Студия" : `${rooms}-комнатная`} {square} м²
          </span>
          <p className={styles.price}>
            <span className={styles.currentPrice}>
              {Number(price).toLocaleString()} ₽
            </span>
            {old_price && (
              <span className={styles.oldPrice}>
                {Number(old_price).toLocaleString()} ₽
              </span>
            )}
          </p>
        </div>

        <button
          className={styles.likeButton}
          onClick={() => setIsLiked(!isLiked)}>
          <Like isLiked={isLiked} className={styles.likeImage} />
        </button>
      </header>
      <main>
        <Image
          height={0}
          width={0}
          src={image}
          alt={`${project_title} image`}
          className={styles.image}
          unoptimized
        />
      </main>

      <footer className={styles.content}>
        <div className={styles.detailRow}>
          <span>Проект</span>
          <span>{project_title}</span>
        </div>
        <div className={styles.detailRow}>
          <span>Этаж</span>
          <span>{floor}</span>
        </div>
        <div className={styles.detailRow}>
          <span>Срок сдачи</span>
          <span>
            {convertToRoman(release_dates[0]) + " " + release_dates.slice(1)}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default FlatCard;
