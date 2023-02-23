import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routers'
import DefaultLayout from './components/Layout/DefaultLayout'

const App = () => {
    return (
        <div>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.Layout || DefaultLayout
                    const Page = route.component
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </div>
    )
}

export default App
