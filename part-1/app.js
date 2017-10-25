const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7};

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/days', (req, res) => {
  res.send('Now try adding a spefic day after days using this format: /monday')
});

app.get('/api/days/:day', (req, res) => {
  const dayOfWeek = req.params.day;
  if (daysOfWeek[dayOfWeek] === undefined) {
    res.status(400).send(`${dayOfWeek} is not a valid day!`)
  }
  else {
    res.send(`${daysOfWeek[dayOfWeek]}`)
  }
});

app.post('/api/array/concat', (req, res) => {
  res.contentType('application/JSON');
  //console.log(req.body.array1);
  const array1 = req.body.array1;
  const array2 = req.body.array2;

   if (Array.isArray(array1) === false) {
     res.status(400).json({"error1": "Input data should be of type Array."})
   }
   else if (Array.isArray(array2) === false) {
     res.status(400).json({"error2": "Input data should be of type Array."})
   }
   else {
   const result = {"result": array1.concat(array2)};
     res.json(result);
  }
});

app.listen(3000, () => {
  console.log('the application is running on localhost: 3000')
});
