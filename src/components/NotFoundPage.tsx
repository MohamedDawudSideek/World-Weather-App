// NotFoundPage.tsx
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
          <h1 className="text-danger text-center">404 - Page Not Found</h1>
          <Link to="/weather-app" className="mt-3"><button className="btn btn-primary">Back to Safety</button></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage