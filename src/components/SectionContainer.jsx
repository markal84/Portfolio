/* eslint-disable react/prop-types */
import { Container } from '@mui/material';

export default function SectionContainer({ sectionId = '', sectionStyle = '', children }) {
  return (
    <section id={sectionId} style={sectionStyle}>
      <Container maxWidth="xl">{children}</Container>
    </section>
  );
}
