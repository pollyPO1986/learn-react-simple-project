import { useState } from 'react';
import '@weekOne/week01.css';

const drinkData = [
  {
    id: 1,
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    quantity: 20,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    quantity: 18,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    quantity: 34,
  },
  {
    id: 4,
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    quantity: 10,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    quantity: 25,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    quantity: 20,
  },
  {
    id: 7,
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    quantity: 18,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    quantity: 20,
  }
];

function MenuItemTemplate ({ data }) {
  const [count, setCount] = useState(data.quantity);
  const [edit, setEdit] = useState(false); // 記錄編輯狀態
  // const [editProduct, setEditProduct] = useState([]); // 暫存編輯資料

  function editHandler () {
    setEdit(!edit);
  }

  return (
    <tr>
      <td>{data.name}</td>
      <td><small>{data.description}</small></td>
      <td>{data.price}</td>
      <td>
        <button style={edit ? { display: 'block' } : { display: 'none' }} disabled={count === 0} onClick={() => setCount(() => count - 1)}>-</button>
        <span className="products-quantity">{count}</span>
        <button style={edit ? { display: 'block' } : { display: 'none' }} onClick={() => setCount(() => count + 1)}>+</button>
      </td>
      <td>
        <div className="button-group control-item-button">
          <button className="button-line-style btn-edit" onClick={editHandler}>編輯</button>
          <button className="button-line-style btn-remove">刪除</button>
        </div>
      </td>
    </tr>
  );
}

export default function Table () {
  return (
    <>
      <h1>Week 01 - Home work</h1>
      <table className="menu-table">
        <thead className="menu-table-head">
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody className="menu-table-body">
          {drinkData.map((drink) => {
            return (
              <MenuItemTemplate key={drink.id} data={drink} />
            );
          })}
        </tbody>
      </table >
    </>
  );
}
