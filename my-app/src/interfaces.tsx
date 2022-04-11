

export interface BlogProps{
    title: string;
    body: string;
    author: string;
    id: number;
}

export interface AppProps{
    blogs: BlogProps[];
    title: string;
}