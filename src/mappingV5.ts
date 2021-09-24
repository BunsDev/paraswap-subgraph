import { ByteArray, log, crypto } from "@graphprotocol/graph-ts";
import {
    Bought,
    Swapped,
    FeeTaken
} from "../generated/AugustusSwapperV5/AugustusSwapperV5";
import { Swap, Fee } from "../generated/schema";

// TODO: fix destToken in swapOnUnswapV2Fork, buyOnUniswapV2Fork

export function handleSwapped(event: Swapped): void {
    let swap = new Swap(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
    swap.uuid = event.params.uuid;
    swap.augustus = event.address;
    swap.augustusVersion = '5.0.0';
    swap.side = 'Sell';
    swap.method = 'event';
    swap.initiator = event.params.initiator;
    swap.beneficiary = event.params.beneficiary;
    swap.srcToken = event.params.srcToken;
    swap.destToken = event.params.destToken;
    swap.srcAmount = event.params.srcAmount;
    swap.destAmount = event.params.receivedAmount;
    swap.expectedAmount = event.params.expectedAmount;
    // swap.referrer = event.params.referrer;
    swap.txHash = event.transaction.hash;
    swap.txOrigin = event.transaction.from;
    swap.txTarget = event.transaction.to;
    swap.txGasUsed = event.transaction.gasUsed;
    swap.txGasPrice = event.transaction.gasPrice;
    swap.blockHash = event.block.hash;
    swap.blockNumber = event.block.number;
    swap.timestamp = event.block.timestamp;
    swap.save();
}

export function handleBought(event: Bought): void {
    let swap = new Swap(event.transaction.hash.toHex() + '-' + event.logIndex.toString());
    swap.uuid = event.params.uuid;
    swap.augustus = event.address;
    swap.augustusVersion = '5.0.0';
    swap.side = 'Buy';
    swap.method = 'event';
    swap.initiator = event.params.initiator;
    swap.beneficiary = event.params.beneficiary;
    swap.srcToken = event.params.srcToken;
    swap.destToken = event.params.destToken;
    swap.srcAmount = event.params.srcAmount;
    swap.destAmount = event.params.receivedAmount;
    //swap.expectedAmount
    // swap.referrer = event.params.referrer;
    swap.txHash = event.transaction.hash;
    swap.txOrigin = event.transaction.from;
    swap.txTarget = event.transaction.to;
    swap.txGasUsed = event.transaction.gasUsed;
    swap.txGasPrice = event.transaction.gasPrice;
    swap.blockHash = event.block.hash;
    swap.blockNumber = event.block.number;
    swap.timestamp = event.block.timestamp;
    swap.save();
}

export function handleFeeTaken(event: FeeTaken): void {
    let fee = new Fee(
        event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )
    fee.augustus = event.address
    fee.augustusVersion = '5.0.0'
    fee.fee = event.params.fee
    fee.partnerShare = event.params.partnerShare
    fee.paraswapShare = event.params.paraswapShare
    fee.txHash = event.transaction.hash
    fee.blockNumber = event.block.number;
    fee.timestamp = event.block.timestamp;
    fee.save()
}