import data from './data.json' assert {type: 'json'};
import nftabi from './nft721abi.json' assert{type:'json'}
import url from './providerurl.json' assert{type:'json'}
import { ethers } from 'ethers';

const NFTurl = '0xD07180c423F9B8CF84012aA28cC174F3c433EE29'

const zkprovider = new ethers.providers.JsonRpcProvider(url['zksync']);

const NFTcontract = new ethers.Contract(NFTurl,nftabi,zkprovider);

for (let i = 0; i < 42; i++) {
    const address = data[`wallet${i}`]['address']  
    await NFTcontract.balanceOf(address).then(res => console.log(`钱包${address}的余额是${res.toNumber()}`))
}