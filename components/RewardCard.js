import	React, {useState}			from	'react';
import	PieChartIcon				from	'@material-ui/icons/PieChart';
import	{ethers}					from	'ethers';
import	* as moment					from	'moment';
import	{units, bigNumberAsAmount}	from	'utils';
import	* as CONST					from	'utils/constants';
import	useWeb3						from	'contexts/useWeb3';


export default function RewardCard({reward}) {
	const	{provider} = useWeb3();
	const	[claiming, setClaiming] = useState(false);

	async function _callClaimReward(gauge, rewardToken, version) {
		const	signer = provider.getSigner();
		const	bribery = new ethers.Contract(version === 1 ? CONST.BRIBERY_ADDRESS : CONST.BRIBERY_ADDRESS_V2, ['function claim_reward(address, address) public'], signer);
		const	transaction = await bribery.claim_reward(gauge, rewardToken);
		const	transactionResult = await transaction.wait();
		if (transactionResult.status === 1) {
			return true;
		} else {
			return false;
		}
	}

	const onClaim = () => {
		if(!claiming) {
			_callClaimReward(reward?.gauge?.gaugeAddress, reward?.rewardToken?.address, reward.version).then(() => setClaiming(false));
		}
	};

	const renderClaimable = () => {
		return (
			<>
				<p className={'pt-8 text-xs text-gray-blue-1'}>{'Amount claimable:'}</p>
				<p className={'my-3 text-3xl font-bold text-center text-dark-blue-1'} >
					{`${bigNumberAsAmount(reward.claimable, reward.decimals, 6, reward.rewardToken.symbol)}`}
				</p>
				<p className={'pb-8 text-xs text-center text-gray-blue-1'}>
					{`Your reward for voting for ${reward.gauge.name}`}
				</p>
				{
					reward.hasClaimed && (
						<button disabled className={'mt-auto w-full button button-filled-alt'}>
							{'Reward Claimed'}
						</button>
					)}
				{
					!reward.hasClaimed && (
						<button className={'mt-auto w-full button button-filled-alt'} onClick={onClaim} disabled={claiming}>
							{claiming ? 'Claiming ...' : 'Claim Reward'}
						</button>
					)}
			</>
		);
	};

	const renderAvailable = () => {
		const	availableRaw = units(reward.tokensForBribe, reward.decimals);
		const	current = Number(availableRaw) * reward.gauge.votes.userVoteSlopePercent / 100;

		return (
			<>
				<p className={'pt-8 text-xs text-gray-blue-1'}>{'Current receive amount:'}</p>
				<p className={'my-3 text-3xl font-bold text-center text-dark-blue-1'} >
					{`${current} ${reward.rewardToken.symbol}`}
				</p>
				<p className={'text-xs text-center text-gray-blue-1'}>
					{`100% vote for ${reward.gauge.name} gives you ${bigNumberAsAmount(reward.tokensForBribe, reward.decimals, 6, reward.rewardToken.symbol)}`}
				</p>
				<p className={'py-8 mt-auto text-xs text-center text-gray-blue-1'}>
					{`Unlocks ${moment.unix(reward.rewardsUnlock).fromNow()}`}
				</p>
				<button
					className={'w-full button button-filled-alt'}
					onClick={() => window.open('https://dao.curve.fi/gaugeweight')}>
					{'Cast Vote'}
				</button>
			</>
		);
	};

	return (
		<div
			key={reward.id}
			className={'flex flex-col items-center py-6 px-4 bg-white rounded-md shadow-sm'}>
			<PieChartIcon className={'p-2 text-white bg-[#0053FF] rounded-full shadow-sm'} style={{width: 64, height: 64}} />
			{!reward.claimable.isZero() ? renderClaimable() : renderAvailable()}
		</div>
	);
}
