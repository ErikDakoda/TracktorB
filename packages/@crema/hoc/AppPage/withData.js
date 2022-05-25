import React, {useEffect} from 'react';
import Router, {useRouter} from 'next/router';
import AppLoader from '@crema/core/AppLoader';
import {useAuthUser} from '@crema/utility/AuthHooks';
import { useNavContext } from "@crema/utility/AppContextProvider/NavContextProvider";

const withData = (ComposedComponent) => (props) => {
  const {user, isLoading} = useAuthUser();
  const {asPath} = useRouter();
  const { goLogIn } = useNavContext();
  const queryParams = asPath.split('?')[1];
  useEffect(() => {
    if (!user && !isLoading) {
      goLogIn(queryParams);
      //Router.push('/signin' + (queryParams ? '?' + queryParams : ''));
    }
  }, [user, isLoading]);
  if (!user || isLoading) return <AppLoader />;

  return <ComposedComponent {...props} />;
};
export default withData;
