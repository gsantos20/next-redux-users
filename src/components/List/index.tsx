
import { CreateUser, User } from "@models/User";
import moment from "moment";
import { Container } from "react-bootstrap";

const TableUser = ({ item, editUser, removeUser }: {
  item: User;
  editUser: (user: User) => void;
  removeUser: (id: number) => void;
}) => {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.username}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{moment(item.createdAt).format('DD/MM/YYYY HH:mm')}</td>
      <td>{moment(item.updatedAt).format('DD/MM/YYYY HH:mm')}</td>
      <td>
      <button type="button" className="btn btn-outline-primary btn-sm"
        onClick={() => editUser(item)}>
        <i className="fa fa-edit"></i>
      </button>
      &nbsp;&nbsp;
      <button type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => removeUser(item.id)}>
        <i className="fa fa-trash"></i>
      </button>
      </td>
    </tr>
  );
};

interface ListProps {
  data: User[];
  editUser: (user: User) => void;
  removeUser: (id: number) => void;
}


const List: React.FC<ListProps> = ({ data, editUser, removeUser}) => {
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data !== null && data.map((item) => (
            <TableUser
              key={item.id}
              item={item}
              editUser={editUser}
              removeUser={removeUser}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default List;

