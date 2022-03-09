import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '110px',
  },
  mapContainer: {
    height: '85vh', width: '100%', display: 'contents',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer', borderRadius: "3px",
  },
  typography: {
    margin: '.25rem 0', textAlign: 'center', fontSize: '14px', lineHeight: 'normal', fontWeight: '600'
  },
  stars: {
    display: 'flex', justifyContent: 'center'
  }
}));