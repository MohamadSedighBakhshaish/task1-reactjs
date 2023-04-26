import { useEffect } from "react";
import request from "../tools/request";
import Card from "../utils/Card";
import { useDispatch, useSelector } from "react-redux";
import { setPersons } from "../redux/actions";
import { Col, Row } from "antd";
import Table from "../utils/Table";

export default function Home() {
  const dispatch = useDispatch();

  const persons = useSelector((s) => s?.persons);

  useEffect(() => {
    request("/users").then(({ data }) => {
      data.length = 6;
      dispatch(setPersons(data));
    });
  }, []);

  return (
    <div>
      <Row>
        <Col span={5}>
          <ul>
            {persons.map((person) => (
              <Card key={person.id} person={person} personId={person.id} />
            ))}
          </ul>
        </Col>
        <Col span={19}>
          <Table />
        </Col>
      </Row>
    </div>
  );
}
