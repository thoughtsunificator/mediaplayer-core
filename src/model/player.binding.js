import { Core, Binding }  from "domodel"

import HOTKEYS from "../../data/hotkeys.js"

export default class extends Binding {

	onCreated() {

		const { player, model, binding } = this.properties

		this._hotkeys = { ...HOTKEYS }

		this.listen(player, "hotkeys add", data => {
			this._hotkeys = { ...this._hotkeys, ...data }
		})

		this.listen(player, "pip toggle", () => {
			this.root.classList.toggle("minimized")
			if(this.root.classList.contains("minimized")) {
				this.identifier.pipButton.textContent = "↖️"
				this.identifier.lightButton.style.display = "none"
			} else {
				this.identifier.pipButton.textContent = "↙️"
				this.identifier.lightButton.style.display = ""
			}
		})

		this.listen(player, "light toggle", () => this.identifier.cloak.classList.toggle("off"))

		this.listen(player, "error", () => {
			this.identifier.media.classList.remove("loading")
			this.identifier.media.classList.add("error")
		})

		this.listen(player, "loading", () => {
			this.identifier.media.classList.remove("error")
			this.identifier.media.classList.add("loading")
		})

		this.listen(player, "fullscreen toggle", () => {
			if (document.fullscreenElement !== null) {
				document.exitFullscreen()
			} else {
				this.root.requestFullscreen()
			}
		})

		this.listen(player, "fullscreen disable", () => {
			if (document.fullscreenElement !== null) {
				document.exitFullscreen()
			}
		})

		this.identifier.pipButton.addEventListener("click", () => {
			player.emit("pip toggle")
		})

		this.identifier.lightButton.addEventListener("click", () => {
			player.emit("light toggle")
		})

		this.root.ownerDocument.addEventListener('fullscreenchange', () => {
			if (document.fullscreenElement !== null) {
				this.root.classList.add("fullscreen")
			} else {
				this.root.classList.remove("fullscreen")
			}
		});

		this.root.ownerDocument.defaultView.addEventListener("keydown", event => {
			if (Object.hasOwnProperty.call(this._hotkeys, event.keyCode)) {
				player.emit(this._hotkeys[event.keyCode])
			}
		})

		this.run(model, { parentNode: this.identifier.media, binding })
	}

}
