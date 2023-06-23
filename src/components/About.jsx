import React from 'react';
import SectionContainer from './SectionContainer';
import { Typography, Box, Link } from '@mui/material';
import SocialIcons from './SocialIcons';
import Stack from './Stack';

export default function About() {
  const aboutStyle = {
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
  };

  const aboutContainer = {
    alignItems: 'center',
    display: 'flex',
    gap: '10rem',
    height: '100vh',
    justifyContent: 'center',
    position: 'relative',
  };

  const aboutContent = {
    alignItems: 'center',
    display: 'flex',
    gap: '10rem',
    justifyContent: 'center',
    position: 'relative',
  };

  const aboutText = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '50rem',
    position: 'relative',
  };

  const aboutParagraph = {
    color: '#555',
    fontWeight: '500',
    lineHeight: '1.6',
  };

  return (
    <SectionContainer sectionId="about" sectionStyle={aboutStyle}>
      <div style={aboutContainer}>
        <div style={aboutContent}>
          <div style={aboutText}>
            <Typography variant="h5" sx={aboutParagraph} textAlign="center">
              Hi, I&apos;m Marcin. Web Developer based in Cracow, Poland.
            </Typography>
            <Box mt={2} mb={2}>
              <Stack stackName="Frontend">
                <span>JavaScript</span>, <span>TypeScript</span>, <span>React</span>
              </Stack>
              <Stack stackName="Backend">
                <span>Node.js</span>, <span>Express</span>, <span>MongoDB</span>
              </Stack>
              <Stack stackName="Tools">
                <span>Git</span>, <span>Postman</span>, <span>Jest</span>, <span>Vitest</span>, <span>Cypress</span>,{' '}
                <span>ChatGPT(3.5)</span>,
              </Stack>
              <Stack stackName="Learning">
                <span>Docker</span>, <span>Next.js</span>, <span>Unix-like environments</span>
              </Stack>
            </Box>
            <Box display="flex" justifyContent="flex-start">
              <SocialIcons size="large" showLabels={false} />
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Link href="#projects" color="inherit" underline="none">
                <Typography variant="h6">See my Projects</Typography>
              </Link>
            </Box>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
