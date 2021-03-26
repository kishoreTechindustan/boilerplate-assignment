import React, { useState, useEffect } from 'react';
import Layout from '../../components/common/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, ListItem, List, Divider, TableCell } from '@material-ui/core';
import * as dashboardActions from '../../redux/actions/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from '../../components/common/CustomTable';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.dashboard.users);

  useEffect(() => {
    dispatch(dashboardActions.getUser())
      .then((res) => {})
      .catch((err) => {});
  }, []);

  return (
    <Layout>
      <Grid container>
        <Grid item sx={12} md={12} lg={12} xl={12}>
          <CustomTable
            tableHeading={[
              'Name',
              'Email',
              'Phone',
              'Address',
              'Website',
              'Company',
            ]}
            rowsData={createData(users)}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

function createData(data) {
  return data && data && data.length
    ? data.map((user) => {
        return (
          <React.Fragment key={user && user.id}>
            <TableCell>{user && user.name}</TableCell>
            <TableCell>{user && user.email}</TableCell>
            <TableCell>{user && user.phone}</TableCell>
            <TableCell>{user && user.address && user.address.street}</TableCell>
            <TableCell>{user && user.website}</TableCell>
            <TableCell>{user && user.company && user.company.name}</TableCell>
          </React.Fragment>
        );
      })
    : [];
}
