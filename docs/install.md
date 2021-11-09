---
id: install
title: Installing
sidebar_position: 1
---

# Installing

Find and download the latest builds of CashBite [here](https://github.com/cashbitecrypto/cashbite/releases/latest).

CashBite currently works on Windows, macOS and Linux computers, see the table below for compatibility.

| Name               | For                                  |
| ------------------ | ------------------------------------ |
| `cashbite-aarch64` | ARM-based Linux computers            |
| `cashbite-linux`   | Intel or ARM-based Linux computers   |
| `cashbite-osx`     | Intel-based Mac computers            |
| `cashbite-windows` | Intel or ARM-based Windows computers |

## Binaries

After unzipping, you will find 5 binaries:

- **`CashBited`** which is the daemon (hence the 'd' at the end). This runs a 'node' of the CashBite blockchain which keeps track of transactions between different users.
- **`cryptotest`** which is a test program which is currently not used.
- **`miner`** which is a _simple_ mining program. See more on mining [here](./mining.md).
- **`wallet-api`** which creates an API that can be used for managing wallets. You most likely won't need this unless you are developing something that talks to wallets.
- **`zedwallet`** which is a somewhat user friendly wallet program for checking balances and creating transactions.

On Linux, you will need to set the binaries as executable using the command `chmod +x *`.
