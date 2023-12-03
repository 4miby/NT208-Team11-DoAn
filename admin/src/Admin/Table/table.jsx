import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      room: "Deluxe Room",
      customer: "John Smith",
      date: "1 March",
      person: 2,
      method: "Cash",
      status: "Approved",
    },
    {
      id: 2235235,
      room: "VIP",
      customer: "Michael Doe",
      date: "1 March",
      person: 2,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      room: "Singel",
      customer: "John Smith",
      date: "1 March",
      person: 1,
      method: "Cash",
      status: "Pending",
    },
    {
      id: 2357741,
      room: "Double",
      customer: "Jane Smith",
      date: "1 March",
      person: 3,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      room: "Penhouse",
      customer: "Harold Carol",
      date: "1 March",
      person: 5,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Room</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Person</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.room}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.person}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
