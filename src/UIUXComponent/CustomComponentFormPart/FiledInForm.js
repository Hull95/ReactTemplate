import { useEffect, useState } from "react";

const FieldInForm = () => {
  const [newArray, setNewArray] = useState();
  const arrayData = [
    {
      age: 23,
      name: "Test",
      hair: [
        {
          blue: true,
        },
      ],
    },
    {
      age: 14,
      name: "Test1",
    },
    {
      age: 10,
      name: "Test2",
    },
  ];

  const keyArray = () => {
    arrayData.forEach((item) => {
      for (let data in item) {
        if (item.hasOwnProperty(data)) {
          if (data) {
            console.log(`${data} = ${item[data]}`);
          }
        }
      }
    });
  };

  const array = [1, 23, 3, 433, 123, 6, 546, 8];

  const sortItem = (result) => {
    return result.sort((a, b) => a - b);
  };

  const highNumber = (n) => {
    let result = [];
    array.forEach((item) => {
      if (item > n) {
        result.push(item);
      }
    });

    return sortItem(result);
  };

  console.log(highNumber(3));

  // keyArray();

  return (
    <div>
      Practice
      <button>Run function</button>
      <p></p>
    </div>
  );
};

export default FieldInForm;
