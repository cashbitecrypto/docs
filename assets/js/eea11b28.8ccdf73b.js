"use strict";(self.webpackChunkcashbite_docs=self.webpackChunkcashbite_docs||[]).push([[577],{9720:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"mining",title:"Mining"},s="Mining",m={unversionedId:"mining",id:"mining",isDocsHomePage:!1,title:"Mining",description:"Mining is a process of verifying transactions betweeen accounts. The process is very compute intensive, so miners are rewarded with some currency. Miners compete to verify blocks, the first to do this gets paid the reward.",source:"@site/docs/mining.md",sourceDirName:".",slug:"/mining",permalink:"/docs/mining",editUrl:"https://github.com/cashbitecrypto/docs/edit/main/docs/mining.md",tags:[],version:"current",frontMatter:{id:"mining",title:"Mining"},sidebar:"tutorialSidebar",previous:{title:"Creating a Wallet",permalink:"/docs/wallet"},next:{title:"Nodes",permalink:"/docs/developers/nodes"}},d=[{value:"Simple Mining",id:"simple-mining",children:[{value:"Starting a Node",id:"starting-a-node",children:[],level:3},{value:"Starting the Miner",id:"starting-the-miner",children:[],level:3}],level:2},{value:"GPU &amp; Pool Mining",id:"gpu--pool-mining",children:[{value:"Pools",id:"pools",children:[],level:3},{value:"GPU Mining with violetminer",id:"gpu-mining-with-violetminer",children:[],level:3}],level:2},{value:"Miner Tips",id:"miner-tips",children:[],level:2}],p={toc:d};function u(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mining"},"Mining"),(0,o.kt)("p",null,"Mining is a process of verifying transactions betweeen accounts. The process is very compute intensive, so miners are rewarded with some currency. Miners compete to verify blocks, the first to do this gets paid the reward."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Please note:")," using the simple mining method below, or mining in a solo pool can be inefficient as you are competing against everyone else who is mining. Consider mining in a pool where shares are paid out for more consistent mining payments."))),(0,o.kt)("h2",{id:"simple-mining"},"Simple Mining"),(0,o.kt)("p",null,"To mine, you will need to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"miner")," program which you ",(0,o.kt)("a",{parentName:"p",href:"/docs/install"},"installed")," earlier. You will also need to run a local node."),(0,o.kt)("h3",{id:"starting-a-node"},"Starting a Node"),(0,o.kt)("p",null,"Mining requires a node to communicate with, so you will need to run one on your computer. To do this, simply open a terminal or command prompt and run CashBited (for example, on Windows use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"./CashBited.exe")," and on Linux use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"./CashBited"),")."),(0,o.kt)("p",null,"When starting, your node will 'sync' with the network. This can take a while and you will get messages letting you know the progress. After the large text shows, the node is ready."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CashBited output",src:n(809).Z})),(0,o.kt)("p",null,"Leave the node running in the background while you continue. Once you are done, type ",(0,o.kt)("inlineCode",{parentName:"p"},"exit")," into the window to safely stop the node."),(0,o.kt)("h3",{id:"starting-the-miner"},"Starting the Miner"),(0,o.kt)("p",null,"To run the miner, open a new terminal or command prompt. Then run one of the commands below. Make sure to add in your address to the command."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"./miner.exe --address cbXXXXXXX... \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux/macOS:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./miner --address cbXXXXXXX... \n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Optionally, add ",(0,o.kt)("inlineCode",{parentName:"em"},"--threads 1")," onto the command to use less CPU for mining.")),(0,o.kt)("h2",{id:"gpu--pool-mining"},"GPU & Pool Mining"),(0,o.kt)("h3",{id:"pools"},"Pools"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Address"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Jake's Solo Pool"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cbsolo.jakewalker.xyz")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"3333")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"This is a solo pool"),", this means you work on your own, and mining profits are not shared between miners, only the miner who finds the correct hash.",(0,o.kt)("br",null),"The username is your wallet address, the password is usually left blank, but can be used to select a node (see ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/cashbitecrypto/node-solo-pool#features"},"here"),").",(0,o.kt)("br",null),"Use the same address on multiple computers for them to work together.")))),(0,o.kt)("h3",{id:"gpu-mining-with-violetminer"},"GPU Mining with violetminer"),(0,o.kt)("p",null,"violetminer is a CPU and GPU miner that is compatible with CashBite."),(0,o.kt)("p",null,"To get started, download the latest version of violetminer from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/turtlecoin/violetminer/releases/latest"},"GitHub releases page")," and extract the archive to get a violetminer executable. Next, open a terminal or command prompt and run the following command, replacing the wallet address with your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./violetminer --algorithm chukwa_v2 --pool cbsolo.jakewalker.xyz:3333 --username cbXXXXXXX...\n")),(0,o.kt)("p",null,"For advanced configuration of violetminer (like reducing lag so you can use your computer while mining), check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/turtlecoin/violetminer/blob/master/README.md"},"violetminer readme file"),"."),(0,o.kt)("h2",{id:"miner-tips"},"Miner Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using zedwallet, it will not show mining profits by default. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"--wallet-file"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"--reset 0")," (which will scan from the start of the blockchain) and ",(0,o.kt)("inlineCode",{parentName:"li"},"--scan-coinbase-transactions")," to show mining profits. (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"./zedwallet --wallet-file wallet1 --reset 0 --scan-coinbase-transactions"),")."),(0,o.kt)("li",{parentName:"ul"},"With more miners, it will be more difficult to 'win' blocks. A more powerful computer can mine faster and give more chance against beating others."),(0,o.kt)("li",{parentName:"ul"},"Mining in a pool lets you work with others to mine, which means you can get profits more regularly than if you were mining solo. Essentially the compute power of everyone in the pool is used to mine which makes mining fast.")))}u.isMDXComponent=!0},809:function(e,t,n){t.Z=n.p+"assets/images/cashbited-start-af2b69fdacc73df609e8e02ec4c61b82.png"}}]);