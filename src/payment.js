const { axios } = require("axios");
const express = require("express");
const router = express.Router();
const midtransClient = require('midtrans-client');
// Create Snap API instance
let snap = new midtransClient.Snap({
        isProduction : false,
        serverKey : 'SB-Mid-server-KKJzmT972kh5Q0aAAXTheWs9',
        clientKey : 'SB-Mid-client-cPF-g1xXdzel3Uon'
    });

    let getCurrentTimestamp = () => {
        return "" + Math.round(new Date().getTime() / 1000);
      };

    let parameterBasic = {
        "transaction_details": {
            "order_id": "undangan-basic" + getCurrentTimestamp(),
            "gross_amount": 150000
        }, "credit_card":{
            "secure" : true
        }
    };

    let parameterStandar = {
        "transaction_details": {
            "order_id": "undangan-standar" + getCurrentTimestamp(),
            "gross_amount": 200000
        }, "credit_card":{
            "secure" : true
        }
    };

    let parameterPremium = {
        "transaction_details": {
            "order_id": "undangan-premium" + getCurrentTimestamp(),
            "gross_amount": 250000
        }, "credit_card":{
            "secure" : true
        }
    };


router.post('/basic', async (req, res) => {
    snap.createTransaction(parameterBasic)
    .then((transaction)=>{

        res.json({
            status: true,
            pesan: "Berhasil Order",
            data: transaction,
          });
    })
    .catch((e)=>{
        console.log('Error occured:',e.message);
    });
})

router.post('/standar', async (req, res) => {
    snap.createTransaction(parameterStandar)
    .then((transaction)=>{

        res.json({
            status: true,
            pesan: "Berhasil Order",
            data: transaction,
          });
    })
    .catch((e)=>{
        console.log('Error occured:',e.message);
    });
})

router.post('/premium', async (req, res) => {
    snap.createTransaction(parameterPremium)
    .then((transaction)=>{

        res.json({
            status: true,
            pesan: "Berhasil Order",
            data: transaction,
          });
    })
    .catch((e)=>{
        console.log('Error occured:',e.message);
    });
})


module.exports = router;