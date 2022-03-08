import	{ethers}		from	'ethers';
import BigNumber from 'bignumber.js';

export function formatCurrency(amount, decimals = 2) {
	if (!isNaN(amount)) {

		if(BigNumber(amount).gt(0) && BigNumber(amount).lt(0.01)) {
			return '< 0.01';
		}

		const formatter = new Intl.NumberFormat(undefined, {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		});

		return formatter.format(amount);
	} else {
		return 0;
	}
}

export function truncateAddress(address) {
	if (address !== undefined) {
		return `${address.slice(0, 4)}...${address.slice(-4)}`;
	}
	return '0x000...0000';
}

export function formatAddress(address, length = 'short') {
	if (address && length === 'short') {
		address =
      address.substring(0, 6) +
      '...' +
      address.substring(address.length - 4, address.length);
		return address;
	} else if (address && length === 'long') {
		address =
      address.substring(0, 12) +
      '...' +
      address.substring(address.length - 8, address.length);
		return address;
	} else {
		return null;
	}
}

export function bnDec(decimals) {
	return new BigNumber(10).pow(parseInt(decimals));
}

export function sqrt(value) {
	if (value < 0n) {
		throw new Error('square root of negative numbers is not supported');
	}

	if (value < 2n) {
		return value;
	}

	function newtonIteration(n, x0) {
		// eslint-disable-next-line no-bitwise
		const x1 = (n / x0 + x0) >> 1n;
		if (x0 === x1 || x0 === x1 - 1n) {
			return x0;
		}
		return newtonIteration(n, x1);
	}

	return newtonIteration(value, 1n);
}

export const toAddress = (address) => {
	if (!address) {
		return ethers.constants.AddressZero;
	}
	if (address === 'GENESIS') {
		return ethers.constants.AddressZero;
	}
	try {
		return ethers.utils.getAddress(address);	
	} catch (error) {
		return ethers.constants.AddressZero;
	}
};

export const isAddress = (address) => {
	return (toAddress(address) !== ethers.constants.AddressZero);
};