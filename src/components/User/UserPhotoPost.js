import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Error from '../Helpers/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../Api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helpers/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('idade', idade.value);
    formData.append('peso', peso.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImageChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    });
  }

  return (
    <section className={`${styles.photoPost} animeDown`}>
      <Head title="Post a photo"></Head>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" name="nome" {...nome} />
        <Input label="Weight" type="number" name="peso" {...peso} />
        <Input label="Age" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImageChange}
        />
        {loading ? <Button disabled>Sending...</Button> : <Button>Send</Button>}
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default UserPhotoPost;
