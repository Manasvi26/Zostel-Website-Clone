import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

const Calender = () => {
  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());

  console.log("2222222");

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Custom input"
          value={value1}
          onChange={(newValue1) => {
            setValue1(newValue1);
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box
              sx={{
                width: "185px",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                height: "39px",
                alignItems: "center",
                // border: "2px solid blue",
              }}
            >
              <input
                style={{
                  border: "none",
                  color: "#f1563f",
                  width: "100px",
                  fontSize: "18px",
                  fontWeight: "380",
                  // border: "1px solid red",
                }}
                ref={inputRef}
                {...inputProps}
              />
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
