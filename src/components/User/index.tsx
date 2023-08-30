import List from "components/List";
import { Card, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { CreateUser, User } from "@models/User";
import { createUser, deleteUser, getUsers, updateUser } from "reducers/users";
import { useEffect, useState } from "react";
import ModalItem from "components/ModaItem";
import { HeaderList } from "components/HeaderList";
import { ModalDelete } from "components/ModalDelete";

const UsersList = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(state => state.users);
  const [user, setUser] = useState<User>()
  const [modoTela, setModoTela] = useState('POST')
  const [modalItemShow, setModalItemShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);
  const [modalMsgDelete, setModalMsgDelete] = useState('');

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  const openModal = async (modoTela: 'POST' | 'PUT' | 'DELETE', user?: User) => {
    setModoTela(modoTela)
    setUser(user);

    if(modoTela !== 'DELETE'){
      setModalItemShow(true)
    }else{
      const message = `${user?.id} - ${user?.firstName}`
      setModalMsgDelete(message)
      setModalDeleteShow(true)
    }

  };

  const saveForm = async (data: User) => {
    modoTela === 'POST'
    ? dispatch(createUser(data))
    : dispatch(updateUser(data))


    setModalItemShow(false)
    setTimeout(() => dispatch(getUsers()), 300)
  };

  const removeUser = async () => {
    setModalDeleteShow(false)

    if(user){
      dispatch(deleteUser(user.id));
    }

    setTimeout(() => dispatch(getUsers()), 300)
 };



  return (
    <>
      <Card className="p-0">

      <Card.Header as="h3" className="p-3 ps-4 pe-4">
        <HeaderList onShow={() => openModal('POST')}/>
      </Card.Header>

      <Card.Body>
        <List data={users} editUser={openModal} removeUser={openModal} />
      </Card.Body>
      </Card>
      <ModalItem data={user} show={modalItemShow}
        onHide={() => setModalItemShow(false)}
        onSave={(data: User) => saveForm(data)}
      />
      <ModalDelete data={user} show={modalDeleteShow} message={modalMsgDelete}
        onHide={() => setModalDeleteShow(false)}
        onSave={() => removeUser()}
      />
    </>
  );
};

export default UsersList;
