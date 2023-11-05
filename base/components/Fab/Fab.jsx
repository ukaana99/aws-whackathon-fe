import MuiFab from '@mui/material/Fab';

const DefaultFab = (props) => <MuiFab {...props} />;
DefaultFab.defaultProps = {
  children: 'Text Button',
  variant: 'extended',
  color: 'primary',
};

const Fab = (props) => {
  return <DefaultFab {...props}></DefaultFab>;
};

export default Fab;
