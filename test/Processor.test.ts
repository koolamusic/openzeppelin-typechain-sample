// Load dependencies
const { expect } = require('chai');

// load compiled assets
const Processor = artifacts.require('Box')
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers')

const addressOne = "0xF1485a5A5581315f7DAC0C85b13BFFA78edaDAca"
const addressTwo = "0x0A39bFb70B36feB61edF224119d41CCAAE163E41"

// Start test 
contract('Processor', function([owner, other]) {
    let processor;

    // use large integers ('big number-js package)
    const value = new BN('42');
    const ercAmount = new BN('100')

    this.beforeEach(async function() {
        // Deploy a new box contract for each test
        processor = await Processor.new({ from: owner});
    })

    // Test cases
    it('retrieves a return value previously stored', async function()  {
        // store a value
        await processor.store(value, { from: owner});

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect(await processor.retrieve()).to.be.bignumber.equal(value);
    })

    it('can pay with ERC Token', async function()  {
        // store a value
        const done = await processor.payWithERC(addressOne, addressTwo, 100);
        console.log(done)


        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expectEvent(done, 'ErcTransfer', { amount: ercAmount, token: addressOne})
        // expect(await processor.retrieve()).to.be.bignumber.equal(value);
    })

    it('approve withdrawal', async function()  {
        // store a value
        const done = await processor.approveWithdrawal(addressTwo, { from: owner})
        console.log(done)
        expect(done).to.be.true()

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        // expectEvent(done, 'ErcTransfer', { amount: ercAmount, token: addressOne})
        // expect(await processor.retrieve()).to.be.bignumber.equal(value);
    })




    it('Store emits an event', async function() {
        const receipt = await processor.store(value, { from: owner});

        // Test that a Value changed event was emitted with new value
        expectEvent(receipt, 'ValueChanged', { value: value})
    })

    it('non owner cannot store a value', async function() {
        // Test a transaction revert
        // here if the user is not the owner, they cannot call the contract

        await expectRevert(this.box.store(value, { from: other}), 'Ownable: caller is not the owner')
    })

})
