import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ContrastChecker({ hex, contrastText }) {
  const { data, isLoading, error } = useSwr(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hex.replace("#", "")}&api`,
    fetcher,
  );

  if (error) return <h3>{error.message}</h3>;
  if (isLoading) return <h3>Loading ....</h3>;

  return (
    <div>
      <span style={{ color: "black" }}>Overall Contrast Score: {data.AA}</span>
    </div>
  );
}
