import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";

const Question = ({ question, employees }) => {
  const asker = employees?.[question.author];
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardHeader avatar={<Avatar src={asker?.avatarURL} />} />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {question?.optionOne.text}
        </Typography>
        <Button size="small">Vote</Button>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {question?.optionTwo.text}
        </Typography>
        <CardActions>
          <Button size="small">Vote</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = ({ employees }) => ({
  employees
});

export default connect(mapStateToProps)(Question);
