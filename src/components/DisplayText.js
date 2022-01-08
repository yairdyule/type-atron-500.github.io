export default function DisplayText({ input, target, focused }) {
  return (
    <p
      className={
        "font-bold tracking-widest ease-in-out duration-150" +
        (!focused && " blur-sm")
      }
    >
      {input.split("").map((char, index) => {
        let className;
        if (char === target[index]) {
          className = "text-emerald-300";
        } else if (char !== target[index]) {
          className = "text-red-300";
        }
        return (
          <span key={index} className={className}>
            {char}
          </span>
        );
      })}
      {target
        .split("")
        .slice(input.length)
        .map((char, ind) => {
          return (
            <span key={ind} className="text-slate-400">
              {char}
            </span>
          );
        })}
    </p>
  );
}
