export const userColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Địa chỉ',
    width: 250,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'SĐT',
    width: 150,
    editable: true,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 180,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];