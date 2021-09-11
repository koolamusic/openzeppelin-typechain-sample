// /**
//  * Here we are going to use the Open Zeppelin Test Environment
//  * to mock Ganache:: So we dont need to setup Ganache for Tests in CI/CD
//  */
// const { accounts, contract } = require('@openzeppelin/test-environment');
// const { expect } = require('chai');

// // load compiled assets
// const BoxContractInstance = contract.fromArtifact('Box')
// // const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers')

// // Start test Using Pure Javascript
// describe('Box with Openzeppelin Test Environment', function() {

//     const [owner] = accounts;

//     // use large integers ('big number-js package)
//     // const value = new BN('42');

//     beforeEach(async function() {
//         // Deploy a new box contract for each test
//         this.contract = await BoxContractInstance.new({ from: owner});
//     })

//     // Test cases
//     it('retrieves a return value previously stored', async function()  {
//         // store a value
//         await this.contract.store(42, { from: owner});

//         // Test if the returned value is the same one
//         // Note that we need to use strings to compare the 256 bit integers
//         expect((await this.contract.retrieve()).toString()).to.equal('42');
//     })

// })

// export {}