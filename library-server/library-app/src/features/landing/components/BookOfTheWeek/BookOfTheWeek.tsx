import React from "react";
import './BookOfTheWeek.css';
import { BookInformation } from "../../../book";

export const BookOfTheWeek:React.FC=() =>{
    return(
        <div className="book-of-the-week">
            <h1>Book of the Week</h1>
            <BookInformation
            book={
                {
                    _id:"1234",
                    barcode:"1234",
                    cover:"https://logolook.net/wp-content/uploads/2022/11/Java-Logo.png",
                    title:"java the ultimate Begginer's Guide to Learn Java Quickly With no Prior Experience",
                    authors:["Mark Read"],
                    description:"Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in 1995. Designed with simplicity, portability, and security in mind, Java quickly became a popular choice for building applications across various platforms. One of its key features is the principle of write once, run anywhere ",
                    subjects:["java","learning"],
                    publicationDate: new Date("2020-01-01"),
                    publisher:"some publisher",
                    pages:200,
                    genre:"Non-fiction",
                    records: []
                }
            }

            />
        </div>
    )
}