import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonatCard from "./DonatCard";


const Donat = () => {

    const [donat, setDonat] = useState();
    const {id} = useParams();
    const donations = useLoaderData();

    useEffect(() => {
        const findDonat = donations?.find(donat => donat.id == id);
        setDonat(findDonat);
    },[id,donations])


    return (
        <div>
            <DonatCard donat={donat}></DonatCard>
        </div>
    );
};

export default Donat;