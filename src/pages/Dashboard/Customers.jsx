import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Checkbox,
  IconButton,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { Trash3, Pencil, Search, Plus as PlusIcon } from 'react-bootstrap-icons'
import { useState } from 'react'
import { customersRows } from '../../temp/customers'
import PageTitle from '../../components/widgets/PageTitle'

function Users() {
  const theme = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    'td, th': {
      borderColor: '#e5e5e5',
    },
    [`&.${tableCellClasses.head}`]: {
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    'td, th': {
      borderColor: '#e5e5e5',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <PageTitle title="Manage your customers 🙋‍♀️" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Box
              display="flex"
              justifyContent="space-between"
              style={{ borderBottom: '0', padding: '1rem' }}
            >
              <TextField
                variant="standard"
                placeholder="Search customers"
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    background: '#f5f5f5',
                    width: '300px',
                    borderRadius: '4px',
                    padding: '20px',
                    height: '2.25rem',
                    fontSize: '.875rem',
                    marginLeft: '.15rem',
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search style={{ marginRight: '.35rem' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                style={{ marginLeft: '1rem' }}
                startIcon={<PlusIcon />}
              >
                Add Customer
              </Button>
            </Box>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead
                style={{
                  background: '#fafafa',
                  borderTop: '1px solid #e5e5e5',
                  borderBottom: '1px solid #e5e5e5',
                }}
              >
                <TableRow>
                  <TableCell padding="checkbox" style={{ borderBottom: 0 }}>
                    <Checkbox
                      color="primary"
                      inputProps={{
                        'aria-label': 'select all desserts',
                      }}
                    />
                  </TableCell>
                  <StyledTableCell
                    style={{ fontWeight: 'bold', borderBottom: 0 }}
                  >
                    Customer
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontWeight: 'bold', borderBottom: 0 }}
                    align="left"
                  >
                    Contact
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontWeight: 'bold', borderBottom: 0 }}
                  >
                    Orders
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontWeight: 'bold', borderBottom: 0 }}
                    align="left"
                  >
                    Status
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontWeight: 'bold', borderBottom: 0 }}
                    align="center"
                  >
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
                        inputProps={{
                          'aria-label': 'select all desserts',
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
                            background: '#f5f5f5',
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
                            width: '10rem',
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
                            marginRight: '.7rem',
                            borderRadius: '100%',
                            background:
                              row.status === 'Active'
                                ? theme.palette.success.light
                                : row.status === 'Pending'
                                ? theme.palette.primary.light
                                : row.status === 'Cancelled'
                                ? theme.palette.error.main
                                : '#888',
                          }}
                        />
                        <Typography variant="caption">{row.status}</Typography>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="center">
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
            <div
              style={{
                width: '100%',
                borderTop: '1px solid #e5e5e5',
                padding: '1rem',
              }}
            >
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={customersRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </div>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Users
