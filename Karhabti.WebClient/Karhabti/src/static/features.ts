import IHomeFeatures from '../types/types';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const features: IHomeFeatures[] = [
	{
		icon: DevicesOtherIcon,
		title: 'Instant Access',
		text: 'Access your account from anywhere with any device.',
	},
	{
		icon: MoneyOffIcon,
		title: 'Completely free',
		text: 'We require no subscription or payment to use our service.',
	},
	{
		icon: PollIcon,
		title: 'Data visualisation',
		text: 'Consult your data with a beautiful visualisations and charts.',
	},
	{
		icon: EmojiEventsIcon,
		title: 'achievements',
		text: 'Share your achievements to let others see how well  you treat your car.',
	},
];
export default features;
