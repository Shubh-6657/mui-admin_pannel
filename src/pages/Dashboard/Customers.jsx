import PageTitle from '../../components/widgets/PageTitle'
import WorkInProgressImage from '../../components/widgets/WorkInProgressImage'
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Checkbox,
  IconButton
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { customersRows } from '../../temp/customers'
import { Trash3, Pencil } from 'react-bootstrap-icons'
import { display } from '@mui/system'

const Users = () => {
  const theme = useTheme()

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    'td, th': {
      borderColor: '#eaeaea'
    },
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    'td, th': {
      borderColor: '#eaeaea'
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))
  return (
    <>
      <PageTitle title="Manage your customers 🙋‍♀️" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      // onChange={onSelectAllClick}
                      inputProps={{
                        'aria-label': 'select all desserts'
                      }}
                    />
                  </TableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }}>
                    Customer
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }} align="left">
                    Contact
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }}>
                    Orders
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }} align="left">
                    Status
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }} align="right">
                    Actions
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customersRows.map((row) => (
                  <StyledTableRow key={row.email}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      padding="checkbox"
                    >
                      <Checkbox
                        color="primary"
                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                        // checked={rowCount > 0 && numSelected === rowCount}
                        // onChange={onSelectAllClick}
                        inputProps={{
                          'aria-label': 'select all desserts'
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <Box style={{ display: 'flex' }}>
                        <Box
                          style={{
                            overflow: 'hidden',
                            width: '2.5rem',
                            height: '2.5rem',
                            marginRight: '1rem',
                            borderRadius: '100%',
                            background: '#f5f5f5'
                          }}
                        >
                          <img
                            src={row.image}
                            style={{ width: '100%', height: '100%' }}
                          />
                        </Box>
                        <Box
                          style={{
                            height: '2.5rem',
                            width: '10rem'
                            // background: '#eee'
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: 'bold' }}
                          >
                            {row.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            style={{ color: '#888' }}
                          >
                            {row.email}
                          </Typography>
                        </Box>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell>{row.orders}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            marginRight: '.75rem',
                            borderRadius: '100%',
                            background:
                              row.status === 'Active'
                                ? theme.palette.success.light
                                : row.status === 'Pending'
                                ? theme.palette.primary.light
                                : row.status === 'Cancelled'
                                ? theme.palette.error.main
                                : '#888'
                          }}
                        ></div>
                        <Typography variant="caption">{row.status}</Typography>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton color="primary">
                        <Pencil style={{ padding: 4 }} />
                      </IconButton>
                      <IconButton color="error">
                        <Trash3 style={{ padding: 4 }} />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Users
