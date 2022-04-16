import cards from "../styles/projects.module.css";

export default function ToolButton({ name, color }) {
  return (
    <div className={cards.toolButton} style={color}>
      {name}
    </div>
  );
}
