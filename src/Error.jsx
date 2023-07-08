import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div id='error-page'>
            <h1>404 Oops!</h1>
            <p>Page not found, unexpexted error occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error