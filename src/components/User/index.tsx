import List from "components/List";
import { Card, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { CreateUser, User } from "@models/User";
import { createUser, deleteUser, getUsers, updateUser } from "reducers/users";
import { useEffect, useState } from "react";
import ModalItem from "components/ModaItem";
import { Header } from "components/Header";

const UsersList = () => {
  const users = useAppSelector(state => state.users);
  const [user, setUser] = useState({})
  const [modoTela, setModoTela] = useState('POST')

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  const editUser = async (data: User) => {
    console.log(data);
    setUser(data);
    setModalShow(true)
    setModoTela('PUT')
  };

  const removeUser = async (id: number) => {
    dispatch(deleteUser(id));
 };

  const saveForm = async (data: User) => {
    console.log(data);

    modoTela === 'POST'
    ? dispatch(createUser(data))
    : dispatch(updateUser(data))


    setModalShow(false)
    setTimeout(() => dispatch(getUsers()), 300)
  };





  const [modalShow, setModalShow] = useState(false);



  return (
    <Row className="mt-3">
      <Card className="p-0">

      <Card.Header as="h3" className="p-3 ps-4 pe-4">
        <Header onShow={() => setModalShow(true)}/>
      </Card.Header>

      <Card.Body>
        <List data={users} editUser={editUser} removeUser={removeUser} />
      </Card.Body>
      </Card>
      <ModalItem data={user} show={modalShow}
        onHide={() => setModalShow(false)}
        onSave={(data: User) => saveForm(data)}
      >
      </ModalItem>
    </Row>
  );
};

export default UsersList;
