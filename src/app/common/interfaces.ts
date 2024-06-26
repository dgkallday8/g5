export interface IUsersData {
  total_count: number;
  incomplete_results: boolean;
  items: IUserData[];
}

export interface IUserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: UserType;
  site_admin: boolean;
  score: number;
}

export interface IUserFullData extends Omit<IUserData, 'score'> {
  name: string | null;
  company: string | null;
  blog: string | string;
  location: string | null;
  email: string | null;
  hireable: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export enum UserType {
  User = 'User',
  Organization = 'Organization',
}

export interface IToast {
  text: string
  options: IToastOptions;
}

export interface IToastOptions {
  classname: string;
  delay: number;
}

export enum ProviderValue {
  Google = 'google',
  Github = 'github'
}