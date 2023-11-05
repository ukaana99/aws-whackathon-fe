import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { capitalizeFirstLetter } from '@base/utils/string.utils';

function Breadcrumbs(props) {
  const { routes } = props;

  const location = useLocation();

  const fontSize = 13;
  const fontWeight = 600;

  let currentPath = '';
  const paths = location.pathname.split('/').filter((path) => path !== '');
  const lastPath = paths.pop();

  const _renderPathCrumbs = () => {
    return paths.map((path) => {
      currentPath += `/${path}`;
      const pageTitle = Object.prototype.hasOwnProperty.call(routes, path)
        ? routes[path].description
        : path;

      return (
        <MuiLink component={Link} key={path} to={currentPath} color="inherit" underline="none">
          {capitalizeFirstLetter(pageTitle)}
        </MuiLink>
      );
    });
  };

  const _renderLastCrumb = () => {
    const pageTitle = Object.prototype.hasOwnProperty.call(routes, lastPath)
      ? routes[lastPath].description
      : 'Detail';

    return (
      <MuiLink color="inherit" underline="none">
        {capitalizeFirstLetter(pageTitle)}
      </MuiLink>
    );
  };

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" fontSize={fontSize} fontWeight={fontWeight}>
      <Button sx={{ pl: 0 }} to="/" color="primary" component={Link}>
        <HomeIcon color="inherit" sx={{ mr: 1 }} />
        <Typography fontSize={fontSize} fontWeight={fontWeight}>
          Home
        </Typography>
      </Button>
      {_renderPathCrumbs()}
      {lastPath && _renderLastCrumb()}
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
