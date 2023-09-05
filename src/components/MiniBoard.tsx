import cx from "classnames";

const MiniBoard: React.FC = () => (
  <div className="flex w-[150px] h-[150px] flex-wrap">
    <Square directions={["b", "r"]} />
    <Square directions={["b", "r"]} />
    <Square directions={["b"]} />

    <Square directions={["b", "r"]} />
    <Square directions={["b", "r"]} />
    <Square directions={["b"]} />

    <Square directions={["r"]} />
    <Square directions={["r"]} />
    <Square directions={[]} />
  </div>
);

export default MiniBoard;

const Square: React.FC<{ directions: string[] }> = ({ directions }) => {
  // console.log(directions.map((direction) => `border-${direction}-2`).join(" "));
  return (
    <div
      className={cx(
        "border-black w-[50px] h-[50px]",
        directions.map((direction) => `border-${direction}-2`).join(" ")
      )}
    ></div>
  );
};
