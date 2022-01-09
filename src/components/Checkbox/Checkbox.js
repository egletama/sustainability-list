import { useState } from "react";

function Checkbox({ configObj }) {
  const [checked, setChecked] = useState(configObj.checked);
  const changeHandler = () => {
    // setChecked(!checked);
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
    configObj.checked = !checked;
  };

  return <input type="checkbox" checked={checked} onChange={changeHandler} />;
}

export default Checkbox;
