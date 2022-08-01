import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { summaryItems, homeTableRows, homeShortcutItems } from '../../temp/home'
import { BoxArrowUpRight, InfoCircle } from 'react-bootstrap-icons'
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryStack
} from 'victory'

const Home = () => {
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

  const data2012 = [
    { month: 1, earnings: 13000 },
    { month: 2, earnings: 16500 },
    { month: 3, earnings: 14250 },
    { month: 4, earnings: 19000 },
    { month: 5, earnings: 8000 },
    { month: 6, earnings: 21800 }
  ]

  const data2013 = [
    { month: 1, earnings: 15000 },
    { month: 2, earnings: 12500 },
    { month: 3, earnings: 19500 },
    { month: 4, earnings: 13000 },
    { month: 5, earnings: 8000 },
    { month: 6, earnings: 21800 }
  ]

  const data2014 = [
    { month: 1, earnings: 11500 },
    { month: 2, earnings: 13250 },
    { month: 3, earnings: 20000 },
    { month: 4, earnings: 15500 },
    { month: 5, earnings: 21800 },
    { month: 6, earnings: 6000 }
  ]

  const data2015 = [
    { month: 1, earnings: 18000 },
    { month: 2, earnings: 13250 },
    { month: 3, earnings: 15000 },
    { month: 4, earnings: 12000 },
    { month: 5, earnings: 14000 },
    { month: 6, earnings: 12000 }
  ]

  return (
    <>
      <Box
        style={{
          width: '100%',
          borderBottom: '1px solid #eaeaea',
          padding: '1rem 0 1rem',
          marginBottom: '1.5rem'
        }}
      >
        <Typography variant="h6" style={{ userSelect: 'none' }}>
          Welcome to your dashboard 👋
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {summaryItems &&
          summaryItems.map((item, index) => {
            return (
              <Grid item xs={3} key={'summary item ' + index}>
                <Box
                  sx={{
                    padding: 2,
                    border: '1px solid #eaeaea',
                    backgroundColor: '#fff',
                    borderRadius: '4px'
                  }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      color: '#999',
                      userSelect: 'none'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    noWrap
                    variant="h6"
                    fontWeight={'bold'}
                    style={{
                      userSelect: 'none',
                      marginTop: '.25rem'
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    noWrap
                    variant="body2"
                    style={{
                      color: '#888',
                      userSelect: 'none',
                      marginTop: '.25rem'
                    }}
                  >
                    You've gained{' '}
                    <span style={{ color: theme.palette.primary.main }}>
                      {item.increasedBy}
                    </span>{' '}
                    this week
                  </Typography>
                </Box>
              </Grid>
            )
          })}
      </Grid>
      {/* ================================================= */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={8}>
          <TableContainer
            component={Paper}
            elevation={0}
            style={{ border: '1px solid #eaeaea' }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ fontWeight: 'bold' }}>
                    Tracking no.
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }} align="left">
                    Product
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }} align="right">
                    Quantity
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }} align="left">
                    Status
                  </StyledTableCell>
                  <StyledTableCell style={{ fontWeight: 'bold' }} align="right">
                    Total Amount
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {homeTableRows.map((row) => (
                  <StyledTableRow key={row.number}>
                    <StyledTableCell component="th" scope="row">
                      {row.number}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                    <StyledTableCell align="right">
                      R{row.total}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              padding: 2,
              border: '1px solid #eaeaea',
              backgroundColor: '#fff',
              borderRadius: '4px'
            }}
          >
            <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
              <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6]}
                tickFormat={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']}
              />
              <VictoryAxis dependentAxis tickFormat={(x) => `R${x / 1000}k`} />
              <VictoryStack
                colorScale={['#004080', '#0066CC', '#0080FF', '#4DA6FF']}
              >
                <VictoryBar data={data2012} x="month" y="earnings" />
                <VictoryBar data={data2013} x="month" y="earnings" />
                <VictoryBar data={data2014} x="month" y="earnings" />
                <VictoryBar data={data2015} x="month" y="earnings" />
              </VictoryStack>
            </VictoryChart>
          </Box>
        </Grid>
      </Grid>
      {/* ============================================= */}

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        {homeShortcutItems &&
          homeShortcutItems.map((item, index) => {
            return (
              <Grid item xs={6} key={'helpful info' + index}>
                <Box
                  sx={{
                    padding: 2,
                    border: '1px solid #eaeaea',
                    backgroundColor: '#fff',
                    borderRadius: '4px'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '1.5rem',
                        heigth: '3rem',
                        color: theme.palette.primary.main
                      }}
                    >
                      {item.cardIcon}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: theme.palette.primary.main,
                        userSelect: 'none'
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    noWrap
                    variant="subtitle1"
                    fontWeight={'bold'}
                    style={{
                      userSelect: 'none',
                      marginTop: '.5rem'
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      color: '#888',
                      userSelect: 'none',
                      marginTop: '.5rem'
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '1rem'
                    }}
                  >
                    <Button
                      variant="contained"
                      disableElevation
                      style={{ textTransform: 'none' }}
                      endIcon={item.buttonIcon}
                    >
                      {item.buttonTitle}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default Home
