import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box className="section text-center">
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        Hi 👋, I am Sushil Rindhe
      </Typography>
      <Typography variant="h5" color="textSecondary">
        Lead Full Stack Developer | AWS Enthusiast | Building Scalable Solutions
      </Typography>
    </Box>
  );
}
