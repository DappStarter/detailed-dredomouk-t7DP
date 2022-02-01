require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remain mixture grace casino swap task'; 
let testAccounts = [
"0x1e413c5e2f626cdc66143cdad59c430482ce1cbd813df2299a3470c95af0579e",
"0xc7df67ebbe3d1f12ef1d619cec047792295193e02cf77a0b9a7309aaa197d177",
"0xea158d890305ccc2025b1271c9be028129397565c9aef46cce53b71d5d41f277",
"0xa968f50ffae508faae8e5e9c65b50473988fe8402adc959644196024bb0c6cde",
"0x520a8b24ac36342a084d852e12e5cbf7683de48d18ef89eb011ea127f8a0baf8",
"0x3469ca6ae2e0dad885910ee69ecbdb3da4004d05e892c0ef4ab5902e1cdecb68",
"0x3cefce48795f0d763e645cfd7e06320e1824310d7dc306771b47df1bd397d0c5",
"0x818b9d9d9a344391acdf14881373f98d5f7c6ef96e86baa87a41c0c9ac4488eb",
"0xd1e2fab2428debb2f844b19e5df19cbe1db6a29ddbbd02391442fc1cf5ff86d6",
"0xf72cc629a839cbdb93895a74945b684adc9cda42fa307e7e4a4891e04e8160a8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

