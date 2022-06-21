import url from 'url'


export default(req, res, next) => {
    const { pathname } = url.parse(req.url)
    switch (pathname) {
        case '/api/login': {
            const data = process.JOI.userScheme.validate(req.body)
            if(data.error) {
                console.log(data.error.name)
            }
            return next()
        }
    }
    
}