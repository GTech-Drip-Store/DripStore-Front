import './Button.css';

export const Button = ({children, width, height, color, margin, backgroundColor}) => {
  return(
    <button className="button"
      style={{
        width: width,
        height: height,
        color: color,
        backgroundColor: backgroundColor,
        margin: margin
      }}
    >{children}</button>
  );
}
