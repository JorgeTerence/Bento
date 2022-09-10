const CONFIG = {

	// ~~~~~~ //
	// Basics //
	// ~~~~~~ //

	// General
	name: 'Jorge',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento',

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456',
	weatherIcons: 'OneDark',
	weatherUnit: 'C',
	language: 'en',

	trackLocation: true,
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ~~~~~~~ //
	// Buttons //
	// ~~~~~~~ //

	// YOOOOOOOO this repo will need to be private cus API key :P

	firstButtonsContainer: [
		{ name: 'Github', 			icon: 'github', 	 link: 'https://github.com' },
		{ name: 'MDN Web Docs', icon: 'globe', 		 link: 'https://developer.mozilla.org' },
		{ name: 'Todoist', 			icon: 'trello', 	 link: 'https://todoist.com' },
		{ name: 'Duolingo',		icon: 'languages', 	 link: 'https://www.duolingo.com' },
		{ name: 'MangaDex', 		icon: 'book-open', link: 'https://mangadex.org' },
		{ name: 'YouTube', 			icon: 'youtube', 	 link: 'https://www.youtube.com' },
	].map((btn, i) => ({...btn, id: `${i + 1}`})),

	// ~~~~~ //
	// Lists //
	// ~~~~~ //

	// Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			links: [
				{ name: 'Lo-Fi', link: 'https://music.youtube.com' },
				{ name: 'Rock', link: 'https://music.youtube.com' },
				{ name: 'Hip-Hop', link: 'https://music.youtube.com' },
				{ name: 'Electro', link: 'https://music.youtube.com' },
			],
		},
		{
			icon: 'binary',
			links: [
				{ name: 'Arch Linux', link: 'https://wiki.archlinux.org' },
				{ name: 'HackerRank', link: 'https://www.hackerrank.com' },
				{ name: 'Linkedin', link: 'https://www.linkedin.com' },
				{ name: 'Blog', link: 'https://music.youtube.com' }, 
			],
		},
	].map((list, i) => ({...list, id: `${i + 1}`})),
};
