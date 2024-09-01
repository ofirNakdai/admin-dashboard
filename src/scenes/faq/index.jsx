import { Box, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const questions = [
    { summary: "First Question", details: "This is question 1" },
    { summary: "Second question", details: "This is question 2" },
    { summary: "Third question", details: "This is question 3" },
    { summary: "Fourth question", details: "This is question 4" },
    { summary: "Fifth question", details: "This is question 5" },
    { summary: "Sixth Question", details: "This is question 6" },
    { summary: "Seventh question", details: "This is question 7" },
    { summary: "Eighth question", details: "This is question 8" },
    { summary: "Nineth question", details: "This is question 9" },
    { summary: "Tenth question", details: "This is question 10" },
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {questions.map((question) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {question.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>this is the first question!!!</Typography>
        </AccordionDetails>
      </Accordion> */}
    </Box>
  );
};

export default FAQ;
