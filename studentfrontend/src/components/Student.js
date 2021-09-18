import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Student() {
  const classes = useStyles();
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [students, setStudents] = useState([])
  
  const handleData = (e) =>{
    const student = {name,address}
    fetch("http://192.168.100.163:8080/student/add",{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log('New Student Add')
    })
  }

  useEffect(() => {
    fetch('http://192.168.100.163:8080/student/getAll')
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    })
  }, [])
  
  const paperStyle = {
    padding: '50px 20px', width: 600, margin: '20px auto'
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'blue' }}> <u>Add Student</u> </h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="name" label="Student Name" variant="outlined" fullWidth
            value={name} onChange={(e) => setName(e.target.value)} />
          <TextField id="address" label="Student Address" variant="outlined" fullWidth
            value={address} onChange={(e) => setAddress(e.target.value)} />
          <Button variant="contained" color="secondary"  onClick={handleData} >Submit</Button>
        </form>
      </Paper>

      <h1> List Students  1</h1>
      <Paper elevation={3} style={paperStyle}>
        
        {students.map(student=>(
          <Paper elevation={3} style={{margin:'10px',padding:'15px',textAling:'left'}} key={student.id}>
            Id: {student.id} {'  '}
            Name: {student.name} {'  '}
            Address: {student.address}
          </Paper>
        ))}

      </Paper>

    </Container>
  );
}
