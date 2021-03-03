const {isString, isCapitalised } = require("../src/index")

describe("isString", () => {
	it("returns true when argument is a string", () => {
		expect(isString("hello")).toBe(true)
	})
	it("returns true when argument is an empty string", () => {
		expect(isString("")).toBe(true)
	})
	it("returns false when a number", () => {
		expect(isString(1)).toBe(false)
	})
	it("returns false when an array", () => {
		expect(isString(1)).toBe(false)
	})
	it("returns false when an object", () => {
		expect(isString(1)).toBe(false)
	})
})
describe("isCapitalised", () => {
	it("returns true when single capitalised letter", () => {
		expect(isCapitalised("H")).toBe(true)
	})
	it("returns true when capitalised", () => {
		expect(isCapitalised("Hello")).toBe(true)
	})
	it("returns false when empty string", () => {
		expect(isCapitalised("")).toBe(false)
	})
	it("returns false when not capitalised", () => {
		expect(isCapitalised("hello")).toBe(false)
	})
	it("returns false when a number string", () => {
		expect(isCapitalised("1")).toBe(false)
	})
	it("returns false when a number", () => {
		expect(isCapitalised(1)).toBe(false)
	})
	it("returns false when an array", () => {
		expect(isCapitalised(1)).toBe(false)
	})
	it("returns false when an object", () => {
		expect(isCapitalised(1)).toBe(false)
	})
})