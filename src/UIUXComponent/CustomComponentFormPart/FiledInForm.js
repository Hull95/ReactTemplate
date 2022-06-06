import React, {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {returnOrUpdate} from "ol/extent";

const REACT_VERSION = React.version;

const FieldInForm = () => {
    // const [newArray, setNewArray] = useState();
    // const arrayData = [
    //     {
    //         age: 23,
    //         name: "Test",
    //         hair: [
    //             {
    //                 blue: true,
    //             },
    //         ],
    //     },
    //     {
    //         age: 14,
    //         name: "Test1",
    //     },
    //     {
    //         age: 10,
    //         name: "Test2",
    //     },
    // ];

    // const keyArray = () => {
    //     arrayData.forEach((item) => {
    //         for (let data in item) {
    //             if (item.hasOwnProperty(data)) {
    //                 if (data) {
    //                     console.log(`${data} = ${item[data]}`);
    //                 }
    //             }
    //         }
    //     });
    // };

    // // function for sort
    // const array = [1, 23, 3, 433, 123, 6, 546, 8];
    //
    // function getMinInArray(arr) {
    //     return Math.min(...arr);
    // }
    //
    // // console.log(getMinInArray(array))
    //
    //
    // const sortItem = (result) => {
    //     return result.sort((a, b) => a - b);
    // };
    //
    // const highNumber = (n) => {
    //     let result = [];
    //     array.forEach((item) => {
    //         if (item > n) {
    //             result.push(item);
    //         }
    //     });
    //
    //     return sortItem(result);
    // };


    // console.log(highNumber(0));

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

    // const sumNumber = (a, b) => {
    //     return a + b;
    // }
    //
    // const randomNumber = (func) => {
    //     let number1 = Math.floor(Math.random() * 100) + 1;
    //     let number2 = Math.floor(Math.random() * 100) + 1;
    //
    //     return func(number1, number2)
    // }
    //
    // console.log(randomNumber(sumNumber))


    // const log = (num) => {
    //     if (num > 5) {
    //         return;
    //     }
    //     // console.log(num)
    //
    //     log(num + 1)
    // }
    //
    // log(3)


    // BOM

    // const windowSize = () => {
    //     let w = window.innerWidth;
    //     let h = window.innerHeight;
    // }
    //
    // windowSize();
    //
    //
    const [amount, setNewAmount] = useState(0)
    const [firstValue, setFirstValue] = useState(0)

    const valueInputField = (e) => {
        setFirstValue(e.target.value)
    }

    const handleClickAddValue = (e) => {
        setNewAmount(parseInt(amount) + parseInt(firstValue))
    }

    const handleClickRemoveValue = (e) => {
        if (firstValue === "") {
            setFirstValue(0)
        } else {
            setNewAmount(parseInt(amount) - parseInt(firstValue))
        }
    }
    //
    // const arr = [12, 324, 2];
    // const arr_words = ["test", "stef", "PROBA", "Sreca"]
    // let word = "testiranje"

    // arr.forEach((item) => {
    //     console.log(item)
    // })

    // const filter_arr = arr_words.filter((item) => item.length > 4)
    // const filter_arr_letter = arr_words.filter((item) => item != item.toUpperCase())
    // const num_letter = word.charAt(1)
    //
    //
    // let addNewValue = 3
    // arr.push(addNewValue)
    //
    // const checkValue = () => {
    //     let newArray = [];
    //
    //     arr.forEach((item) => {
    //         // console.log(item)
    //         if (item != 324) {
    //             newArray.push(item)
    //         }
    //     })
    //     // console.log(newArray)
    //     return newArray;
    // }
    //
    //
    // const checkDimesion = (height, width) => {
    //     if (height > 0 && width > 0) {
    //         return height + width;
    //     }
    //     return 34;
    // }
    //
    // const createNewName = (callback) => {
    //     let name1 = prompt('Please enter your name.');
    //     callback(name1);
    // }

    // function scaryClown() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve("test1")
    //         }, 2000)
    //     })
    // }
    //
    // const showMessage = async () => {
    //     console.log('calling');
    //     let message = await scaryClown();
    //     console.log(message);
    // }

    // const arrTextArray = "This is a test line. This line is test two. The third of the test lines."
    //
    // const wordFreq = (string) => {
    //     let words = string.replace(/[.]/g, '').split(" ");
    //     let freqMap = [];
    //     words.forEach((w) => {
    //         if (!freqMap[w]) {
    //             freqMap[w] = 0
    //         }
    //         freqMap[w] += 1;
    //     })
    //
    //     return freqMap
    // }
    //
    // wordFreq(arrTextArray)
    //
    // console.log(wordFreq(arrTextArray))

    // const numberWord = () => {
    //     console.log(arrTextArray.length)
    //     let wordNumber = arrTextArray.split(" ").length;
    //     console.log(wordNumber)
    //     return wordNumber
    // }
    //
    // numberWord()

    // showMessage()
    // console.log(createNewName(createName))
    // console.log(checkDimesion(4, 5))
    // console.log(checkValue())

    /* recursion */

    // const f = x => {
    //     console.log(x)
    //     return x * x;
    // }
    //
    // const sum = (y) => {
    //     let tem = y + 1;
    //     console.log(tem)
    //     return f(tem);
    // }
    //
    // console.log(sum(7))
    //
    // const fx = x => {
    //     const square = () => {
    //         const result = x * x;
    //         return result
    //     }
    //     return square();
    // }
    //
    // console.log(fx(2))
    //
    //
    // const fy = (y) => {
    //     return (x) => {
    //         return y * x;
    //     }
    // }
    //
    // console.log(fy(5)(4))

    // const deepCopy = (original) => {
    //     if (Array.isArray(original)) {
    //         const copy = [];
    //         for (const [index, value] of original.entries()) {
    //             copy[index] = deepCopy(value)
    //         }
    //         return copy;
    //     } else if (typeof original === 'object' && original !== null) {
    //         const copy = {};
    //         for (const [key, value] of Object.entries(original)) {
    //             copy[key] = deepCopy(value);
    //         }
    //         return copy;
    //     } else {
    //         return original;
    //     }
    //
    // }
    //
    // const original = {
    //     "name": "pipe_form",
    //     "label": "Heating Pipe Create Form",
    //     "description": "Heating Pipe Generic Form",
    //     "display_type": "tab",
    //     "tabs": [
    //         {
    //             "name": "tab1",
    //             "label": "Realizacija",
    //             "description": "",
    //             "column_count": 2,
    //             "order_no": 1,
    //             "columns": [
    //                 [
    //                     {
    //                         "name": "pipe_capacity",
    //                         "type": "decimal",
    //                         "label": "Kapacitet toplovoda",
    //                         "display_only": false,
    //                         "properties": {},
    //                         "validations": {
    //                             "max_digits": 7,
    //                             "decimal_places": 2
    //                         },
    //                         "order_no": 1,
    //                         "picklist_meta": null
    //                     },
    //                     {
    //                         "name": "construction_year",
    //                         "type": "integer",
    //                         "label": "Godina izgradnje",
    //                         "display_only": false,
    //                         "properties": {},
    //                         "validations": {},
    //                         "order_no": 2,
    //                         "picklist_meta": null
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         "name": "heating_pipe_category",
    //                         "type": "select",
    //                         "label": "Vrsta",
    //                         "display_only": false,
    //                         "properties": {},
    //                         "validations": {},
    //                         "order_no": 1,
    //                         "picklist_meta": {
    //                             "property_type": "parameter_table",
    //                             "display_property": "category_name",
    //                             "source_url": "/link/to/picklist/source/",
    //                             "controlling_field": ""
    //                         }
    //                     }
    //                 ]
    //             ]
    //         },
    //         {
    //             "name": "tab2",
    //             "label": "Opis deonice",
    //             "description": "",
    //             "column_count": 2,
    //             "order_no": 2,
    //             "columns": [
    //                 [
    //                     {
    //                         "name": "primary_pipe",
    //                         "type": "checkbox",
    //                         "label": "Primrani vod",
    //                         "display_only": false,
    //                         "properties": {},
    //                         "validations": {},
    //                         "order_no": 1,
    //                         "picklist_meta": null
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         "name": "heating_pipe_data_source",
    //                         "type": "select",
    //                         "label": "Izvor podataka",
    //                         "display_only": false,
    //                         "properties": {},
    //                         "validations": {},
    //                         "order_no": 1,
    //                         "picklist_meta": {
    //                             "property_type": "parameter_table",
    //                             "display_property": "heating_pipe_data_source",
    //                             "source_url": "/link/to/picklist/source/",
    //                             "controlling_field": ""
    //                         }
    //                     }
    //                 ]
    //             ]
    //         },
    //         {
    //             "name": "tab3",
    //             "label": "Prilozi",
    //             "description": "",
    //             "column_count": 2,
    //             "order_no": 3,
    //             "columns": [
    //                 [],
    //                 []
    //             ]
    //         }
    //     ]
    // }

    // console.log(deepCopy(original))

    // let JSONTabsInfo = deepCopy(original.tabs);
    // console.log(JSONTabsInfo)

    // const reformatCodeShowTabs = (data) => {
    //     const mappingTabs = data.map((key, value) => {
    //         return key
    //     })
    //     return mappingTabs
    // }

    // const parseFieldsFromTabs = (form_tabs = []) => {
    //     let fields = []
    //     form_tabs.forEach((key, value) => {
    //         console.log(key)
    //     })
    //     return form_tabs;
    // }
    //
    // parseFieldsFromTabs(JSONTabsInfo)
    //
    // function setElementNonDestructively(arr, index, value) {
    //     const updatedArr = [];
    //     for (const [i, v] of arr.entries()) {
    //         updatedArr.push(i === index ? value : v);
    //     }
    //     return updatedArr;
    // }
    //
    // const arrTest = ['a', 'b', 'c', 'd', 'e'];
    //
    // console.log(setElementNonDestructively(arrTest, 2, "x"))


    //counter
    // for (let i = 0; i < 9; i++) {
    //     console.log(i);
    // }

    // const arrayNumber = [1, 2, 3, 4, 5];
    // let arrayNew = []
    // for (let i = 0; i <= arrayNumber.length; i++) {
    //     console.log(i, "ovo je i")
    // }
    //
    // const showNumberWithText = (num) => {
    //     for (let i = 0; i <= num; i++) {
    //         console.log(i + ` Ovo je ${i} broj u redu.`);
    //     }
    // }
    //
    // showNumberWithText(7)
    //
    // const arrLetter = ['a', 'b', 'a', 'c', 'a', 'a', 'b'];
    //
    // const freqLetter = arrLetter.reduce(function (a, v) {
    //     return a[v] ? ++a[v] : a[v] = 1, a
    // }, {})
    //
    // console.log(freqLetter)
    //
    // function makeLine(len) {
    //     let line = ""
    //     for (let i = 1; i <= len; i++) {
    //         for (let j = 1; j <= i; j++) {
    //             line += "#"
    //         }
    //         line += "\n"
    //     }
    //     return line;
    // }
    //
    // console.log(makeLine(5))

    // let company = { // the same object, compressed for brevity
    //     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
    //     development: {
    //         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    //         internals: [{name: 'Jack', salary: 1300}]
    //     }
    // };

    // function sumSalaries(deparment) {
    //     if (Array.isArray(deparment)) {
    //         console.log(deparment)
    //         return deparment.reduce((prev, current) => prev + current.salary, 0)
    //     } else {
    //         let sum = 0;
    //         for (let subdep of Object.values(deparment)) {
    //             sum += sumSalaries(subdep)
    //         }
    //         return sum;
    //     }
    // }
    //
    // console.log(sumSalaries(company))

    // let menu = {
    //     width: 200,
    //     height: 300,
    //     title: "My menu"
    // };
    //
    // let sum = 0;
    // let name = "";
    // for (let item in menu) {
    //     if (typeof menu[item] == "number") {
    //         sum += menu[item]
    //     } else {
    //         name = menu[item]
    //     }
    // }
    //
    // console.log(name)

    //
    // const [numValue, setNumValue] = useState(0)
    // const [startNum, setStartNum] = useState(false)
    // const [displayValue, setDisplayValue] = useState([])
    //
    // function showRandomNumber(min, max) {
    //     return Array.from({length: 5}, num => Math.floor(Math.random() * (max - min + 1)) + min)
    // }
    //
    // const arr = showRandomNumber(-10, 10)
    // let index = 0;
    //
    // useEffect(() => {
    //     if (startNum) {
    //         const interval = setInterval(() => {
    //
    //         }, 1000)
    //         return () => {
    //             clearInterval(interval)
    //         }
    //     }
    // }, [startNum])
    //
    //
    // const handleClickStart = () => {
    //     setStartNum(prevState => !prevState)
    // }
    // let users = [
    //     {id: 'john', name: "John Smith", age: 20},
    //     {id: 'ann', name: "Ann Smith", age: 24},
    //     {id: 'petesadte', name: "Pete Peterson", age: 23},
    //     {id: 'stef', name: "Test123", age: 55},
    // ];
    //
    // function qroupById(arr) {
    //     return arr.reduce((obj, value) => {
    //         obj[value.name] = value;
    //         return obj;
    //     }, {})
    // }
    //
    // let userAge = qroupById(users);
    // console.log(userAge)
    //
    // function sumAge(obj) {
    //     let ageResult = 0;
    //     for (const [key, value] of Object.entries(obj)) {
    //         ageResult += value.age;
    //     }
    //     return ageResult;
    // }
    //
    // console.log(sumAge(userAge))

    let optionFunction = {
        title: "Test",
        items: ["item1", "item2"],
        name: "Stef"
    }

    function descObject(title = "") {
        console.log(title)
    }

    descObject();

    return (
        <>
            <div className={"container"}>
                {/*<div className={"row"}>*/}
                {/*    <div className={"col-12"}>*/}
                {/*        <h1>{displayValue ? displayValue : 0}</h1>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={"row"}>*/}
                {/*    <div className={"col-4"}>*/}
                {/*        <button className={"btn btn-success"} onClick={handleClickStart}>Start</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={"row"}>*/}
                {/*    <div className={"col-12 col-md-3 col-lg-3 col-xl-3"}>*/}
                {/*        <p>Ukupan iznos: {amount} {`$`}</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={"row pt-3"}>*/}
                {/*    <div className={"col-12 col-md-3 col-lg-3 col-xl-3"}>*/}
                {/*        <label>Prvi iznos: </label>*/}
                {/*        <input className={"form-control"} onChange={valueInputField} value={firstValue}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={"row pt-3"}>*/}
                {/*    <div className={"col-12 col-md-3 col-lg-3 col-xl-3"}>*/}
                {/*        <button className={"btn btn-success"} onClick={handleClickAddValue}>Dodaj iznos</button>*/}
                {/*    </div>*/}
                {/*    <div className={"col-12 col-md-3 col-lg-3 col-xl-3"}>*/}
                {/*        <button className={"btn btn-success"} onClick={handleClickRemoveValue}*/}
                {/*                disabled={parseInt(amount) < parseInt(firstValue)}>Oduzmi iznos*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default FieldInForm;
