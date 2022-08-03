import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { BoxArrowUpRight, InfoCircle } from 'react-bootstrap-icons'
import { summaryItems, homeTableRows, homeShortcutItems } from '../../temp/home'
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryStack
} from 'victory'
import PageTitle from '../../components/widgets/PageTitle'

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
      <PageTitle title="Welcome to your dashboard 👋" />
      <Grid container spacing={3}>
        {summaryItems &&
          summaryItems.map((item, index) => {
            return (
              <Grid item xs={3} key={'summary item ' + index}>
                <Paper sx={{ padding: 2 }}>
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
                </Paper>
              </Grid>
            )
          })}
      </Grid>
      {/* ================================================= */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
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
          <Paper sx={{ padding: 2 }}>
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
          </Paper>
        </Grid>
      </Grid>
      {/* ============================================= */}

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        {homeShortcutItems &&
          homeShortcutItems.map((item, index) => {
            return (
              <Grid item xs={6} key={'helpful info' + index}>
                <Paper
                  sx={{
                    padding: 2
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      verticalAlign: 'middle'
                    }}
                  >
                    {/* <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '1rem',
                        heigth: '1rem',
                        marginRight: '.5rem',
                        color: theme.palette.primary.main
                      }}
                    >
                      {item.cardIcon}
                    </Box> */}
                    <div
                      style={{
                        verticalAlign: 'middle'
                      }}
                    ></div>
                    <Typography
                      variant="body"
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
                </Paper>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default Home
