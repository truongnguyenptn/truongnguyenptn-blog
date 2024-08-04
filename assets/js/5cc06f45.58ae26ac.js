"use strict";(self.webpackChunkmy_gh_page=self.webpackChunkmy_gh_page||[]).push([[467],{2397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(4848),o=t(8453);const a={title:"Understanding Polkadot\u2019s Networking Protocol",description:"Explore the fundamental concepts of Polkadot's networking protocol, from network types to node roles, in a simple and intuitive manner.",date:new Date("2024-07-30T00:00:00.000Z"),permalink:"understanding-polkadots-networking-protocol",image:"./assets/polkadot-network.png",authors:"truongnguyenptn",tags:["blockchain","polkadot","networking"]},s=void 0,r={permalink:"/truongnguyenptn-blog/blog/2024/07/30/understanding-polkadot-network",editUrl:"https://github.com/truongnguyenptn/truongnguyenptn.github.io/tree/main/blog/2024/07/30/understanding-polkadot-network.md",source:"@site/blog/2024/07/30/understanding-polkadot-network.md",title:"Understanding Polkadot\u2019s Networking Protocol",description:"Explore the fundamental concepts of Polkadot's networking protocol, from network types to node roles, in a simple and intuitive manner.",date:"2024-07-30T00:00:00.000Z",tags:[{inline:!1,label:"Blockchain",permalink:"/truongnguyenptn-blog/blog/tags/blockchain",description:"Tag for blockchain related posts"},{inline:!1,label:"Polkadot",permalink:"/truongnguyenptn-blog/blog/tags/polkadot",description:"Tag for Polkadot related posts"},{inline:!0,label:"networking",permalink:"/truongnguyenptn-blog/blog/tags/networking"}],readingTime:7.715,hasTruncateMarker:!0,authors:[{name:"Truongnguyen",title:"Administrator",url:"https://github.com/truongnguyenptn",key:"truongnguyenptn"}],frontMatter:{title:"Understanding Polkadot\u2019s Networking Protocol",description:"Explore the fundamental concepts of Polkadot's networking protocol, from network types to node roles, in a simple and intuitive manner.",date:"2024-07-30T00:00:00.000Z",permalink:"understanding-polkadots-networking-protocol",image:"./assets/polkadot-network.png",authors:"truongnguyenptn",tags:["blockchain","polkadot","networking"]},unlisted:!1,nextItem:{title:"Getting Started with XCM: A Step-by-Step Guide",permalink:"/truongnguyenptn-blog/blog/2024/07/31/xcm"}},c={image:t(9778).A,authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Networks and Nodes",id:"networks-and-nodes",level:2},{value:"Network Types",id:"network-types",level:2},{value:"Private Networks",id:"private-networks",level:3},{value:"Solo Chains",id:"solo-chains",level:3},{value:"Relay Chains",id:"relay-chains",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Node Types",id:"node-types",level:2},{value:"Full Nodes",id:"full-nodes",level:3},{value:"Archive Nodes",id:"archive-nodes",level:3},{value:"Light Client Nodes",id:"light-client-nodes",level:3},{value:"Node Communication and Maintenance",id:"node-communication-and-maintenance",level:2},{value:"Gossip Protocol",id:"gossip-protocol",level:3},{value:"Consensus Mechanisms",id:"consensus-mechanisms",level:3},{value:"Network Maintenance",id:"network-maintenance",level:2},{value:"Forkless Upgrades",id:"forkless-upgrades",level:3},{value:"Governance",id:"governance",level:3},{value:"Security Measures",id:"security-measures",level:3},{value:"Comparing Full Nodes and Light Client Nodes",id:"comparing-full-nodes-and-light-client-nodes",level:2},{value:"Node Roles",id:"node-roles",level:2},{value:"Where to Go Next",id:"where-to-go-next",level:2}];function d(e){const n={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Polkadot is not just another blockchain; it's a paradigm shift in blockchain architecture. Unlike traditional monolithic blockchains, Polkadot envisions a future of interconnected chains, ushering in a new era of cross-chain interoperability."}),"\n",(0,i.jsx)(n.p,{children:"Imagine a network where specialized blockchains, each optimized for specific tasks, seamlessly communicate and transact with one another. This is the essence of Polkadot."}),"\n",(0,i.jsx)(n.p,{children:"Ready to dive into the world of Polkadot\u2019s networking protocol? Let's explore the fundamental concepts, from network types to node roles, in a simple and intuitive manner."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Polkadot Network",src:t(6308).A+"",width:"1200",height:"675"})}),"\n",(0,i.jsx)(n.h2,{id:"networks-and-nodes",children:"Networks and Nodes"}),"\n",(0,i.jsx)(n.p,{children:"When thinking about building a blockchain, it's useful to consider that boundaries are what define a network. For example, a set of computers connected to a single router can be considered a home network. A firewall might be the boundary that defines an enterprise network. Smaller, isolated networks can be connected to wider area networks through a common communication protocol. Similarly, you can think of a blockchain network as being defined by its boundaries and its isolation from or communication with other blockchains."}),"\n",(0,i.jsx)(n.p,{children:"Polkadot, using Substrate, allows developers to create any type of blockchain and define its boundaries based on specific requirements. One crucial decision is the type of network you want to build and the role different nodes will play in that network."}),"\n",(0,i.jsx)(n.h2,{id:"network-types",children:"Network Types"}),"\n",(0,i.jsx)(n.p,{children:"Polkadot-based blockchains can be used in different network architectures, each with unique features and use cases."}),"\n",(0,i.jsx)(n.h3,{id:"private-networks",children:"Private Networks"}),"\n",(0,i.jsx)(n.p,{children:"Private networks limit access to a restricted set of nodes. These networks are ideal for organizations that require control over who can participate in the network. They ensure privacy and can be customized to meet specific security and operational needs."}),"\n",(0,i.jsx)(n.p,{children:"For instance, a financial institution might use a private network to conduct internal transactions securely. The control over participants helps maintain the confidentiality and integrity of sensitive data. Additionally, private networks can be tailored to comply with regulatory requirements, providing a flexible solution for enterprise needs."}),"\n",(0,i.jsx)(n.h3,{id:"solo-chains",children:"Solo Chains"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Solo Chains",src:t(3111).A+"",width:"900",height:"600"})}),"\n",(0,i.jsx)(n.p,{children:"Solo chains operate independently and implement their own security protocols. They don't connect or communicate with any other chains. Bitcoin and Ethereum are examples of solo chains. While robust, they do not benefit from the shared security and interoperability features of Polkadot."}),"\n",(0,i.jsx)(n.p,{children:"Solo chains are like standalone applications. They are responsible for their own security, consensus, and operations. This independence can be beneficial for projects that require full control over their blockchain, but it comes at the cost of isolation from other blockchain networks."}),"\n",(0,i.jsx)(n.h3,{id:"relay-chains",children:"Relay Chains"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Solo Chains",src:t(3057).A+"",width:"800",height:"360"})}),"\n",(0,i.jsx)(n.p,{children:"Relay chains provide decentralized security and communication for other chains that connect to them. Kusama and Polkadot are examples. Relay chains act as the backbone of the network, offering security and consensus for connected parachains. This allows these parachains to focus on their specific functions without worrying about underlying security."}),"\n",(0,i.jsx)(n.p,{children:"Relay chains are the heart of Polkadot's ecosystem. They manage the overall network security and facilitate communication between different parachains. By leveraging the relay chain's security, parachains can operate more efficiently and securely, enabling a diverse range of applications to coexist within the same network."}),"\n",(0,i.jsx)(n.h3,{id:"parachains",children:"Parachains"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Para Chains",src:t(5534).A+"",width:"1200",height:"675"})}),"\n",(0,i.jsx)(n.p,{children:"Parachains connect to a relay chain and can communicate with other chains using the same relay chain. Parachains depend on the relay chain to finalize blocks and must implement the same consensus protocol as the relay chain. This setup allows parachains to interoperate seamlessly, leveraging the relay chain's security while focusing on specialized tasks."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Para Chains Architecture",src:t(5288).A+"",width:"1920",height:"800"})}),"\n",(0,i.jsx)(n.p,{children:"Parachains are specialized blockchains tailored for specific use cases. For example, one parachain might be optimized for decentralized finance (DeFi), while another might focus on supply chain management. The shared security model of the relay chain enables parachains to benefit from robust security measures without duplicating efforts, fostering innovation and efficiency."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Para Chains Architecture",src:t(1150).A+"",width:"1400",height:"1242"})}),"\n",(0,i.jsx)(n.h2,{id:"node-types",children:"Node Types"}),"\n",(0,i.jsx)(n.p,{children:"Blockchains require network nodes to be synchronized to present a consistent and up-to-date view of the blockchain state. Each synchronized node stores a copy of the blockchain and keeps track of incoming transactions. However, maintaining a full copy of an entire blockchain requires significant storage and computing resources. To address this, there are different types of nodes that interact with the chain:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Blockchain Network",src:t(960).A+"",width:"841",height:"428"})}),"\n",(0,i.jsx)(n.h3,{id:"full-nodes",children:"Full Nodes"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Full Node",src:t(9547).A+"",width:"647",height:"543"})}),"\n",(0,i.jsx)(n.p,{children:"Full nodes are a critical part of the blockchain network infrastructure and are the most common node type. They store blockchain data and typically participate in common blockchain operations, such as authoring and validating blocks, receiving and verifying transactions, and serving data in response to user requests."}),"\n",(0,i.jsx)(n.p,{children:"By default, full nodes store only the most recent 256 blocks and discard older state, except for the genesis block, to prevent indefinite growth and excessive disk space usage. They retain all block headers to validate the state and can rebuild the blockchain state by executing all blocks from the genesis block."}),"\n",(0,i.jsx)(n.h3,{id:"archive-nodes",children:"Archive Nodes"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Archive Node",src:t(3268).A+"",width:"647",height:"538"})}),"\n",(0,i.jsx)(n.p,{children:"Archive nodes are similar to full nodes but store all past blocks with complete state for every block. They are used by utilities\u2014such as block explorers and wallets\u2014that need access to historical information. Archive nodes require a lot of disk space but make querying past states faster and more efficient."}),"\n",(0,i.jsx)(n.h3,{id:"light-client-nodes",children:"Light Client Nodes"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Light Client Nodes",src:t(8014).A+"",width:"647",height:"542"})}),"\n",(0,i.jsx)(n.p,{children:"Light client nodes enable connection to a Substrate network with minimal hardware requirements. They can be embedded into web-based applications, browser extensions, mobile device applications, or IoT devices. Light client nodes provide a runtime and access to the current state through RPC endpoints but do not participate in blockchain or network operations and do not store past blocks."}),"\n",(0,i.jsx)(n.h2,{id:"node-communication-and-maintenance",children:"Node Communication and Maintenance"}),"\n",(0,i.jsx)(n.h3,{id:"gossip-protocol",children:"Gossip Protocol"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Gossip Protocol",src:t(2027).A+"",width:"1920",height:"800"})}),"\n",(0,i.jsx)(n.p,{children:"The gossip protocol is a decentralized communication method used by nodes to share information, such as transactions and blocks, with their peers. This protocol ensures that all nodes have a consistent view of the blockchain by propagating data throughout the network efficiently."}),"\n",(0,i.jsx)(n.h3,{id:"consensus-mechanisms",children:"Consensus Mechanisms"}),"\n",(0,i.jsx)(n.p,{children:"Polkadot uses Nominated Proof-of-Stake (NPoS) as its consensus mechanism. NPoS involves validators, nominators, collators, and fishermen to secure the network:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Validators"}),": Secure the relay chain by staking DOT and validating proofs from collators."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Nominators"}),": Back validators with their stake, helping to select reliable validators."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Collators"}),": Maintain parachains by collecting transactions and producing proofs for validators."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Nominated Proof-of-Stake",src:t(7196).A+"",width:"2000",height:"876"})}),"\n",(0,i.jsx)(n.h2,{id:"network-maintenance",children:"Network Maintenance"}),"\n",(0,i.jsx)(n.h3,{id:"forkless-upgrades",children:"Forkless Upgrades"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Forkless Upgrades",src:t(8598).A+"",width:"1200",height:"675"})}),"\n",(0,i.jsx)(n.p,{children:"Polkadot supports forkless upgrades, allowing the network to upgrade its protocol without creating a new chain or disrupting the ongoing operations. This capability ensures that updates can be deployed smoothly, enhancing the network's functionality and security."}),"\n",(0,i.jsx)(n.h3,{id:"governance",children:"Governance"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Governance",src:t(915).A+"",width:"1802",height:"1050"})}),"\n",(0,i.jsx)(n.p,{children:"Polkadot features an on-chain governance system where stakeholders can propose and vote on network upgrades and changes. This system includes the Council, Technical Committee, and referendums, providing a decentralized and transparent decision-making process."}),"\n",(0,i.jsx)(n.h3,{id:"security-measures",children:"Security Measures"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Security Measures",src:t(2007).A+"",width:"768",height:"309"})}),"\n",(0,i.jsx)(n.p,{children:"Polkadot's security model involves shared security for parachains, where the relay chain provides robust security to all connected parachains. This model allows parachains to focus on their specific use cases while relying on the relay chain for overall network security."}),"\n",(0,i.jsx)(n.h2,{id:"comparing-full-nodes-and-light-client-nodes",children:"Comparing Full Nodes and Light Client Nodes"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Feature"}),(0,i.jsx)(n.th,{children:"Full Nodes"}),(0,i.jsx)(n.th,{children:"Light Nodes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Storage Requirements"})}),(0,i.jsx)(n.td,{children:"Full nodes store a complete copy of the blockchain, which can be extensive. This means they require significant storage capacity."}),(0,i.jsx)(n.td,{children:"Light client nodes have minimal storage needs as they do not store the entire blockchain. Instead, they keep only the necessary information to verify the current state."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Functionality"})}),(0,i.jsx)(n.td,{children:"Full nodes perform a wide range of operations, including validating and relaying transactions, maintaining consensus, and serving data requests from other nodes and users."}),(0,i.jsx)(n.td,{children:"Light clients are limited in functionality compared to full nodes. They primarily focus on verifying transactions and accessing blockchain data through RPC endpoints."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Security"})}),(0,i.jsx)(n.td,{children:"Full nodes offer a high level of security as they independently verify all transactions and blocks. This makes them less reliant on other nodes for data integrity."}),(0,i.jsx)(n.td,{children:"While light clients are less secure than full nodes, they still offer sufficient security for most use cases by verifying only the necessary parts of the blockchain state."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Network Participation"})}),(0,i.jsx)(n.td,{children:"Full nodes contribute to the overall network's health and security by participating actively in the blockchain's operations."}),(0,i.jsx)(n.td,{children:"Light clients do not contribute to the network's consensus or operations. They are designed for ease of access and integration into lightweight applications."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Comparison Table",src:t(4077).A+"",width:"1600",height:"1029"})}),"\n",(0,i.jsx)(n.h2,{id:"node-roles",children:"Node Roles"}),"\n",(0,i.jsx)(n.p,{children:"Depending on the command-line options specified when starting a node, nodes can play different roles in the progression of the chain and provide different levels of access to the on-chain state. For example, you can limit which nodes are authorized to author new blocks and which can communicate with peers. Nodes can also be restricted to communicate with specific nodes."}),"\n",(0,i.jsx)(n.h2,{id:"where-to-go-next",children:"Where to Go Next"}),"\n",(0,i.jsx)(n.p,{children:"You can use Substrate to build virtually any type of network\u2014from a completely self-contained and private solo chain to your own relay chain ecosystem or compatible parachains."}),"\n",(0,i.jsx)(n.p,{children:"To take a deeper dive into networks and node types, explore the following topics:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Build a local blockchain"}),"\n",(0,i.jsx)(n.li,{children:"Simulate a network"}),"\n",(0,i.jsx)(n.li,{children:"Add trusted nodes"}),"\n",(0,i.jsx)(n.li,{children:"Authorize specific nodes"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By understanding the basics of Polkadot\u2019s networking protocol, you are well on your way to leveraging its powerful capabilities to build scalable, interconnected blockchain solutions."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9778:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/polkadot-network-b3f7d919e1bd619c314a20b15eed5825.png"},3268:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/archive-node-8c27a5696489eae6bf05d5e755194b54.png"},960:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/blockchain-network-0465a70d08d0d85432e751424b3db0ad.png"},8598:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fork-less-upgrade-9bb8cf4342a8d08006a528be085e04d1.png"},9547:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/full-node-384fd39cacb6893d6b10f70dbfb4d289.png"},915:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/governance-2cd2fe76478761519cecf54beb5ca923.png"},8014:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/light-client-node-c5ad579f7b95e9059a4f345c64621215.png"},4077:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/light-vs-full-9db3acda17a652be4ed69b0d6b25fd1f.png"},7196:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/n-pos-38013ae0e1f62ee26ede1ee8a04b3bc1.png"},5288:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/para-chains-architecture-3c75ae5cbe814515ac4934d2152275c2.png"},1150:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/para-chains-shared-model-185f7dfab752399a0a93d5903d4bd2b7.png"},5534:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/para-chains-6ae1a12045b219846a4fc7ffc9a0c655.png"},6308:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/polkadot-network-b3f7d919e1bd619c314a20b15eed5825.png"},2027:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/protocol-8a7e1ce7c55f098a075d01f547298000.png"},3057:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/relay-chains-390ce37d2c03f1ea43205a40669f854b.png"},2007:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/security-measures-a3e620b78180bc7302322f8084bd0c3e.png"},3111:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/solo-chains-da4a0f21bde07a789d58d24bf2a27da7.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);