import { Bottom } from './Bottom';

export default {
  title: 'Example/Bottom',
  component: Bottom,
};

export const LoggedIn = {
  args: {
    isLoggedIn: true,
  },
};

export const LoggedOut = {
  args: {
    isLoggedIn: false,
  },
};
