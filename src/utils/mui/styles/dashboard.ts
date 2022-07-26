import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'

// export const AppBarStyles = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open'
// })<AppBarProps>(({ theme }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   backgroundColor: '#fff',
//   borderBottom: '1px solid #eee'
// }))

// export const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open'
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme)
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme)
//   })
// }))
