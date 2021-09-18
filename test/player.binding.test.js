import { JSDOM } from "jsdom"
import { Core, Binding } from "domodel"

import { Player, PlayerModel, PlayerBinding } from "../index.js"

const virtualDOM = new JSDOM()
const window = virtualDOM.window
const { document } = window

const RootModel = { tagName: "div" }
let rootBinding

export function setUp(callback) {
	rootBinding = new Binding()
	Core.run(RootModel, { parentNode: document.body, binding: rootBinding })
	callback()
}

export function tearDown(callback) {
	rootBinding.remove()
	callback()
}

export function instance(test) {
	test.expect(1)
	test.ok(new PlayerBinding() instanceof Binding)
	test.done()
}

export function onCreated(test) {
	test.done()
}
