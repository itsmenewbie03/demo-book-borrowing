import React from "react";

function BorrowTable({ borrowDataArray }) {
    return (
        <div>
            <table className="table table-auto">
                <caption className="text-3xl">Borrow Data</caption>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Batch ID</th>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Student Name</th>
                        <th>Student Address</th>
                        <th>Student Gender</th>
                        <th>Student Age</th>
                    </tr>
                </thead>
                <tbody>
                    {borrowDataArray.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* outer most loop */}
                            {item.borrow_bookbatch.map((batch, batchIndex) => (
                                <React.Fragment key={`${index}-${batchIndex}`}>
                                    {/* loop through borrow_bookbatch since it is an array */}
                                    {batch.batch_books.map(
                                        (book, bookIndex) => (
                                            <tr
                                                key={`${index}-${batchIndex}-${bookIndex}`}
                                            >
                                                <td>
                                                    {item.borrow_transactionid}
                                                </td>
                                                <td>{batch.batch_id}</td>
                                                <td>{book.book_title}</td>
                                                <td>
                                                    {/* loop through the authors of each book */}
                                                    {book.book_authors.map(
                                                        (
                                                            author,
                                                            authorIndex
                                                        ) => (
                                                            <div
                                                                key={`${index}-${batchIndex}-${bookIndex}-${authorIndex}`}
                                                            >
                                                                {/* join the first and last name of author */}
                                                                {
                                                                    author.aut_firstname
                                                                }{" "}
                                                                {
                                                                    author.aut_lastname
                                                                }
                                                                {/* add a comma unless it's the last author */}
                                                                {authorIndex !==
                                                                    book
                                                                        .book_authors
                                                                        .length -
                                                                        1 &&
                                                                    ","}
                                                            </div>
                                                        )
                                                    )}
                                                </td>
                                                {/* now just display the student info */}
                                                <td>
                                                    {
                                                        batch.batch_studentid
                                                            .stud_firstname
                                                    }{" "}
                                                    {
                                                        batch.batch_studentid
                                                            .stud_lastname
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        batch.batch_studentid
                                                            .stud_address
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        batch.batch_studentid
                                                            .stud_gender
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        batch.batch_studentid
                                                            .stud_age
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BorrowTable;
