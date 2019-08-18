import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import PropTypes from 'prop-types';

class Users extends Component {
    static propTypes = {
        getReports: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getUsers();
    };

    render() {
        const { users } = this.props.users;
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Login</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(row => (
                            <TableRow key={row.login}>
                                <TableCell component="th" scope="row">
                                    {row.login}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getUsers })(Users);