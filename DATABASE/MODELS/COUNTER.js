const { json } = require('body-parser');
const e = require('express');
var mongoose = require('mongoose');

const COUNTER = mongoose.model("counters", new mongoose.Schema({ Date: Date, CounterSingleRoom: Number, CounterDoubleRoom: Number, CounterTwinRoom: Number, CounterKingRoom: Number}));

//---------------------------------------- U S E R-----------------------------------------------

module.exports.getCounterList = async () => {
    return await COUNTER.find({}, (err, data) => json.toString(data)).clone().catch(function(err){ console.log(err)});
}

module.exports.addCounter = async (newUser) => {
    await (new COUNTER(newUser)).save();
}

module.exports.getCounterForTheGivenDate = async (DATE) => {
    let d = new Date(DATE);
    // d = d.getFullYear() + "-" + (d.getMonth()+1 )+ "-" + d.getDate() + "T00:00:00.000Z";
    d = d.getFullYear() + "-" + (d.getMonth()+1)+ "-" + d.getDate();

    let RESULT = await COUNTER.findOne({Date: d.toString()});

    console.log("\nRECEIVED DATE ON SERVER END = ")
    console.log(d);

    console.log("\n\nRESULT = ")
    console.log(RESULT);
}

