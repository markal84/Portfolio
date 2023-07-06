import SectionContainer from '../components/SectionContainer';
import { Typography } from '@mui/material';

const notFoundStyle = {
  marginTop: '65px',
};

function NotFound() {
  return (
    <SectionContainer sectionId="cv" sectionStyle={notFoundStyle}>
      <Typography variant="h5">Page not found...</Typography>
    </SectionContainer>
  );
}

export default NotFound;
