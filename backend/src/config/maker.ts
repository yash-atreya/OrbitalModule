export default {
  mainnet: {
    wsEndPoint: 'wss://eth-mainnet.alchemyapi.io/v2/c5lUDO-WfgtDR_RUj-yk6mP1PhJVd7OO',
    httpEndPoint: 'https://eth-mainnet.alchemyapi.io/v2/c5lUDO-WfgtDR_RUj-yk6mP1PhJVd7OO',
    api: {
      endPoint: 'https://api.etherscan.io/api',
      key: '14PRR4UT6TKMGNX8U4FGMQR3D2KAIY2ICR',
    },
    gasPrice: 0,
  },
  rinkeby: {
    wsEndPoint: 'wss://eth-rinkeby.alchemyapi.io/v2/c5lUDO-WfgtDR_RUj-yk6mP1PhJVd7OO',
    httpEndPoint: 'https://eth-rinkeby.alchemyapi.io/v2/c5lUDO-WfgtDR_RUj-yk6mP1PhJVd7OO',
    api: {
      endPoint: 'https://api-rinkeby.etherscan.io/api',
      key: '14PRR4UT6TKMGNX8U4FGMQR3D2KAIY2ICR',
    },
    gasPrice: 2,
  },
  arbitrum: {
    wsEndPoint: 'wss://arb-mainnet.g.alchemy.com/v2/9YHTVDuROwBJQ_EmqELMUgE5MJthBxi9',
    httpEndPoint: 'https://arb-rinkeby.g.alchemy.com/v2/9YHTVDuROwBJQ_EmqELMUgE5MJthBxi9',
    api: {
      endPoint: 'https://api.arbiscan.io/api',
      key: '',
    },
    gasPrice: 2,
    customChainId: 42161,
  },
  arbitrum_test: {
    wsEndPoint: 'wss://arb-rinkeby.g.alchemy.com/v2/9YHTVDuROwBJQ_EmqELMUgE5MJthBxi9',
    httpEndPoint: 'https://arb-rinkeby.g.alchemy.com/v2/9YHTVDuROwBJQ_EmqELMUgE5MJthBxi9',
    api: {
      endPoint: 'https://testnet.arbiscan.io/api',
      key: '',
    },
    gasPrice: 2,
    customChainId: 421611,
  },
  zksync: {
    wsEndPoint: null,
    httpEndPoint: 'https://api.zksync.io/api/v0.2',
    api: {
      endPoint: 'https://api.zksync.io/api/v0.2',
      key: '',
    },
    gasPrice: 2,
  },
  zksync_test: {
    wsEndPoint: null,
    httpEndPoint: 'https://rinkeby-api.zksync.io/api/v0.2',
    api: {
      endPoint: 'https://rinkeby-api.zksync.io/api/v0.2',
      key: '',
    },
    gasPrice: 2,
  },
  polygon: {
    wsEndPoint:
      'wss://polygon-mainnet.g.alchemy.com/v2/-j3I35JdaEEFhuwjHrEFrutl1GlY3rzI',
    httpEndPoint:
      'https://polygon-mainnet.g.alchemy.com/v2/-j3I35JdaEEFhuwjHrEFrutl1GlY3rzI',
    api: {
      endPoint: 'https://api.polygonscan.com/api',
      key: '93B5F59W4XWXRPJFD2WRERHNSPQ1T4UTAE',
    },
    gasPrice: 2,
    customChainId: 137,
  },
  polygon_test: {
    wsEndPoint:
      'wss://polygon-mumbai.g.alchemy.com/v2/akjFuzojFyDyF67GAMXV1HGqlK6SPEGp',
    httpEndPoint:
      'https://polygon-mumbai.g.alchemy.com/v2/akjFuzojFyDyF67GAMXV1HGqlK6SPEGp',
    api: {
      endPoint: 'https://api-testnet.polygonscan.com/api',
      key: '93B5F59W4XWXRPJFD2WRERHNSPQ1T4UTAE',
    },
    gasPrice: 2,
    customChainId: 80001,
  },
  optimistic: {
    wsEndPoint:
      'wss://opt.g.alchemy.com/v2/Your Key',
    httpEndPoint:
      'https://opt.g.alchemy.com/v2/Your Key',
    api: {
      endPoint: 'https://api-optimistic.etherscan.io/api',
      key: 'G1XY7R53AED1EB654H2PKV9NUMWKIGI1YA',
    },
    gasPrice: 2,
    customChainId: 10,
  },
  optimistic_test: {
    wsEndPoint:
      'wss://opt-kovan.g.alchemy.com/v2/t1Ph1XdHept57UMzEiRQghYP4y_Igg7w',
    httpEndPoint:
      'https://opt-kovan.g.alchemy.com/v2/t1Ph1XdHept57UMzEiRQghYP4y_Igg7w',
    api: {
      endPoint: 'https://api-kovan-optimistic.etherscan.io/api',
      key: 'G1XY7R53AED1EB654H2PKV9NUMWKIGI1YA',
    },
    gasPrice: 2,
    customChainId: 69,
  },
  privateKeys: {
    '0x0043d60e87c5dd08C86C3123340705a1556C4719': 'ee636e1235228c8f2d19e369c787921a171e768ca842d5ff8e0973618d530a50',
    '0x694434EC84b7A8Ad8eFc57327ddD0A428e23f8D5': '083481ea577e40e68802c92cce542a0f407175b88541b8605c239466d19dceee'
  }, // ex: {'0x0043d60e87c5dd08C86C3123340705a1556C4719': 'This address's private key'}
  ABI: [
    {
      inputs: [
        { internalType: 'uint256', name: '_initialSupply', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MinterAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MinterRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'NewOwnership',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'NewPendingOwnership',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
      name: 'addMinter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
      name: 'burn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'burnFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'subtractedValue', type: 'uint256' },
      ],
      name: 'decreaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'governor',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'addedValue', type: 'uint256' },
      ],
      name: 'increaseAllowance',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
      name: 'isMinter',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'nonces',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingGovernor',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_owner', type: 'address' },
        { internalType: 'address', name: '_spender', type: 'address' },
        { internalType: 'uint256', name: '_value', type: 'uint256' },
        { internalType: 'uint256', name: '_deadline', type: 'uint256' },
        { internalType: 'uint8', name: '_v', type: 'uint8' },
        { internalType: 'bytes32', name: '_r', type: 'bytes32' },
        { internalType: 'bytes32', name: '_s', type: 'bytes32' },
      ],
      name: 'permit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '_account', type: 'address' }],
      name: 'removeMinter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceMinter',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '_newGovernor', type: 'address' },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}
