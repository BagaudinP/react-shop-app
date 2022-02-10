import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";
import Info from "../components/Info";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      {favorites.length > 0 ? (
        <>
          <div className="d-flex align-center justify-between mb-40">
            <h2>Мои закладки</h2>
          </div>
          <div className="d-flex flex-wrap">
            {favorites.map((item, index) => (
              <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
            ))}
          </div>
        </>
      ) : (
        <Info
          title="У вас нет закладок"
          image="/img/crying-smile.png"
          description="Вы еще ничего не добавляли в закладки."
        />
      )}
    </div>
  );
}

export default Favorites;
