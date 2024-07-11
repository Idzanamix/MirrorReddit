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
import axios from "axios";

function AppComponent() {

// null, undefined, boolean, number, string, object, symbol


axios.get('https://api.github.com/graphql', {
    headers: {
        Authorization: `bearer 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`
    }
}).then(res => {
    console.log(res);
})
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

