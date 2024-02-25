import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { hot } from 'react-hot-loader/root';
import { Error } from './errorBanners/Error';
import { CardList } from './shared/CardsList';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CardModal } from './shared/CardsList/Card/CardModal';
import { PostsSection } from './shared/PostsSection/PostsSection';
import { CardListContextProvider } from './context/CardListContext';
import { MountedBrowserRouter, ReduxProvider } from './storeRedux/storeRedux';

function AppComponent() {
    return (
        <MountedBrowserRouter>
            <ReduxProvider>
                <CardListContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <PostsSection>
                                <Routes>
                                    <Route path='/:post' element={<CardList />}>
                                        <Route path=':subreddit/comments/:postId' element={<CardModal />} />
                                    </Route>
                                    <Route path='*' element={<Error massage='ERROR 404: page not found' />} />
                                    <Route path='/' element={<Navigate to='/best' />} />
                                    <Route path='/auth' element={<Navigate to='/best' />} />
                                </Routes>
                            </PostsSection>
                        </Content>
                    </Layout>
                </CardListContextProvider>
            </ReduxProvider>
        </MountedBrowserRouter>
    );
}

export const App = hot(() => <AppComponent />)

