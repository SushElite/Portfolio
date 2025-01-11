import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section id="contact">
      <Box className="section text-center">
        <Typography variant="h4" component="h2" gutterBottom color="primary">
          📫 Contact Me
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to reach out via email or LinkedIn!
        </Typography>
        <Typography variant="body2">
          Email:{" "}
          <Link href="mailto:sushilrindhe29@gmail.com">
            sushilrindhe29@gmail.com
          </Link>
        </Typography>
        <Typography variant="body2" mb={3}>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/sushil-rindhe"
            target="_blank"
          >
            linkedin.com/in/sushil-rindhe
          </Link>
        </Typography>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </section>
  );
}
