// Once the user logs in, the home page is shown.
import React from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { connect } from "react-redux";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { Typography, Box } from "@mui/material";

const Login = ({ dispatch, employees, authedUser }) => {
  const [selectedUser] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(
      setAuthedUser(
        employees.filter((x) => x.name === event.target.value)?.[0].id
      )
    );
  };

  return (
    <Box sx={{ p: 2, m: 2 }}>
      <Typography variant="h4">Login</Typography>
      <FormControl fullWidth>
        <InputLabel>User</InputLabel>
        <Select
          value={selectedUser}
          label="Users"
          onChange={handleChange}
        >
          {employees?.map((employee) => {
            return <MenuItem value={employee.name} key={employee.name}>{employee.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = ({ employees, authedUser }) => {
  return {
    employees: Object.values(employees),
    authedUser,
  };
};

export default connect(mapStateToProps)(Login);
