import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppNewsUpdate from '../app-news-update';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        안녕하세요! 글로벌한 알바 플랫폼! 알바버디입니다. 👋
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={6}>
          <AppNewsUpdate
            title="새로 올라온 알바"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>
        <Grid xs={12} md={6} lg={6}>
          <AppNewsUpdate
            title="나에게 딱 맞는 알바"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
