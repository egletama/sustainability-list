import Checkbox from "../Checkbox";

function SustanableItem({ config }) {
  return (
    <div>
      <Checkbox config={config} />
      <label> {config.text} </label>
    </div>
  );
}

export default SustanableItem;
