import post1 from './images/post-1.jpg'
import post2 from './images/post-2.jpg'
import post3 from './images/post-3.jpg'
import profilePic1 from './images/pp-1.jpg'
import profilePic2 from './images/pp-2.jpg'
import profilePic3 from './images/pp-3.jpg'
import profilePic4 from './images/pp-4.jpg'

const data = [
	{
		imgSrc: post1,
		category: 'Article',
		title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
		desc: 'I\'ve worked in UX for the better part of a decade. From now on, I plan to rei...',
		profilePic: profilePic1,
		name: 'Sarthak Kamra',
		views: '1.4k'
	},
	{
		imgSrc: post2,
		category: 'Education',
		title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
		desc: 'I\'ve worked in UX for the better part of a decade. From now on, I plan to rei...',
		profilePic: profilePic2,
		name: 'Sarah West',
		views: '1.4k'
	},
	{
		imgSrc: post3,
		category: 'Meetup',
		title: 'Finance & Investment Elite Social Mixer @Lujiazui',
		date: 'Fri, 12 Oct, 2018',
		location: 'Ahmedabad, India',
		website: {
			text: 'Visit Website',
			url: '#',
			color: 'red'
		},
		profilePic: profilePic3,
		name: 'Ronal Jones',
		views: '1.4k'
	},
	{
		category: 'Job',
		title: 'Software Developer',
		company: 'Innovaccer Analytics Private ltd.',
		location: 'Noida, India',
		website: {
			text: 'Apply on Timesjobs',
			url: '#',
			color: 'green'
		},
		profilePic: profilePic4,
		name: 'Joseph Gray',
		views: '1.4k'
	}
]

export default data