export const voteBriberyABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'briber',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'vote_id',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'reward_token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'Bribe',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'claimant',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'vote_id',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'reward_token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'Claim',
		type: 'event'
	},
	{
		inputs: [
			{internalType: 'uint256', name: 'vote_id', type: 'uint256'},
			{internalType: 'address', name: 'reward_token', type: 'address'},
			{internalType: 'uint256', name: 'amount', type: 'uint256'}
		],
		name: 'add_reward_amount',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: 'vote_id', type: 'uint256'},
			{internalType: 'address', name: 'reward_token', type: 'address'}
		],
		name: 'claim_reward',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: 'vote_id', type: 'uint256'},
			{internalType: 'address', name: 'reward_token', type: 'address'},
			{internalType: 'address', name: 'claimant', type: 'address'}
		],
		name: 'claim_reward',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: 'vote_id', type: 'uint256'},
			{internalType: 'address', name: 'reward_token', type: 'address'},
			{internalType: 'address', name: 'claimant', type: 'address'}
		],
		name: 'estimate_bribe',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: '', type: 'uint256'},
			{internalType: 'address', name: '', type: 'address'},
			{internalType: 'address', name: '', type: 'address'}
		],
		name: 'has_claimed',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: '', type: 'uint256'},
			{internalType: 'address', name: '', type: 'address'}
		],
		name: 'reward_amount',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: 'vote_id', type: 'uint256'}],
		name: 'rewards_per_vote',
		outputs: [{internalType: 'address[]', name: '', type: 'address[]'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		name: 'snapshot_block',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: '', type: 'uint256'},
			{internalType: 'address', name: '', type: 'address'}
		],
		name: 'vote_states',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'uint256', name: 'vote_id', type: 'uint256'},
			{internalType: 'address', name: 'reward_token', type: 'address'},
			{internalType: 'address', name: 'claimant', type: 'address'}
		],
		name: 'withdraw_reward',
		outputs: [{internalType: 'bool', name: '', type: 'bool'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		name: 'yeas',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	}
];
