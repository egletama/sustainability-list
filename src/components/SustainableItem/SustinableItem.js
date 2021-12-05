import Checkbox from "../Checkbox";

function SustanableItem({ configObj }) {
  return (
    <div>
      <Checkbox configObj={configObj} />
      <label> {configObj.text} </label>
    </div>
  );
}

export default SustanableItem;
