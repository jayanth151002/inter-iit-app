

const Home = () => {
    return (
        <div>
            <div className="jumbotron text-center">
                <div>
                    <h1>INTER IIT CONTINGENT SELECTION APPLICATION</h1>
                </div>
                <div>
                    <h3 className="mt-4">Digital Alpha</h3>
                </div>
                <div className="name text-left">
                    <div>
                        <h5>Jayanth. K</h5>
                    </div>
                    <div>
                        <h5>AE20B030</h5>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row btns">
                    <div className="col-12 col-sm-4 text-center">
                        <button className="btn btn-primary"><a style={{ textDecoration: "none", color: "white" }} href='/add'>ADD Grade Data</a></button>
                        <div className="mt-3 card card-body">
                            This feature is used to scrape the grade data of a particular student when LDAP Credentials are given.
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 text-center">
                        <button className="btn btn-primary"><a style={{ textDecoration: "none", color: "white" }} href='/view'>VIEW Grade Data</a></button>
                        <div className="mt-3 card card-body">
                            This feature is used to view the grade data of a particular student when LDAP Credentials are given if it already exists in the database.
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 text-center">
                        <button className="btn btn-primary"><a style={{ textDecoration: "none", color: "white" }} href='/delete'>DELETE Grade Data</a></button>
                        <div className="mt-3 card card-body">
                            This feature is used to delete the grade data of a particular student when LDAP Credentials are given.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home