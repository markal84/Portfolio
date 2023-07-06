import { styled } from '@mui/system';
import { Typography, Card, CardContent, Grid, Collapse, Button } from '@mui/material';
import { useState } from 'react';

const RootCard = styled(Card)({
  marginBottom: '20px',
  maxWidth: '650px',
});

const FlexContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
});

const DateText = styled(Typography)({
  fontSize: '0.875rem',
  color: '#888',
});

const ProjectText = styled(Typography)({
  fontSize: '0.875rem',
  color: '#888',
  marginLeft: 'auto',
});

const TitleText = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
});

const DescriptionText = styled(Typography)({
  fontSize: '1rem',
  marginBottom: '10px',
});

const SummaryText = styled(Typography)({
  fontSize: '1rem',
  marginBottom: '10px',
});

const FullDescriptionText = styled(Typography)({
  fontSize: '1rem',
  color: '#555',
});

const ShowMoreButton = styled(Button)({
  marginTop: '10px',
});

export default function BlogArticle(props) {
  const { date, title, desc, fullDesc, project, summary } = props;
  const [expanded, setExpanded] = useState(false);

  const handleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid component="article" item xs={12} sm={10} md={8}>
      <RootCard elevation={0}>
        <CardContent>
          <FlexContainer>
            <DateText>{date}</DateText>
            <ProjectText>{project}</ProjectText>
          </FlexContainer>
          <TitleText>{title}</TitleText>
          <DescriptionText>{desc}</DescriptionText>
          <Typography variant="subtitle2" gutterBottom>
            What I learned:
          </Typography>
          <SummaryText>{summary}</SummaryText>
          <Collapse in={expanded}>
            <FullDescriptionText>{fullDesc}</FullDescriptionText>
          </Collapse>
          <ShowMoreButton onClick={handleShowMore} variant="outlined">
            {expanded ? 'Show Less' : 'Show More'}
          </ShowMoreButton>
        </CardContent>
      </RootCard>
    </Grid>
  );
}
