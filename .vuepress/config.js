module.exports = {
	host: "127.0.0.1",
	title: "得邪",
	description: "哈人",
	dest: "public",
	head: [
		[
			"link",
			{
				rel: "img",
				href: "/logo.png",
			},
		],
		[
			"meta",
			{
				name: "viewport",
				content: "width=device-width,initial-scale=1,user-scalable=no",
			},
		],
	],
	theme: "reco",
	themeConfig: {
		nav: [
			{
				text: "主页",
				link: "/",
				icon: "reco-home",
			},
			{
				text: "时间轴",
				link: "/timeline/",
				icon: "reco-date",
			},
			{
				text: "留言",
				icon: "reco-message",
				link: "",
			},
			{
				text: "关于",
				icon: "reco-message",
				items: [
					{
						text: "GitHub",
						link: "https://github.com/onlyonejoker",
						icon: "reco-github",
					},
				],
			},
		],
		sidebar: {
			"/docs/theme-reco/": ["", "theme", "plugin", "api"],
		},
		type: "blog",
		blogConfig: {
			category: {
				location: 2,
				text: "Category",
			},
			tag: {
				location: 3,
				text: "Tag",
			},
		},
		friendLink: [
			{
				title: "",
				desc: "",
				email: "",
				link: "",
			},
			{
				title: "vuepress-theme-reco",
				desc: "A simple and beautiful vuepress Blog & Doc theme.",
				avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
				link: "https://vuepress-theme-reco.recoluan.com",
			},
		],
		valineConfig: {
			appId: "Je6hYAcdaMAi56ES0X6sB6Nx-gzGzoHsz", // your appId
			appKey: "m3K8zq5u0IUPohsgtnt58Phz", // your appKey
		},
		logo: "/logo.png",
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: "Last Updated",
		author: "得邪",
		authorAvatar: "/logo.png",
		record: "xxxx",
		startYear: "2020",
		blogConfig: {
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: "分类", // 默认文案 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: "标签", // 默认文案 “标签”
			},
		},
		author: "得邪",
	},
	markdown: {
		lineNumbers: true,
	},
};
