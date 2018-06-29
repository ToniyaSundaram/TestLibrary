'use strict'

let contracts = require('burrow-contracts');
var assert = require('assert');
var Promise = require('bluebird');


// URL to the rpc endpoint of the Burrow server.
var burrowURL = "http://localhost:1337/rpc";
var contractManager = contracts.newContractManagerDev(burrowURL, accountData);
var myAbi = JSON.parse('[ { "constant": false, "inputs": [ { "name": "x1", "type": "int256" }, { "name": "x2", "type": "int256" } ], "name": "Sum", "outputs": [ { "name": "", "type": "int256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "x1", "type": "int256" }, { "name": "x2", "type": "int256" } ], "name": "Mul", "outputs": [ { "name": "", "type": "int256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "x1", "type": "int256" }, { "name": "x2", "type": "int256" } ], "name": "Div", "outputs": [ { "name": "", "type": "int256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "x1", "type": "int256" }, { "name": "x2", "type": "int256" } ], "name": "Sub", "outputs": [ { "name": "", "type": "int256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]');
var myCompiledCode = '608060405234801561001057600080fd5b506101fc806100206000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063166dec531461006757806375aac69e146100b2578063eb638f12146100fd578063fa94904d14610148575b600080fd5b34801561007357600080fd5b5061009c6004803603810190808035906020019092919080359060200190929190505050610193565b6040518082815260200191505060405180910390f35b3480156100be57600080fd5b506100e760048036038101908080359060200190929190803590602001909291905050506101a0565b6040518082815260200191505060405180910390f35b34801561010957600080fd5b5061013260048036038101908080359060200190929190803590602001909291905050506101b6565b6040518082815260200191505060405180910390f35b34801561015457600080fd5b5061017d60048036038101908080359060200190929190803590602001909291905050506101c3565b6040518082815260200191505060405180910390f35b6000818303905092915050565b600081838115156101ad57fe5b05905092915050565b6000818301905092915050565b60008183029050929150505600a165627a7a723058204c7afb912c14c5b19dd03290d629301c3314ed5fbbd2ab114c4bc7f53491b5bf0029';


var myNewContract;

describe('Basic Mocha String Test', function () {



    it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
    it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });

});

describe('Should deploy a contract in burrow and return instance of the contract', function(){

    before('First deploy this',async function(done) {

        console.log("first")
        // Create a factory for the contract with the JSON interface 'myAbi'.
        var myContractFactory = await contractManager.newContractFactory(myAbi);

        var test = await myContractFactory.new({data: myCompiledCode},function(error,contract){
            if(!error){
                myNewContract = contract;
                console.log("myNewContract",myNewContract.address)
                done();
            }
        });


    })

    it('Test any function',async function(){

        console.log("Second");

    // var myExistingContract;

    //     myContractFactory.at(myNewContract.address, function(error, contract){
    //     if (error) {
    //         // Something.
    //         throw error;
    //     }
    //         myExistingContract = contract;
    //     });

    //     // console.log("Hurray",myExistingContract)

    //     myExistingContract.Sum(1,2,addCallback)

    //     function addCallback(error, sum){
    //         console.log(sum.toString()); // Would print: 3
    //     }
    })


})