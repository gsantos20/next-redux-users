import List from "components/List";
import { Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { CreateUser, User } from "@models/User";
import { createUser, deleteUser, getUsers } from "reducers/users";
import { useEffect } from "react";

const UsersList = () => {
  const users = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  // const handleCreateUser = async (user: CreateUser) => {
  //   dispatch(await createUser(user));
  // };

  // const handleDeleteUser = (id: number) => {
  //   dispatch(deleteUser(id));
  // };



  return (
    <Row className="mt-3">
      <List data={users} />
    </Row>
  );
};

export default UsersList;
