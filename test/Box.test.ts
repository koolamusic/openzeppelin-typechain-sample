// Load dependencies
const { expect } = require('chai');

// load compiled assets
const BoxContractInstance = artifacts.require('Box')
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers')

// Start test 
contract('BoxContractInstance', function([owner, other]) {

    // use large integers ('big number-js package)
    const value = new BN('42');

    this.beforeEach(async function() {
        // Deploy a new box contract for each test
        this.box = await BoxContractInstance.new({ from: owner});
    })

    // Test cases
    it('retrieves a return value previously stored', async function()  {
        // store a value
        await this.box.store(value, { from: owner});

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect(await this.box.retrieve()).to.be.bignumber.equal(value);
    })





    it('Store emits an event', async function() {
        const receipt = await this.box.store(value, { from: owner});

        // Test that a Value changed event was emitted with new value
        expectEvent(receipt, 'ValueChanged', { value: value})
    })

    it('non owner cannot store a value', async function() {
        // Test a transaction revert
        // here if the user is not the owner, they cannot call the contract

        await expectRevert(this.box.store(value, { from: other}), 'Ownable: caller is not the owner')
    })

})