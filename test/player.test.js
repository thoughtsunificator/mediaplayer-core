import assert from "assert"
import { JSDOM } from "jsdom"
import { Core, Binding } from "domodel"

import { Player } from "../index.js"

const virtualDOM = new JSDOM(``)
const window = virtualDOM.window
const { document } = window

const RootModel = { tagName: "div" }
let rootBinding

describe("player", () => {

	it("instance", () => {
		assert.ok(new Binding() instanceof Binding)
	})

})
