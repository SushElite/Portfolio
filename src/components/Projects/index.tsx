import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const projects = [
  {
    title: "AI-Powered Video Recording Tool",
    description:
      "Developed a Video Content Creation Platform to help users create professional video resumes and personalized messages.",
    technologies: ["Google Mediapipe", "OpenAI", "FFmpeg"],
  },
  {
    title: "Automated Truth Validation System",
    description:
      "Built a Truth Validation System leveraging AI and NLP to ensure data accuracy in texts, documents, audio, and videos.",
    technologies: ["SpaCy", "AWS Transcribe", "Celery"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <Box className="section">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="primary"
          className="text-center"
        >
          🔧 Projects I’ve Worked On
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" component="h3" color="primary">
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    Technologies: {project.technologies.join(", ")}
                  </Typography>
                  hello. I am sushil rindhe. I am a full stack developer with
                  2.7 years of experience in technology and I am graduated from
                  IIT gUWAHTI in 2022.
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}
