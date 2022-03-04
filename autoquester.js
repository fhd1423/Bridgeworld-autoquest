const Web3 = require('web3');
const BN = require('bn.js');

const web3 = new Web3('https://arb1.arbitrum.io/rpc');

YOUR_PRIVATE_KEY = ('-------------------')

let arbMasterAccount = web3.eth.accounts.privateKeyToAccount(YOUR_PRIVATE_KEY);
web3.eth.accounts.wallet.add(arbMasterAccount);
web3.eth.defaultAccount = arbMasterAccount.address

const myAddress = web3.eth.defaultAccount;

//questing contract
const questContractAddress = '0xda3cad5e4f40062ceca6c1b979766bc0baed8e33'

const genLegionID = web3.utils.toWei((5).toString(), 'ether')
const firstAuxID = web3.utils.toWei((26183).toString(), 'ether')
const secondAuxID = web3.utils.toWei((22063).toString(), 'ether')

const diff = web3.utils.toWei((0).toString(), 'ether')
const loops = web3.utils.toWei((0).toString(), 'ether')

const ids = [genLegionID, firstAuxID, secondAuxID]
const difficulties = [diff, diff, diff]
const loops = [loops, loops, loops]

const questContract = new web3.eth.Contract(JSON.parse(abi), questContractAddress)

async function revealRewards(ids){
const gasEstimate = await questContract.methods.revealTokenQuests(ids).estimateGas({from:myAddress})
questContract.methods.revealTokenQuests(
ids).send({
		from: myAddress,
		gasPrice: await web3.eth.getGasPrice(),
		gas = gasEstimate
		}).then(console.log)
}


async function startQuests(ids, difficulties, loops){
const gasEstimate = await questContract.methods.restartTokenQuests(ids, difficulties, loops).estimateGas({from:myAddress})
questContract.methods.restartTokenQuests(
ids,
difficulties,
loops
).send({
		from: myAddress,
		gasPrice: await web3.eth.getGasPrice(),
		gas = gasEstimate
		}).then(console.log)
}


async function main(ids, difficulties, loops){
		revealRewards(ids)
		console.log("rewards revealing")
		await delay(50000);
		console.log("waiting for tx to confirm")
		startQuests(ids, difficulties,loops)
		console.log("starting quests")
}

main(ids, difficulties, loops)
