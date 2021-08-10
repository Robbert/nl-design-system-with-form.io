import React from 'react';
import { Form } from 'react-formio';
import { useAuth } from '../../modules/auth';
import { AppConfig } from '../../config';

const Home = () => {
  const { state: authState } = useAuth();

  const Greeting = () => {
    if (authState.user && authState.user.data) {
      return (
        <h3>
          You are logged in as&nbsp;<strong>{ authState.user.data.email }</strong>!
        </h3>
      );
    }
  };

  return (
    <div>
      <div className="container">
        { authState.authenticated ? (
          <div className="well text-center">
            <Greeting/>
          </div>)
          : null
        }
        <Form src={`${AppConfig.projectUrl}/test`} />
      </div>
    </div>
  );
};

export default Home;
