import React, {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";

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


    // function for sort
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

    // console.log(highNumber(3));

    // keyArray();


    // array practice
    // const arrayFor =  ["Jabuka", "Banana", "Mango", "Narandža", "Papaja"];
    //
    // for(let i = 0; i < arrayFor.length; i++) {
    //   console.log("Ovo je " + arrayFor[i] + " !")
    // }
    //
    // arrayFor.forEach((item) => {
    //   console.log(item)
    // })
    //
    // for(let fruits of arrayFor) {
    //   console.log(fruits)
    // }


    // function practice

    const sumNumber = (a, b) => {
        return a + b;
    }

    const randomNumber = (func) => {
        let number1 = Math.floor(Math.random() * 100) + 1;
        let number2 = Math.floor(Math.random() * 100) + 1;

        return func(number1, number2)
    }
    //
    // console.log(randomNumber(sumNumber))


      const log = (num) => {
        if (num > 5) {
            return;
        }
        // console.log(num)

         log(num + 1)
    }

    log(3)


    // BOM

    const windowSize = () => {
        let w = window.innerWidth;
        let h = window.innerHeight;
    }

    windowSize();

    return (
        <>
            Practice
        </>
    );
};

export default FieldInForm;
