import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
const products = [
  { id: 1, name: "Item 1", price: 100 },
  { id: 2, name: "Item 2", price: 102 }
];

const columns = [
  {
    dataField: "id",
    text: "Product ID"
  },
  {
    dataField: "userName",
    text: "userName"
  },
  {
    dataField: "email",
    text: "Email"
  },
  {
    dataField: "address",
    text: "Address"
  }
];

function userInfo(id, userName, email, address) {
  this.id = id;
  this.userName = userName;
  this.email = email;
  this.address = address;
}

const userData = {
  id: "1",
  userName: "Ramesh",
  email: "Ramesh.56@gmail.com",
  address: "Moon pe aa gaya abb"
};

const PaginatedTable = () => {
  console.log("Inside Paginted Table\n");

  const getAllUserList = (count) => {
    let userList = [];

    for (let i = 0; i < count; i++) {
      const clone = new userInfo(
        i,
        "Ramesh",
        "ramesh.45@gmail.com",
        "Earth pe hu bhai"
      );

      userList.push(clone);
    }

    console.log("Generated userList is\n");
    console.log(userList);
    return userList;
  };

  const getAllMoonUserList2 = (count) => {
    let userList = [];

    for (let i = 0; i < count; i++) {
      let copy = userData;
      copy.id = i;

      userList.push(copy);
    }

    console.log(userList);
    console.log(products);

    return userList;
  };

  const getAllMoonUserList = (count) => {
    let userList = [];
    for (let i = 0; i < count; i++) {
      const user = {
        id: i,
        userName: "Ramesh",
        email: "Ramesh.67@gmail.com",
        address: "Moon pe aa gaya bhai"
      };
      userList.push(user);
    }
    return userList;
  };

  return (
    <>
      <h2> Table Testing</h2>
      <BootstrapTable
        keyField="id"
        data={getAllMoonUserList(5)}
        columns={columns}
      />
      {/* <BootstrapTable
        keyField="id"
        data={getAllUserList(10)}
        columns={columns}
      /> */}
    </>
  );
};

export default PaginatedTable;
