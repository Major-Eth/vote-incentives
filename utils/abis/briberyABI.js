export const briberyABI = [
	{
		inputs: [
			{internalType: 'address', name: '', type: 'address'},
			{internalType: 'address', name: '', type: 'address'}
		],
		name: 'active_period',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'gauge', type: 'address'},
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
			{internalType: 'address', name: 'gauge', type: 'address'},
			{internalType: 'address', name: 'reward_token', type: 'address'}
		],
		name: 'claim_reward',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'user', type: 'address'},
			{internalType: 'address', name: 'gauge', type: 'address'},
			{internalType: 'address', name: 'reward_token', type: 'address'}
		],
		name: 'claim_reward',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'user', type: 'address'},
			{internalType: 'address', name: 'gauge', type: 'address'},
			{internalType: 'address', name: 'reward_token', type: 'address'}
		],
		name: 'claimable',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: 'reward', type: 'address'}],
		name: 'gauges_per_reward',
		outputs: [{internalType: 'address[]', name: '', type: 'address[]'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: '', type: 'address'},
			{internalType: 'address', name: '', type: 'address'},
			{internalType: 'address', name: '', type: 'address'}
		],
		name: 'last_user_claim',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: '', type: 'address'},
			{internalType: 'address', name: '', type: 'address'}
		],
		name: 'reward_per_token',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{internalType: 'address', name: 'gauge', type: 'address'}],
		name: 'rewards_per_gauge',
		outputs: [{internalType: 'address[]', name: '', type: 'address[]'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{internalType: 'address', name: 'user', type: 'address'},
			{internalType: 'address', name: 'gauge', type: 'address'},
			{internalType: 'address', name: 'reward_token', type: 'address'}
		],
		name: 'tokens_for_bribe',
		outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
		stateMutability: 'view',
		type: 'function'
	}
];
