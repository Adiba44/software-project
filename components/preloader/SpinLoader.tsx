/*****
 * Spin preloader type 1
 * Google's used blue spin preloader design
 ******/
export default function SpinLoader({ size }: { size?: number }) {
  return (
    <div className="w-fit spinLoader">
      <div
        className="loader"
        style={{
          width: size ? size + "px" : "34px",
          height: size ? size + "px" : "34px",
        }}
      >
        <svg className="circularLoader" viewBox="25 25 50 50">
          <circle className="loaderPath" cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
    </div>
  );
}

/*****
 * Spin preloader type 2
 ******/
export function SpinLoader2() {
  return <div className="spinLoader2"></div>;
}
