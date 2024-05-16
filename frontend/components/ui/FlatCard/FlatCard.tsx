import { FC } from "react";
import Image from "next/image";
import { Flat } from "@/types/interfaces";
import styles from "./FlatCard.module.css";
import { convertToRoman } from "@/utils";
import Like from "../Like/Like";

type FlatCardProps = { data: Omit<Flat, "id"> };

const FlatCard: FC<FlatCardProps> = ({ data }) => {
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
    isLiked,
  } = data;
  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <div>
          <span className={styles.flat}>
            {studio ? "Студия" : `${rooms}-комнатная`} {square} м²
          </span>
          <span className={styles.price}>
            <span className={styles.currentPrice}>
              {Number(price).toLocaleString()} ₽
            </span>
            {old_price && (
              <span className={styles.oldPrice}>
                {Number(old_price).toLocaleString()} ₽
              </span>
            )}
          </span>
        </div>

        <button className={styles.likeButton}>
          <Like isLiked={isLiked} />
        </button>
      </div>
      <Image
        height={0}
        width={0}
        src={image}
        alt={`${project_title} image`}
        className={styles.image}
        unoptimized
      />
      <div className={styles.content}>
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
      </div>
    </li>
  );
};

export default FlatCard;
