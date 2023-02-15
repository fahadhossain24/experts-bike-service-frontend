import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleService(data))
    }, [])

    return [singleService];
}

export default useServiceDetail;