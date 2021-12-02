import { useState } from "react";

function Checkbox({ config }) {
  const [checked, setChecked] = useState(config.checked);

  const changeHandler = () => {
    setChecked(!checked);
    config.checked = !checked;
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={changeHandler}
      className="todo"
    />
  );
}

export default Checkbox;
