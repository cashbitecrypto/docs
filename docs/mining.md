---
id: mining
title: Mining
---

# Mining

Mining is a process of verifying transactions betweeen accounts. The process is very compute intensive, so miners are rewarded with some currency. Miners compete to verify blocks, the first to do this gets paid the reward.

>  _**Please note:** using the simple mining method below, or mining in a solo pool can be inefficient as you are competing against everyone else who is mining. Consider mining in a pool where shares are paid out for more consistent mining payments._

## Simple Mining

To mine, you will need to have the `miner` program which you [installed](./install.md) earlier. You will also need to run a local node.

### Starting a Node

Mining requires a node to communicate with, so you will need to run one on your computer. To do this, simply open a terminal or command prompt and run CashBited (for example, on Windows use the command `./CashBited.exe` and on Linux use the command `./CashBited`).

When starting, your node will 'sync' with the network. This can take a while and you will get messages letting you know the progress. After the large text shows, the node is ready.

![CashBited output](creating-a-wallet/cashbited-start.png)

Leave the node running in the background while you continue. Once you are done, type `exit` into the window to safely stop the node.

### Starting the Miner

To run the miner, open a new terminal or command prompt. Then run one of the commands below. Make sure to add in your address to the command.

**Windows:**

```powershell
./miner.exe --address cbXXXXXXX... 
```

**Linux/macOS:**

```bash
./miner --address cbXXXXXXX... 
```

_Optionally, add `--threads 1` onto the command to use less CPU for mining._

## GPU & Pool Mining

### Pools

| Name             | Address                 | Port   | Description                                                  |
| ---------------- | ----------------------- | ------ | ------------------------------------------------------------ |
| Jake's Solo Pool | `cbsolo.jakewalker.xyz` | `3333` | **This is a solo pool**, this means you work on your own, and mining profits are not shared between miners, only the miner who finds the correct hash.<br />The username is your wallet address, the password is usually left blank, but can be used to select a node (see [here](https://github.com/cashbitecrypto/node-solo-pool#features)).<br />Use the same address on multiple computers for them to work together. |

### GPU Mining with violetminer

violetminer is a CPU and GPU miner that is compatible with CashBite.

To get started, download the latest version of violetminer from the [GitHub releases page](https://github.com/turtlecoin/violetminer/releases/latest) and extract the archive to get a violetminer executable. Next, open a terminal or command prompt and run the following command, replacing the wallet address with your own.

```bash
./violetminer --algorithm chukwa_v2 --pool cbsolo.jakewalker.xyz:3333 --username cbXXXXXXX...
```



For advanced configuration of violetminer (like reducing lag so you can use your computer while mining), check the [violetminer readme file](https://github.com/turtlecoin/violetminer/blob/master/README.md).

## Miner Tips

- When using zedwallet, it will not show mining profits by default. Use `--wallet-file`, `--reset 0` (which will scan from the start of the blockchain) and `--scan-coinbase-transactions` to show mining profits. (e.g. `./zedwallet --wallet-file wallet1 --reset 0 --scan-coinbase-transactions`).
- With more miners, it will be more difficult to 'win' blocks. A more powerful computer can mine faster and give more chance against beating others.
- Mining in a pool lets you work with others to mine, which means you can get profits more regularly than if you were mining solo. Essentially the compute power of everyone in the pool is used to mine which makes mining fast.
