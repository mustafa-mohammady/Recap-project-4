import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ContrastChecker({ hex, contrastText }) {
  const { data, isLoading, error } = useSwr(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hex.replace("#", "")}&api`,
    fetcher,
  );

  let result = "";
  if (data) {
    if (data.AAA === "pass") {
      result = "Yup";
    } else if (data.AA === "pass") {
      result = "Kinda";
    } else {
      result = "Nope";
    }
  }

  if (error) return <h3>{error.message}</h3>;
  if (isLoading) return <h3>Loading ....</h3>;

  return (
    <div>
      <span style={{ color: "black" }}>Overall Contrast Score: {result}</span>
    </div>
  );
}
