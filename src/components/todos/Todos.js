import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';

export default function Todos() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div>
      <h2>Todos</h2>
      <div></div>
      <div></div>
    </div>
  );
}
