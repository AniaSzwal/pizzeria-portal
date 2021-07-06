import React from 'react';
import styles from './Dashboard.module.scss';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: 'Local', status: '125'},
  {id: 'Remote', status: '348'},
];

const demoContentTwo = [
  {id: 'Reservations', status: '125', name: 'reservation' },
  {id: 'Events', status: '348', name: 'concert'},
];

const Dashboard = () => (
  <div className={styles.component}>
    <AppBar>
      <Container maxWidth = 'lg'>
        <Toolbar disableGutters>
          <nav className={styles.navigation}>
            <Button className={styles.link} component = {Link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
            <Button className={styles.link} component = {Link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
            <Button className={styles.link} component = {Link} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth = 'lg'>
      <h2 className={styles.title}>Order statistics</h2>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type of order</TableCell>
              <TableCell>Number of order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
    <Container maxWidth = 'lg'>
      <h2 className={styles.title}>Reservations and events</h2>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContentTwo.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.name}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  </div>
);

export default Dashboard;
