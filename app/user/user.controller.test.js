const user_controller = require("./user.controller")
// @ponicode
describe("user_controller", () => {
    test("0", () => {
        let callFunction = () => {
            user_controller()
        }
    
        expect(callFunction).not.toThrow()
    })
})
