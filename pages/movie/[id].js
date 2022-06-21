import { getData } from "../../utils";

export default function Movie({ data }) {
  return (
    <>
      {(data && (
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${data?.results[0].key}`}
          frameborder="0"
        ></iframe>
      )) || (
        <svg>
          <path
            fill="#fff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="0.5s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "338953" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return getData(`/movie/${params.id}/videos`);
}
