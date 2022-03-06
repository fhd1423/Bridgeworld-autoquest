const Web3 = require('web3');
const BN = require('bn.js');

const abi = `[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"QuestFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"components":[{"internalType":"uint8","name":"starlightAmount","type":"uint8"},{"internalType":"uint8","name":"crystalShardAmount","type":"uint8"},{"internalType":"uint8","name":"universalLockAmount","type":"uint8"},{"internalType":"uint256","name":"treasureId","type":"uint256"}],"indexed":false,"internalType":"struct QuestReward","name":"_reward","type":"tuple"}],"name":"QuestRevealed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_requestId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_finishTime","type":"uint256"},{"indexed":false,"internalType":"enum QuestDifficulty","name":"_difficulty","type":"uint8"}],"name":"QuestStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"consumable","outputs":[{"internalType":"contract IConsumable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum QuestDifficulty","name":"","type":"uint8"}],"name":"difficultyToLPNeeded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum QuestDifficulty","name":"","type":"uint8"}],"name":"difficultyToLevelUnlocked","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum QuestDifficulty","name":"","type":"uint8"}],"name":"difficultyToQuestLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum QuestDifficulty","name":"","type":"uint8"}],"name":"difficultyToShardAmount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum QuestDifficulty","name":"","type":"uint8"}],"name":"difficultyToStarlightAmount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum QuestDifficulty","name":"","type":"uint8"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"difficultyToTierOdds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"finishTokenQuests","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isQuestReadyToReveal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"legion","outputs":[{"internalType":"contract ILegion","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"legionMetadataStore","outputs":[{"internalType":"contract ILegionMetadataStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelToQPGainedPerQuest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelToQPNeeded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lp","outputs":[{"internalType":"contract ILP","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxQuestLevel","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomizer","outputs":[{"internalType":"contract IRandomizer","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recruitCrystalShardsOdds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recruitNumberOfCrystalShards","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recruitNumberOfStarlight","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recruitUniversalLockOdds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"removeAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"enum QuestDifficulty[]","name":"_difficulties","type":"uint8[]"},{"internalType":"uint256[]","name":"_questLoops","type":"uint256[]"}],"name":"restartTokenQuests","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"revealTokensQuests","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_availableLoops","type":"uint256[]"}],"name":"setAutoQuestLoops","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_randomizerAddress","type":"address"},{"internalType":"address","name":"_treasureAddress","type":"address"},{"internalType":"address","name":"_legionAddress","type":"address"},{"internalType":"address","name":"_treasureMetadataStoreAddress","type":"address"},{"internalType":"address","name":"_legionMetadataStoreAddress","type":"address"},{"internalType":"address","name":"_lpAddress","type":"address"},{"internalType":"address","name":"_consumableAddress","type":"address"},{"internalType":"address","name":"_treasuryAddress","type":"address"}],"name":"setContracts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[3]","name":"_shardAmounts","type":"uint8[3]"},{"internalType":"uint8[3]","name":"_starlightAmounts","type":"uint8[3]"}],"name":"setGuaranteedDropAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"_lpNeeded","type":"uint256[3]"}],"name":"setLPNeeded","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_easyLevel","type":"uint8"},{"internalType":"uint8","name":"_mediumLevel","type":"uint8"},{"internalType":"uint8","name":"_hardLevel","type":"uint8"}],"name":"setLevelDifficultyUnlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxQuestLevel","type":"uint8"},{"internalType":"uint256[]","name":"_qpNeededForEachLevel","type":"uint256[]"},{"internalType":"uint256[]","name":"_qpGainedAtEachLevel","type":"uint256[]"}],"name":"setLevelSteps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_shouldPause","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_easyLength","type":"uint256"},{"internalType":"uint256","name":"_mediumLength","type":"uint256"},{"internalType":"uint256","name":"_hardLength","type":"uint256"}],"name":"setQuestLengths","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_recruitNumberOfStarlight","type":"uint8"},{"internalType":"uint8","name":"_recruitNumberOfCrystalShards","type":"uint8"},{"internalType":"uint256","name":"_recruitCrystalShardsOdds","type":"uint256"},{"internalType":"uint256","name":"_recruitUniversalLockOdds","type":"uint256"}],"name":"setRecruitSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_treasureDropOdds","type":"uint256"},{"internalType":"uint256","name":"_universalLockDropOdds","type":"uint256"},{"internalType":"uint256","name":"_starlightId","type":"uint256"},{"internalType":"uint256","name":"_shardId","type":"uint256"},{"internalType":"uint256","name":"_universalLockId","type":"uint256"}],"name":"setTreasureSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shardId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"starlightId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"},{"internalType":"enum QuestDifficulty[]","name":"_difficulties","type":"uint8[]"},{"internalType":"uint256[]","name":"_questLoops","type":"uint256[]"}],"name":"startQuests","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToLPStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToNumberLoops","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToQP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToQuestDifficulty","outputs":[{"internalType":"enum QuestDifficulty","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToQuestStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToRequestId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasure","outputs":[{"internalType":"contract ITreasure","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasureDropOdds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasureMetadataStore","outputs":[{"internalType":"contract ITreasureMetadataStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"universalLockDropOdds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"universalLockId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`


const web3 = new Web3('https://arb1.arbitrum.io/rpc');

YOUR_PRIVATE_KEY = ('')

let arbMasterAccount = web3.eth.accounts.privateKeyToAccount(YOUR_PRIVATE_KEY);
web3.eth.accounts.wallet.add(arbMasterAccount);
web3.eth.defaultAccount = arbMasterAccount.address

const myAddress = web3.eth.defaultAccount;

//questing contract
const questContractAddress = '0xda3cad5e4f40062ceca6c1b979766bc0baed8e33'

const genLegionID = web3.eth.abi.encodeParameter('uint256', '5');
const firstAuxID = web3.eth.abi.encodeParameter('uint256', '26183');
const secondAuxq = web3.eth.abi.encodeParameter('uint256', '22063');

const diff = web3.eth.abi.encodeParameter('uint8', '1');
const loop = web3.eth.abi.encodeParameter('uint256', '1');

const ids = [genLegionID, firstAuxID]
const difficulties = [diff, diff]
const loops = [loop, loop]

const questContract = new web3.eth.Contract(JSON.parse(abi), questContractAddress)

async function revealRewards(ids){
const gasEstimate = await questContract.methods.revealTokenQuests(ids).estimateGas({from:myAddress})
questContract.methods.revealTokenQuests(
ids).send({
	from: myAddress,
	gasPrice: await web3.eth.getGasPrice(),		
	gas: gasEstimate
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
	gas: gasEstimate
	}).then(console.log)
}


async function main(ids, difficulties, loops){
if(ready(ids)){
console.log('ready works')
revealRewards(ids)
console.log("rewards revealing")
await delay(50000);
console.log("waiting for tx to confirm")
startQuests(ids, difficulties,loops)
console.log("starting quests")
	
}
}
async function ready(ids){
var bool = false
var count = 0
var index = 0
while(index < ids.length){
let works = await questContract.methods.isQuestReadyToReveal(ids[index]).call()
	if(works == true){
		count++
	}
	index++
}
if(count == 2){
console.log('both legions ready to quest')
return true;
}
else{
console.log("only" + count + "legion(s) available to quest")
}
}

main(ids, difficulties, loops)
