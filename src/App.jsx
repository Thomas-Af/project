import { useState, useEffect } from "react";

import fetchData from './utils/fetchData';

export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
    fetchData();
  }, []);


 

 return <div className="App">AppPLAPLA</div>;
}
