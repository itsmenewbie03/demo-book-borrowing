import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BorrowTable from "./components/BorrowTable";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    // useEffect to load the data from API
    // won't be using async/await coz YT said so
    // on the request don't forget to add auth
    //
    useEffect(() => {
        setTimeout(() => {
            fetch(
                "https://api-demo-book-borrowing.itsdarkhere4ever.repl.co/borrow_data",
                {
                    method: "GET",
                    headers: {
                        secret_key: "server_sige_na",
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(`WE GOT FROM API USING useEffect: ${data}`);
                    setData(data);
                });
        }, 1000);
    }, []);
    return (
        <>
            <div className="min-h-screen min-w-full">
                {data ? (
                    <>
                        <table className="table table-auto w-full">
                            <caption className="text-2xl m-2">
                                Book Borrowing Table
                            </caption>
                            <thead>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Borrow Date</th>
                                    <th>Borrow Due Data</th>
                                    <th>Borrow Return Date</th>
                                    <th>Borrow Fines</th>
                                    <th>Borrow Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr>
                                        {/* No I Wish I'm Using TS */}
                                        <td>{item.borrow_transactionid}</td>
                                        <td>{item.borrow_date}</td>
                                        <td>{item.borrow_duedate}</td>
                                        <td>{item.borrow_returndate}</td>
                                        {/* <td>{item.borrow_bookbatch}</td> */}
                                        <td>{item.borrow_fines}</td>
                                        <td>{item.borrow_status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="divider">END</div>
                        <BorrowTable borrowDataArray={data} />
                    </>
                ) : (
                    <>
                        <span className="loading loading-spinner loading-lg"></span>
                        <p className="text-3xl">Data Loading...</p>
                    </>
                )}
            </div>
        </>
    );
}

export default App;
