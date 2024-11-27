import React from "react";
import { Button, Typography, Container, Grid, Paper, Box } from "@mui/material";
import AccountMenu from "../components/AccountMenu";

const Home = () => {
  return (
    <Box className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <AccountMenu />

      {/* Hero Section */}
      <Box className="bg-gray-200 py-20 text-center">
        <Container>
          <Typography variant="h3" className="font-bold mb-4">
            The Next Level of Playing Console
          </Typography>
          <Typography variant="subtitle1" className="mb-6">
            Nikmati pengalaman bermain game favorit Anda di rumah dengan layanan
            rental kami.
          </Typography>
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            href="#pricing">
            Lihat Harga
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" className="py-16 bg-white text-center">
        <Container>
          <Typography variant="h4" className="font-bold mb-4">
            Why Choose Us?
          </Typography>
          <Typography variant="body1" className="mb-6">
            We provide high-quality gaming consoles with a wide selection of
            games to ensure the best gaming experience.
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "Affordable Rates",
                description: "Enjoy premium gaming without breaking the bank.",
              },
              {
                title: "Top-notch Consoles",
                description:
                  "All consoles are well-maintained for smooth gameplay.",
              },
              {
                title: "Flexible Rentals",
                description:
                  "Rent by the hour, day, or week according to your needs.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper className="p-6 rounded shadow">
                  <Typography variant="h6" className="font-bold mb-2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box id="pricing" className="py-16 bg-gray-200 text-center">
        <Container>
          <Typography variant="h4" className="font-bold mb-4">
            Harga Sewa
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: "Playstation 4", price: "Rp 120.000/hari*" },
              { title: "Playstation 5", price: "Rp 200.000/hari*" },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper className="p-6 rounded shadow">
                  <Typography variant="h6" className="font-bold mb-2">
                    {item.title}
                  </Typography>
                  <Typography className="mb-4">{item.price}</Typography>
                  <Button
                    variant="contained"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    href="#">
                    Rent Now
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Address Section */}
      <Box id="address" className="py-16 bg-white text-center">
        <Container>
          <Typography variant="h4" className="font-bold mb-8">
            Alamat
          </Typography>
          <Grid container spacing={3}>
            {[
              {
                title: "Cabang Jakarta",
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4144989356173!2d106.8555277!3d-6.3403262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec52e9a59cf3%3A0xf41fe850ff216bc6!2sJl.%20Kenanga%201%20No.59%2C%20RT.2%2FRW.2%2C%20Kalisari%2C%20Kec.%20Ps.%20Rebo%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013790!5e0!3m2!1sid!2sid!4v1724040955295!5m2!1sid!2sid",
              },
              {
                title: "Cabang Bogor",
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.7387932406898!2d106.78064430205183!3d-6.652478682609101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf0d97f28125%3A0x53eacc3cb8d3823!2sJl.%20Kp.%20Cipinang%20Gading%2C%20RT.03%2FRW.01%2C%20Mulyaharja%2C%20Kec.%20Bogor%20Sel.%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016135!5e0!3m2!1sid!2sid!4v1724041415916!5m2!1sid!2sid",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper className="bg-blue-600 p-6 rounded shadow text-white">
                  <Typography variant="h6" className="font-semibold mb-4">
                    {item.title}
                  </Typography>
                  <iframe
                    title={item.title}
                    src={item.src}
                    className="w-full h-72 rounded"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" className="py-16 bg-gray-200 text-center">
        <Container>
          <Typography variant="h4" className="font-bold mb-4">
            Get in Touch
          </Typography>
          <Typography variant="body1" className="mb-6">
            Have questions? Contact us today and we'll be happy to help!
          </Typography>
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            href="mailto:info@rentalps.com">
            Contact Us
          </Button>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box className="bg-blue-600 text-white py-4 text-center">
        <Container>
          <Typography variant="body2">
            © {new Date().getFullYear()} Consolerent. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
