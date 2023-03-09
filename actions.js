import express from 'express';
const router = express.Router();

router.get('/sayhello', (req, res) => {
    res.status(200).json({
         message: 'Hello from my first api server!' 
    });
});

router.get('/getparams/:amount/:tax', (req, res) => {

    const amount = parseInt(req.params.amount);
    const tax = parseInt(req.params.tax);

    res.status(200).json({
        message: `The amount is ${amount} and the tax is ${tax}%.`,
        amount_tax: amount+amount * (tax/100)
    });
});

router.post('/calcsal', (req, res) => {

    const { workingHours, payPerHour, payPerExtraHour, tax } = req.body;

    console.log(workingHours, payPerHour, payPerExtraHour, tax);

    let regular_hours;
    let extra_hours;

    if(workingHours> 180)
    {
        regular_hours = 180;
        extra_hours = workingHours - regular_hours;
    } else{
        regular_hours = workingHours;
        extra_hours = 0;
    }

    const salary = regular_hours*payPerHour+extra_hours*payPerExtraHour;

    res.status(200).json({
        message: `The salary is ${salary} and the tax is ${tax}%.`,
        salary: salary - salary * (tax/100),
        tax: tax
    });
});

export default router;