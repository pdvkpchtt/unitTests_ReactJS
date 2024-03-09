const validate = require("../utils/validate");

async function form(req, res) {
  const validateRes = validate.safeParse({
    name: req?.body?.name,
    username: req?.body?.username,
    age: req?.body?.age,
    agree: req?.body?.agree,
    city: req?.body?.city?.label,
  });

  console.log(
    validateRes?.success,
    validateRes.error?.errors?.map((i) => i?.message)
  );

  if (validateRes?.success) {
    res.status(200);
    res.send({ status: "good" });
  } else {
    res.status(400);
    res.send({
      status: "error",
      message: validateRes.error?.errors?.map((i) => i?.message),
    });
  }
}

module.exports = form;
