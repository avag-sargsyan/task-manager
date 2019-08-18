import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { getReports } from '../actions/reportActions';
import PropTypes from 'prop-types';

class Reports extends Component {
    static propTypes = {
        getReports: PropTypes.func.isRequired,
        report: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getReports();
    };

    render() {
        const { reports } = this.props.report;
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Estimation</TableCell>
                            <TableCell align="right">Spent</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reports.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.estimation}</TableCell>
                                <TableCell align="right">{row.spent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({
    report: state.report
});

export default connect(mapStateToProps, { getReports })(Reports);