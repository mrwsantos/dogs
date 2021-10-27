import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helpers/Error";
import Head from "../Helpers/Head";
import Loading from "../Helpers/Loading";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <loading />;
  if (data)
    return (
      <section>
        <Head title={data.photo.title + "'s photo"}></Head>
        <PhotoContent data={data} />
      </section>
    );
  else return null;
};

export default Photo;
