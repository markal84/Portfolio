import { Container } from '@mui/material';

const sectionContainer = {
  alignItems: 'center',
  display: 'flex',
  gap: '10rem',
  justifyContent: 'center',
  position: 'relative',
};

export default function SectionContainer({ sectionId = '', sectionStyle = {}, children }) {
  return (
    <section id={sectionId} style={sectionStyle}>
      <Container maxWidth="xl" sx={sectionContainer}>
        {children}
      </Container>
    </section>
  );
}
