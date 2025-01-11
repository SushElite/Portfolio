import Head from "next/head";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sushil Rindhe</title>
        <meta name="description" content="Sushil Rindhe's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Hi 👋, I am Sushil Rindhe
        </Typography>
      </Box>
    </>
  );
}
