export const Select = ({text, options}) => {
  return (
    <select>
      <option>{text}</option>
      {options.map((option, index) => (
        <option key={index} value={option.name_ptbr}>
          {option.name_ptbr}
        </option>
      ))}
    </select>
  );
};
