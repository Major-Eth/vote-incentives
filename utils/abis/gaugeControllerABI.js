export const gaugeControllerABI = [
	{
		name: 'CommitOwnership',
		inputs: [{type: 'address', name: 'admin', indexed: false}],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'ApplyOwnership',
		inputs: [{type: 'address', name: 'admin', indexed: false}],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'AddType',
		inputs: [
			{type: 'string', name: 'name', indexed: false},
			{type: 'int128', name: 'type_id', indexed: false}
		],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'NewTypeWeight',
		inputs: [
			{type: 'int128', name: 'type_id', indexed: false},
			{type: 'uint256', name: 'time', indexed: false},
			{type: 'uint256', name: 'weight', indexed: false},
			{type: 'uint256', name: 'total_weight', indexed: false}
		],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'NewGaugeWeight',
		inputs: [
			{type: 'address', name: 'gauge_address', indexed: false},
			{type: 'uint256', name: 'time', indexed: false},
			{type: 'uint256', name: 'weight', indexed: false},
			{type: 'uint256', name: 'total_weight', indexed: false}
		],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'VoteForGauge',
		inputs: [
			{type: 'uint256', name: 'time', indexed: false},
			{type: 'address', name: 'user', indexed: false},
			{type: 'address', name: 'gauge_addr', indexed: false},
			{type: 'uint256', name: 'weight', indexed: false}
		],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'NewGauge',
		inputs: [
			{type: 'address', name: 'addr', indexed: false},
			{type: 'int128', name: 'gauge_type', indexed: false},
			{type: 'uint256', name: 'weight', indexed: false}
		],
		anonymous: false,
		type: 'event'
	},
	{
		outputs: [],
		inputs: [
			{type: 'address', name: '_token'},
			{type: 'address', name: '_voting_escrow'}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		name: 'commit_transfer_ownership',
		outputs: [],
		inputs: [{type: 'address', name: 'addr'}],
		stateMutability: 'nonpayable',
		type: 'function',
		gas: 37597
	},
	{
		name: 'apply_transfer_ownership',
		outputs: [],
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		gas: 38497
	},
	{
		name: 'gauge_types',
		outputs: [{type: 'int128', name: ''}],
		inputs: [{type: 'address', name: '_addr'}],
		stateMutability: 'view',
		type: 'function',
		gas: 1625
	},
	{
		name: 'add_gauge',
		outputs: [],
		inputs: [
			{type: 'address', name: 'addr'},
			{type: 'int128', name: 'gauge_type'}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		name: 'add_gauge',
		outputs: [],
		inputs: [
			{type: 'address', name: 'addr'},
			{type: 'int128', name: 'gauge_type'},
			{type: 'uint256', name: 'weight'}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		name: 'checkpoint',
		outputs: [],
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
		gas: 18033784416
	},
	{
		name: 'checkpoint_gauge',
		outputs: [],
		inputs: [{type: 'address', name: 'addr'}],
		stateMutability: 'nonpayable',
		type: 'function',
		gas: 18087678795
	},
	{
		name: 'gauge_relative_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'address', name: 'addr'}],
		stateMutability: 'view',
		type: 'function'
	},
	{
		name: 'gauge_relative_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [
			{type: 'address', name: 'addr'},
			{type: 'uint256', name: 'time'}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		name: 'gauge_relative_weight_write',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'address', name: 'addr'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		name: 'gauge_relative_weight_write',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [
			{type: 'address', name: 'addr'},
			{type: 'uint256', name: 'time'}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		name: 'add_type',
		outputs: [],
		inputs: [{type: 'string', name: '_name'}],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		name: 'add_type',
		outputs: [],
		inputs: [
			{type: 'string', name: '_name'},
			{type: 'uint256', name: 'weight'}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		name: 'change_type_weight',
		outputs: [],
		inputs: [
			{type: 'int128', name: 'type_id'},
			{type: 'uint256', name: 'weight'}
		],
		stateMutability: 'nonpayable',
		type: 'function',
		gas: 36246310050
	},
	{
		name: 'change_gauge_weight',
		outputs: [],
		inputs: [
			{type: 'address', name: 'addr'},
			{type: 'uint256', name: 'weight'}
		],
		stateMutability: 'nonpayable',
		type: 'function',
		gas: 36354170809
	},
	{
		name: 'vote_for_gauge_weights',
		outputs: [],
		inputs: [
			{type: 'address', name: '_gauge_addr'},
			{type: 'uint256', name: '_user_weight'}
		],
		stateMutability: 'nonpayable',
		type: 'function',
		gas: 18142052127
	},
	{
		name: 'get_gauge_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'address', name: 'addr'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2974
	},
	{
		name: 'get_type_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'int128', name: 'type_id'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2977
	},
	{
		name: 'get_total_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 2693
	},
	{
		name: 'get_weights_sum_per_type',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'int128', name: 'type_id'}],
		stateMutability: 'view',
		type: 'function',
		gas: 3109
	},
	{
		name: 'admin',
		outputs: [{type: 'address', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 1841
	},
	{
		name: 'future_admin',
		outputs: [{type: 'address', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 1871
	},
	{
		name: 'token',
		outputs: [{type: 'address', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 1901
	},
	{
		name: 'voting_escrow',
		outputs: [{type: 'address', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 1931
	},
	{
		name: 'n_gauge_types',
		outputs: [{type: 'int128', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 1961
	},
	{
		name: 'n_gauges',
		outputs: [{type: 'int128', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 1991
	},
	{
		name: 'gauge_type_names',
		outputs: [{type: 'string', name: ''}],
		inputs: [{type: 'int128', name: 'arg0'}],
		stateMutability: 'view',
		type: 'function',
		gas: 8628
	},
	{
		name: 'gauges',
		outputs: [{type: 'address', name: ''}],
		inputs: [{type: 'uint256', name: 'arg0'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2160
	},
	{
		name: 'vote_user_slopes',
		outputs: [
			{type: 'uint256', name: 'slope'},
			{type: 'uint256', name: 'power'},
			{type: 'uint256', name: 'end'}
		],
		inputs: [
			{type: 'address', name: 'arg0'},
			{type: 'address', name: 'arg1'}
		],
		stateMutability: 'view',
		type: 'function',
		gas: 5020
	},
	{
		name: 'vote_user_power',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'address', name: 'arg0'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2265
	},
	{
		name: 'last_user_vote',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [
			{type: 'address', name: 'arg0'},
			{type: 'address', name: 'arg1'}
		],
		stateMutability: 'view',
		type: 'function',
		gas: 2449
	},
	{
		name: 'points_weight',
		outputs: [
			{type: 'uint256', name: 'bias'},
			{type: 'uint256', name: 'slope'}
		],
		inputs: [
			{type: 'address', name: 'arg0'},
			{type: 'uint256', name: 'arg1'}
		],
		stateMutability: 'view',
		type: 'function',
		gas: 3859
	},
	{
		name: 'time_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'address', name: 'arg0'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2355
	},
	{
		name: 'points_sum',
		outputs: [
			{type: 'uint256', name: 'bias'},
			{type: 'uint256', name: 'slope'}
		],
		inputs: [
			{type: 'int128', name: 'arg0'},
			{type: 'uint256', name: 'arg1'}
		],
		stateMutability: 'view',
		type: 'function',
		gas: 3970
	},
	{
		name: 'time_sum',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'uint256', name: 'arg0'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2370
	},
	{
		name: 'points_total',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'uint256', name: 'arg0'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2406
	},
	{
		name: 'time_total',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [],
		stateMutability: 'view',
		type: 'function',
		gas: 2321
	},
	{
		name: 'points_type_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [
			{type: 'int128', name: 'arg0'},
			{type: 'uint256', name: 'arg1'}
		],
		stateMutability: 'view',
		type: 'function',
		gas: 2671
	},
	{
		name: 'time_type_weight',
		outputs: [{type: 'uint256', name: ''}],
		inputs: [{type: 'uint256', name: 'arg0'}],
		stateMutability: 'view',
		type: 'function',
		gas: 2490
	}
];
