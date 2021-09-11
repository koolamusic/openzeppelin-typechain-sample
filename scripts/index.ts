const Box = artifacts.require('Box')
type TCallbackFunction = (arg: number) => void

module.exports = async function main(callback: TCallbackFunction) {
    try {
        ////// get all the ETH wallet addresses //////
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);

        ////// Interact with the deployed box contract /////
        const box = await Box.deployed();

        const value = await box.retrieve();
        console.log('Box value is ',value.toString())
        
        /// send transaction to the box contract ////
        const transaction = await box.store(23);
        console.log(transaction);
        
        // call the retrieve method again
        const newValueState = await box.retrieve()
        console.log('New Box value is ',newValueState.toString())
        
        callback(0)
    } catch (error) {
        console.error(error);
        callback(1)
    }
}