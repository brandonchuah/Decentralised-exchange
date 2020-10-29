

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "8aa76757c3a84b7db18450785642ebd9";

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

  networks: {


    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/077b5d3032e54de1af44ffeb7936230d`),
      network_id: 3,       // Ropsten's id
      gas: 6599386,        // Ropsten has a lower block limit than mainnet
      //confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      //timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },

  },
  compilers: {
    solc: {
      version: '0.6.3'
    }
  }
}