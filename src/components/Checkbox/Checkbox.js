import { useState } from "react";

function Checkbox({ configObj }) {
  const [checked, setChecked] = useState(configObj.checked);
  console.log("checked outside changeHandler ", checked);
  const changeHandler = () => {
    // setChecked(!checked);
    console.log("checked before if ", checked);
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
    console.log("checked after if ", !checked);
    configObj.checked = !checked;
  };

  return <input type="checkbox" checked={checked} onChange={changeHandler} />;
}

export default Checkbox;
