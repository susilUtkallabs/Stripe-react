import "./App.css";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function App() {
  return (
    <Container>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        className="App"
      >
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
              borderRadius: "25px",
              boxShadow: "0px 0px 12px #A6A6A6",
            }}
            variant="outlined"
          >
            <Box
              sx={{
                height: 100,
                backgroundColor: "#00C0A1",
                color: "#fff",
              }}
            >
              <Typography pt={3} fontSize={'35px'}>Basic</Typography>
            </Box>
            <Typography className="arrow-down-light" ml={17} mb={3}></Typography>
            <CardContent>
              <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
              <Typography variant="h6" fontWeight={"bold"} mt={4} mb={2}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Simple Text Here
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={2}>
                <CloseIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "red", mr: 1 }}
                />
                Other Text Title
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={2}>
                <CloseIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "red", mr: 1 }}
                />
                Text Space Goes Here
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={4}>
                <CloseIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "red", mr: 1 }}
                />
                Description Space
              </Typography>
              <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
              <Typography variant="h3" mt={3} mb={1} color={"#00C0A1"}>
                $ 2.99
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
              borderRadius: "25px",
              boxShadow: "0px 0px 12px #A6A6A6",
            }}
            variant="outlined"
          >
            <Box
              sx={{
                height: 100,
                backgroundColor: "#2369FF",
                color: "#fff",
              }}
            >
              <Typography pt={3} fontSize={'35px'}>Standard</Typography>
            </Box>
            <Typography className="arrow-down-blue" ml={17} mb={3}></Typography>
            <CardContent>
              <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
              <Typography variant="h6" fontWeight={"bold"} mt={4} mb={2}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Simple Text Here
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={2}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Other Text Title
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={2}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Text Space Goes Here
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={4}>
                <CloseIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "red", mr: 1 }}
                />
                Description Space
              </Typography>
              <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
              <Typography variant="h3" mt={3} mb={1} color={"#2369FF"}>
                $ 5.99
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 300,
              borderRadius: "25px",
              boxShadow: "0px 0px 12px #A6A6A6",
            }}
            variant="outlined"
          >
            <Box
              sx={{
                height: 100,
                backgroundColor: "#FF6415",
                color: "#fff",
              }}
            >
              <Typography pt={3} fontSize={'35px'}>Premium</Typography>
            </Box>
            <Typography className="arrow-down-orange" ml={17} mb={3}></Typography>
            <CardContent>
              <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
              <Typography variant="h6" fontWeight={"bold"} mt={4} mb={2}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Simple Text Here
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={2}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Other Text Title
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={2}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Text Space Goes Here
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} mt={2} mb={4}>
                <CheckIcon
                  fontSize="medium"
                  fontWeight={"bold"}
                  sx={{ color: "green", mr: 1 }}
                />
                Description Space
              </Typography>
              <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
              <Typography variant="h3" mt={3} mb={1} color={"#FF6415"}>
                $ 8.99
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
