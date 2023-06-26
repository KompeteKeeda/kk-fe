interface PrimaryButtonProps {
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <div className="Primary-btn">
      <span style={{ color: "black" }}>{props.label}</span>
    </div>
  );
}

export default PrimaryButton;