import App from "../../src/js/components/app.vue";

describe("App Component", () => {
  it("should have a name", () => {
    expect(App.name).toBe("App");
  });
  it("should have a Vuex store", () => {
    expect(App.hasOwnProperty("store")).toBe(true);
  });
  it("should have a router view in its template", () => {
    expect(App.template).toMatch(/<router-view\s*(.*)><\/router-view>/i)
  });
})
