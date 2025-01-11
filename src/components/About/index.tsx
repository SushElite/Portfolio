import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function About() {
  return (
    <section id="about">
      <Box mt={5} textAlign="center">
        <Typography variant="h4" component="h2" gutterBottom color="primary">
          🔭 I’m currently working on:
        </Typography>
        <List sx={{ display: "inline-block", textAlign: "left" }}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Building an AI-First No-Code Platform to automate workflows for inspections, audits, data collection, and safety processes." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Developing a Workflow Builder to streamline form creation and task automation with AI." />
          </ListItem>
        </List>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={4}
          color="primary"
        >
          🌱 I’m currently learning:
        </Typography>
        <List sx={{ display: "inline-block", textAlign: "left" }}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="AWS Certified Solutions Architect – Associate" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="System Design & Code Architecture" />
          </ListItem>
        </List>
      </Box>
    </section>
  );
}
