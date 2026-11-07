import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function PortfolioHero() {
  const techStack = ['React', 'JavaScript', 'Material-UI', 'Node.js', 'TypeScript', 'CSS3'];

  return (
    <Box
      sx={{
        backgroundColor: '#f6f8f5', // Soft off-white with warm green undertone
        color: '#1c2419',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left Column: Bio & Intro */}
          <Grid item xs={12} md={7}>
            {/* Availability Badge */}
            <Chip
              icon={
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#295a1a',
                    ml: 1,
                  }}
                />
              }
              label="Available for new opportunities"
              sx={{
                mb: 3,
                backgroundColor: 'rgba(41, 90, 26, 0.08)',
                color: '#295a1a',
                fontWeight: 600,
                fontSize: '0.875rem',
                border: '1px solid rgba(41, 90, 26, 0.2)',
              }}
            />

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                mb: 2,
                color: '#142011',
              }}
            >
              Hi, I'm <Box component="span" sx={{ color: '#295a1a' }}>Anus</Box>
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.25rem', md: '1.75rem' },
                color: '#3d4a39',
                mb: 2.5,
              }}
            >
              Frontend Engineer & UI/UX Craftsman
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#4b5548',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: '600px',
              }}
            >
              I build scalable, high-performance web applications with clean architecture and intuitive user experiences. Specialized in React, Material-UI, and modern JavaScript ecosystems.
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="#projects"
                sx={{
                  backgroundColor: '#295a1a',
                  color: '#ffffff',
                  px: 4,
                  py: 1.5,
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px 0 rgba(41, 90, 26, 0.35)',
                  '&:hover': {
                    backgroundColor: '#1f4414',
                  },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                href="#resume"
                sx={{
                  borderColor: '#295a1a',
                  color: '#295a1a',
                  px: 4,
                  py: 1.5,
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                    borderColor: '#1f4414',
                    backgroundColor: 'rgba(41, 90, 26, 0.04)',
                  },
                }}
              >
                Download Resume
              </Button>
            </Stack>

            {/* Tech Stack Chips */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 1.2,
                  fontWeight: 700,
                  color: '#295a1a',
                  display: 'block',
                  mb: 1.5,
                }}
              >
                Featured Tech Stack
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {techStack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: '#ffffff',
                      color: '#1c2419',
                      fontWeight: 500,
                      border: '1px solid rgba(41, 90, 26, 0.15)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Right Column: Profile Card & Code Preview */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Soft Ambient Glow */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '85%',
                  height: '85%',
                  backgroundColor: 'rgba(41, 90, 26, 0.15)',
                  filter: 'blur(50px)',
                  borderRadius: '50%',
                  top: '7%',
                  left: '7%',
                  zIndex: 0,
                }}
              />

              {/* Developer Showcase Card */}
              <Card
                elevation={0}
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  maxWidth: '440px',
                  p: 4,
                  borderRadius: '24px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(41, 90, 26, 0.12)',
                  boxShadow: '0 20px 40px rgba(25, 45, 18, 0.08)',
                }}
              >
                {/* Avatar Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 3 }}>
                  <Avatar
                    alt="Alex Developer"
                    src="/static/images/avatar/1.jpg" // Swap with your actual image path
                    sx={{
                      width: 72,
                      height: 72,
                      border: '3px solid #295a1a',
                    }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1c2419' }}>
                      Anus Developer
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#295a1a', fontWeight: 600 }}>
                      Full-Stack / React Dev
                    </Typography>
                  </Box>
                </Box>

                {/* Code Terminal Box */}
                <Box
                  sx={{
                    borderRadius: '12px',
                    backgroundColor: '#1c2419',
                    p: 2.5,
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    color: '#e2f0df',
                    mb: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <TerminalIcon sx={{ fontSize: '1rem', color: '#295a1a' }} />
                    <Typography variant="caption" sx={{ color: '#8aa680', fontFamily: 'monospace' }}>
                      developer.config.js
                    </Typography>
                  </Box>
                  <Typography component="div" sx={{ fontFamily: 'monospace', color: '#a3c299' }}>
                    const dev = {'{'}
                  </Typography>
                  <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2 }}>
                    experience: '0 + Years',
                  </Typography>
                  <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2 }}>
                    location: 'Remote / Hybrid',
                  </Typography>
                  <Typography component="div" sx={{ fontFamily: 'monospace', pl: 2 }}>
                    status: 'Building amazing apps'
                  </Typography>
                  <Typography component="div" sx={{ fontFamily: 'monospace', color: '#a3c299' }}>
                    {'}'};
                  </Typography>
                </Box>

                {/* Social Links */}
                <Stack direction="row" spacing={1.5} justifyContent="center">
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/anusjawed68-cpu"
                    target="_blank"
                    size="small"
                    sx={{
                      borderColor: 'rgba(41, 90, 26, 0.3)',
                      color: '#295a1a',
                      borderRadius: '8px',
                      textTransform: 'none',
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                    href="https://linkedin.com"
                    target="_blank"
                    size="small"
                    sx={{
                      borderColor: 'rgba(41, 90, 26, 0.3)',
                      color: '#295a1a',
                      borderRadius: '8px',
                      textTransform: 'none',
                    }}
                  >
                    LinkedIn
                  </Button>
                </Stack>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}