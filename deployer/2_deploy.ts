// Typescript Toolchain according to https://github.com/ethereum-ts/TypeChain/blob/master/examples/truffle-v5/package.json

const Box = artifacts.require('Box')

module.exports = async function(deployer) {
    await deployer.deploy(Box)
} as Truffle.Migration

export {}