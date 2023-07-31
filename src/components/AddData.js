import React, { useState } from 'react';
import { Button, Box, TextField,Stack } from '@mui/material';
import axios from 'axios';
// import '../App.css';

const AddData = () => {
  const url = "http://localhost:8081/Mile_Stone_3/add";
  const [data, setData] = useState({
    customerOrderId: "",
    salesOrg: "",
    distributionChannel: "",
    customerNumber: "",
    companyCode: "",
    orderAmount: "",
    orderCurrency: "",
    amountInUSD: "",
    orderCreation: ""
  });

  const {
    customerOrderId,
    salesOrg,
    distributionChannel,
    customerNumber,
    companyCode,
    orderAmount,
    orderCurrency,
    amountInUSD,
    orderCreation
  } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const clearData = () => {
    setData({
      customerOrderId: "",
      salesOrg: "",
      distributionChannel: "",
      customerNumber: "",
      companyCode: "",
      orderAmount: "",
      orderCurrency: "",
      amountInUSD: "",
      orderCreation: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      await axios.post("http://localhost:8081/Mile_Stone_3/add", data);
      console.log("Data successfully sent to the server");
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '20ch',
          color: 'white', // Set text color to white
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // Set border color to white
              // backgroundColor:'white'
            },
          },
        },
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        onChange={handleInputChange}
        // className="addstyle"
        id="outlined-basic"
        label="CUSTOMER ORDER ID"
        variant="outlined"
        name="customerOrderId"
        value={customerOrderId}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic1"
        label="SALES ORG"
        variant="outlined"
        name="salesOrg"
        value={salesOrg}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic2"
        label="DISTRIBUTION CHANNEL"
        variant="outlined"
        name="distributionChannel"
        value={distributionChannel}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic3"
        label="CUSTOMER NUMBER"
        variant="outlined"
        name="customerNumber"
        value={customerNumber}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic4"
        label="COMPANY CODE"
        variant="outlined"
        name="companyCode"
        value={companyCode}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic5"
        label="ORDER AMOUNT"
        variant="outlined"
        name="orderAmount"
        value={orderAmount}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic6"
        label="ORDER CURRENCY"
        variant="outlined"
        name="orderCurrency"
        value={orderCurrency}
      />
      <TextField
        onChange={handleInputChange}
        id="outlined-basic7"
        label="AMOUNT IN USD"
        variant="outlined"
        name="amountInUSD"
        value={amountInUSD}
      />
      <TextField
        type='date'
        onChange={handleInputChange}
        id="outlined-basic8"
        // label="ORDER CREATION DATE"
        variant="outlined"
        name="orderCreation"
        value={orderCreation}
      />
      <br />
      <Stack sx={{flexDirection:'row',marginLeft:'40%'}}>
      <Button type="submit" variant="contained" sx={{backgroundColor:'orange'}}>
        Submit
      </Button>
      <Button  variant="contained" sx={{backgroundColor:'red'}} onClick={clearData}>Clear</Button>
      </Stack>
      
    </Box>
  );
};

export default AddData;

