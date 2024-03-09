const form = require("../controllers/form");

const req = {
  body: {
    name: "danil",
    username: "_.d1223._",
    age: 21,
    agree: true,
    city: { label: "Ufa" },
  },
};
const req2 = {
  body: {
    name: "da",
    username: "_.d1223._!",
    age: 16,
    agree: true,
    city: { label: "Ufa" },
  },
};

const res = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
};

it("should be good", async () => {
  await form(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledTimes(1);
});

it("should be bad", async () => {
  await form(req2, res);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.send).toHaveBeenCalledTimes(1);
});
