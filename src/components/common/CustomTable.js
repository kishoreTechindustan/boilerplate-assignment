import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function stableSort(array) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function CustomTable(props) {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { tableHeading = [], rowsData = [] } = props;

  return (
    <div className="cus-table box-shadow border-radius-20 bg-white-color">
      <TableContainer className="box-shadow-none" component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeading.map((data, index) => {
                return <TableCell key={index}>{data}</TableCell>;
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {rowsData && rowsData.length ? (
              stableSort(rowsData)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return <TableRow key={index}>{row}</TableRow>;
                })
            ) : (
              <TableRow>
                <TableCell colSpan="6">
                  <span className="no-data-found">
                    {/* <img src="./images/no-data-found.svg" /> */}
                    <p>No Data Found</p>
                  </span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className="cus-table-pagination"
      />
    </div>
  );
}
