import { mutations } from "../../src/js/store/modules/user.js";
const { SET_USER } = mutations;

describe("User Mutations", () => {
  it("can set the user", () => {
    const testUser = {
      name: "Jane",
      surname: "Doe",
      gender: "female",
      region: "Canada"
    }
    const state = {};
    SET_USER(state, testUser);
    expect(state.user).toEqual(testUser);
  });
});
