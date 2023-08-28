
import { ShowUser, User } from "@models/User";
import moment from "moment";
import { Container } from "react-bootstrap";

const TableUser = ({
  id,
  email,
  username,
  firstName,
  lastName,
  createdAt,
  updatedAt,
}: ShowUser) => {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{username}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{moment(createdAt).format('DD/MM/YYYY HH:mm')}</td>
      <td>{moment(updatedAt).format('DD/MM/YYYY HH:mm')}</td>
    </tr>
  );
};

interface ListProps {
  data: User[];
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <Container>
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Data de Criação</th>
            <th>Data de Atualização</th>
          </tr>
        </thead>
        <tbody>
          {data !== null && data.map((item) => (
            <TableUser
              id={item.id}
              key={item.id}
              username={item.username}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default List;

