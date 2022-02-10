import axios from "axios";
import React from "react";
import Card from "../components/Card/Card";
import Info from "../components/Info";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://61fb9baf87801d0017a2c60a.mockapi.io/orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов :(");
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      {orders.length > 0 ? (
        <>
          <div className="d-flex align-center justify-between mb-40">
            <h2>Мои покупки</h2>
          </div>
          <div className="d-flex flex-wrap">
            {(isLoading ? [...Array(8)] : orders).map((item, index) => (
              <Card key={index} loading={isLoading} {...item} />
            ))}
          </div>
        </>
      ) : (
        <Info
          title="У вас нет заказов"
          image="/img/sad-smile.png"
          description="Оформите хотя бы один заказ."
        />
      )}
    </div>
  );
}

export default Orders;
