import { useEffect } from "react";
import request from "../tools/request";
import Card from "../utils/Card";
import { useDispatch, useSelector } from 'react-redux'
import { setPerson } from "../redux/actions";

export default function Home() {

    const dispatch = useDispatch()

    const person = useSelector(s => s?.person)

    useEffect(() => {
        request('/users/1')
        .then(({ data }) => dispatch(setPerson(data)))
    },[])
    
  return (
    <div>
        <Card id={1} person={person} />
        <Card id={2} person={person} />
        <Card id={3} person={person} />
        <Card id={4} person={person} />
    </div>
  );
}
