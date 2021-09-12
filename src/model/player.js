export default {
	tagName: "div",
	className: "player show",
	children: [
		{
			tagName: "div",
			identifier: "cloak",
			className: "cloak"
		},
		{
			tagName: "div",
			className: "controls",
			identifier: "controls",
			children: [
				{
					tagName: "button",
					identifier: "pipButton",
					textContent: "↙️"
				},
				{
					tagName: "button",
					identifier: "lightButton",
					textContent: "💡"
				}
			]
		},
		{
			tagName: "div",
			identifier: "media",
			className: "media",
			children: [
				{
					tagName: "div",
					className: "overlay"
				}
			]
		}
	]
}
