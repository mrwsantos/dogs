import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);

    const { pathname } = location;

    switch (pathname) {
      case '/conta/postar':
        setTitle('Post a photo');
        break;
      case '/conta/estatisticas':
        setTitle('Stats');
        break;
      default:
        setTitle('My account');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
