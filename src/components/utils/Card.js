import { Avatar, Card as AntCard } from "antd";
const { Meta } = AntCard;

export default function Card({ person, id }) {
  return (
    <AntCard
      style={{
        width: 200,
        marginTop: 10,
      }}
    >
      <Meta
        avatar={
          <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${id}`} />
        }
        title={person.name}
        //   description="This is the description"
      />
    </AntCard>
  );
}
