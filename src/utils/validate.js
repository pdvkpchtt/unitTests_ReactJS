const { z, string, number, boolean } = require("zod");

const validate = z.object({
  name: z
    .string({
      required_error: "Имя обязательно к заполнению",
      invalid_type_error: "Имя - строка",
    })
    .min(4, { message: "Минимальная длина имени - 4 символа" }),
  username: z
    .string({
      required_error: "Username обязателен к заполнению",
      invalid_type_error: "Username - строка",
    })
    .min(3, { message: "Минимальная длина username - 3 символа" })
    .refine((value) => /^[a-zA-Z0-9._]+$/.test(value), {
      message: "username содержит недопустимые символы",
    }),
  age: z
    .number({
      required_error: "Возраст обязателен к заполнению",
      invalid_type_error: "Возраст - число",
    })
    .gte(18, { message: "Органичеение по возрасту - 18+" }),
  agree: z.boolean({
    required_error: "Обязательно надо",
    invalid_type_error: "Да или нет",
  }),
  // .true({ message: "Согласитесь!" }),
  city: z
    .string({
      required_error: "Город обязателен",
      invalid_type_error: "Город - строка",
    })
    .min(1, { message: "Город минимум 1 символ" }),
});

module.exports = validate;
