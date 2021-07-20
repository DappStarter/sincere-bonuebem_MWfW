require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note meadow universe install climb off swallow'; 
let testAccounts = [
"0x92f1559d452bb7c808983e8ae2ddaf37907612d60a299c348ce8008df679936f",
"0x5f9048ff03fdec1661ae75b3bd2247fb95f94bc19c67fe7c27a26b6dca3c6e8e",
"0x0ffa0441918c16018be8c152c3c00089ae40818a6f7f1c64ab549b821a2d20b4",
"0xc91ac81be340419858ccc039029c5cea086409d25d555ceb32f11aff1f9a8e45",
"0x9f27ad4c5db8b94f655ac6f73dc65592511b9688b6802cdbab45a766d225760e",
"0xff4592e26e8e5ad2fa9ab902b12ff5312cf551207e89d6911bcb403ada76f970",
"0xf6054f2a5a4f2343c1b47fe2cb6fb46e6b9b141be4f7515274ba156404a73cc3",
"0x3236ae132dbf06bc722fc3fe747c1fff49d4d32164178caa746be96c3906aec4",
"0x6f886e1fc84510a4a92d9f4d8b1a31bebc6883bbabc20ad46795aa4ece72fe57",
"0x8d920d24acf8e407d4631ee467b2cdabdba81b4de3f1cbb537377abe6cc52458"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


