export const Input = ({
  label = "",
  caption = "",
  placeholder = "",
  value = "",
  error = false,
  rounded = 8,
  maxLength,
  onChange,
  type = "text",
  name = "",
  defaultValue,
}) => {
  return (
    <div className="flex flex-col min-w-[20px] w-full">
      {label && (
        <p className="font-medium text-[14px] select-none leading-[16.8px] tracking-[-0.013em] mb-[6px] text-[#8f8f8f]">
          {label}
        </p>
      )}

      <input
        name={name}
        placeholder={placeholder || ""}
        value={value ? value : ""}
        autoComplete
        className={`px-[12px] h-[42px] ${
          error ? "text-red-500 dark:text-red-500" : "text-[#2c2c2c] "
        } text-[14px] pb-[12px] bg-[#e2e2e2] placeholder:select-none pt-[11px] transition duration-[250ms] hover:inner-border-[1px] hover:inner-border-[#5875e8] outline-none placeholder:font-normal leading-[18px] tracking-[-0.015em] placeholder:leading-[18px] placeholder:tracking-[-0.015em]`}
        style={{
          borderRadius: rounded,
        }}
        onChange={onChange ? (e) => onChange(e.target.value) : null}
        type={type}
        maxLength={maxLength}
        defaultValue={defaultValue ? defaultValue : null}
      />

      {caption && (
        <p className="text-[13px] leading-[16px] tracking-[-0.351px] mt-[3px] text-[#F0BB31]">
          {caption}
        </p>
      )}
    </div>
  );
};
