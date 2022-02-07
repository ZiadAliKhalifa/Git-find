import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./Results.css"

const Results = ({ repositories, handleClick }) => {

    return (
        <>
            <TableContainer component={Paper} className="table">
                <Table>
                    <TableHead>
                        <TableRow className="table-head">
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Owner</TableCell>
                            <TableCell>Forks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {repositories && repositories.map((repo) => (
                            <TableRow key={repo.id} onClick={e => { handleClick(repo.id) }}>
                                <TableCell>{repo.id}</TableCell>
                                <TableCell>{repo.name}</TableCell>
                                <TableCell>{repo?.owner?.login}</TableCell>
                                <TableCell>{repo.forks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Results;

