import BootstrapTable from 'react-bootstrap-table-next';

const products = [];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'userName',
  text: 'userName'
}, {
  dataField: 'email',
  text: 'Email'
},
{
  dataField: 'address',
  text: 'Address'
}];

const userInfo =
{
  id: 1,
  userName: "Ramesh",
  email: "ramesh.45@gmail.com",
  address: "Milkly Way,Earth, India"
}

const getAllUserList = (count) => {

}

const PaginatedTable = () => {

  return (
    <BootstrapTable keyField='id' data={products} columns={columns} />
  );
}

export default PaginatedTable;