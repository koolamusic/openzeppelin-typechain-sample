"use strict";
// Typescript Toolchain according to https://github.com/ethereum-ts/TypeChain/blob/master/examples/truffle-v5/package.json
Object.defineProperty(exports, "__esModule", { value: true });
const Box = artifacts.require('Box');
module.exports = async function (deployer) {
    await deployer.deploy(Box);
};
//# sourceMappingURL=2_deploy.js.map