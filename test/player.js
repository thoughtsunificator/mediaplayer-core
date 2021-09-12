import { Observable } from "domodel"

import { Player } from "../index.js"

export function instance(test) {
	test.expect(1)
	const player = new Player()
	test.ok(player instanceof Observable)
	test.done()
}
