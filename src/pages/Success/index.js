import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';

const Success = () => {
  const [session, setSession] = useState({});
  const location = useLocation();
  const sessionId = location.search.replace('?session_id=', '');

  console.log(sessionId);
  const handleOnClick = () => {
    console.log('hello');
  };
  //
  useEffect(() => {
    async function fetchSession() {
      // TODO : get checkout-session and try to update Quantity on Stripe !!
      setSession(
        await fetch('/checkout-session?sessionId=' + sessionId).then((res) =>
          res.json()
        )
      );
    }
    fetchSession();
  }, [sessionId]);
  return (
    <MainLayout>
      <h1>Hello</h1>
      <p>{sessionId}</p>
      <Button onClick={handleOnClick}>Click </Button>
    </MainLayout>
  );
};

export default Success;
