import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  id,
  onPLus,
  onFavorite,
  imageUrl,
  title,
  price,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, imageUrl, title, price };

  const onClickPlus = () => {
    onPLus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={220}
          height={318}
          viewBox="0 0 220 318"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="19" y="218" rx="4" ry="4" width="180" height="17" />
          <rect x="19" y="20" rx="20" ry="20" width="180" height="180" />
          <rect x="19" y="270" rx="4" ry="8" width="123" height="32" />
          <rect x="167" y="270" rx="4" ry="8" width="32" height="32" />
          <rect x="19" y="240" rx="4" ry="4" width="120" height="17" />
        </ContentLoader>
      ) : (
        <>
          <div>
            {onFavorite && (
              <div onClick={onClickFavorite} className={styles.favorite}>
                <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unlicked" />
              </div>
            )}
            <img className={styles.image} src={imageUrl} alt="Sneakers" />
          </div>
          <div className="p-20">
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              {onPLus && (
                <img
                  className={styles.plus}
                  onClick={onClickPlus}
                  src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                  alt="Plus"
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
